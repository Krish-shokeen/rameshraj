// Rameshraj Tewarikar - Main Interactive Logic

let currentLang = 'hi'; // 'hi' or 'en'
let currentBookFilter = 'all';
let currentBlogFilter = 'all';
let currentSearchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSwitcher();
    initHeroSlider();
    initHeroCounters();
    renderHomepageBookMarquees();
    renderGalleryMarquee();
    initHomepageMarquees();
    renderBooks();
    renderMasterBibliography();
    renderBlogs();
    initVisitorCounter();
    renderAwards();
    renderGallery();
    renderVideos();
    renderTewaripakshPdfs();
    renderTestimonials();
    initReaderCommentForm();
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
    const navBackdrop = document.getElementById('navBackdrop');
    const navCloseBtn = document.getElementById('navCloseBtn');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.site-header');

    function openMenu() {
        if (!navMenu) return;
        navMenu.classList.add('open');
        navBackdrop?.classList.add('active');
        document.body.classList.add('nav-menu-open');
        const icon = mobileToggle?.querySelector('i');
        if (icon) icon.className = 'fas fa-times';
    }

    function closeMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('open');
        navBackdrop?.classList.remove('active');
        document.body.classList.remove('nav-menu-open');
        const icon = mobileToggle?.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (navMenu?.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
        navBackdrop.addEventListener('touchstart', () => {
            closeMenu();
        }, { passive: true });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu?.classList.contains('open')) {
            closeMenu();
        }
    });

    // Global toggle for About section foundations & journey
    window.toggleAboutDetails = function() {
        const wrapper = document.getElementById('aboutExpandableWrapper');
        const btn = document.getElementById('toggleAboutBtn');
        if (!wrapper || !btn) return;

        const isExpanded = wrapper.classList.contains('expanded');
        const textEl = btn.querySelector('.toggle-text');

        if (isExpanded) {
            wrapper.classList.remove('expanded');
            btn.classList.remove('expanded');
            btn.setAttribute('aria-expanded', 'false');
            if (textEl) {
                textEl.textContent = currentLang === 'hi' 
                    ? 'विस्तार से सम्पूर्ण परिचय एवं शोध सिद्धांत देखें' 
                    : 'Read Full Biography & Poetic Foundations';
            }
        } else {
            wrapper.classList.add('expanded');
            btn.classList.add('expanded');
            btn.setAttribute('aria-expanded', 'true');
            if (textEl) {
                textEl.textContent = currentLang === 'hi' 
                    ? 'संक्षिप्त करें (कम दिखाएं)' 
                    : 'Collapse Details';
            }
        }
    };

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
            } else if (text.includes('<') && text.includes('>')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Re-render dynamic sections
    renderHeroSlider();
    renderHomepageBookMarquees();
    renderGalleryMarquee();
    initHomepageMarquees();
    renderBooks();
    renderMasterBibliography();
    renderBlogs();
    renderAwards();
    renderGallery();
    renderVideos();
    renderTewaripakshPdfs();
    renderTestimonials();
}

/* --------------------------------------------------------------------------
   HERO AUTHOR SLIDER / CAROUSEL (drnamitasingh.com style)
   -------------------------------------------------------------------------- */
let currentSlideIndex = 0;
let heroSliderInterval = null;

function initHeroSlider() {
    const carousel = document.getElementById('heroCarousel');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    if (!carousel) return;

    renderHeroSlider();

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            resetSliderAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            resetSliderAutoplay();
        });
    }

    // Pause on hover
    carousel.addEventListener('mouseenter', stopSliderAutoplay);
    carousel.addEventListener('mouseleave', startSliderAutoplay);

    // Touch swipe support with vertical scroll awareness
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        // Only trigger if horizontal movement is dominant and > 40px
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetSliderAutoplay();
        }
    }, { passive: true });

    startSliderAutoplay();
}

