# Bhupendra Patidar Portfolio Website - Development Guidelines

## Project Overview
Modern, professional, and fully responsive portfolio website for Bhupendra Patidar, a Senior QA Automation Engineer. Built with React, CSS3, Bootstrap 5, and featuring dark/light mode toggle, smooth animations, and EmailJS contact form integration.

## Technology Stack
- React 18.2.0
- React Router DOM v6
- Bootstrap 5.3.2
- Font Awesome 6.5.1
- EmailJS 3.2.0
- CSS3 with CSS Variables

## Project Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css
│   ├── Footer.js / Footer.css
│   └── ScrollToTop.js
├── pages/
│   ├── Home.js / Home.css
│   ├── About.js / About.css
│   ├── Skills.js / Skills.css
│   ├── Experience.js / Experience.css
│   ├── Projects.js / Projects.css
│   ├── Services.js / Services.css
│   ├── Training.js / Training.css
│   └── Contact.js / Contact.css
├── App.js / App.css
├── index.js / index.css
└── index.html
```

## Key Features
- 8-page website (Home, About, Skills, Experience, Projects, Services, Training, Contact)
- Dark/Light mode toggle with localStorage persistence
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and hover effects
- Professional SaaS-style design with gradients and glassmorphism
- Project filtering by category
- Skill progress bars
- Timeline view for experience
- Contact form with EmailJS integration
- FAQ section
- Social media links

## Development Workflow

### To Run the Project
```bash
npm install
npm start
```

### To Build for Production
```bash
npm run build
```

## Customization Guidelines

### Update Personal Information
1. **Home Page** (`src/pages/Home.js`): Update name, headline, statistics, and buttons
2. **About Page** (`src/pages/About.js`): Update biography, achievements, and education
3. **Skills Page** (`src/pages/Skills.js`): Add/modify skill categories and proficiency levels
4. **Experience Page** (`src/pages/Experience.js`): Update work history and project details
5. **Projects Page** (`src/pages/Projects.js`): Modify project cards and descriptions
6. **Services Page** (`src/pages/Services.js`): Update service offerings
7. **Training Page** (`src/pages/Training.js`): Add course and training information
8. **Contact Page** (`src/pages/Contact.js`): Update contact information and EmailJS credentials
9. **Footer** (`src/components/Footer.js`): Update social media links and contact info

### Theme Customization
Edit `src/index.css` CSS variables section:
- `--primary-color`: Main brand color (default: #6366f1)
- `--secondary-color`: Accent color (default: #ec4899)
- `--bg-color`: Background color
- `--text-color`: Text color
- `--border-color`: Border color
- `--card-bg`: Card background color
- `--shadow`, `--shadow-sm`: Shadow effects

### Add New Pages
1. Create new page component in `src/pages/NewPage.js`
2. Add corresponding CSS file `src/pages/NewPage.css`
3. Import page in `src/App.js`
4. Add route in `App.js` Routes component
5. Add navigation link in `src/components/Navbar.js`

## Important Files

### Configuration
- `package.json` - Dependencies and scripts
- `public/index.html` - HTML template with meta tags
- `.github/copilot-instructions.md` - This file

### Core Files
- `src/App.js` - Main app component with routing
- `src/index.js` - React entry point
- `src/App.css` - App-level styles

### Theme System
- Light theme: Default CSS variables
- Dark theme: `[data-theme="dark"]` selector

## EmailJS Setup for Contact Form

1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Create account and add email service
3. Create template with variables: `from_name`, `from_email`, `company`, `message`
4. Get credentials: Public Key, Service ID, Template ID
5. Update `src/pages/Contact.js` with your credentials

## Deployment Options

### Netlify
1. Run `npm run build`
2. Upload `build` folder to Netlify
3. Or connect GitHub repository directly

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Add `"homepage"` to package.json
2. Run `npm run build`
3. Deploy build folder to gh-pages branch

## Best Practices

- Keep component files focused and modular
- Use CSS variables for consistent theming
- Maintain responsive design across all pages
- Ensure proper accessibility (alt text, ARIA labels)
- Test theme toggle functionality
- Verify responsive design on mobile devices
- Check all links and social media URLs
- Optimize images and assets

## Maintenance

- Update skills and experience regularly
- Keep project showcase current
- Monitor contact form functionality
- Test email notifications
- Update social media links as needed
- Review and update FAQ section
- Maintain consistent styling across pages

## Performance Tips

- Use CSS animations instead of JS when possible
- Lazy load images and heavy components
- Minimize CSS and minimize JavaScript
- Use proper font loading strategies
- Optimize colors and gradients for performance

## Accessibility Checklist

- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Color contrast compliance
- ✅ Keyboard navigation support
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Form labels properly associated

## Common Issues & Solutions

### Contact Form Not Working
- Verify EmailJS credentials
- Check browser console for errors
- Ensure email service is active on EmailJS

### Theme Not Persisting
- Check localStorage is enabled
- Clear browser cache
- Verify theme state management in App.js

### Styling Issues
- Check CSS specificity
- Verify CSS variables are set
- Clear browser cache

---

**Last Updated**: 2026-06-20
**Version**: 1.0.0
