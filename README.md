# 🖋️ रमेशराज तेवरीकार | Rameshraj Tewarikar
### *प्रख्यात साहित्यकार, तेवरी आन्दोलन के जनक एवं विरोध-रस के प्रतिष्ठापक*
#### Official Author Website & Literary Archive

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Mobile-100%25%20Responsive-brightgreen?style=for-the-badge&logo=android)](https://github.com/Krish-shokeen/rameshraj)
[![Blogger](https://img.shields.io/badge/Blogger-39%20Blogs%20Network-FF5722?style=for-the-badge&logo=blogger&logoColor=white)](https://www.blogger.com/profile/10299195093677463730)
[![License](https://img.shields.io/badge/License-Copyright%20Author-blue?style=for-the-badge)](LICENSE)

---

## 📖 About The Project

This repository hosts the official personal website and comprehensive digital literary archive of **Shri Rameshraj Tewarikar**, the pioneer and founder of Hindi literature's historic **Tewari Movement (तेवरी आन्दोलन)** and the theoretician behind **Virodh-Ras (विरोध-रस)**.

The website provides an elegant, immersive experience showcasing his lifetime literary contributions across five decades: published books, critical theories, metric inventions (*Nav Kundaliya*, *Janak Chhand*), literary journals (*Tewari Paksh*), national awards, and his network of 39 active literary Blogger portals.

---

## ✨ Key Features

### 1. 🌟 Hero Landing Showcase
- **Author Presentation Carousel**: Elegant, full-width photo showcase modeled with ambient backdrops, high-contrast captions, and smooth transitions.
- **Mobile Touch Gestures**: Supports native touch-swipe (`touchstart`, `touchend`) with directional awareness.
- **Manifesto & Statistics**: Quick metrics showcasing 12+ published collections, 39+ literary portals, 50+ national honors, and 5 decades of literary dedication.

### 2. 📱 100% Mobile Responsive & Touch-Friendly
- **Off-Canvas Navigation Drawer**: Modern slide-in menu with clean divider lines, active item highlights, and an explicit close button.
- **Backdrop Blur Overlay**: Tapping outside automatically dismisses the drawer with body scroll lock.
- **Zero Horizontal Overflow**: Fully verified across 320px, 360px, 390px, 412px, and tablet viewports (`document.documentElement.scrollWidth <= window.innerWidth`).
- **iOS Zoom Prevention**: Form inputs adhere to `>= 16px` font sizing to prevent automatic page zoom on focus.

### 3. 📚 Interactive Book Showcase & 3D Cards
- **Filterable Library**: Real-time filtering by category (*All, Tewari, Theory/Poetics, Children's, Satire/Prose*).
- **Instant Search**: Dynamic client-side search across Hindi and English titles, subtitles, and synopses.
- **3D Book Covers & Modals**: Interactive 3D tilt effects, detailed book synopsis modals, publication metadata, and direct reading links to live Blogger posts.

### 4. 🌐 Verified Blogger Network Integration
- Direct access to the author's **39 authentic Blogger portals** (*hinditewari-1* through *hinditewari-36*, *hinditewarisahitya*, *kavita-manch*).
- 100% audited live HTTP 200 URLs with zero 404 broken links.

### 5. 🏆 Honors, Awards & Media Gallery
- Displays prestigious recognitions including the **साहित्य-श्री सम्मान (Sahitya-Shri)**, **तेवरी-शलाका सम्मान**, **कबीर सम्मान**, and more.
- Full-screen **Lightbox Modal** for high-resolution certificate and vintage photograph inspection.

### 6. 🌐 Dual-Language Localization (हिन्दी / English)
- Instant one-click language toggle across the entire site without page reloads using HTML5 `data-hi` and `data-en` attributes.

---

## 🛠️ Technology Stack

| Layer | Technology / Resource |
|---|---|
| **Structure** | Semantic HTML5 with accessibility attributes |
| **Styling** | Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Clamp, Media Queries) |
| **Interactivity** | Vanilla JavaScript (ES6+, Event Listeners, Touch Events, DOM Manipulation) |
| **Typography** | Google Fonts (*Playfair Display*, *Cinzel*, *Noto Serif Devanagari*, *Plus Jakarta Sans*) |
| **Icons** | Font Awesome 6 (Free CDN) |
| **Hosting** | Render Static Site / GitHub Pages compatible |

---

## 📁 Project Structure

```bash
rameshraj/
├── assets/
│   ├── images/
│   │   ├── author.jpg                    # Author portrait
│   │   ├── author-award.jpg              # Award dais photo
│   │   ├── author-vintage.jpg            # Vintage poetry recitation
│   │   ├── author-vintage2.jpg           # Vintage archives
│   │   ├── books/                        # Authentic book cover illustrations
│   │   │   ├── abhi-jubaan.jpg
│   │   │   ├── kabeer-zinda-hai.jpg
│   │   │   ├── itihas-ghayal-hai.jpg
│   │   │   ├── bal-kavita.jpg
│   │   │   ├── char-dashak.jpg
│   │   │   ├── tewaripaksh.jpg
│   │   │   └── ...
│   │   └── awards/                       # Official award certificates
│   │       └── sahitya-shri.jpg
├── css/
│   ├── style.css                         # Core layout, typography, sections & responsive queries
│   └── components.css                    # 3D book cards, modals, lightbox & toast notices
├── js/
│   ├── data.js                           # Centralized data (books, blogs, awards, slider, reviews)
│   └── main.js                           # Navigation, touch slider, language toggle, modals, filters
├── index.html                            # Main website document
├── favicon.svg                           # Custom quill & inkpot vector favicon
└── README.md                             # Project documentation
```

---

## 🚀 Getting Started Locally

To run the website on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Krish-shokeen/rameshraj.git
   cd rameshraj
   ```

2. **Serve locally using Python**:
   ```bash
   python -m http.server 5500
   ```

3. **Open in your browser**:
   ```text
   http://localhost:5500
   ```

---

## 🌐 Live Deployment on Render

The site is configured for continuous static site deployment via **Render**:

- **Repository**: `Krish-shokeen/rameshraj`
- **Branch**: `main`
- **Build Command**: *(None / Static)*
- **Publish Directory**: `./` (Root)

Every push to the `main` branch automatically builds and deploys the latest version to the live URL.

---

## 📜 Copyright & Literary Rights

- **Author**: श्री रमेशराज तेवरीकार (Shri Rameshraj Tewarikar)
- **Literary Institution**: सार्थक सृजन संस्थान / तेवरीपक्ष कार्यालय, अलीगढ़ - 202001 (उ.प्र.), भारत
- **All literary content, poems, book reviews, and photographs belong to the author.**
