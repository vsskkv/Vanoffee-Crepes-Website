// ===== COMPONENT LOADER =====

// Function to load HTML components
async function loadComponent(componentPath, targetId) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
    }
}

// Load footer component
document.addEventListener('DOMContentLoaded', function() {
    // Load footer if footer-placeholder exists
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        loadComponent('components/footer/footer.html', 'footer-placeholder');
    }
    
    // Load navigation if navigation-placeholder exists
    const navPlaceholder = document.getElementById('navigation-placeholder');
    if (navPlaceholder) {
        loadComponent('components/header/navigation.html', 'navigation-placeholder');
    }
}); 