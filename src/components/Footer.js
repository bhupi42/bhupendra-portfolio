import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><i className="fas fa-briefcase"></i> Professional</h3>
            <p>Senior QA Automation Engineer with 8+ years of experience in automated testing and quality assurance.</p>
            <div className="footer-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" title="Upwork">
                <i className="fab fa-upwork"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-link"></i> Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-file"></i> Resources</h3>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-envelope"></i> Get In Touch</h3>
            <p>
              <i className="fas fa-envelope"></i> bhupendra@example.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +91-XXXXXXXXXX
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Bhupendra Patidar. All rights reserved. | Built with <i className="fas fa-heart"></i> using React & Bootstrap</p>
        </div>
      </div>
    </footer>
  );
}