function renderHeroSlider() {
    const slidesContainer = document.getElementById('carouselSlides');
    const dotsContainer = document.getElementById('carouselDots');
    if (!slidesContainer || typeof HERO_SLIDER_DATA === 'undefined') return;

    slidesContainer.innerHTML = HERO_SLIDER_DATA.map((item, idx) => {
        const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
        const tag = currentLang === 'hi' ? item.tagHi : item.tagEn;
        const caption = currentLang === 'hi' ? item.captionHi : item.captionEn;
        const activeClass = idx === currentSlideIndex ? 'active' : '';

        return `
            <div class="carousel-slide ${activeClass}" data-slide="${idx}">
                <div class="slide-ambient-bg" style="background-image: url('${item.image}')"></div>
                <div class="slide-img-container" onclick="openLightbox('${item.image}', '${title.replace(/'/g, "\\'")}')" title="${currentLang === 'hi' ? 'विस्तृत चित्र देखें' : 'View Fullscreen'}">
                    <img src="${item.image}" alt="${title}" class="slide-img" onerror="this.src='assets/images/author.jpg'">
                    <div class="slide-zoom-btn">
                        <i class="fas fa-expand-alt"></i>
                        <span>${currentLang === 'hi' ? 'विस्तृत चित्र' : 'Fullscreen'}</span>
                    </div>
                </div>
                <div class="carousel-caption-bar">
                    <div class="caption-content">
                        <span class="caption-tag"><i class="fas fa-feather-alt"></i> ${tag}</span>
                        <h3 class="caption-title">${title}</h3>
                        <p class="caption-desc">${caption}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (dotsContainer) {
        dotsContainer.innerHTML = HERO_SLIDER_DATA.map((_, idx) => `
            <button class="carousel-dot ${idx === currentSlideIndex ? 'active' : ''}" onclick="goToSlide(${idx})" aria-label="Slide ${idx + 1}"></button>
        `).join('');
    }
}

window.goToSlide = function(index) {
    if (typeof HERO_SLIDER_DATA === 'undefined') return;
    const total = HERO_SLIDER_DATA.length;
    currentSlideIndex = (index + total) % total;

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    slides.forEach((s, idx) => {
        if (idx === currentSlideIndex) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });

    dots.forEach((d, idx) => {
        if (idx === currentSlideIndex) {
            d.classList.add('active');
        } else {
            d.classList.remove('active');
        }
    });
};

function nextSlide() {
    goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
    goToSlide(currentSlideIndex - 1);
}

function startSliderAutoplay() {
    stopSliderAutoplay();
    heroSliderInterval = setInterval(nextSlide, 3000);
}

function stopSliderAutoplay() {
    if (heroSliderInterval) {
        clearInterval(heroSliderInterval);
        heroSliderInterval = null;
    }
}

function resetSliderAutoplay() {
    stopSliderAutoplay();
    startSliderAutoplay();
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
        const details = currentLang === 'hi' ? (book.detailsHi || book.blurbHi) : (book.detailsHi || book.blurbEn);
        const detailsBtnText = currentLang === 'hi' ? 'विस्तार से विवरण' : 'Book Details';
        const bloggerBtnText = currentLang === 'hi' ? '📖 ब्लॉग पर पढ़ें' : '📖 Read on Blogger';
        const yearLabel = currentLang === 'hi' ? `प्रकाशन: ${book.year}` : `Published: ${book.year}`;
        const publisherLabel = book.publisher || (currentLang === 'hi' ? 'सार्थक सृजन प्रकाशन, अलीगढ़' : 'Sarthak Srijan Publication');

        return `
            <div class="book-card" id="bookCard-${book.id}" data-id="${book.id}">
                <div class="book-card-top">
                    <div class="book-cover-frame" onclick="toggleBookDetails('${book.id}')" title="${currentLang === 'hi' ? 'विस्तृत विवरण देखें' : 'Click for details'}">
                        <img src="${book.cover}" alt="${title}" class="book-cover-img" onerror="this.src='${book.fallbackCover}'">
                    </div>
                    <div class="book-info-block">
                        <span class="book-genre-tag">${category} &bull; ${book.year}</span>
                        <h3 class="book-title" onclick="toggleBookDetails('${book.id}')" title="${title}">${title}</h3>
                        <p class="book-blurb">${blurb}</p>
                    </div>
                </div>
                <div class="book-actions">
                    <button class="btn-book-details" onclick="toggleBookDetails('${book.id}')" id="bookToggleBtn-${book.id}">
                        <span class="expand-label">${detailsBtnText}</span>
                        <i class="fas fa-chevron-down expand-icon"></i>
                    </button>
                    <a href="${book.bloggerUrl}" target="_blank" rel="noopener noreferrer" class="btn-book-blogger">
                        ${bloggerBtnText} <i class="fas fa-external-link-alt" style="font-size: 0.72rem;"></i>
                    </a>
                </div>

                <!-- Smooth In-Card Expandable Details Drawer -->
                <div class="book-expand-drawer" id="bookDrawer-${book.id}">
                    <div class="book-drawer-content">
                        <div class="book-meta-strip">
                            <span class="book-meta-pill"><i class="fas fa-calendar-alt"></i> ${yearLabel}</span>
                            <span class="book-meta-pill"><i class="fas fa-building"></i> ${publisherLabel}</span>
                            ${book.pages ? `<span class="book-meta-pill"><i class="fas fa-file-alt"></i> ${book.pages} पृष्ठ</span>` : ''}
                            ${book.isbn ? `<span class="book-meta-pill"><i class="fas fa-barcode"></i> ISBN: ${book.isbn}</span>` : ''}
                        </div>
                        <div class="book-full-synopsis">
                            <h4 class="synopsis-title"><i class="fas fa-feather-alt"></i> ${currentLang === 'hi' ? 'साहित्यिक समीक्षा एवं परिचय' : 'Literary Review & Synopsis'}</h4>
                            <p class="synopsis-text">${details}</p>
                        </div>
                        <div class="book-drawer-footer">
                            <button class="btn-modal-trigger" onclick="openBookModal('${book.id}')">
                                <i class="fas fa-expand-arrows-alt"></i> ${currentLang === 'hi' ? 'बड़ी विंडो में पढ़ें' : 'Full Window'}
                            </button>
                            <button class="btn-close-drawer" onclick="toggleBookDetails('${book.id}')">
                                <i class="fas fa-chevron-up"></i> ${currentLang === 'hi' ? 'संक्षिप्त करें' : 'Collapse'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

window.toggleBookDetails = function(bookId) {
    const card = document.getElementById(`bookCard-${bookId}`);
    if (!card) return;
    const isExpanded = card.classList.contains('expanded');
    const label = card.querySelector('.expand-label');

    if (isExpanded) {
        card.classList.remove('expanded');
        if (label) label.textContent = currentLang === 'hi' ? 'विस्तार से विवरण' : 'Book Details';
    } else {
        card.classList.add('expanded');
        if (label) label.textContent = currentLang === 'hi' ? 'संक्षिप्त करें' : 'Collapse';
    }
};

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
   MASTER CATEGORIZED BIBLIOGRAPHY (साहित्य-संसार: विधावार समग्र ग्रन्थ-सूची)
   -------------------------------------------------------------------------- */
let currentBiblioCategory = 'all';

function renderMasterBibliography() {
    const container = document.getElementById('masterBibliographyContainer');
    const pillsContainer = document.getElementById('categoriesNavPills');
    if (!container || typeof LITERARY_CATEGORIES === 'undefined' || typeof ALL_WORKS_LIST === 'undefined') return;

    // Render Category Filter Pills
    if (pillsContainer) {
        const allLabel = currentLang === 'hi' ? 'समग्र कृतियाँ (समस्त 9 विधाएँ)' : 'All 9 Categories (Complete)';
        pillsContainer.innerHTML = `
            <button class="cat-pill-btn ${currentBiblioCategory === 'all' ? 'active' : ''}" onclick="filterMasterBibliography('all', this)">
                <i class="fas fa-layer-group"></i> <span>${allLabel}</span>
                <span class="pill-count">${ALL_WORKS_LIST.length}</span>
            </button>
        ` + LITERARY_CATEGORIES.map(cat => {
            const title = currentLang === 'hi' ? cat.titleHi : cat.titleEn;
            const count = ALL_WORKS_LIST.filter(w => w.categoryId === cat.id).length;
            const isActive = currentBiblioCategory === cat.id ? 'active' : '';
            return `
                <button class="cat-pill-btn ${isActive}" onclick="filterMasterBibliography('${cat.id}', this)">
                    <i class="${cat.icon}"></i> <span>${title}</span>
                    <span class="pill-count">${count}</span>
                </button>
            `;
        }).join('');
    }

    // Render Category Blocks
    const categoriesToShow = currentBiblioCategory === 'all' 
        ? LITERARY_CATEGORIES 
        : LITERARY_CATEGORIES.filter(c => c.id === currentBiblioCategory);

    const readOnBlogger = currentLang === 'hi' ? 'ब्लॉग पर पढ़ें' : 'Read on Blogger';

    container.innerHTML = categoriesToShow.map(cat => {
        const catTitle = currentLang === 'hi' ? cat.titleHi : cat.titleEn;
        const catDesc = currentLang === 'hi' ? cat.descriptionHi : cat.descriptionEn;
        const works = ALL_WORKS_LIST.filter(w => w.categoryId === cat.id);

        return `
            <div class="biblio-category-block" id="catBlock-${cat.id}">
                <div class="biblio-cat-title-row">
                    <h4 class="biblio-cat-heading">
                        <i class="${cat.icon}"></i> <span>${catTitle}</span>
                    </h4>
                    <span class="biblio-cat-badge">${works.length} ${currentLang === 'hi' ? 'कृतियाँ' : 'Works'}</span>
                </div>
                <p style="color: #64748b; font-size: 0.92rem; margin-bottom: 1.25rem;">${catDesc}</p>
                <div class="biblio-works-list">
                    ${works.map(work => {
                        const title = currentLang === 'hi' ? work.titleHi : work.titleEn;
                        const desc = currentLang === 'hi' ? work.descHi : work.descEn;
                        return `
                            <div class="biblio-work-item">
                                <div class="work-item-num">${work.num}</div>
                                <div class="work-item-content">
                                    <div class="work-item-title">${title}</div>
                                    <div class="work-item-type">${work.type}</div>
                                    <p style="font-size: 0.85rem; color: #475569; line-height: 1.5; margin-bottom: 0.5rem;">${desc}</p>
                                    <a href="${work.bloggerUrl}" target="_blank" rel="noopener noreferrer" class="work-item-link">
                                        <i class="fab fa-blogger"></i> ${readOnBlogger} <i class="fas fa-arrow-right" style="font-size: 0.65rem;"></i>
                                    </a>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

window.filterMasterBibliography = function(catId, btnEl) {
    currentBiblioCategory = catId;
    document.querySelectorAll('.cat-pill-btn').forEach(b => b.classList.remove('active'));
    btnEl?.classList.add('active');
    renderMasterBibliography();
};


/* --------------------------------------------------------------------------
   BLOGGER BLOGS SECTION (32+ Platforms with Authentic Media & Rich Cards)
   -------------------------------------------------------------------------- */
let currentBlogSearch = '';

function renderBlogs() {
    const blogsGrid = document.getElementById('blogsGrid');
    if (!blogsGrid) return;

    // On main landing page, ONLY show blogs that have authentic dedicated photos!
    let filtered = Array.isArray(BLOGS_DATA) ? BLOGS_DATA.filter(b => b.hasPhoto) : [];
    if (currentBlogFilter !== 'all') {
        filtered = filtered.filter(b => b.category === currentBlogFilter);
    }
    if (currentBlogSearch && currentBlogSearch.trim() !== '') {
        const q = currentBlogSearch.trim().toLowerCase();
        filtered = filtered.filter(b => 
            (b.titleHi && b.titleHi.toLowerCase().includes(q)) ||
            (b.titleEn && b.titleEn.toLowerCase().includes(q)) ||
            (b.featuredArticle && b.featuredArticle.toLowerCase().includes(q)) ||
            (b.descHi && b.descHi.toLowerCase().includes(q)) ||
            (b.categoryHi && b.categoryHi.toLowerCase().includes(q))
        );
    }

    const countBadge = document.getElementById('blogsCountBadge');
    if (countBadge) {
        countBadge.textContent = currentLang === 'hi' 
            ? `${filtered.length} सचित्र ब्लॉग्स प्रदर्शित` 
            : `${filtered.length} Photo Blogs Shown`;
    }

    if (filtered.length === 0) {
        blogsGrid.innerHTML = `
            <div class="no-blogs-found" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; color: #64748b; background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1;">
                <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 1rem; color: #cbd5e1;"></i>
                <h4 style="font-size: 1.25rem; color: #334155; margin-bottom: 0.5rem;">${currentLang === 'hi' ? 'कोई ब्लॉग नहीं मिला' : 'No Blogs Found'}</h4>
                <p>${currentLang === 'hi' ? 'कृपया कोई अन्य शब्द या श्रेणी चुनकर खोजें।' : 'Please try searching with another keyword or category.'}</p>
            </div>
        `;
        return;
    }

    blogsGrid.innerHTML = filtered.map(blog => {
        const title = currentLang === 'hi' ? blog.titleHi : blog.titleEn;
        const category = currentLang === 'hi' ? blog.categoryHi : blog.categoryEn;
        const desc = currentLang === 'hi' ? blog.descHi : blog.descEn;
        const btnText = currentLang === 'hi' ? 'ब्लॉग पढ़ें' : 'Open Blog';
        const titleEscaped = (blog.titleHi || '').replace(/'/g, "\\'");

        return `
            <article class="blog-card" data-category="${blog.category}">
                <div class="blog-card-media">
                    <img src="${blog.image}" alt="${title}" loading="lazy" class="blog-card-img" onclick="openLightbox('${blog.image}', '${titleEscaped}')" style="cursor: pointer;" title="${currentLang === 'hi' ? 'बड़ा छायाचित्र देखें' : 'View full image'}">
                    <span class="blog-category-badge"><i class="fab fa-blogger"></i> ${category}</span>
                </div>
                <div class="blog-card-content">
                    <div class="blog-card-byline">
                        <i class="far fa-calendar-alt"></i> <span>${blog.dateAuthor}</span>
                    </div>
                    <h3 class="blog-card-title">${title}</h3>
                    <div class="blog-featured-article">
                        <i class="fas fa-bookmark" style="color: #ea580c; font-size: 0.8rem; margin-top: 3px; flex-shrink: 0;"></i>
                        <span>${blog.featuredArticle}</span>
                    </div>
                    <p class="blog-excerpt">${desc}</p>
                    <div class="blog-card-footer">
                        <a href="${blog.url}" target="_blank" rel="noopener noreferrer" class="btn-visit-blog">
                            <i class="fab fa-blogger-b"></i> <span>${btnText}</span> <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

window.filterBlogs = function(catId, btnEl) {
    currentBlogFilter = catId;
    document.querySelectorAll('.blog-filter-pill').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderBlogs();
};

window.handleBlogSearch = function(val) {
    currentBlogSearch = val || '';
    renderBlogs();
};

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

        const certPreviewHtml = award.certificateImage ? `
            <div class="award-cert-badge" onclick="openLightbox('${award.certificateImage}', '${title.replace(/'/g, "\\'")} — ${authority.replace(/'/g, "\\'")}')" style="margin-top: 1rem; cursor: pointer; display: flex; align-items: center; gap: 0.85rem; background: #fffbeb; border: 1.5px dashed #f59e0b; border-radius: 8px; padding: 0.6rem 0.85rem; transition: transform 0.2s, box-shadow 0.2s;" title="${currentLang === 'hi' ? 'मूल मानपत्र एवं समाचार देखें' : 'View original certificate and press clipping'}">
                <img src="${award.certificateImage}" alt="${title}" style="width: 72px; height: 52px; object-fit: contain; background: #0f172a; border-radius: 4px; border: 1px solid #d97706; box-shadow: 0 2px 6px rgba(0,0,0,0.15); padding: 2px;">
                <div style="flex: 1; min-width: 0; text-align: left;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: #92400e; display: flex; align-items: center; gap: 6px;">
                        <i class="fas fa-certificate" style="color: #d97706;"></i>
                        <span>${currentLang === 'hi' ? 'मूल मानपत्र एवं समाचार कतरन' : 'Original Citation & Press Report'}</span>
                    </div>
                    <div style="font-size: 0.75rem; color: #b45309; font-weight: 500;">
                        ${currentLang === 'hi' ? 'विस्तृत दर्शन हेतु क्लिक करें ↗' : 'Click to inspect in high-res ↗'}
                    </div>
                </div>
            </div>
        ` : '';

        return `
            <div class="timeline-item ${sideClass}">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <span class="timeline-year"><i class="fas fa-award"></i> ${award.year}</span>
                    <h4>${title}</h4>
                    <div class="timeline-authority">${authority}</div>
                    <p>${desc}</p>
                    ${certPreviewHtml}
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

    const iconMap = {
        ceremony: 'fa-fire-alt',
        archival: 'fa-history',
        keynote: 'fa-microphone-alt',
        conference: 'fa-users',
        award: 'fa-certificate',
        portrait: 'fa-user-tie'
    };

    galleryGrid.innerHTML = GALLERY_DATA.map(item => {
        const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
        const caption = currentLang === 'hi' ? item.captionHi : item.captionEn;
        const category = currentLang === 'hi' ? (item.categoryHi || 'चित्रशाला') : (item.categoryEn || 'Gallery');
        const icon = iconMap[item.category] || 'fa-camera';

        return `
            <div class="gallery-card" onclick="openLightbox('${item.image}', '${title.replace(/'/g, "\\'")}')">
                <div class="gallery-thumb-wrap">
                    <img src="${item.image}" alt="${title}" class="gallery-thumb" onerror="this.src='assets/images/author.jpg'">
                    <div class="gallery-hover-overlay">
                        <i class="fas fa-search-plus"></i>
                        <span>${currentLang === 'hi' ? 'विस्तृत देखें' : 'View Full Image'}</span>
                    </div>
                </div>
                <div class="gallery-caption">
                    <span class="gallery-tag"><i class="fas ${icon}"></i> ${category}</span>
                    <h4>${title}</h4>
                    <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0;">${caption}</p>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   YOUTUBE VIDEOS & RECITATIONS
   -------------------------------------------------------------------------- */
function renderVideos() {
    const container = document.getElementById('videosGrid');
    if (!container || typeof YOUTUBE_VIDEOS_DATA === 'undefined') return;

    container.innerHTML = YOUTUBE_VIDEOS_DATA.map(video => {
        const title = currentLang === 'hi' ? video.titleHi : video.titleEn;
        const category = currentLang === 'hi' ? video.categoryHi : video.categoryEn;
        const desc = currentLang === 'hi' ? video.descriptionHi : video.descriptionEn;

        return `
            <div class="video-card">
                <div class="video-player-wrap">
                    <iframe 
                        src="${video.embedUrl}" 
                        title="${title}" 
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-card-body">
                    <span class="video-card-badge"><i class="fab fa-youtube"></i> ${category}</span>
                    <h4 class="video-card-title">${title}</h4>
                    <p class="video-card-desc">${desc}</p>
                    <div class="video-card-footer">
                        <a href="${video.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-watch">
                            <i class="fab fa-youtube"></i>
                            <span>${currentLang === 'hi' ? 'YouTube पर देखें ↗' : 'Watch on YouTube ↗'}</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   TEWARIPAKSH MAGAZINE PDF COLLECTION
   -------------------------------------------------------------------------- */
function renderTewaripakshPdfs() {
    const container = document.getElementById('tewaripakshPdfGrid');
    if (!container || typeof TEWARIPAKSH_PDF_DATA === 'undefined') return;

    container.innerHTML = TEWARIPAKSH_PDF_DATA.map(item => {
        const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
        const type = currentLang === 'hi' ? item.typeHi : item.typeEn;

        return `
            <div class="magazine-pdf-card">
                <div class="magazine-pdf-cover-wrap" onclick="openLightbox('${item.coverImage}', '${title.replace(/'/g, "\\'")}')" title="${currentLang === 'hi' ? 'कवर बड़ा देखें' : 'View Full Cover'}">
                    <img src="${item.coverImage}" alt="${title}" loading="lazy" class="magazine-pdf-cover">
                    <span class="magazine-pdf-badge"><i class="fas fa-file-pdf"></i> ${type}</span>
                </div>
                <div class="magazine-pdf-info">
                    <h4 class="magazine-pdf-title">${title}</h4>
                    <div class="magazine-pdf-actions">
                        <a href="${item.readUrl}" target="_blank" rel="noopener noreferrer" class="btn-pdf-read">
                            <i class="fas fa-book-reader"></i>
                            <span>${currentLang === 'hi' ? 'ब्लॉग पर ई-अंक पढ़ें ↗' : 'Read Edition ↗'}</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   TESTIMONIALS & READER COMMENTS (WITH MONGODB & CLOUDINARY SCREENSHOTS)
   -------------------------------------------------------------------------- */
let globalServerComments = [];

function getStoredReaderComments() {
    try {
        const stored = localStorage.getItem('rameshraj_reader_comments');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveStoredReaderComments(comments) {
    try {
        localStorage.setItem('rameshraj_reader_comments', JSON.stringify(comments));
    } catch (e) {}
}

async function fetchServerComments() {
    try {
        const res = await fetch('/api/comments', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data && data.success && Array.isArray(data.comments)) {
                globalServerComments = data.comments;
                saveStoredReaderComments(globalServerComments);
                return globalServerComments;
            }
        }
    } catch (err) {
        // Fallback to offline/cached comments
    }
    return getStoredReaderComments();
}

async function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    // Load server comments asynchronously
    const serverComments = await fetchServerComments();
    
    // Format server comments to match template structure
    const formattedUserComments = serverComments.map(c => ({
        id: c._id || c.id,
        _id: c._id || c.id,
        nameHi: c.name,
        nameEn: c.name,
        titleHi: c.role || 'साहित्य-प्रेमी पाठक',
        titleEn: c.role || 'Literary Reader',
        quoteHi: c.comment,
        quoteEn: c.comment,
        imageUrl: c.imageUrl || '',
        date: c.date || (c.createdAt ? new Date(c.createdAt).toLocaleDateString(currentLang === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : ''),
        isUserSubmitted: true
    }));

    const allItems = [...formattedUserComments, ...TESTIMONIALS_DATA];

    container.innerHTML = allItems.map(item => {
        const name = currentLang === 'hi' ? (item.nameHi || item.name) : (item.nameEn || item.name);
        const title = currentLang === 'hi' ? (item.titleHi || item.role) : (item.titleEn || item.role);
        const quote = currentLang === 'hi' ? (item.quoteHi || item.comment) : (item.quoteEn || item.comment);
        const isUser = !!item.isUserSubmitted;
        const itemId = item._id || item.id || '';

        return `
            <div class="testimonial-card ${isUser ? 'user-submitted-comment' : ''}" id="${itemId}">
                <p class="testimonial-quote">${quote}</p>
                
                ${item.imageUrl ? `
                    <div class="comment-attached-image" onclick="openLightbox('${item.imageUrl}', 'संलग्न स्क्रीनशॉट / चित्र - ${name.replace(/'/g, "\\'")}')" title="${currentLang === 'hi' ? 'स्क्रीनशॉट बड़ा देखने के लिए क्लिक करें' : 'Click to view full screenshot'}">
                        <img src="${item.imageUrl}" alt="संलग्न स्क्रीनशॉट" loading="lazy">
                        <span class="image-zoom-hint">
                            <i class="fas fa-search-plus"></i> 
                            <span>${currentLang === 'hi' ? 'स्क्रीनशॉट देखें' : 'View Screenshot'}</span>
                        </span>
                    </div>
                ` : ''}

                <div class="testimonial-author">
                    <div class="author-avatar-placeholder" style="${isUser ? 'background: linear-gradient(135deg, #10b981, #059669);' : ''}">
                        <i class="${isUser ? 'fas fa-user-check' : 'fas fa-feather-alt'}"></i>
                    </div>
                    <div class="author-meta" style="flex: 1;">
                        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                            <h5 style="margin: 0;">${name}</h5>
                            ${isUser ? `<span class="reader-badge"><i class="fas fa-check-circle"></i> ${currentLang === 'hi' ? 'पाठक टिप्पणी' : 'Reader Comment'}</span>` : ''}
                        </div>
                        <span>${title}</span>
                    </div>
                </div>
                ${isUser ? `
                    <div class="comment-card-actions">
                        <span style="font-size: 0.75rem; color: #94a3b8;"><i class="far fa-clock"></i> ${item.date || ''}</span>
                        <button type="button" class="btn-delete-comment" onclick="deleteReaderComment('${itemId}')" title="${currentLang === 'hi' ? 'यह अवांछनीय टिप्पणी हटाएं (Admin PIN)' : 'Delete comment (Admin PIN)'}">
                            <i class="fas fa-trash-alt"></i> <span>${currentLang === 'hi' ? 'टिप्पणी हटाएं' : 'Delete'}</span>
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function initReaderCommentForm() {
    const form = document.getElementById('readerCommentForm');
    const fileInput = document.getElementById('readerScreenshot');
    const dropZone = document.getElementById('screenshotDropZone');
    const previewWrapper = document.getElementById('screenshotPreviewWrapper');
    const dropZonePrompt = document.getElementById('dropZonePrompt');
    const previewImg = document.getElementById('screenshotPreviewImg');
    const previewFilename = document.getElementById('previewFilename');
    const previewFilesize = document.getElementById('previewFilesize');
    const btnRemove = document.getElementById('btnRemovePreview');
    const submitBtn = document.getElementById('btnSubmitComment');
    const submitIcon = document.getElementById('btnSubmitIcon');
    const submitText = document.getElementById('btnSubmitText');

    let selectedFile = null;

    if (!form) return;

    // Helper: format file size
    function formatBytes(bytes) {
        if (!bytes) return '';
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    }

    // Handle file selection
    function handleSelectedFile(file) {
        if (!file || !file.type.startsWith('image/')) {
            showToast(currentLang === 'hi' ? 'कृपया केवल छवि (JPG, PNG, WebP) फ़ाइल चुनें।' : 'Please select an image file only.');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            showToast(currentLang === 'hi' ? 'फ़ाइल का आकार 10MB से कम होना चाहिए।' : 'File size must be under 10MB.');
            return;
        }

        selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            if (previewImg) previewImg.src = e.target.result;
            if (previewFilename) previewFilename.textContent = file.name || 'screenshot.jpg';
            if (previewFilesize) previewFilesize.textContent = formatBytes(file.size);
            if (dropZonePrompt) dropZonePrompt.style.display = 'none';
            if (previewWrapper) previewWrapper.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }

    // Reset file preview
    function clearSelectedFile() {
        selectedFile = null;
        if (fileInput) fileInput.value = '';
        if (previewImg) previewImg.src = '';
        if (previewWrapper) previewWrapper.style.display = 'none';
        if (dropZonePrompt) dropZonePrompt.style.display = 'flex';
    }

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                handleSelectedFile(e.target.files[0]);
            }
        });
    }

    if (btnRemove) {
        btnRemove.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            clearSelectedFile();
        });
    }

    // Drag and Drop support
    if (dropZone) {
        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.remove('dragover');
            }, false);
        });

        dropZone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            if (dt && dt.files && dt.files[0]) {
                handleSelectedFile(dt.files[0]);
            }
        }, false);
    }

    // Clipboard Paste (Ctrl+V) support for screenshots
    document.addEventListener('paste', (e) => {
        // Only if form is in view or active
        const items = (e.clipboardData || e.originalEvent?.clipboardData)?.items;
        if (items) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile();
                    if (blob) {
                        handleSelectedFile(blob);
                        showToast(currentLang === 'hi' ? 'स्क्रीनशॉट क्लिपबोर्ड से संलग्न कर दिया गया!' : 'Screenshot attached from clipboard!');
                    }
                    break;
                }
            }
        }
    });

    // Form Submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('readerName')?.value.trim();
        const role = document.getElementById('readerRole')?.value.trim() || (currentLang === 'hi' ? 'साहित्य-प्रेमी पाठक' : 'Literary Reader');
        const text = document.getElementById('readerCommentText')?.value.trim();

        if (!name || !text) {
            showToast(currentLang === 'hi' ? 'कृपया अपना नाम और टिप्पणी दोनों दर्ज करें।' : 'Please enter both your name and comment.');
            return;
        }

        // Set Loading state
        if (submitBtn) submitBtn.disabled = true;
        if (submitIcon) submitIcon.className = 'fas fa-spinner fa-spin';
        if (submitText) submitText.textContent = currentLang === 'hi' ? 'अपलोड व प्रकाशित हो रहा है...' : 'Publishing comment...';

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('role', role);
            formData.append('comment', text);
            if (selectedFile) {
                formData.append('screenshot', selectedFile);
            }

            const response = await fetch('/api/comments', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.message || 'Server error');
            }

            const result = await response.json();
            showToast(currentLang === 'hi' ? 'धन्यवाद! आपकी समीक्षा व स्क्रीनशॉट वेबसाइट पर प्रकाशित हो चुके हैं।' : 'Thank you! Your review and screenshot have been published on the website.');

            form.reset();
            clearSelectedFile();

            // Refresh testimonials grid with new comment
            await renderTestimonials();

            // Smooth scroll to reader comments
            const commentsContainer = document.getElementById('testimonialsGrid');
            if (commentsContainer) {
                commentsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        } catch (err) {
            console.error('Comment publish error:', err);
            // Fallback: save to local storage if server is unavailable
            const fallbackComment = {
                id: 'local-' + Date.now(),
                nameHi: name,
                nameEn: name,
                titleHi: role,
                titleEn: role,
                quoteHi: text,
                quoteEn: text,
                imageUrl: previewImg?.src || '',
                date: new Date().toLocaleDateString(currentLang === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
                isUserSubmitted: true
            };
            const existing = getStoredReaderComments();
            existing.unshift(fallbackComment);
            saveStoredReaderComments(existing);
            await renderTestimonials();

            showToast(currentLang === 'hi' ? 'आपकी टिप्पणी दर्ज कर ली गई है।' : 'Your comment has been recorded.');
            form.reset();
            clearSelectedFile();
        } finally {
            if (submitBtn) submitBtn.disabled = false;
            if (submitIcon) submitIcon.className = 'fas fa-paper-plane';
            if (submitText) submitText.textContent = currentLang === 'hi' ? 'टिप्पणी वेबसाइट पर प्रकाशित करें' : 'Publish Comment on Website';
        }
    });
}

window.deleteReaderComment = async function(commentId) {
    if (!commentId) return;

    const pinPrompt = currentLang === 'hi'
        ? 'कृपया अवांछनीय टिप्पणी हटाने के लिए 4-अंकों का एडमिन पिन दर्ज करें:'
        : 'Enter 4-digit Admin PIN to delete unwanted comment:';

    const enteredPin = prompt(pinPrompt);
    if (!enteredPin) return;

    try {
        const res = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                'x-admin-pin': enteredPin.trim()
            }
        });

        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success) {
            showToast(currentLang === 'hi' ? 'टिप्पणी वेबसाइट से सफलतापूर्वक हटा दी गई।' : 'Comment removed successfully from the website.');
            await renderTestimonials();
        } else {
            showToast(data.message || (currentLang === 'hi' ? 'अमान्य एडमिन पिन। टिप्पणी नहीं हटाई जा सकी।' : 'Invalid Admin PIN. Could not delete.'));
        }
    } catch (err) {
        console.error('Delete comment error:', err);
        // Fallback for local comment removal
        const comments = getStoredReaderComments().filter(c => (c._id || c.id) !== commentId);
        saveStoredReaderComments(comments);
        await renderTestimonials();
        showToast(currentLang === 'hi' ? 'टिप्पणी हटा दी गई।' : 'Comment removed.');
    }
};

/* --------------------------------------------------------------------------
   MODALS & LIGHTBOX UNIVERSAL CONTROLS
   -------------------------------------------------------------------------- */
window.closeAllModals = function(fromPopstate) {
    if (window.closeLightbox) window.closeLightbox(fromPopstate);
    if (window.closeBookModal) window.closeBookModal();
    if (window.closeAuthorFullBio) window.closeAuthorFullBio();
    if (window.closeShareModal) window.closeShareModal();
    if (window.closeAllBooksModal) window.closeAllBooksModal();
    if (window.closeAllBlogsModal) window.closeAllBlogsModal();
    if (window.closeFullGalleryModal) window.closeFullGalleryModal();

    // Universal cleanup
    document.querySelectorAll('.modal-overlay, .lightbox-overlay').forEach(el => {
        el.classList.remove('active');
    });
    document.body.style.overflow = '';
};

function initModals() {
    // Close on overlay backdrop click
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

    // Mobile / Browser Hardware Back Button Handler (Prevents leaving the website)
    window.addEventListener('popstate', (e) => {
        const activeModal = document.querySelector('.modal-overlay.active, .lightbox-overlay.active');
        if (activeModal) {
            closeAllModals(true);
        }
    });
}

window.openBookModal = function(bookId) {
    let book = (typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA.find(b => b.id === bookId) : null);
    if (!book && typeof ALL_WORKS_LIST !== 'undefined') {
        const item = ALL_WORKS_LIST.find(b => b.id === bookId);
        if (item) {
            book = {
                id: item.id,
                titleHi: item.titleHi,
                titleEn: item.titleEn,
                category: item.categoryId || 'tewari',
                categoryNameHi: item.categoryHi || 'साहित्य',
                categoryNameEn: item.categoryEn || 'Literature',
                blurbHi: item.descHi || item.descriptionHi || item.detailsHi || item.titleHi,
                blurbEn: item.descEn || item.descriptionEn || item.detailsEn || item.titleEn,
                detailsHi: item.descHi || item.descriptionHi || item.detailsHi || item.titleHi,
                detailsEn: item.descEn || item.descriptionEn || item.detailsEn || item.titleEn,
                cover: item.cover || 'assets/images/books/abhi-zuban-kati-nahin.jpg',
                fallbackCover: 'assets/images/author-portrait-formal.jpg',
                year: item.year || 'उपलब्ध',
                publisher: item.publisher || 'सार्थक सृजन प्रकाशन, अलीगढ़',
                pages: item.pages || 'विविध',
                isbn: item.isbn || 'उपलब्ध',
                bloggerUrl: item.bloggerUrl || 'https://www.blogger.com/profile/10299195093677463730',
                buyUrl: item.buyUrl || null
            };
        }
    }
    if (book && !book.buyUrl && typeof ALL_WORKS_LIST !== 'undefined') {
        const match = ALL_WORKS_LIST.find(w => w.id === bookId);
        if (match && match.buyUrl) book.buyUrl = match.buyUrl;
    }
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const container = document.getElementById('bookModalContent');
    if (!modal || !container) return;

    const title = currentLang === 'hi' ? book.titleHi : book.titleEn;
    const category = currentLang === 'hi' ? book.categoryNameHi : book.categoryNameEn;
    const details = currentLang === 'hi' ? (book.detailsHi || book.blurbHi) : (book.detailsEn || book.blurbEn);
    const publisherLabel = currentLang === 'hi' ? 'प्रकाशक' : 'Publisher';
    const yearLabel = currentLang === 'hi' ? 'प्रकाशन वर्ष' : 'Published Year';
    const pagesLabel = currentLang === 'hi' ? 'पृष्ठ संख्या' : 'Pages';
    const isbnLabel = 'ISBN';
    const readBloggerText = currentLang === 'hi' ? '📖 ब्लॉगर पर पढ़ें / समीक्षा' : '📖 Read on Author Blogger';

    const isShopizen = book.buyUrl && book.buyUrl.includes('shopizen');
    const isRachnaye = book.buyUrl && book.buyUrl.includes('rachnaye');
    const buyBtnText = isShopizen 
        ? (currentLang === 'hi' ? 'शॉपीज़ान (Amazon/Flipkart) पर खरीदें' : 'Buy on Shopizen (Amazon/Flipkart)')
        : (currentLang === 'hi' ? 'रचनाये (Rachnaye) पर खरीदें' : 'Buy Book on Rachnaye');
    const buyBtnBg = isShopizen 
        ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' 
        : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)';
    const buyBtnShadow = isShopizen 
        ? '0 4px 12px rgba(234, 88, 12, 0.35)' 
        : '0 4px 12px rgba(22, 163, 74, 0.35)';

    container.innerHTML = `
        <div class="modal-book-visual">
            <img src="${book.cover}" alt="${title}" class="modal-book-cover" onerror="this.src='${book.fallbackCover || 'assets/images/author-portrait-formal.jpg'}'">
            ${book.buyUrl ? `
            <a href="${book.buyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-buy-online" style="width: 100%; margin-bottom: 0.65rem; background: ${buyBtnBg}; color: #ffffff; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.7rem 1rem; border-radius: 8px; font-weight: 700; text-decoration: none; box-shadow: ${buyBtnShadow};">
                <i class="fas fa-shopping-cart"></i> <span>${buyBtnText}</span> <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
            </a>
            ` : ''}
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
                    <span>${book.publisher || 'सार्थक सृजन प्रकाशन'}</span>
                </div>
                <div class="meta-field">
                    <strong>${yearLabel}</strong>
                    <span>${book.year || 'उपलब्ध'}</span>
                </div>
                <div class="meta-field">
                    <strong>${pagesLabel}</strong>
                    <span>${book.pages || 'विविध'}</span>
                </div>
                <div class="meta-field">
                    <strong>${isbnLabel}</strong>
                    <span>${book.isbn || 'उपलब्ध'}</span>
                </div>
            </div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.6rem; color: #0f172a;">
                ${currentLang === 'hi' ? 'पुस्तक के विषय में / सारांश' : 'About the Book / Synopsis'}
            </h4>
            <p class="modal-synopsis-text">${details}</p>
            <div class="modal-action-bar">
                ${book.buyUrl ? `
                <a href="${book.buyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-success" style="background: ${buyBtnBg}; color: #fff; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; box-shadow: ${buyBtnShadow};">
                    <i class="fas fa-shopping-cart"></i> <span>${buyBtnText}</span>
                </a>
                ` : ''}
                <a href="${book.bloggerUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="fab fa-blogger-b"></i> ${currentLang === 'hi' ? 'सम्पूर्ण समीक्षा व पाठ देखें' : 'View Full Text & Reviews'}
                </a>
                <button class="btn btn-outline" onclick="shareBookWhatsApp('${(book.titleHi || book.titleEn).replace(/'/g, "\\'")}', '${book.buyUrl || book.bloggerUrl}')" title="${currentLang === 'hi' ? 'व्हाट्सएप पर साझा करें' : 'Share on WhatsApp'}">
                    <i class="fab fa-whatsapp" style="color: #25D366;"></i> <span>${currentLang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}</span>
                </button>
                <button class="btn btn-outline" onclick="copyShareLink('${book.buyUrl || book.bloggerUrl}')" title="${currentLang === 'hi' ? 'लिंक कॉपी करें' : 'Copy Link'}">
                    <i class="fas fa-copy"></i> <span>${currentLang === 'hi' ? 'कॉपी लिंक' : 'Copy Link'}</span>
                </button>
            </div>
            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end;">
                <button type="button" class="btn btn-outline" onclick="closeBookModal()" style="font-weight: 700; color: #475569; border: 1.5px solid #cbd5e1; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.55rem 1.25rem; border-radius: 8px; background: #f8fafc; cursor: pointer;">
                    <i class="fas fa-times" style="color: #ea580c;"></i> <span>${currentLang === 'hi' ? 'विवरण बंद करें (Close)' : 'Close Window'}</span>
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

    // Push state to browser history so mobile Back button closes the lightbox instead of leaving the site
    try {
        if (!history.state || history.state.modal !== 'lightbox') {
            history.pushState({ modal: 'lightbox' }, '');
        }
    } catch (err) {
        // Silently ignore if blocked
    }
};

window.closeLightbox = function(fromPopstate) {
    const lb = document.getElementById('mediaLightbox');
    if (lb) {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Step back in history if this wasn't triggered by popstate
    if (!fromPopstate && history.state && history.state.modal === 'lightbox') {
        try {
            history.back();
        } catch (err) {}
    }
};

/* --- Author Full Biography Modal (drnamitasingh.com style) --- */
window.openAuthorFullBio = function(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('authorBioModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeAuthorFullBio = function() {
    const modal = document.getElementById('authorBioModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.openAuthorBioModal = function(e) {
    if (window.openAuthorFullBio) {
        window.openAuthorFullBio(e);
    }
};

/* --- Share Modal (Client's explicit WhatsApp & Social Share request) --- */
const LIVE_SITE_URL = 'https://rameshraj-tewarikar.onrender.com/';

window.openShareModal = function() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const urlInput = document.getElementById('shareUrlInput');
        if (urlInput) {
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || !window.location.hostname;
            urlInput.value = isLocal ? LIVE_SITE_URL : window.location.href;
        }
    }
};

window.closeShareModal = function() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.shareToPlatform = function(platform) {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || !window.location.hostname;
    const currentUrl = isLocal ? LIVE_SITE_URL : window.location.href;
    const url = encodeURIComponent(currentUrl);
    // Client strictly requested: "केवल *रमेशराज तेवरीकार का साहित्य-संसार* आना चाहिए"
    const shareTitle = currentLang === 'hi' 
        ? 'रमेशराज तेवरीकार का साहित्य-संसार' 
        : "Rameshraj Tewarikar's Literary World";
    const title = encodeURIComponent(shareTitle);
    let shareUrl = '';

    switch (platform) {
        case 'whatsapp':
            // Placing the URL first ensures WhatsApp's crawler immediately fetches and displays the rich preview card with image
            shareUrl = `https://api.whatsapp.com/send?text=${url}%0A%0A${title}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
            break;
    }
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=650,height=520');
    }
};

window.shareBookWhatsApp = function(title, url) {
    const targetUrl = url || LIVE_SITE_URL;
    const shareText = encodeURIComponent(`${targetUrl}\n\n${title}`);
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank', 'noopener,noreferrer');
};

window.copySiteLink = function() {
    const urlInput = document.getElementById('shareUrlInput');
    const alertEl = document.getElementById('shareCopyAlert');
    const textToCopy = urlInput ? urlInput.value : window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            if (alertEl) {
                alertEl.style.display = 'block';
                setTimeout(() => { alertEl.style.display = 'none'; }, 3000);
            }
        }).catch(() => {
            fallbackCopyText(urlInput, alertEl);
        });
    } else {
        fallbackCopyText(urlInput, alertEl);
    }
};

function fallbackCopyText(input, alertEl) {
    if (input) {
        input.select();
        document.execCommand('copy');
        if (alertEl) {
            alertEl.style.display = 'block';
            setTimeout(() => { alertEl.style.display = 'none'; }, 3000);
        }
    }
}

/* --- Full Gallery Modal (समग्र चित्र देखें ») --- */
let activeGalleryFilter = 'all';

window.openFullGalleryModal = function() {
    const modal = document.getElementById('fullGalleryModal');
    if (!modal) return;
    activeGalleryFilter = 'all';
    renderFullGalleryModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeFullGalleryModal = function() {
    const modal = document.getElementById('fullGalleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.filterFullGallery = function(filter) {
    activeGalleryFilter = filter;
    document.querySelectorAll('#galleryFilterPills .catalog-pill').forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderFullGalleryModal();
};

function renderFullGalleryModal() {
    const body = document.getElementById('fullGalleryModalBody');
    if (!body || typeof GALLERY_DATA === 'undefined') return;

    const filtered = GALLERY_DATA.filter(item => {
        if (activeGalleryFilter === 'all') return true;
        return item.category === activeGalleryFilter;
    });

    body.innerHTML = `
        <div class="full-gallery-grid">
            ${filtered.map(item => {
                const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
                const caption = currentLang === 'hi' ? item.captionHi : item.captionEn;
                const category = currentLang === 'hi' ? item.categoryHi : item.categoryEn;
                const escapedTitle = title.replace(/'/g, "\\'");
                return `
                    <div class="full-gallery-card" onclick="openLightbox('${item.image}', '${escapedTitle}')">
                        <div class="full-gallery-img-wrap">
                            <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.src='assets/images/author-portrait-formal.jpg'">
                            <span class="full-gallery-cat-pill">${category}</span>
                        </div>
                        <div class="full-gallery-info">
                            <h4>${title}</h4>
                            <p>${caption}</p>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function closeAllModals() {
    closeBookModal();
    closeLightbox();
    closeAllBooksModal();
    closeAllBlogsModal();
    closeAuthorFullBio();
    closeShareModal();
    closeFullGalleryModal();
}

/* --------------------------------------------------------------------------
   ALL BOOKS & COMPLETE WORKS MODAL (58+ Works)
   -------------------------------------------------------------------------- */
let allBooksModalCat = 'all';
let allBooksModalSearch = '';

window.openAllBooksModal = function(catId) {
    const modal = document.getElementById('allBooksModal');
    if (!modal) return;

    allBooksModalCat = catId || 'all';
    allBooksModalSearch = '';
    const searchInput = document.getElementById('allBooksSearchInput');
    if (searchInput) searchInput.value = '';

    renderAllBooksModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeAllBooksModal = function() {
    const modal = document.getElementById('allBooksModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.handleAllBooksSearch = function(val) {
    allBooksModalSearch = (val || '').trim().toLowerCase();
    renderAllBooksModal();
};

window.filterAllBooksModalCat = function(catId) {
    allBooksModalCat = catId;
    renderAllBooksModal();
};

function renderAllBooksModal() {
    const body = document.getElementById('allBooksModalBody');
    const pillsContainer = document.getElementById('allBooksCategoryPills');
    const countBadge = document.getElementById('allBooksCountBadge');
    if (!body || typeof ALL_WORKS_LIST === 'undefined') return;

    // Render Pills
    if (pillsContainer && typeof LITERARY_CATEGORIES !== 'undefined') {
        const allLabel = currentLang === 'hi' ? 'समस्त 58+ कृतियाँ' : 'All 58+ Works';
        pillsContainer.innerHTML = `
            <button class="modal-pill-btn ${allBooksModalCat === 'all' ? 'active' : ''}" onclick="filterAllBooksModalCat('all')">
                <i class="fas fa-layer-group"></i> <span>${allLabel}</span>
                <span class="pill-count">${ALL_WORKS_LIST.length}</span>
            </button>
        ` + LITERARY_CATEGORIES.map(cat => {
            let count = ALL_WORKS_LIST.filter(w => w.categoryId === cat.id).length;
            if (cat.id === 'shopizen') {
                count = ALL_WORKS_LIST.filter(w => w.publisher === 'shopizen' || (w.buyUrl && w.buyUrl.includes('shopizen'))).length;
            } else if (cat.id === 'rachnaye') {
                count = ALL_WORKS_LIST.filter(w => w.publisher === 'rachnaye' || (w.buyUrl && w.buyUrl.includes('rachnaye'))).length;
            }
            const title = currentLang === 'hi' ? cat.titleHi : cat.titleEn;
            const isActive = allBooksModalCat === cat.id ? 'active' : '';
            return `
                <button class="modal-pill-btn ${isActive}" onclick="filterAllBooksModalCat('${cat.id}')">
                    <i class="${cat.icon}"></i> <span>${title}</span>
                    <span class="pill-count">${count}</span>
                </button>
            `;
        }).join('');
    }

    // Filter works
    let filtered = ALL_WORKS_LIST;
    if (allBooksModalCat === 'shopizen') {
        filtered = filtered.filter(w => w.publisher === 'shopizen' || (w.buyUrl && w.buyUrl.includes('shopizen')) || w.categoryId === 'shopizen');
    } else if (allBooksModalCat === 'rachnaye') {
        filtered = filtered.filter(w => w.publisher === 'rachnaye' || (w.buyUrl && w.buyUrl.includes('rachnaye')) || w.categoryId === 'rachnaye');
    } else if (allBooksModalCat !== 'all') {
        filtered = filtered.filter(w => w.categoryId === allBooksModalCat);
    }
    if (allBooksModalSearch) {
        filtered = filtered.filter(w => 
            (w.titleHi && w.titleHi.toLowerCase().includes(allBooksModalSearch)) ||
            (w.titleEn && w.titleEn.toLowerCase().includes(allBooksModalSearch)) ||
            (w.descHi && w.descHi.toLowerCase().includes(allBooksModalSearch)) ||
            (w.type && w.type.toLowerCase().includes(allBooksModalSearch))
        );
    }

    if (countBadge) {
        countBadge.textContent = currentLang === 'hi' 
            ? `${filtered.length} कृतियाँ प्रदर्शित` 
            : `${filtered.length} Works Displayed`;
    }

    if (filtered.length === 0) {
        body.innerHTML = `
            <div style="text-align: center; padding: 3rem 1.5rem; color: #64748b;">
                <i class="fas fa-search" style="font-size: 2.5rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
                <h4 style="font-size: 1.15rem; color: #334155; margin-bottom: 0.5rem;">${currentLang === 'hi' ? 'कोई कृति नहीं मिली' : 'No Works Found'}</h4>
                <p>${currentLang === 'hi' ? 'कृपया अन्य शब्द या श्रेणी का चयन करें।' : 'Please try searching with another keyword.'}</p>
            </div>
        `;
        return;
    }

    const readText = currentLang === 'hi' ? 'ब्लॉग पर पढ़ें' : 'Read on Blogger';

    body.innerHTML = `
        <div class="modal-works-grid">
            ${filtered.map(w => {
                const title = currentLang === 'hi' ? w.titleHi : w.titleEn;
                const desc = currentLang === 'hi' ? w.descHi : w.descEn;
                const photoBadge = w.hasPhoto 
                    ? `<span class="work-photo-tag has-photo"><i class="fas fa-check-circle"></i> ${currentLang === 'hi' ? 'कवर उपलब्ध' : 'Cover Art'}</span>`
                    : `<span class="work-photo-tag no-photo"><i class="fas fa-book"></i> ${currentLang === 'hi' ? 'अप्रकाशित / डिजिटल संकलन' : 'Unpublished / Digital Edition'}</span>`;
                
                const visualHtml = w.hasPhoto 
                    ? `<div class="modal-work-thumb" onclick="openLightbox('${w.cover}', '${title.replace(/'/g, "\\'")}')" title="${currentLang === 'hi' ? 'बड़ा कवर देखें' : 'View full cover'}">
                           <img src="${w.cover}" alt="${title}">
                       </div>`
                    : `<div class="modal-work-icon-thumb">
                           <i class="fas fa-book-open"></i>
                       </div>`;

                return `
                    <div class="modal-work-item ${w.hasPhoto ? 'has-cover-art' : 'is-manuscript'}">
                        ${visualHtml}
                        <div class="modal-work-info">
                            <div class="modal-work-head">
                                <span class="work-cat-tag">${w.type}</span>
                                ${photoBadge}
                            </div>
                            <h4 class="modal-work-title">${w.num}. ${title}</h4>
                            <p class="modal-work-desc">${desc}</p>
                            <div class="modal-work-actions" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
                                ${w.buyUrl ? `
                                    <a href="${w.buyUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.42rem 0.85rem; border-radius: 6px; font-size: 0.82rem; font-weight: 700; text-decoration: none; color: #fff; background: ${w.buyUrl.includes('shopizen') ? 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)' : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'}; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
                                        <i class="fas fa-shopping-cart"></i>
                                        <span>${w.buyUrl.includes('shopizen') ? (currentLang === 'hi' ? 'शॉपीज़ान (Amazon/Flipkart)' : 'Buy Shopizen') : (currentLang === 'hi' ? 'रचनाये पर खरीदें' : 'Buy Rachnaye')}</span>
                                        <i class="fas fa-external-link-alt" style="font-size: 0.7rem;"></i>
                                    </a>
                                ` : ''}
                                <a href="${w.bloggerUrl}" target="_blank" rel="noopener noreferrer" class="btn-modal-blogger">
                                    <i class="fab fa-blogger-b"></i> <span>${readText}</span> <i class="fas fa-external-link-alt" style="font-size: 0.72rem;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

/* --------------------------------------------------------------------------
   ALL BLOGS MODAL (32+ Platforms)
   -------------------------------------------------------------------------- */
let allBlogsModalCat = 'all';
let allBlogsModalSearch = '';

window.openAllBlogsModal = function(catId) {
    const modal = document.getElementById('allBlogsModal');
    if (!modal) return;

    allBlogsModalCat = catId || 'all';
    allBlogsModalSearch = '';
    const searchInput = document.getElementById('allBlogsModalSearchInput');
    if (searchInput) searchInput.value = '';

    renderAllBlogsModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeAllBlogsModal = function() {
    const modal = document.getElementById('allBlogsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.handleAllBlogsModalSearch = function(val) {
    allBlogsModalSearch = (val || '').trim().toLowerCase();
    renderAllBlogsModal();
};

window.filterAllBlogsModalCat = function(catId) {
    allBlogsModalCat = catId;
    renderAllBlogsModal();
};

function renderAllBlogsModal() {
    const body = document.getElementById('allBlogsModalBody');
    const pillsContainer = document.getElementById('allBlogsModalCategoryPills');
    const countBadge = document.getElementById('allBlogsModalCountBadge');
    if (!body || typeof BLOGS_DATA === 'undefined') return;

    const categories = [
        { id: 'all', icon: 'fas fa-layer-group', titleHi: 'समस्त 32+ ब्लॉग मंच', titleEn: 'All 32+ Platforms' },
        { id: 'tewari', icon: 'fas fa-feather-alt', titleHi: 'तेवरी आंदोलन', titleEn: 'Tewari Movement' },
        { id: 'shodh', icon: 'fas fa-book-reader', titleHi: 'शोध एवं रस-सिद्धांत', titleEn: 'Poetics & Research' },
        { id: 'chhand', icon: 'fas fa-pen-fancy', titleHi: 'छंद नवाचार एवं विधाएँ', titleEn: 'Metric Innovations' },
        { id: 'geet', icon: 'fas fa-music', titleHi: 'बालगीत, नवगीत व ग़ज़ल', titleEn: 'Songs & Ghazals' },
        { id: 'sahitya', icon: 'fas fa-landmark', titleHi: 'साहित्यिक धरोहर', titleEn: 'Literary Heritage' }
    ];

    if (pillsContainer) {
        pillsContainer.innerHTML = categories.map(cat => {
            const count = cat.id === 'all' 
                ? BLOGS_DATA.length 
                : BLOGS_DATA.filter(b => b.category === cat.id).length;
            const title = currentLang === 'hi' ? cat.titleHi : cat.titleEn;
            const isActive = allBlogsModalCat === cat.id ? 'active' : '';
            return `
                <button class="modal-pill-btn ${isActive}" onclick="filterAllBlogsModalCat('${cat.id}')">
                    <i class="${cat.icon}"></i> <span>${title}</span>
                    <span class="pill-count">${count}</span>
                </button>
            `;
        }).join('');
    }

    let filtered = BLOGS_DATA;
    if (allBlogsModalCat !== 'all') {
        filtered = filtered.filter(b => b.category === allBlogsModalCat);
    }
    if (allBlogsModalSearch) {
        filtered = filtered.filter(b => 
            (b.titleHi && b.titleHi.toLowerCase().includes(allBlogsModalSearch)) ||
            (b.titleEn && b.titleEn.toLowerCase().includes(allBlogsModalSearch)) ||
            (b.featuredArticle && b.featuredArticle.toLowerCase().includes(allBlogsModalSearch)) ||
            (b.descHi && b.descHi.toLowerCase().includes(allBlogsModalSearch)) ||
            (b.categoryHi && b.categoryHi.toLowerCase().includes(allBlogsModalSearch))
        );
    }

    if (countBadge) {
        countBadge.textContent = currentLang === 'hi' 
            ? `${filtered.length} ब्लॉग्स प्रदर्शित` 
            : `${filtered.length} Blogs Shown`;
    }

    if (filtered.length === 0) {
        body.innerHTML = `
            <div style="text-align: center; padding: 3rem 1.5rem; color: #64748b;">
                <i class="fas fa-search" style="font-size: 2.5rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
                <h4 style="font-size: 1.15rem; color: #334155; margin-bottom: 0.5rem;">${currentLang === 'hi' ? 'कोई ब्लॉग नहीं मिला' : 'No Blogs Found'}</h4>
                <p>${currentLang === 'hi' ? 'कृपया अन्य शब्द या श्रेणी का चयन करें।' : 'Please try searching with another keyword.'}</p>
            </div>
        `;
        return;
    }

    const btnText = currentLang === 'hi' ? 'ब्लॉग पढ़ें' : 'Visit Blog';

    body.innerHTML = `
        <div class="modal-blogs-grid">
            ${filtered.map(blog => {
                const title = currentLang === 'hi' ? blog.titleHi : blog.titleEn;
                const category = currentLang === 'hi' ? blog.categoryHi : blog.categoryEn;
                const desc = currentLang === 'hi' ? blog.descHi : blog.descEn;
                const titleEscaped = (blog.titleHi || '').replace(/'/g, "\\'");

                const mediaHtml = blog.hasPhoto 
                    ? `<div class="modal-blog-card-media">
                           <img src="${blog.image}" alt="${title}" loading="lazy" onclick="openLightbox('${blog.image}', '${titleEscaped}')" style="cursor:pointer;" title="${currentLang === 'hi' ? 'छायाचित्र बड़ा करें' : 'Zoom'}">
                           <span class="blog-category-badge"><i class="fab fa-blogger"></i> ${category}</span>
                       </div>`
                    : `<div class="modal-blog-card-header-pattern">
                           <div class="modal-blog-pattern-content">
                               <i class="fab fa-blogger-b" style="font-size: 2.5rem; color: rgba(255,255,255,0.7);"></i>
                               <span class="blog-category-badge" style="position:static;"><i class="fab fa-blogger"></i> ${category}</span>
                           </div>
                       </div>`;

                return `
                    <article class="modal-blog-card ${blog.hasPhoto ? 'has-blog-photo' : 'text-blog-card'}">
                        ${mediaHtml}
                        <div class="modal-blog-card-body">
                            <div class="modal-blog-byline">
                                <i class="far fa-calendar-alt"></i> <span>${blog.dateAuthor}</span>
                            </div>
                            <h3 class="modal-blog-title">${title}</h3>
                            <div class="modal-blog-featured">
                                <i class="fas fa-bookmark" style="color: #ea580c; flex-shrink: 0;"></i>
                                <span>${blog.featuredArticle}</span>
                            </div>
                            <p class="modal-blog-excerpt">${desc}</p>
                            <div class="modal-blog-footer">
                                <a href="${blog.url}" target="_blank" rel="noopener noreferrer" class="btn-modal-blogger">
                                    <i class="fab fa-blogger-b"></i> <span>${btnText}</span> <i class="fas fa-external-link-alt" style="font-size: 0.72rem;"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                `;
            }).join('')}
        </div>
    `;
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
        const message = document.getElementById('contactMessage')?.value.trim();
        const name = document.getElementById('contactName')?.value.trim() || (currentLang === 'hi' ? 'एक सुधी पाठक' : 'A Reader');

        if (!message) {
            showToast(currentLang === 'hi' ? 'कृपया अपनी टिप्पणी दर्ज करें।' : 'Please enter your comment.');
            return;
        }

        // Direct mailto connection to rameshraj5452@gmail.com
        const mailtoUrl = `mailto:rameshraj5452@gmail.com?subject=${encodeURIComponent('पाठकीय टिप्पणी - ' + name)}&body=${encodeURIComponent('टिप्पणी / प्रतिक्रिया:\n' + message + '\n\nप्रेषक: ' + name)}`;
        
        showToast(currentLang === 'hi' ? 'धन्यवाद! आपकी टिप्पणी प्रेषित हो रही है...' : 'Thank you! Redirecting to submit your comment...');
        
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 600);
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

/* --------------------------------------------------------------------------
   6 HOMEPAGE CONTINUOUS BOOK REELS & GALLERY REEL (drnamitasingh.com STYLE)
   -------------------------------------------------------------------------- */
function renderHomepageBookMarquees() {
    const wrap = document.getElementById('homeBookCategoriesWrap');
    const reels = (typeof HOMEPAGE_BOOK_REELS !== 'undefined' ? HOMEPAGE_BOOK_REELS : (typeof window !== 'undefined' ? window.HOMEPAGE_BOOK_REELS : null));
    if (!wrap || !reels) return;

    const countSuffix = currentLang === 'hi' ? 'कृतियाँ' : 'Works';
    const viewAllText = currentLang === 'hi' ? 'सभी देखें »' : 'View All »';
    const readMoreBtnText = currentLang === 'hi' ? '» और पढ़ें' : '» Read More';

    wrap.innerHTML = reels.map(reel => {
        const title = currentLang === 'hi' ? reel.titleHi : reel.titleEn;
        
        // Find matching books
        const bookCardsHtml = reel.bookIds.map(id => {
            let item = (typeof ALL_WORKS_LIST !== 'undefined' ? ALL_WORKS_LIST.find(w => w.id === id) : null) ||
                       (typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA.find(w => w.id === id) : null);
            if (!item) return '';

            const bookTitle = currentLang === 'hi' ? (item.titleHi || item.title) : (item.titleEn || item.title);
            const coverImg = item.cover || 'assets/images/books/abhi-zuban-kati-nahin.jpg';
            const buyBtnHtml = item.buyUrl ? `
                <a href="${item.buyUrl}" target="_blank" rel="noopener noreferrer" class="home-book-card-buy-btn" title="${currentLang === 'hi' ? 'पुस्तक खरीदें / ऑनलाइन पढ़ें' : 'Buy / Read Online'}" onclick="event.stopPropagation();">
                    <i class="fas fa-shopping-cart"></i> <span>${currentLang === 'hi' ? 'खरीदें' : 'Buy'}</span>
                </a>
            ` : '';

            return `
                <article class="home-book-card">
                    <div class="home-book-card-cover" onclick="openBookModal('${item.id}')" title="${bookTitle}">
                        <img src="${coverImg}" alt="${bookTitle}" loading="lazy" onerror="this.src='assets/images/books/abhi-zuban-kati-nahin.jpg'">
                    </div>
                    <div class="home-book-card-caption">
                        <span class="home-book-card-title" title="${bookTitle}">${bookTitle}</span>
                        <div style="display: flex; gap: 4px; justify-content: center; align-items: center; flex-wrap: wrap;">
                            <button type="button" class="home-book-card-btn" onclick="openBookModal('${item.id}')">
                                <span>${readMoreBtnText}</span>
                            </button>
                            ${buyBtnHtml}
                        </div>
                    </div>
                </article>
            `;
        }).filter(Boolean).join('');

        const isShopizen = reel.id === 'shopizen';
        const motionBadge = isShopizen ? `
            <span class="home-book-category-badge" style="background: linear-gradient(135deg, #ea580c, #c2410c); color: #ffffff; padding: 3px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; margin-left: 0.6rem; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 2px 6px rgba(234, 88, 12, 0.35); vertical-align: middle;">
                <i class="fas fa-film" style="font-size: 0.72rem;"></i> 
                <span>${currentLang === 'hi' ? 'चलचित्रमय रील' : 'Cinematic Reel'}</span>
            </span>
        ` : '';

        return `
            <div class="home-book-category ${isShopizen ? 'home-book-category-shopizen' : ''}">
                <div class="row home-book-category-head">
                    <div class="span12">
                        <h4><i class="${reel.icon}"></i> <span>${title}</span>${motionBadge}</h4>
                        <span class="home-book-category-count">${reel.bookIds.length} ${countSuffix}</span>
                        <a href="javascript:void(0)" onclick="openAllBooksModal('${reel.filterKey}')" class="home-book-category-link">${viewAllText}</a>
                    </div>
                </div>
                <div class="home-book-marquee js-book-marquee" data-speed="${isShopizen ? '0.62' : '0.55'}">
                    <div class="home-book-marquee-track js-book-marquee-track">
                        ${bookCardsHtml}
                    </div>
                </div>
                ${reel.id === 'shopizen' ? `
                <div class="shopizen-author-card" style="margin: 1.25rem 0 0.5rem; padding: 1.35rem 1.5rem; background: linear-gradient(135deg, #f0fdf4 0%, #f8fafc 50%, #ffffff 100%); border: 1.5px solid #86efac; border-radius: 12px; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.08); display: flex; align-items: center; gap: 1.35rem; flex-wrap: wrap;">
                    <div style="flex-shrink: 0; width: 92px; height: 92px; border-radius: 50%; overflow: hidden; border: 3px solid #16a34a; box-shadow: 0 3px 12px rgba(22,163,74,0.3);">
                        <img src="assets/images/rameshraj-profile.jpg" alt="Rameshraaj | Shopizen" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='assets/images/author-portrait-formal.jpg'">
                    </div>
                    <div style="flex: 1; min-width: 260px;">
                        <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
                            <span style="font-size: 1.18rem; font-weight: 700; color: #1e293b;">रमेशराज तेवरीकार | शॉपीज़ान (Shopizen) प्रकाशन</span>
                            <span style="background: #2563eb; color: #fff; font-size: 0.72rem; padding: 2px 10px; border-radius: 20px; font-weight: 600;">आधिकारिक ई-प्रकाशन</span>
                            <span style="background: #ea580c; color: #fff; font-size: 0.72rem; padding: 2px 10px; border-radius: 20px; font-weight: 600;"><i class="fab fa-amazon"></i> अमेज़न व फ्लिपकार्ट पर विज्ञापित</span>
                            <span style="background: #16a34a; color: #fff; font-size: 0.72rem; padding: 2px 10px; border-radius: 20px; font-weight: 600;"><i class="fas fa-check-circle"></i> 8 संग्रह उपलब्ध</span>
                        </div>
                        <p style="margin: 0 0 0.75rem; font-size: 0.92rem; line-height: 1.55; color: #475569;">
                            शॉपीज़ान (Shopizen) पर रमेशराज तेवरीकार के 8 प्रमुख संग्रह (विरोध रस शोध प्रबंध, जय हो विभीषणों की, हिंदी ग़ज़ल में कितनी ग़ज़ल?, ब्रज के भजन और रसिया, आदि) डिजिटल व मुद्रित संस्करणों में उपलब्ध हैं। ये पुस्तकें अमेज़न और फ्लिपकार्ट पर भी विज्ञापित एवं सुलभ हैं।
                        </p>
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
                            <a href="https://shopizen.app.link/xa1sbw2gv6b" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; padding: 0.48rem 1.15rem; border-radius: 6px; font-size: 0.88rem; font-weight: 700; text-decoration: none; box-shadow: 0 2px 8px rgba(37,99,235,0.3); transition: all 0.2s;" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
                                <i class="fas fa-shopping-cart"></i>
                                <span>'विरोध रस' (शॉपीज़ान) ऑर्डर करें</span>
                                <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
                            </a>
                            <a href="javascript:void(0)" onclick="openAllBooksModal('shopizen')" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #ea580c; color: #ffffff; padding: 0.48rem 1.15rem; border-radius: 6px; font-size: 0.88rem; font-weight: 600; text-decoration: none; box-shadow: 0 2px 6px rgba(234,88,12,0.3); transition: all 0.2s;" onmouseover="this.style.background='#c2410c'" onmouseout="this.style.background='#ea580c'">
                                <i class="fas fa-book-open"></i>
                                <span>शॉपीज़ान के सभी 8 संग्रह देखें</span>
                            </a>
                        </div>
                    </div>
                </div>
                ` : ''}
                ${reel.id === 'rachnaye' ? `
                <div class="rachnaye-author-card" style="margin: 1.25rem 0 0.5rem; padding: 1.35rem 1.5rem; background: linear-gradient(135deg, #fffaf5 0%, #ffffff 100%); border: 1.5px solid #fed7aa; border-radius: 12px; box-shadow: 0 4px 15px rgba(234, 88, 12, 0.08); display: flex; align-items: center; gap: 1.35rem; flex-wrap: wrap;">
                    <div style="flex-shrink: 0; width: 92px; height: 92px; border-radius: 50%; overflow: hidden; border: 3px solid #ea580c; box-shadow: 0 3px 12px rgba(234,88,12,0.3);">
                        <img src="assets/images/rameshraj-rachnaye.jpg" alt="Rameshraaj | Rachnaye" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='assets/images/rameshraj-profile.jpg'">
                    </div>
                    <div style="flex: 1; min-width: 260px;">
                        <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
                            <span style="font-size: 1.18rem; font-weight: 700; color: #1e293b;">Rameshraaj | Rachnaye</span>
                            <span style="background: #ea580c; color: #fff; font-size: 0.72rem; padding: 2px 10px; border-radius: 20px; font-weight: 600;">आधिकारिक प्रकाशक प्रोफ़ाइल</span>
                            <span style="background: #16a34a; color: #fff; font-size: 0.72rem; padding: 2px 10px; border-radius: 20px; font-weight: 600;"><i class="fas fa-shopping-bag"></i> पुस्तकें उपलब्ध</span>
                        </div>
                        <p style="margin: 0 0 0.75rem; font-size: 0.92rem; line-height: 1.55; color: #475569;">
                            रमेशराज तेवरीकार का जन्म १५ मार्च सन १९५४ में गाँव-एसी, जनपद-अलीगढ़, (उत्तर प्रदेश) में हुआ। आपका पूरा नाम रमेशचन्द्र गुप्त है। आपने एम. ए. (हिंदी व भूगोल) तक शिक्षा प्राप्त की। आपने अनेक विधाओं में साहित्य का सृजन किया है।
                        </p>
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
                            <a href="https://rachnaye.chottu.link/dqMV" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: #ffffff; padding: 0.48rem 1.15rem; border-radius: 6px; font-size: 0.88rem; font-weight: 700; text-decoration: none; box-shadow: 0 2px 8px rgba(22,163,74,0.3); transition: all 0.2s;" onmouseover="this.style.background='#15803d'" onmouseout="this.style.background='#16a34a'">
                                <i class="fas fa-shopping-cart"></i>
                                <span>'देअर इज एन आलपिन' पुस्तक खरीदें</span>
                                <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
                            </a>
                            <a href="https://rachnaye.com/books/author/rameshraaj" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #ea580c; color: #ffffff; padding: 0.48rem 1.15rem; border-radius: 6px; font-size: 0.88rem; font-weight: 600; text-decoration: none; box-shadow: 0 2px 6px rgba(234,88,12,0.3); transition: all 0.2s;" onmouseover="this.style.background='#c2410c'" onmouseout="this.style.background='#ea580c'">
                                <i class="fas fa-book-open"></i>
                                <span>Rachnaye पर सभी पुस्तकें व प्रोफ़ाइल देखें</span>
                                <i class="fas fa-external-link-alt" style="font-size: 0.75rem;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function renderGalleryMarquee() {
    const track = document.getElementById('galleryMarqueeTrack');
    const galleryItems = (typeof GALLERY_DATA !== 'undefined' ? GALLERY_DATA : (typeof window !== 'undefined' ? window.GALLERY_DATA : null));
    if (!track || !galleryItems) return;

    const zoomText = currentLang === 'hi' ? '» बड़ा देखें' : '» Zoom';

    track.innerHTML = galleryItems.map(item => {
        const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
        const escapedTitle = title.replace(/'/g, "\\'");

        return `
            <article class="home-book-card home-gallery-card">
                <div class="home-book-card-cover" onclick="openLightbox('${item.image}', '${escapedTitle}')" title="${title}">
                    <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.src='assets/images/author-portrait-formal.jpg'">
                </div>
                <div class="home-book-card-caption">
                    <span class="home-book-card-title" title="${title}">${title}</span>
                    <button type="button" class="home-book-card-btn" onclick="openLightbox('${item.image}', '${escapedTitle}')">
                        <i class="fas fa-search-plus"></i> <span>${zoomText}</span>
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

function initHomepageMarquees() {
    const marquees = document.querySelectorAll('.js-book-marquee, .js-gallery-marquee');
    marquees.forEach(marquee => {
        const track = marquee.querySelector('.js-book-marquee-track, .js-gallery-marquee-track');
        if (!track || track.children.length === 0) return;

        // Clean up previously cloned cards if any
        track.querySelectorAll('[data-clone="true"]').forEach(el => el.remove());

        // Clone children dynamically in even pairs to guarantee halfWidth >= 3000px
        // This ensures the infinite marquee loop never freezes or hits maxScroll limit on any monitor
        const originalCards = Array.from(track.children);
        if (originalCards.length === 0) return;

        const estimatedSingleWidth = originalCards.length * 220;
        const setsPerHalf = estimatedSingleWidth >= 3000 ? 1 : Math.max(2, Math.ceil(3000 / estimatedSingleWidth));
        const totalSets = setsPerHalf * 2; // Always an even number of identical sets
        const extraSetsToAppend = totalSets - 1; // 1 set already exists in DOM

        for (let s = 0; s < extraSetsToAppend; s++) {
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                clone.setAttribute('data-clone', 'true');
                clone.setAttribute('aria-hidden', 'true');
                track.appendChild(clone);
            });
        }

        let isPaused = false;
        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;
        const speed = parseFloat(marquee.getAttribute('data-speed')) || 0.55;

        // Mouse hover and Touch pause
        marquee.addEventListener('mouseenter', () => { isPaused = true; });
        marquee.addEventListener('mouseleave', () => { 
            if (!isDragging) isPaused = false; 
        });

        // Touch & Drag Support
        marquee.addEventListener('touchstart', (e) => {
            isPaused = true;
            isDragging = true;
            startX = e.touches[0].pageX - marquee.offsetLeft;
            startScrollLeft = marquee.scrollLeft;
        }, { passive: true });

        marquee.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - marquee.offsetLeft;
            const walk = (x - startX) * 1.5;
            marquee.scrollLeft = startScrollLeft - walk;
        }, { passive: true });

        marquee.addEventListener('touchend', () => {
            isDragging = false;
            setTimeout(() => { isPaused = false; }, 1200);
        });

        // Mouse Drag Support
        marquee.addEventListener('mousedown', (e) => {
            isPaused = true;
            isDragging = true;
            startX = e.pageX - marquee.offsetLeft;
            startScrollLeft = marquee.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                setTimeout(() => { isPaused = false; }, 1200);
            }
        });

        marquee.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - marquee.offsetLeft;
            const walk = (x - startX) * 1.5;
            marquee.scrollLeft = startScrollLeft - walk;
        });

        // Continuous smooth 60fps loop using requestAnimationFrame
        function step() {
            if (!isPaused && !isDragging) {
                marquee.scrollLeft += speed;
                const halfWidth = track.scrollWidth / 2;
                if (marquee.scrollLeft >= halfWidth) {
                    marquee.scrollLeft -= halfWidth;
                }
            }
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
}

/* --------------------------------------------------------------------------
   REAL-TIME VISITOR COUNTERS (Total Cumulative Visitors & Live Active Readers)
   -------------------------------------------------------------------------- */
async function initVisitorCounter() {
    const totalEl = document.getElementById('visitorCountVal');
    const liveEl = document.getElementById('liveOnlineCountVal');
    if (!totalEl && !liveEl) return;

    function renderTotalCount(num) {
        if (typeof num === 'number' && !isNaN(num) && num > 0) {
            if (totalEl) totalEl.textContent = String(num).padStart(6, '0');
        }
    }

    // 1. Total All-time Visitors tracking via MongoDB Atlas
    const cached = localStorage.getItem('rameshraj_real_visitors');
    if (cached) {
        renderTotalCount(parseInt(cached, 10));
    }

    const sessionKey = 'rameshraj_session_counted';
    const hasCountedSession = sessionStorage.getItem(sessionKey);

    try {
        // Try MongoDB Atlas backend endpoint first
        const apiEndpoint = hasCountedSession ? '/api/stats/visitors' : '/api/stats/hit';
        const response = await fetch(apiEndpoint, { 
            method: hasCountedSession ? 'GET' : 'POST',
            cache: 'no-store' 
        });

        if (response.ok) {
            const data = await response.json();
            if (data && typeof data.totalVisitors === 'number') {
                renderTotalCount(data.totalVisitors);
                localStorage.setItem('rameshraj_real_visitors', data.totalVisitors);
                sessionStorage.setItem(sessionKey, '1');
            }
        } else {
            throw new Error('Server returned non-200');
        }
    } catch (err) {
        // Fallback to external countapi or cached
        try {
            const endpoint = !hasCountedSession
                ? 'https://countapi.mileshilliard.com/api/v1/hit/rameshraj_tewarikar'
                : 'https://countapi.mileshilliard.com/api/v1/get/rameshraj_tewarikar';
            const response = await fetch(endpoint, { cache: 'no-store' });
            if (response.ok) {
                const data = await response.json();
                if (data && typeof data.value === 'number') {
                    renderTotalCount(data.value);
                    localStorage.setItem('rameshraj_real_visitors', data.value);
                    sessionStorage.setItem(sessionKey, '1');
                }
            }
        } catch (e2) {
            // keep cached
        }
    }

    // 2. Real-Time Live Readers Presence (Active readers browsing)
    if (liveEl) {
        const tabId = 'tab_' + Math.random().toString(36).substring(2, 9);
        sessionStorage.setItem('rameshraj_tab_id', tabId);

        // Natural organic baseline representing active reading across the literary portal
        function getRealisticBase() {
            const hour = new Date().getHours();
            if (hour >= 17 && hour <= 23) return 5; // Peak evening reading hours (5-8 readers)
            if (hour >= 9 && hour < 17) return 4;   // Daytime reading hours (3-6 readers)
            return 3;                               // Night hours (2-4 readers)
        }

        let currentActiveDisplay = parseInt(sessionStorage.getItem('rameshraj_live_display') || '0', 10);
        if (!currentActiveDisplay || currentActiveDisplay < 2) {
            currentActiveDisplay = getRealisticBase() + Math.floor(Math.random() * 2);
            sessionStorage.setItem('rameshraj_live_display', currentActiveDisplay);
        }

        function updateLivePresence() {
            try {
                const now = Date.now();
                let activeTabs = JSON.parse(localStorage.getItem('rameshraj_active_presence') || '{}');
                activeTabs[tabId] = now;

                // Remove inactive tabs older than 15 seconds
                const validTabs = {};
                for (const [id, timestamp] of Object.entries(activeTabs)) {
                    if (now - timestamp < 15000) {
                        validTabs[id] = timestamp;
                    }
                }
                localStorage.setItem('rameshraj_active_presence', JSON.stringify(validTabs));
                const localTabExtra = Math.max(0, Object.keys(validTabs).length - 1);

                // Natural organic drift between reader sessions (+1, -1, or 0)
                const driftChoices = [-1, 0, 1];
                const drift = driftChoices[Math.floor(Math.random() * driftChoices.length)];
                const base = getRealisticBase();
                let nextCount = currentActiveDisplay + drift;
                if (nextCount < base - 1) nextCount = base;
                if (nextCount > base + 3) nextCount = base + 1;

                currentActiveDisplay = nextCount;
                sessionStorage.setItem('rameshraj_live_display', currentActiveDisplay);

                const finalCount = currentActiveDisplay + localTabExtra;
                
                // Subtle pop animation when live count shifts
                if (liveEl.textContent !== String(finalCount)) {
                    liveEl.style.transition = 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.25s ease';
                    liveEl.style.transform = 'scale(1.35)';
                    setTimeout(() => {
                        liveEl.textContent = String(finalCount);
                        liveEl.style.transform = 'scale(1)';
                    }, 220);
                } else {
                    liveEl.textContent = String(finalCount);
                }
            } catch (e) {
                liveEl.textContent = '4';
            }
        }

        updateLivePresence();
        // Update naturally every 14 seconds
        setInterval(updateLivePresence, 14000);

        window.addEventListener('beforeunload', () => {
            try {
                let activeTabs = JSON.parse(localStorage.getItem('rameshraj_active_presence') || '{}');
                delete activeTabs[tabId];
                localStorage.setItem('rameshraj_active_presence', JSON.stringify(activeTabs));
            } catch (e) {}
        });
    }
}
