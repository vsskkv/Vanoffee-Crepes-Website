// ===== COMMON JAVASCRIPT FUNCTIONALITY =====

// Page transition effect
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-loaded');
});

// Smart navigation hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = scrollTop;
    }
});

// Show navbar when at top of page
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= 100) {
        navbar.classList.remove('navbar-hidden');
    }
});

// Search functionality
function initializeSearch(prefix) {
    const searchToggle = document.getElementById(prefix + 'SearchToggle');
    const searchClose = document.getElementById(prefix + 'SearchClose');
    const searchInput = document.getElementById(prefix + 'SearchInput');
    const searchContainer = document.querySelector('.' + prefix + '-search .search-container');

    if (!searchToggle || !searchClose || !searchInput || !searchContainer) return;

    function toggleSearch() {
        if (prefix === 'mobile') {
            searchInput.focus();
        } else {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = '';
            }
        }
    }

    searchToggle.addEventListener('click', toggleSearch);
    searchClose.addEventListener('click', toggleSearch);

    // Close search results when clicking outside (desktop only)
    if (prefix === 'desktop') {
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target) && searchContainer.classList.contains('active')) {
                toggleSearch();
            }
        });
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch('desktop');
    initializeSearch('mobile');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-card, .feature-item, .gallery-item, .menu-item').forEach(el => {
        observer.observe(el);
    });
});

// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}); 