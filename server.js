const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_SECRET_PIN = process.env.ADMIN_SECRET_PIN || '8171';

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Multer memory storage for in-memory uploads directly to Cloudinary
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✓ Connected to MongoDB Atlas successfully.'))
    .catch(err => console.error('✕ MongoDB connection error:', err));

// ==========================================
// Schemas & Models
// ==========================================

// 1. Comment Schema
const commentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String, default: 'साहित्य-प्रेमी पाठक', trim: true },
    comment: { type: String, required: true, trim: true },
    imageUrl: { type: String, default: '' },
    imagePublicId: { type: String, default: '' },
    date: { type: String, default: () => new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }) },
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// 2. Visitor Analytics Schema
const statsSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    totalVisitors: { type: Number, default: 15 },
    lastUpdated: { type: Date, default: Date.now }
});

const Stat = mongoose.model('Stat', statsSchema);

// Ensure stats document exists
async function getOrCreateStats() {
    let stat = await Stat.findOne({ key: 'rameshraj_main' });
    if (!stat) {
        stat = await Stat.create({ key: 'rameshraj_main', totalVisitors: 25 });
    }
    return stat;
}

// ==========================================
// API Routes
// ==========================================

// 1. Visitor Stats: Get count
app.get('/api/stats/visitors', async (req, res) => {
    try {
        const stat = await getOrCreateStats();
        res.json({ success: true, totalVisitors: stat.totalVisitors });
    } catch (err) {
        console.error('Error fetching visitors:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 2. Visitor Stats: Increment Hit
app.post('/api/stats/hit', async (req, res) => {
    try {
        const stat = await Stat.findOneAndUpdate(
            { key: 'rameshraj_main' },
            { $inc: { totalVisitors: 1 }, $set: { lastUpdated: new Date() } },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        res.json({ success: true, totalVisitors: stat.totalVisitors });
    } catch (err) {
        console.error('Error incrementing visitor hit:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 3. Comments: Get All (Newest first)
app.get('/api/comments', async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 }).limit(100);
        res.json({ success: true, comments });
    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 4. Comments: Create new comment (with optional screenshot upload to Cloudinary)
app.post('/api/comments', upload.single('screenshot'), async (req, res) => {
    try {
        const { name, role, comment } = req.body;
        if (!name || !comment) {
            return res.status(400).json({ success: false, message: 'नाम और टिप्पणी दोनों आवश्यक हैं।' });
        }

        let imageUrl = '';
        let imagePublicId = '';

        // If screenshot is uploaded, pipe directly to Cloudinary
        if (req.file) {
            const uploadPromise = new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: 'rameshraj_comments',
                        resource_type: 'image',
                        transformation: [
                            { quality: 'auto', fetch_format: 'auto' },
                            { width: 1400, crop: 'limit' } // optimize screenshot size
                        ]
                    },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    }
                );
                stream.end(req.file.buffer);
            });

            const uploadResult = await uploadPromise;
            imageUrl = uploadResult.secure_url;
            imagePublicId = uploadResult.public_id;
        }

        const newComment = await Comment.create({
            name,
            role: role || 'साहित्य-प्रेमी पाठक',
            comment,
            imageUrl,
            imagePublicId
        });

        res.status(201).json({ success: true, comment: newComment });
    } catch (err) {
        console.error('Error saving comment:', err);
        res.status(500).json({ success: false, message: 'टिप्पणी सहेजने में त्रुटि हुई।', error: err.message });
    }
});

// 5. Comments: Delete comment (Admin moderation)
app.delete('/api/comments/:id', async (req, res) => {
    try {
        const pin = req.headers['x-admin-pin'] || req.body.pin || req.query.pin;
        if (pin !== ADMIN_SECRET_PIN) {
            return res.status(403).json({ success: false, message: 'अमान्य एडमिन पिन। आप टिप्पणी नहीं हटा सकते।' });
        }

        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ success: false, message: 'टिप्पणी नहीं मिली।' });
        }

        // Delete image from Cloudinary if exists
        if (comment.imagePublicId) {
            try {
                await cloudinary.uploader.destroy(comment.imagePublicId);
            } catch (cErr) {
                console.warn('Could not delete image from Cloudinary:', cErr.message);
            }
        }

        await Comment.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'टिप्पणी सफलतापूर्वक हटा दी गई।' });
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Universal fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(` Rameshraj Tewarikar Portal Server Started!`);
    console.log(` URL: http://localhost:${PORT}`);
    console.log(` Connected to MongoDB Atlas & Cloudinary`);
    console.log(` Admin Delete PIN: ${ADMIN_SECRET_PIN}`);
    console.log(`===============================================`);
});
