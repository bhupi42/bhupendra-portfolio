import React from 'react';
import './Contact.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'bhupendrapatidar42@gmail.com',
      link: 'mailto:bhupendrapatidar42@gmail.com',
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+91 8878982889',
      link: 'tel:+918878982889',
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      value: 'India',
      link: '#',
    },
    {
      icon: 'fa-clock',
      title: 'Response Time',
      value: '24-48 hours',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/bhupendra-patidar',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com/bhupi42',
      label: 'GitHub',
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/@codebun',
      label: 'YouTube',
    },
  ];

  const faqItems = [
    {
      question: "What's your typical project timeline?",
      answer:
        'Project timelines vary based on complexity and scope. Simple automation frameworks typically take 2-4 weeks, while comprehensive solutions may take 4-12 weeks. I provide a detailed estimate after understanding your requirements.',
    },
    {
      question: 'Do you offer maintenance and support?',
      answer:
        'Yes. I provide ongoing support and maintenance packages including bug fixes, framework updates, and optimization to keep your automation suite effective and up-to-date.',
    },
    {
      question: 'Can you work with my existing team?',
      answer:
        'Absolutely. I can integrate with your existing team and processes, and I provide training and knowledge transfer so your team can maintain and extend the automation framework.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        "I'm proficient in Playwright, Selenium, Java, JavaScript, TypeScript, and many other automation tools. I can recommend the best stack based on your needs.",
    },
    {
      question: 'How do you handle remote work?',
      answer:
        "I'm experienced with remote collaboration using Slack, Teams, and Jira, with regular progress updates and transparent communication.",
    },
    {
      question: "What's your rate structure?",
      answer:
        "I offer flexible engagement models including hourly rates, fixed-price projects, and retainers. Rates depend on complexity, duration, and scope.",
    },
  ];

  return (
    <main>
      <section className="section contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Let's discuss your project and how I can help</p>
          </div>

          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info" id="contact-info">
              <h3>Contact Information</h3>
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className="info-card card">
                    <div className="info-icon">
                      <i className={`fas ${info.icon}`}></i>
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h3>Follow Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="availability">
                <h3><i className="fas fa-calendar-check"></i> Availability</h3>
                <p>
                  I'm available for freelance projects, consulting, and training sessions. 
                  Typically respond to inquiries within 24-48 hours.
                </p>
                <p>
                  For urgent matters, please use the phone number or email to reach out directly.
                </p>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="contact-right">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-grid contact-faq-grid">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                    <h3><i className="fas fa-question-circle"></i> {item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
