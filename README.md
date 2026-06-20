# Bhupendra Patidar - Portfolio Website

A modern, professional, and fully responsive portfolio website built with React, showcasing expertise in QA automation testing.

## 🚀 Features

- ✨ **Modern UI Design** - Clean, professional SaaS-style design with gradients and animations
- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Optimized loading times and smooth animations
- 🎯 **Multiple Pages** - Home, About, Skills, Experience, Projects, Services, Training, Contact
- 📧 **Contact Form** - EmailJS integration for direct messaging
- 🎨 **Smooth Animations** - Fade-in, slide-in effects and hover transitions
- 📊 **Skill Progress Bars** - Visual representation of skill proficiency
- 🏆 **Project Showcase** - Beautiful project cards with filtering capabilities
- 👥 **Social Integration** - Links to LinkedIn, GitHub, YouTube, Upwork, and Twitter

## 📋 Pages Included

### 1. **Home**
   - Hero section with professional headline
   - Statistics: Years of experience, enterprise projects, skills
   - Call-to-action buttons (Hire Me, Download Resume, View Projects)

### 2. **About**
   - Professional background and qualifications
   - Key achievements and highlights
   - MCA graduate with 8+ years experience
   - Experience with enterprise clients

### 3. **Skills**
   - Organized skill categories:
     - Automation Tools (Playwright, Selenium, Cypress, TestCafe)
     - Programming Languages (Java, JavaScript, TypeScript, C#)
     - API Testing (Postman, RestAssured, RestSharp, Playwright API)
     - Frameworks (Cucumber, SpecFlow, TestNG, NUnit)
     - CI/CD (Jenkins, Azure DevOps, GitHub Actions)
     - AI Tools (ChatGPT, Claude, GitHub Copilot)
   - Animated skill progress bars
   - Tools and platforms section

### 4. **Experience**
   - Timeline view of work history
   - Datamatics Global Services - Senior QA Automation Engineer
   - CIGNEX Datamatics - QA Automation Engineer
   - Tech Solutions India - QA Engineer
   - Projects and responsibilities for each role

### 5. **Projects**
   - 6 major projects showcased:
     - Atlas Injury Prevention
     - Bupa UK
     - Manage America
     - Cooler Screen
     - London School of E-Commerce
     - Dover Portable
   - Project filtering by domain
   - Technology stack and testing types for each project

### 6. **Services**
   - 8 comprehensive services:
     - Playwright Automation Framework Development
     - API Testing & Automation
     - Selenium Automation
     - Manual Testing
     - Regression Testing
     - QA Consulting & Training
     - AI-Powered Testing Solutions
     - Test Automation Strategy
   - 6-step working process visualization
   - Service features and benefits

### 7. **Training**
   - Udemy courses
   - YouTube channel
   - Custom training programs
   - Interview preparation sessions
   - Course cards with ratings and student testimonials
   - Learning resources section
   - Student testimonials

### 8. **Contact**
   - Professional contact form with EmailJS integration
   - Contact information (email, phone, location)
   - Social media links
   - Availability information
   - FAQ section with common questions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM v6
- **Styling**: CSS3 with CSS Variables (Light & Dark themes)
- **UI Components**: Bootstrap 5.3.2
- **Icons**: Font Awesome 6.5.1
- **Email Service**: EmailJS 3.2.0
- **Animations**: AOS (Animate On Scroll) 2.3.4
- **Build Tool**: React Scripts 5.0.1

## 📦 Installation

1. **Clone or Download** the project
   ```bash
   cd "d:\Portfolio\Bhupendra Patidar"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional - for contact form)
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and get your credentials
   - In `src/pages/Contact.js`, replace:
     - `YOUR_EMAILJS_PUBLIC_KEY` - Your public key
     - `YOUR_SERVICE_ID` - Your service ID
     - `YOUR_TEMPLATE_ID` - Your template ID

4. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 🎨 Customization

### Update Personal Information
- **Home Page**: Edit `src/pages/Home.js` - Update name, headline, and stats
- **About Page**: Edit `src/pages/About.js` - Update biography and achievements
- **Contact Page**: Edit `src/pages/Contact.js` - Update email, phone, and social links
- **Footer**: Edit `src/components/Footer.js` - Update social links and contact info

### Modify Colors & Theme
- Edit `src/index.css` for CSS variables:
  - `--primary-color` - Main brand color
  - `--secondary-color` - Accent color
  - `--bg-color` - Background color
  - `--text-color` - Text color

### Add/Remove Pages
1. Create new page component in `src/pages/`
2. Import and add route in `src/App.js`
3. Add navigation link in `src/components/Navbar.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## Vite dev server:

```
npm install
npm run dev
```

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
```
Upload the `build` folder to Netlify or connect your GitHub repository.

### Deploy to Vercel
```bash
npm run build
vercel
```

### Deploy to GitHub Pages
1. Update `package.json` with `"homepage": "https://yourusername.github.io/portfolio"`
2. Run: `npm run build`
3. Push to GitHub

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery:

1. **Create EmailJS Account**: https://www.emailjs.com/
2. **Add Gmail Service** (or other email provider)
3. **Create Email Template** with variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `company` - Company name
   - `message` - Message content
4. **Get Credentials**:
   - Public Key
   - Service ID
   - Template ID
5. **Update** `src/pages/Contact.js` with your credentials

## 🔒 Privacy & Security

- No sensitive data is stored locally except theme preference
- Contact form data is sent securely via EmailJS
- All external links open in new tabs with security attributes

## 📝 SEO Optimization

- Meta tags in `public/index.html`
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-friendly design
- Fast loading times

## 🐛 Troubleshooting

### Contact Form Not Working
- Verify EmailJS credentials in `src/pages/Contact.js`
- Check browser console for errors
- Ensure EmailJS service is active

### Theme Not Persisting
- Check if localStorage is enabled
- Clear browser cache and reload

### Animations Not Showing
- Ensure CSS file is properly linked
- Check browser DevTools for CSS errors
- Verify animation names in CSS

## 📄 License

This portfolio is created for Bhupendra Patidar. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: bhupendra@example.com
- LinkedIn: [LinkedIn Profile](https://linkedin.com)
- GitHub: [GitHub Profile](https://github.com)

---

**Built with ❤️ using React & Bootstrap**
