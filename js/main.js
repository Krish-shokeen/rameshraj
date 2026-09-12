// Rameshraj Tewarikar - Main Interactive Logic

let currentLang = 'hi'; // 'hi' or 'en'
let currentBookFilter = 'all';
let currentBlogFilter = 'all';
let currentSearchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSwitcher();
    initHeroCounters();
    renderBooks();
    renderBlogs();
    renderAwards();
    renderGallery();
    renderTestimonials();
    initModals();
    initContactForm();
    initScrollEffects();
});

/* --------------------------------------------------------------------------
   NAVIGATION & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initNavigation() {
    const mobileToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.site-header');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = navMenu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('open');
            const icon = mobileToggle?.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    const backToTop = document.getElementById('backToTop');
    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --------------------------------------------------------------------------
   LANGUAGE SWITCHER (HINDI / ENGLISH)
   -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
    const langBtn = document.getElementById('langSwitchBtn');
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'hi' ? 'en' : 'hi';
        updatePageLanguage();
        showToast(currentLang === 'hi' ? 'भाषा: हिन्दी' : 'Language: English');
    });
}

function updatePageLanguage() {
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
        langBtn.innerHTML = currentLang === 'hi' 
            ? '<i class="fas fa-globe"></i> <span>English</span>' 
            : '<i class="fas fa-globe"></i> <span>हिन्दी</span>';
    }

    // Update all elements with data-hi and data-en
    document.querySelectorAll('[data-hi]').forEach(el => {
        const text = currentLang === 'hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Re-render dynamic sections
    renderBooks();
    renderBlogs();
    renderAwards();
    renderGallery();
    renderTestimonials();
}

/* --------------------------------------------------------------------------
   HERO STAT COUNTERS
   -------------------------------------------------------------------------- */
function initHeroCounters() {
    const statElements = document.querySelectorAll('.stat-number');
    statElements.forEach(el => {
        const targetVal = el.getAttribute('data-val');
        if (targetVal) {
            el.textContent = targetVal;
        }
    });
}

/* --------------------------------------------------------------------------
   BOOKS SHOWCASE & FILTERING
   -------------------------------------------------------------------------- */
