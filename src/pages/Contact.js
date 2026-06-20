import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Initialize EmailJS (replace with your public key)
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

      // Send email
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'bhupendrapatidar42@gmail.com',
        }
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

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
      url: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://youtube.com',
      label: 'YouTube',
    },
    {
      icon: 'fab fa-upwork',
      url: 'https://upwork.com',
      label: 'Upwork',
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com',
      label: 'Twitter',
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
            <div className="contact-info">
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

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h3>Send Me a Message</h3>
                <p>Fill out the form below and I'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {status === 'success' && (
                  <div className="alert alert-success">
                    <i className="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-error">
                    <i className="fas fa-times-circle"></i> Failed to send message. Please try again.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">
                    <i className="fas fa-building"></i> Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-message"></i> Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, requirements, or just say hello..."
                    rows="6"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ width: '100%' }}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>

                <p className="form-footer">
                  I respect your privacy. I'll only use your information to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about my services and collaboration</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item card fade-in">
              <h3><i className="fas fa-question-circle"></i> What's your typical project timeline?</h3>
              <p>
                Project timelines vary based on complexity and scope. Simple automation frameworks typically take 2-4 weeks, 
                while comprehensive solutions may take 4-12 weeks. I'll provide a detailed estimate after understanding your requirements.
              </p>
            </div>

            <div className="faq-item card fade-in" style={{ animationDelay: '0.1s' }}>
              <h3><i className="fas fa-question-circle"></i> Do you offer maintenance and support?</h3>
              <p>
                Yes! I provide ongoing support and maintenance packages including bug fixes, framework updates, 
                and optimization. This ensures your automation suite remains effective and up-to-date.
              </p>
            </div>

            <div className="faq-item card fade-in" style={{ animationDelay: '0.2s' }}>
              <h3><i className="fas fa-question-circle"></i> Can you work with my existing team?</h3>
              <p>
                Absolutely! I've worked with distributed teams and can integrate seamlessly with your existing processes. 
                I also provide training and knowledge transfer to ensure your team can maintain and expand the automation framework.
              </p>
            </div>

            <div className="faq-item card fade-in" style={{ animationDelay: '0.3s' }}>
              <h3><i className="fas fa-question-circle"></i> What technologies do you work with?</h3>
              <p>
                I'm proficient in Playwright, Selenium, Cypress, Java, JavaScript, TypeScript, and many other automation tools. 
                I can recommend the best technology stack based on your specific needs and requirements.
              </p>
            </div>

            <div className="faq-item card fade-in" style={{ animationDelay: '0.4s' }}>
              <h3><i className="fas fa-question-circle"></i> How do you handle remote work?</h3>
              <p>
                I'm experienced with remote work and use modern collaboration tools like Slack, Teams, and Jira. 
                I maintain clear communication and provide regular updates on project progress.
              </p>
            </div>

            <div className="faq-item card fade-in" style={{ animationDelay: '0.5s' }}>
              <h3><i className="fas fa-question-circle"></i> What's your rate structure?</h3>
              <p>
                I offer flexible engagement models including hourly rates, fixed-price projects, and retainer arrangements. 
                Rates depend on project complexity, duration, and scope. Let's discuss what works best for your budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
