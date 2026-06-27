import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><i className="fas fa-briefcase"></i> Professional</h3>
            <p>Senior QA Automation Engineer with 9+ years of experience in automated testing and quality assurance.</p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/bhupendra-patidar" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/bhupi42" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.youtube.com/@codebun" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            
            </div>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-link"></i> Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-file"></i> Resources</h3>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/training">Training</Link>
            <Link to="/contact#contact-info">Contact</Link>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-envelope"></i> Get In Touch</h3>
            <p>
              <i className="fas fa-envelope"></i> bhupendrapatidar42@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 8878982889
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Bhupendra Patidar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
