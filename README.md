# Vanoffee Crepes Website

A modern, responsive website for Vanoffee Crepes with reusable components and organized file structure.

## 📁 File Structure

```
Vanoffee Crepes Website/
├── components/                 # Reusable HTML components
│   ├── header/
│   │   └── navigation.html    # Navigation component
│   ├── footer/
│   │   └── footer.html        # Footer component
│   ├── hero/
│   ├── menu/
│   ├── gallery/
│   └── contact/
├── css/                       # Stylesheets
│   ├── main.css              # Main stylesheet
│   └── components.css        # Component-specific styles
├── js/                       # JavaScript files
│   └── common.js            # Common functionality
├── Images/                   # Image assets
├── index.html               # Homepage
├── about.html               # About page
├── menu.html                # Menu page
├── gallery.html             # Gallery page
├── contact.html             # Contact page
└── README.md               # This file
```

## 🧩 Components

### Navigation Component (`components/header/navigation.html`)
- Reusable navigation bar with search functionality
- Responsive design with mobile hamburger menu
- Active page highlighting

### Footer Component (`components/footer/footer.html`)
- Contact information
- Social media links
- Copyright notice

### Dietary Labels Component
- Vegan and Halal labels
- Clean, accessible design
- No glitching hover effects

## 🎨 Stylesheets

### Main CSS (`css/main.css`)
- Global styles and variables
- Layout and typography
- Page-specific styles

### Components CSS (`css/components.css`)
- Reusable component styles
- Navigation, footer, search components
- Dietary labels styling

## ⚡ JavaScript

### Common JS (`js/common.js`)
- Page transitions
- Smart navigation (hide/show on scroll)
- Search functionality
- Smooth scrolling
- Intersection Observer for animations
- Active navigation highlighting

## 🚀 Usage

### Including Components
To include a component in your HTML file:

```html
<!-- Include navigation -->
<div id="navigation-placeholder"></div>

<!-- Include footer -->
<div id="footer-placeholder"></div>
```

### CSS Dependencies
Make sure to include both CSS files:

```html
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/components.css">
```

### JavaScript Dependencies
Include the common JavaScript file:

```html
<script src="js/common.js"></script>
```

## 🎯 Features

- **Responsive Design**: Works on all device sizes
- **Reusable Components**: Modular architecture
- **Performance Optimized**: Separated concerns
- **Accessible**: Proper ARIA labels and semantic HTML
- **Modern Animations**: Smooth transitions and effects
- **Search Functionality**: Site-wide search capability

## 🔧 Maintenance

### Adding New Components
1. Create HTML file in appropriate `components/` subdirectory
2. Add styles to `css/components.css`
3. Include component in pages as needed

### Updating Styles
- Global styles: Edit `css/main.css`
- Component styles: Edit `css/components.css`

### JavaScript Updates
- Common functionality: Edit `js/common.js`
- Page-specific scripts: Add to individual HTML files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Design System

### Colors
- Primary Brown: `#4B2E2E`
- Primary Yellow: `#FFD700`
- White: `#FFFFFF`
- Vegan Green: `#4CAF50`
- Halal Blue: `#2196F3`

### Typography
- Primary Font: Poppins
- Secondary Font: Inter
- Icons: Font Awesome 6.4.0 