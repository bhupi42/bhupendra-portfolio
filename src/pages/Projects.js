import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Atlas Injury Prevention',
      domain: 'Healthcare',
      description: 'Comprehensive injury prevention and management platform for enterprises',
      technologies: ['Playwright', 'JavaScript', 'API Testing', 'Jenkins'],
      testingTypes: ['End-to-End Testing', 'API Testing', 'Performance Testing'],
      responsibilities: [
        'Designed and maintained automation framework',
        'Implemented API testing suite',
        'Led QA team for sprint deliverables',
      ],
    },
    {
      id: 2,
      name: 'Bupa UK',
      domain: 'Insurance & Healthcare',
      description: 'Health insurance and wellness platform for UK market',
      technologies: ['Selenium', 'Java', 'TestNG', 'Azure DevOps'],
      testingTypes: ['Regression Testing', 'Smoke Testing', 'Integration Testing'],
      responsibilities: [
        'Created comprehensive test automation scripts',
        'Managed test execution and reporting',
        'Ensured compliance and quality standards',
      ],
    },
    {
      id: 3,
      name: 'Manage America',
      domain: 'Business Management',
      description: 'Enterprise project and resource management application',
      technologies: ['Cypress', 'JavaScript', 'Postman', 'GitHub Actions'],
      testingTypes: ['UI Testing', 'API Testing', 'Cross-browser Testing'],
      responsibilities: [
        'Developed automation framework from scratch',
        'Implemented CI/CD pipeline integration',
        'Performed cross-browser compatibility testing',
      ],
    },
    {
      id: 4,
      name: 'Cooler Screen',
      domain: 'Entertainment',
      description: 'Digital entertainment and content streaming platform',
      technologies: ['Playwright', 'TypeScript', 'API Testing', 'Jenkins'],
      testingTypes: ['End-to-End Testing', 'Performance Testing', 'Security Testing'],
      responsibilities: [
        'Automated critical user flows',
        'Conducted performance and load testing',
        'Improved test execution time by 40%',
      ],
    },
    {
      id: 5,
      name: 'London School of E-Commerce',
      domain: 'Education',
      description: 'Online e-commerce training and certification platform',
      technologies: ['Selenium', 'Python', 'Postman', 'TestRail'],
      testingTypes: ['Functional Testing', 'Integration Testing', 'UAT'],
      responsibilities: [
        'Created test cases and automation scripts',
        'Performed end-to-end testing',
        'Coordinated UAT activities',
      ],
    },
    {
      id: 6,
      name: 'Dover Portable',
      domain: 'E-Commerce',
      description: 'Portable electronics and accessories marketplace',
      technologies: ['Cypress', 'JavaScript', 'API Testing', 'GitHub'],
      testingTypes: ['Functional Testing', 'API Testing', 'Mobile Testing'],
      responsibilities: [
        'Implemented automation for mobile and web',
        'Created comprehensive API test suite',
        'Maintained test automation framework',
      ],
    },
  ];

  const categories = ['all', 'Healthcare', 'Business Management', 'Entertainment', 'Education', 'E-Commerce'];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.domain === filter);

  return (
    <main>
      <section className="section projects-section">
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
            <p>Showcase of successful automation testing projects</p>
          </div>

          {/* Filter */}
          <div className="project-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card fade-in">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="domain-badge">{project.domain}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-section">
                  <h4><i className="fas fa-briefcase"></i> Responsibilities</h4>
                  <ul className="responsibility-list">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h4><i className="fas fa-flask"></i> Testing Types</h4>
                  <div className="testing-tags">
                    {project.testingTypes.map((type, idx) => (
                      <span key={idx} className="testing-tag">{type}</span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <h4><i className="fas fa-tools"></i> Technologies</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
