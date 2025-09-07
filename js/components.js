// ===== COMPONENT LOADER =====

// Function to load HTML components
async function loadComponent(componentPath, targetId) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
        return Promise.resolve();
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
        return Promise.reject(error);
    }
}

// Load footer component
document.addEventListener('DOMContentLoaded', function() {
    // Load footer if footer-placeholder exists
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        loadComponent('components/footer/footer.html', 'footer-placeholder').then(() => {
            // Show version info only on localhost
            showVersionIfLocalhost();
        });
    }
    
    // Load navigation if navigation-placeholder exists
    const navPlaceholder = document.getElementById('navigation-placeholder');
    if (navPlaceholder) {
        loadComponent('components/header/navigation.html', 'navigation-placeholder');
    }
});

// Function to show version info only on localhost
function showVersionIfLocalhost() {
    const versionElement = document.getElementById('version-info');
    if (versionElement) {
        const isLocalhost = window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1' || 
                           window.location.hostname === '0.0.0.0' ||
                           window.location.hostname.includes('192.168.') ||
                           window.location.hostname.includes('10.0.') ||
                           window.location.hostname.includes('172.');
        
        if (isLocalhost) {
            versionElement.style.display = 'block';
        }
    }
} 