function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    if (!booksGrid) return;

    const filtered = BOOKS_DATA.filter(book => {
        const matchesCategory = (currentBookFilter === 'all' || book.category === currentBookFilter);
        const title = currentLang === 'hi' ? book.titleHi : book.titleEn;
        const blurb = currentLang === 'hi' ? book.blurbHi : book.blurbEn;
        const matchesSearch = !currentSearchTerm || 
            title.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
            blurb.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #64748b;">
                <i class="fas fa-book-open" style="font-size: 2.5rem; color: #d97706; margin-bottom: 1rem;"></i>
                <p style="font-size: 1.1rem;">${currentLang === 'hi' ? 'कोई पुस्तक नहीं मिली।' : 'No books found matching your criteria.'}</p>
            </div>
        `;
        return;
    }

    booksGrid.innerHTML = filtered.map(book => {
        const title = currentLang === 'hi' ? book.titleHi : book.titleEn;
        const category = currentLang === 'hi' ? book.categoryNameHi : book.categoryNameEn;
        const blurb = currentLang === 'hi' ? book.blurbHi : book.blurbEn;
        const detailsBtnText = currentLang === 'hi' ? 'विस्तार से जानें' : 'Book Details';
        const bloggerBtnText = currentLang === 'hi' ? '📖 ब्लॉग पर पढ़ें' : '📖 Read on Blogger';
        const yearLabel = currentLang === 'hi' ? `प्रकाशन: ${book.year}` : `Published: ${book.year}`;

        return `
            <div class="book-card" data-id="${book.id}">
                <div>
                    <div class="book-cover-stage" onclick="openBookModal('${book.id}')">
                        <div class="book-3d">
                            <img src="${book.cover}" alt="${title}" class="book-cover-img" onerror="this.src='${book.fallbackCover}'">
                        </div>
                    </div>
                    <span class="book-badge-category">${category}</span>
                    <h3 class="book-title" title="${title}">${title}</h3>
                    <div class="book-meta-year"><i class="far fa-calendar-alt"></i> ${yearLabel}</div>
                    <p class="book-blurb">${blurb}</p>
                </div>
                <div class="book-actions">
                    <button class="btn-book-details" onclick="openBookModal('${book.id}')">
                        <i class="fas fa-info-circle"></i> ${detailsBtnText}
                    </button>
                    <a href="${book.bloggerUrl}" target="_blank" rel="noopener noreferrer" class="btn-book-blogger">
                        ${bloggerBtnText} <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

window.filterBooks = function(category, element) {
    currentBookFilter = category;
    document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
    element?.classList.add('active');
    renderBooks();
};

window.handleBookSearch = function(input) {
    currentSearchTerm = input.value.trim();
    renderBooks();
};

/* --------------------------------------------------------------------------
   BLOGGER BLOGS SECTION
   -------------------------------------------------------------------------- */
function renderBlogs() {
    const blogsGrid = document.getElementById('blogsGrid');
    if (!blogsGrid) return;

    blogsGrid.innerHTML = BLOGS_DATA.map(blog => {
        const title = currentLang === 'hi' ? blog.titleHi : blog.titleEn;
        const category = currentLang === 'hi' ? blog.categoryNameHi : blog.categoryNameEn;
        const desc = currentLang === 'hi' ? blog.descriptionHi : blog.descriptionEn;
        const btnText = currentLang === 'hi' ? 'ब्लॉग विजिट करें' : 'Visit on Blogger';

        return `
            <div class="blog-card">
                <div class="blog-card-header">
                    <div class="blog-service-tag">
                        <i class="fab fa-blogger-b"></i> <span>${blog.badge}</span>
                    </div>
                    <h3 class="blog-card-title">${title}</h3>
                    <div class="blog-stats-pill">
                        <i class="fas fa-layer-group"></i> ${blog.postsCount} &bull; ${category}
                    </div>
                </div>
                <div class="blog-card-body">
                    <p class="blog-excerpt">${desc}</p>
                </div>
                <div class="blog-card-footer">
                    <a href="${blog.url}" target="_blank" rel="noopener noreferrer" class="btn-visit-blog">
                        <i class="fab fa-blogger"></i> ${btnText} <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   AWARDS & MILESTONES
   -------------------------------------------------------------------------- */
function renderAwards() {
    const awardsContainer = document.getElementById('awardsTimeline');
    if (!awardsContainer) return;

    awardsContainer.innerHTML = AWARDS_DATA.map((award, index) => {
        const sideClass = index % 2 === 0 ? 'left' : 'right';
        const title = currentLang === 'hi' ? award.titleHi : award.titleEn;
        const authority = currentLang === 'hi' ? award.awardedByHi : award.awardedByEn;
        const desc = currentLang === 'hi' ? award.descHi : award.descEn;

        return `
            <div class="timeline-item ${sideClass}">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <span class="timeline-year"><i class="fas fa-award"></i> ${award.year}</span>
                    <h4>${title}</h4>
                    <div class="timeline-authority">${authority}</div>
                    <p>${desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   MEDIA & PRESS GALLERY
   -------------------------------------------------------------------------- */
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = GALLERY_DATA.map(item => {
        const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
        const caption = currentLang === 'hi' ? item.captionHi : item.captionEn;

        return `
            <div class="gallery-card" onclick="openLightbox('${item.image}', '${title.replace(/'/g, "\\'")}')">
                <img src="${item.image}" alt="${title}" class="gallery-thumb" onerror="this.src='assets/images/author.jpg'">
                <div class="gallery-caption">
                    <span class="gallery-tag"><i class="fas fa-camera"></i> ${currentLang === 'hi' ? 'चित्रशाला' : 'Gallery'}</span>
                    <h4>${title}</h4>
                    <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0;">${caption}</p>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   TESTIMONIALS
   -------------------------------------------------------------------------- */
function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    container.innerHTML = TESTIMONIALS_DATA.map(item => {
        const name = currentLang === 'hi' ? item.nameHi : item.nameEn;
        const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
        const quote = currentLang === 'hi' ? item.quoteHi : item.quoteEn;

        return `
            <div class="testimonial-card">
                <p class="testimonial-quote">${quote}</p>
                <div class="testimonial-author">
                    <div class="author-avatar-placeholder">
                        <i class="fas fa-feather-alt"></i>
                    </div>
                    <div class="author-meta">
                        <h5>${name}</h5>
                        <span>${title}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   MODALS (BOOK DETAILS & LIGHTBOX)
   -------------------------------------------------------------------------- */
function initModals() {
    // Close on overlay click
    document.querySelectorAll('.modal-overlay, .lightbox-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

window.openBookModal = function(bookId) {
    const book = BOOKS_DATA.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const container = document.getElementById('bookModalContent');
    if (!modal || !container) return;

    const title = currentLang === 'hi' ? book.titleHi : book.titleEn;
    const category = currentLang === 'hi' ? book.categoryNameHi : book.categoryNameEn;
    const details = currentLang === 'hi' ? book.detailsHi : book.blurbEn;
    const publisherLabel = currentLang === 'hi' ? 'प्रकाशक' : 'Publisher';
    const yearLabel = currentLang === 'hi' ? 'प्रकाशन वर्ष' : 'Published Year';
    const pagesLabel = currentLang === 'hi' ? 'पृष्ठ संख्या' : 'Pages';
    const isbnLabel = 'ISBN';
    const readBloggerText = currentLang === 'hi' ? '📖 इस पुस्तक को ब्लॉगर पर पढ़ें' : '📖 Read on Author Blogger';

    container.innerHTML = `
        <div class="modal-book-visual">
            <img src="${book.cover}" alt="${title}" class="modal-book-cover" onerror="this.src='${book.fallbackCover}'">
            <a href="${book.bloggerUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-blogger" style="width: 100%;">
                ${readBloggerText} <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
        <div class="modal-book-info">
            <span class="modal-book-genre">${category}</span>
            <h3>${title}</h3>
            <p style="font-size: 0.95rem; color: #b45309; font-weight: 500; margin-bottom: 1rem;">
                लेखक: रमेशराज तेवरीकार (Rameshraj Tewarikar)
            </p>
            <div class="modal-meta-grid">
                <div class="meta-field">
                    <strong>${publisherLabel}</strong>
                    <span>${book.publisher}</span>
                </div>
                <div class="meta-field">
                    <strong>${yearLabel}</strong>
                    <span>${book.year}</span>
                </div>
                <div class="meta-field">
                    <strong>${pagesLabel}</strong>
                    <span>${book.pages}</span>
                </div>
                <div class="meta-field">
                    <strong>${isbnLabel}</strong>
                    <span>${book.isbn}</span>
                </div>
            </div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.6rem; color: #0f172a;">
                ${currentLang === 'hi' ? 'पुस्तक के विषय में / सारांश' : 'About the Book / Synopsis'}
            </h4>
            <p class="modal-synopsis-text">${details}</p>
            <div class="modal-action-bar">
                <a href="${book.bloggerUrl}" target="_blank" rel="noopener" class="btn btn-primary">
                    <i class="fab fa-blogger-b"></i> ${currentLang === 'hi' ? 'सम्पूर्ण समीक्षा व पाठ देखें' : 'View Full Text & Reviews'}
                </a>
                <button class="btn btn-outline" onclick="copyShareLink('${book.bloggerUrl}')">
                    <i class="fas fa-share-alt"></i> ${currentLang === 'hi' ? 'लिंक साझा करें' : 'Share Link'}
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeBookModal = function() {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.openLightbox = function(imgSrc, captionText) {
    const lb = document.getElementById('mediaLightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    if (!lb || !img) return;

    img.src = imgSrc;
    if (caption) caption.textContent = captionText || '';

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
    const lb = document.getElementById('mediaLightbox');
    if (lb) {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }
};

function closeAllModals() {
    closeBookModal();
    closeLightbox();
}

window.copyShareLink = function(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast(currentLang === 'hi' ? 'लिंक कॉपी कर लिया गया!' : 'Link copied to clipboard!');
        });
    } else {
        showToast(url);
    }
};

/* --------------------------------------------------------------------------
   CONTACT FORM
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName')?.value.trim();
        const email = document.getElementById('contactEmail')?.value.trim();
        const message = document.getElementById('contactMessage')?.value.trim();

        if (!name || !email || !message) {
            showToast(currentLang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill all required fields.');
            return;
        }

        showToast(currentLang === 'hi' ? 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया।' : 'Thank you! Your message has been sent successfully.');
        form.reset();
    });
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotice';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fas fa-info-circle" style="color: #f59e0b;"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
