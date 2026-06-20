import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: 'fa-robot',
      title: 'Playwright Automation Framework Development',
      description: 'Building robust, scalable automation frameworks using Playwright for web and API testing.',
      features: [
        'Framework design and architecture',
        'Page Object Model implementation',
        'Cross-browser testing',
        'CI/CD integration',
        'Performance optimization',
      ],
    },
    {
      id: 2,
      icon: 'fa-code',
      title: 'API Testing & Automation',
      description: 'Comprehensive API testing solutions using modern tools and best practices.',
      features: [
        'RESTful API testing',
        'GraphQL API testing',
        'API automation scripts',
        'Load and stress testing',
        'API documentation',
      ],
    },
    {
      id: 3,
      icon: 'fa-browser',
      title: 'Selenium Automation',
      description: 'Expert Selenium automation for web applications with Java and JavaScript.',
      features: [
        'Web element automation',
        'Advanced user interactions',
        'Parallel test execution',
        'Integration with CI/CD',
        'Custom reporting',
      ],
    },
    {
      id: 4,
      icon: 'fa-check-circle',
      title: 'Manual Testing Services',
      description: 'Thorough manual testing to ensure comprehensive quality assurance.',
      features: [
        'Functional testing',
        'Usability testing',
        'Cross-browser compatibility',
        'Regression testing',
        'UAT support',
      ],
    },
    {
      id: 5,
      icon: 'fa-refresh',
      title: 'Regression Testing',
      description: 'Automated regression testing to ensure code changes don\'t break existing functionality.',
      features: [
        'Test suite maintenance',
        'Risk-based testing',
        'Test case prioritization',
        'Defect tracking',
        'Quality metrics',
      ],
    },
    {
      id: 6,
      icon: 'fa-graduation-cap',
      title: 'QA Consulting & Training',
      description: 'Strategic QA consulting and professional training for your team.',
      features: [
        'QA strategy development',
        'Process improvement',
        'Team mentoring',
        'Technical training',
        'Best practices guidance',
      ],
    },
    {
      id: 7,
      icon: 'fa-brain',
      title: 'AI-Powered Testing Solutions',
      description: 'Leveraging AI and machine learning for intelligent test automation.',
      features: [
        'AI-assisted test generation',
        'Smart test recommendations',
        'Anomaly detection',
        'Self-healing tests',
        'Intelligent reporting',
      ],
    },
    {
      id: 8,
      icon: 'fa-chart-line',
      title: 'Test Automation Strategy',
      description: 'Developing comprehensive test automation strategies tailored to your needs.',
      features: [
        'Tool evaluation',
        'Framework selection',
        'Test planning',
        'ROI analysis',
        'Implementation roadmap',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understand your requirements and current testing processes',
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'Analyze your application and identify automation opportunities',
    },
    {
      number: '03',
      title: 'Planning',
      description: 'Create a detailed test automation strategy and roadmap',
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Develop and implement the automation solution',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Execute tests and ensure quality standards are met',
    },
    {
      number: '06',
      title: 'Support',
      description: 'Provide ongoing support and maintenance',
    },
  ];

  return (
    <main>
      <section className="section services-section">
        <div className="container">
          <div className="section-title">
            <h2>My Services</h2>
            <p>Comprehensive QA automation and testing solutions</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card card fade-in">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>My Working Process</h2>
            <p>How I deliver exceptional results</p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="step-arrow"><i className="fas fa-arrow-right"></i></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Improve Your QA Process?</h2>
            <p>Let's discuss how my services can help your organization achieve better quality assurance.</p>
            <a href="/contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
