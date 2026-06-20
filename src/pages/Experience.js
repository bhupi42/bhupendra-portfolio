import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      company: 'Datamatics Global Services',
      position: 'Senior QA Automation Engineer',
      duration: '2022 - Present',
      description: 'Leading QA automation initiatives for enterprise clients',
      responsibilities: [
        'Design and develop automation frameworks using Playwright and Selenium',
        'Lead QA team for multiple projects',
        'API testing and automation with Postman and RestAssured',
        'CI/CD pipeline implementation and maintenance',
        'Mentor junior QA engineers',
      ],
      projects: ['Atlas Injury Prevention', 'Bupa UK', 'Cyber Infrastructure', 'Manage America', 'Cooler Screen', 'TeamWork'],
      technologies: ['Playwright', 'Selenium', 'Java', 'JavaScript', 'API Testing', 'Jenkins'],
    },
    {
      company: 'CIGNEX Datamatics',
      position: 'QA Automation Engineer',
      duration: '2020 - 2022',
      description: 'Developed and maintained automation frameworks for multiple clients',
      responsibilities: [
        'Created automation scripts for web and mobile applications',
        'Performed API testing using Postman',
        'Conducted regression and smoke testing',
        'Documentation and test case management using TestRail',
        'Collaborated with development teams',
      ],
      projects: ['London School of E-Commerce', 'Dover Portable', 'Healthcare Portal'],
      technologies: ['Selenium', 'Cypress', 'JavaScript', 'Python', 'TestNG'],
    },
    {
      company: 'Tech Solutions India',
      position: 'QA Engineer',
      duration: '2018 - 2020',
      description: 'Manual and automation testing for web applications',
      responsibilities: [
        'Manual testing and defect reporting',
        'Automation framework development',
        'Test case design and execution',
        'Performance testing',
        'Cross-browser testing',
      ],
      projects: ['E-Commerce Platform', 'Banking Application', 'Healthcare System'],
      technologies: ['Selenium', 'Java', 'TestNG', 'JIRA'],
    },
  ];

  return (
    <main>
      <section className="section experience-section">
        <div className="container">
          <div className="section-title">
            <h2>Professional Experience</h2>
            <p>My journey in quality assurance and automation testing</p>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="timeline-marker"></div>

                <div className="experience-header">
                  <div>
                    <h3>{exp.position}</h3>
                    <p className="company"><i className="fas fa-building"></i> {exp.company}</p>
                    <p className="duration"><i className="fas fa-calendar"></i> {exp.duration}</p>
                  </div>
                  <div className="experience-badge">
                    <i className="fas fa-star"></i>
                  </div>
                </div>

                <p className="description">{exp.description}</p>

                <div className="experience-content">
                  <div className="responsibilities">
                    <h4><i className="fas fa-tasks"></i> Key Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects">
                    <h4><i className="fas fa-folder"></i> Projects</h4>
                    <div className="project-tags">
                      {exp.projects.map((proj, idx) => (
                        <span key={idx} className="tag">{proj}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="technologies">
                  <h4><i className="fas fa-tools"></i> Technologies</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-highlight-section">
        <div className="container">
          <div className="stats-highlight">
            <div className="stat-highlight-item">
              <h3>50+</h3>
              <p>Enterprise Projects</p>
            </div>
            <div className="stat-highlight-item">
              <h3>8+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-highlight-item">
              <h3>100%</h3>
              <p>Project Success Rate</p>
            </div>
            <div className="stat-highlight-item">
              <h3>15+</h3>
              <p>Team Members Mentored</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
