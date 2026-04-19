/**
 * AkibDemo - Project Showcase
 * Production-ready vanilla JS
 * @version 1.0.0
 */

(function() {
    'use strict';

    // ==========================================
    // CONFIGURATION - Easy to modify
    // ==========================================

    // Project data - add your projects here
    const projects = [
        // Live Projects
        { name: "Fashion Aurah", url: "https://fashionaurah.shop", category: "fashion", desc: "Online clothing store" },
        { name: "Sana Boutique", url: "https://boutique.akibdemo.site", category: "fashion", desc: "Fashion boutique website" },
        { name: "Roshni's Unisex Beauty Studio", url: "https://roshni.akibworks.in", category: "beauty", desc: "Beauty salon & spa website" },
        { name: "Gym Deck", url: "https://gymdeck.akibdemo.site", category: "fitness", desc: "Workout & fitness tracker" },
        { name: "Task Manager", url: "https://task.akibdemo.site", category: "productivity", desc: "Organize tasks & to-dos" },
        { name: "Khan Welding Workshop", url: "https://atif.akibworks.in", category: "services", desc: "Welding workshop website" },
        { name: "Rakib Tailor", url: "https://rakib.akibdemo.site", category: "services", desc: "Tailoring & stitching services" },
        { name: "Punjabi Khaira Dhaba", url: "https://khaira.akibdemo.site", category: "food", desc: "Punjabi restaurant website" },
        { name: "Beer Bar", url: "https://arborbrew.akibdemo.site", category: "food", desc: "Bar & pub menu website" },
        { name: "Plumber Swift Fix", url: "https://plumber.akibdemo.site", category: "services", desc: "Plumbing services website" },
        { name: "Expense Tracker", url: "https://expense.akibworks.in", category: "finance", desc: "Track income & expenses" },
        { name: "Blog Web", url: "https://rails.akibdemo.site", category: "productivity", desc: "Simple blogging platform" },
        { name: "Recite Quran", url: "https://quran.akibworks.in", category: "religion", desc: "Quran reader with audio" },
        { name: "MCU Upcomings", url: "https://mcu.akibdemo.site", category: "movies", desc: "Marvel movie database" },
        { name: "Multicomics", url: "https://multicomics.akibdemo.site", category: "comics", desc: "Digital comics library" },
        { name: "Soccer Game", url: "https://soccer.akibdemo.site", category: "games", desc: "Football scores & fixtures" },
        { name: "Akib Portfolio", url: "https://portfolio.akibworks.in", category: "portfolio", desc: "Developer portfolio template" },
        { name: "Neha Portfolio", url: "https://neha.akibdemo.site", category: "portfolio", desc: "Personal portfolio showcase" },

        // Coming Soon Projects
        { name: "Smart Electrician", url: "#", category: "services", desc: "Electrician service website", comingSoon: true },
        { name: "QuickFix AC Repair", url: "#", category: "services", desc: "AC repair & maintenance", comingSoon: true },
        { name: "Aqua RO Service", url: "#", category: "services", desc: "RO water purifier service", comingSoon: true },
        { name: "City Dental Clinic", url: "#", category: "health", desc: "Dental clinic website", comingSoon: true },
        { name: "PhysioCare Center", url: "#", category: "health", desc: "Physiotherapy services", comingSoon: true },
        { name: "Diagnostic Lab Pro", url: "#", category: "health", desc: "Lab test booking website", comingSoon: true },
        { name: "Bright Future Coaching", url: "#", category: "education", desc: "Coaching institute website", comingSoon: true },
        { name: "Spoken English Hub", url: "#", category: "education", desc: "English training classes", comingSoon: true },
        { name: "Computer Academy", url: "#", category: "education", desc: "Computer training center", comingSoon: true },
        { name: "Dream Homes Realty", url: "#", category: "realestate", desc: "Property listing website", comingSoon: true },
        { name: "Rental Connect", url: "#", category: "realestate", desc: "PG & rental listing", comingSoon: true },
        { name: "AutoCare Garage", url: "#", category: "automotive", desc: "Car repair & service", comingSoon: true },
        { name: "BikeFix Workshop", url: "#", category: "automotive", desc: "Bike service center", comingSoon: true },
        { name: "Smart Electronics", url: "#", category: "retail", desc: "Electronics shop website", comingSoon: true },
        { name: "Shree Furniture", url: "#", category: "retail", desc: "Furniture store website", comingSoon: true },
        { name: "City Medical Store", url: "#", category: "retail", desc: "Pharmacy website", comingSoon: true },
        { name: "TaxPro CA Services", url: "#", category: "professional", desc: "CA & accounting services", comingSoon: true },
        { name: "Legal Advisor", url: "#", category: "professional", desc: "Lawyer website", comingSoon: true },
        { name: "Secure Insurance", url: "#", category: "professional", desc: "Insurance agent website", comingSoon: true },
        { name: "Yoga Bliss Studio", url: "#", category: "fitness", desc: "Yoga classes website", comingSoon: true },
        { name: "Elite Gym Pro", url: "#", category: "fitness", desc: "Modern gym website", comingSoon: true },
        { name: "Royal Wedding Planner", url: "#", category: "events", desc: "Event management website", comingSoon: true },
        { name: "Capture Moments", url: "#", category: "events", desc: "Photography portfolio", comingSoon: true }
    ];

    /**
     * IMAGE CONFIGURATION
     * 
     * To add a single image: "Project Name": "filename.webp"
     * To add an image slider: "Project Name": ["file1.webp", "file2.webp", "file3.webp"]
     * 
     * Example - Single image:
     * "Khan Welding Workshop": "Khan Welding Workshop.webp"
     * 
     * Example - Slider with 4 images:
     * "Roshni's Unisex Beauty Studio": [
     *     "Roshni's Unisex Beauty Studio.webp",
     *     "Roshni1.webp",
     *     "Roshni2.webp",
     *     "Roshni3.webp"
     * ]
     */
    const projectImages = {
        // Single images
        "Khan Welding Workshop": "Khan Welding Workshop.webp",
        "Plumber Swift Fix": "Plumber Swift Fix.webp",
        "Rakib Tailor": "Rakib Tailor.webp",
        "Punjabi Khaira Dhaba": "Punjabi Khaira Dhaba.webp",
        "Beer Bar": "Beer Bar.webp",
        "Sana Boutique": "Sana Boutique.webp",
        "Fashion Aurah": "Fashion Aurah.webp",
        "Expense Tracker": "Expense Tracker.webp",
        "Task Manager": "Task Manager.webp",
        "Blog Web": "Blog Web.webp",
        "Gym Deck": "Gym Deck.webp",
        "Recite Quran": "Recite Quran.webp",
        "MCU Upcomings": "MCU Upcomings.webp",
        "Multicomics": "Multicomics.webp",
        "Soccer Game": "Soccer Game.webp",
        "Akib Portfolio": "Akib Portfolio.webp",
        "Neha Portfolio": "Neha Portfolio.webp",

        // Image sliders (array of images)
        "Roshni's Unisex Beauty Studio": [
            "Roshni's Unisex Beauty Studio.webp",
            "Roshni1.webp",
            "Roshni2.webp",
            "Roshni3.webp"
        ]
    };

    // Cache DOM elements
    let projectGrid, filterBtns;
    let sliderIntervals = [];

    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================

    /**
     * Generate single image HTML
     */
    function createSingleImage(filename, alt, fallbackInitial) {
        return `<img src="images/${filename}" loading="lazy" alt="${alt}" onerror="this.style.display='none'; this.parentNode.innerHTML='<span class=\\'fallback-initial\\'>${fallbackInitial}</span>';" />`;
    }

    /**
     * Generate image slider HTML
     */
    function createImageSlider(images, projectName) {
        const sliderId = 'slider-' + Math.random().toString(36).substr(2, 9);
        const slidesHtml = images.map((img, idx) =>
            `<div class="slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="images/${img}" loading="lazy" alt="${projectName} - ${idx + 1}" onerror="this.style.display='none'" />
            </div>`
        ).join('');
        const dotsHtml = images.map((_, idx) => 
            `<span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`
        ).join('');

        return `
            <div class="image-slider" id="${sliderId}" data-slide-count="${images.length}">
                <div class="slides-container">${slidesHtml}</div>
                <div class="slider-dots">${dotsHtml}</div>
            </div>`;
    }

    /**
     * Generate screenshot HTML - single image or slider
     */
    function createScreenshotHtml(projectName, imageData, isComingSoon, fallbackInitial) {
        // Coming soon projects use the coming soon image
        if (isComingSoon) {
            return createSingleImage("coming soon.webp", projectName, fallbackInitial);
        }

        // No image data - show fallback initial
        if (!imageData) {
            return `<span class="fallback-initial">${fallbackInitial}</span>`;
        }

        // Multiple images - create slider
        if (Array.isArray(imageData)) {
            return createImageSlider(imageData, projectName);
        }

        // Single image
        return createSingleImage(imageData, projectName, fallbackInitial);
    }

    /**
     * Create project card HTML
     * @param {Object} project - Project data
     * @returns {string} HTML string
     */
    function createCard(project) {
        const safeName = project.name.replace(/[<>]/g, '');
        const safeUrl = project.url.replace(/"/g, '&quot;');
        const initial = safeName.charAt(0).toUpperCase();
        const isComingSoon = project.comingSoon === true;
        const imageData = projectImages[safeName];

        const screenshotHtml = createScreenshotHtml(safeName, imageData, isComingSoon, initial);

        // Premium Coming Soon badge
        const tagHtml = isComingSoon
            ? `<span class="project-tag">${project.category}<span class="coming-badge">Soon</span></span>`
            : `<span class="project-tag">${project.category}</span>`;

        // Card wrapper - clickable if not coming soon
        const cardWrapperStart = isComingSoon
            ? `<article class="project-card coming-soon" data-category="${project.category}">`
            : `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="project-card" data-category="${project.category}" aria-label="View ${safeName} project">`;

        const cardWrapperEnd = isComingSoon
            ? `</article>`
            : `</a>`;

        const linkHtml = isComingSoon
            ? `<span class="project-link disabled">Coming Soon</span>`
            : `<span class="project-link">View Live <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" /></svg></span>`;

        return `
            ${cardWrapperStart}
                <div class="project-screenshot">
                    ${screenshotHtml}
                </div>
                <div class="project-info">
                    <div class="project-header">
                        <h3 class="project-name">${safeName}</h3>
                        ${tagHtml}
                    </div>
                    ${linkHtml}
                </div>
            ${cardWrapperEnd}
        `;
    }

    // ==========================================
    // RENDER & FILTER FUNCTIONS
    // ==========================================

    /**
     * Render projects based on filter
     * @param {string} filter - Category filter
     */
    function renderProjects(filter = 'all') {
        if (!projectGrid) return;

        try {
            const filtered = filter === 'all'
                ? projects
                : projects.filter(p => p.category === filter);

            projectGrid.innerHTML = filtered.map(createCard).join('');
        } catch (error) {
            console.error('Error rendering projects:', error);
            projectGrid.innerHTML = '<p class="error-message">Unable to load projects. Please refresh the page.</p>';
        }
    }

    /**
     * Handle filter button clicks
     */
    function initFilters() {
        if (!filterBtns.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.dataset.filter);
                // Reinitialize sliders after rendering
                setTimeout(initSliders, 0);
            });
        });
    }

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================

    /**
     * Check if element is in viewport for animations (optional enhancement)
     */
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ==========================================
    // SLIDER FUNCTIONS
    // ==========================================

    /**
     * Setup a single slider with auto-play and controls
     */
    function setupSlider(slider) {
        const slides = slider.querySelectorAll('.slide');
        const dots = slider.querySelectorAll('.dot');
        const slideCount = parseInt(slider.dataset.slideCount) || slides.length;
        let currentSlide = 0;
        let intervalId = null;

        function showSlide(index) {
            slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            currentSlide = index;
        }

        function nextSlide() {
            showSlide((currentSlide + 1) % slideCount);
        }

        function startAutoPlay() {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(nextSlide, 2000);
            sliderIntervals.push(intervalId);
        }

        function stopAutoPlay() {
            if (intervalId) clearInterval(intervalId);
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Pause on hover
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', startAutoPlay);

        // Start auto-play
        startAutoPlay();
    }

    /**
     * Initialize all image sliders
     */
    function initSliders() {
        // Clear existing intervals
        sliderIntervals.forEach(id => clearInterval(id));
        sliderIntervals = [];

        // Setup each slider
        document.querySelectorAll('.image-slider').forEach(setupSlider);
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================

    /**
     * Initialize everything when DOM is ready
     */
    function init() {
        projectGrid = document.getElementById('projectGrid');
        filterBtns = document.querySelectorAll('.filter-btn');

        renderProjects();
        initFilters();
        initSmoothScroll();
        initSliders();

        console.log('AkibDemo loaded — 18 projects showcased');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
