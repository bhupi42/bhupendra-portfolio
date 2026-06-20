import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Automation Tools',
      skills: [
        { name: 'Playwright', level: 95 },
        { name: 'Selenium', level: 90 },
        { name: 'Cypress', level: 85 },
        { name: 'TestCafe', level: 80 },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'C#', level: 80 },
      ],
    },
    {
      category: 'API Testing',
      skills: [
        { name: 'Postman', level: 92 },
        { name: 'RestAssured', level: 88 },
        { name: 'RestSharp', level: 85 },
        { name: 'Playwright API', level: 90 },
      ],
    },
    {
      category: 'Frameworks & BDD',
      skills: [
        { name: 'Cucumber', level: 90 },
        { name: 'SpecFlow', level: 85 },
        { name: 'TestNG', level: 88 },
        { name: 'NUnit', level: 85 },
      ],
    },
    {
      category: 'CI/CD & Tools',
      skills: [
        { name: 'Jenkins', level: 88 },
        { name: 'Azure DevOps', level: 87 },
        { name: 'GitHub Actions', level: 86 },
        { name: 'Git/GitHub', level: 92 },
      ],
    },
    {
      category: 'AI & Modern Tech',
      skills: [
        { name: 'ChatGPT', level: 85 },
        { name: 'Claude', level: 85 },
        { name: 'GitHub Copilot', level: 88 },
        { name: 'AI-assisted Testing', level: 82 },
      ],
    },
  ];

  return (
    <main>
      <section className="section skills-section">
        <div className="container">
          <div className="section-title">
            <h2>My Skills & Expertise</h2>
            <p>Comprehensive skill set in automation testing and quality assurance</p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <h3><i className="fas fa-star"></i> {category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="section tools-section">
        <div className="container">
          <div className="section-title">
            <h2>Tools & Platforms</h2>
            <p>Technologies I work with daily</p>
          </div>

          <div className="tools-grid">
            <div className="tool-card">
              <i className="fas fa-list-check"></i>
              <h4>Test Management</h4>
              <p>Jira, TestRail, Azure Test Plans</p>
            </div>
            <div className="tool-card">
              <i className="fas fa-code"></i>
              <h4>Version Control</h4>
              <p>Git, GitHub, GitLab, Bitbucket</p>
            </div>
            <div className="tool-card">
              <i className="fas fa-server"></i>
              <h4>Databases</h4>
              <p>MySQL, MongoDB, PostgreSQL, SQL Server</p>
            </div>
            <div className="tool-card">
              <i className="fas fa-cloud"></i>
              <h4>Cloud Platforms</h4>
              <p>AWS, Azure, Google Cloud</p>
            </div>
            <div className="tool-card">
              <i className="fas fa-bug"></i>
              <h4>Debugging Tools</h4>
              <p>Chrome DevTools, VS Code, IDE Debuggers</p>
            </div>
            <div className="tool-card">
              <i className="fas fa-chart-line"></i>
              <h4>Analytics & Reporting</h4>
              <p>Allure Reports, Jenkins Reports, Custom Dashboards</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
