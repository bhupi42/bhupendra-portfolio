import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'DOVER Corporation',
      company: 'Datamatics Global Services',
      role: 'QA Team Lead',
      duration: '2025 - Present',
      domain: 'Industrial Manufacturing',
      description: 'Leading QA initiatives for enterprise manufacturing applications. Managing QA team, sprint testing, release validation, automation strategy and CI/CD implementation.',
      technologies: ['Playwright', 'TypeScript', 'API Testing', 'Jenkins', 'Azure DevOps', 'Git', 'SQL'],
      responsibilities: [
        'Lead QA Team',
        'Sprint Planning',
        'Automation Strategy',
        'Release Validation',
        'Code Reviews',
        'Mentoring',
        'Defect Management',
        'Stakeholder Communication',
      ],
    },
    {
      id: 2,
      name: 'ICICI Bank',
      company: 'Datamatics Global Services',
      role: 'Senior QA Automation Engineer',
      duration: '2024',
      domain: 'Banking',
      description: 'Designed and developed a complete Playwright automation framework from scratch for digital banking applications.',
      technologies: ['Playwright', 'TypeScript', 'NodeJS', 'Allure', 'Jenkins', 'GitHub', 'Azure DevOps', 'REST API'],
      responsibilities: [
        'Framework Design',
        'POM Architecture',
        'API Automation',
        'Parallel Execution',
        'Reporting',
        'CI/CD',
        'Framework Utilities',
        'Custom Assertions',
      ],
    },
    {
      id: 3,
      name: 'BUPA UK',
      company: 'Datamatics Global Services',
      role: 'QA Automation Engineer',
      duration: '2024 - 2025',
      domain: 'Healthcare Insurance',
      description: 'Automated healthcare insurance workflows including policy management, claims processing and member registration.',
      technologies: ['Selenium', 'C#', 'NUnit', 'Azure DevOps'],
      responsibilities: [
        'Automated policy management workflows',
        'Automated claims lifecycle scenarios',
        'Validated member registration journeys',
      ],
    },
    {
      id: 4,
      name: 'Atlas Injury Prevention',
      company: 'Datamatics Global Services',
      role: 'Automation Engineer',
      duration: '2021 - 2024',
      domain: 'Healthcare',
      description: 'Developed automation framework for injury prevention platform helping organizations improve workplace safety.',
      technologies: ['SpecFlow', 'C#', 'NUnit'],
      responsibilities: [
        'Built and maintained framework modules',
        'Covered key prevention workflows',
        'Improved regression reliability',
      ],
    },
    {
      id: 5,
      name: 'Manage America',
      company: 'Datamatics Global Services',
      role: 'QA Engineer',
      duration: '2020 - 2023',
      domain: 'Property Management',
      description: 'Automated property management platform handling leasing, accounting and property workflows.',
      technologies: ['Java', 'Selenium', 'TestNG'],
      responsibilities: [
        'Automated leasing and tenant flows',
        'Validated accounting processes',
        'Executed stable regression suites',
      ],
    },
    {
      id: 6,
      name: 'Cooler Screen',
      company: 'Datamatics Global Services',
      role: 'QA Engineer',
      duration: '2019 - 2022',
      domain: 'Retail Advertising',
      description: 'Performed API automation for digital retail refrigerator advertising platform.',
      technologies: ['Postman', 'RestAssured', 'Java'],
      responsibilities: [
        'Automated critical API validations',
        'Maintained API regression suites',
        'Improved defect turnaround',
      ],
    },
    {
      id: 7,
      name: 'TeamWork',
      company: 'Datamatics Global Services',
      role: 'QA Engineer',
      duration: '2019 - 2021',
      domain: 'Project Management',
      description: 'Developed BDD automation framework for employee and project management platform.',
      technologies: ['Java', 'Selenium', 'Cucumber', 'TestNG'],
      responsibilities: [
        'Implemented BDD scenarios and glue code',
        'Automated employee and project modules',
        'Integrated suites into CI pipelines',
      ],
    },
  ];

  const categories = ['all', ...new Set(projects.map((project) => project.domain))];

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
                  <h4><i className="fas fa-building"></i> Project Details</h4>
                  <div className="testing-tags">
                    <span className="testing-tag">Client: {project.name}</span>
                    <span className="testing-tag">Company: {project.company}</span>
                    <span className="testing-tag">Role: {project.role}</span>
                    <span className="testing-tag">Duration: {project.duration}</span>
                  </div>
                </div>

                <div className="project-section">
                  <h4><i className="fas fa-briefcase"></i> Responsibilities</h4>
                  <ul className="responsibility-list">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
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
