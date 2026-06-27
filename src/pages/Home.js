import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const stats = [
    { number: '9+', label: 'Years Experience' },
    { number: '50+', label: 'Enterprise Projects' },
    { number: '100%', label: 'Playwright Specialist' },
    { number: '5+', label: 'Languages Mastered' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in">Bhupendra Patidar</h1>
            <p className="headline">
              Senior QA Automation Engineer | Playwright | API Testing | Selenium | AI-Powered Testing
            </p>
            <p className="fade-in">
              QA Automation Engineer with 9+ years of experience in Manual Testing, Automation Testing, 
              API Testing, and End-to-End Quality Assurance. Passionate about building robust automation 
              frameworks and mentoring other QA professionals.
            </p>

            <div className="hero-buttons">
              <a
                className="btn btn-primary"
                href="/bhupendra-portfolio/Resume%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
              <a
                href="https://wa.me/918878982889"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="fab fa-whatsapp"></i> Hire Me
              </a>
              <Link to="/projects" className="btn btn-secondary">
                <i className="fas fa-folder"></i> View Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Transform Your QA Process?</h2>
            <p>Let's work together to build robust automation frameworks and improve your software quality.</p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">
                <i className="fas fa-star"></i> Explore My Services
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                <i className="fas fa-code"></i> See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
