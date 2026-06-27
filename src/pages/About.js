import React from 'react';
import './About.css';

export default function About() {
  const achievements = [
    { icon: 'fa-graduation-cap', title: 'MCA Graduate', description: 'Advanced degree in Computer Applications' },
    { icon: 'fa-wrench', title: 'Expert Automation', description: '9+ years in automation testing expertise' },
    { icon: 'fa-briefcase', title: 'Enterprise Experience', description: 'Worked with Fortune 500 companies' },
    { icon: 'fa-chalkboard-user', title: 'Passionate Trainer', description: 'Training and mentoring professionals' },
  ];

  return (
    <main>
      <section className="section about-section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>Learn more about my background and expertise</p>
          </div>

          <div className="about-content">
            <div className="about-left">
              <div className="about-image">
                <div className="image-placeholder">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="about-stats">
                <div className="about-stat">
                  <h3>9+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="about-stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="about-stat">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="about-right">
              <h3>Senior QA Automation Engineer</h3>
              <p>
                I am a dedicated QA professional with a Master's degree in Computer Applications (MCA). 
                With 9+ years of hands-on experience in the IT industry, I've developed expertise in 
                comprehensive quality assurance practices.
              </p>

              <div className="about-highlights">
                <h4><i className="fas fa-check-circle"></i> Key Highlights</h4>
                <ul>
                  <li>
                    <strong>Automation Testing:</strong> Expert in Playwright, Selenium, and TestCafe frameworks
                  </li>
                  <li>
                    <strong>API Testing:</strong> Proficient with Postman, RestAssured, and Playwright API
                  </li>
                  <li>
                    <strong>Manual Testing:</strong> Comprehensive testing strategies and test case design
                  </li>
                  <li>
                    <strong>CI/CD:</strong> Experience with Jenkins, Azure DevOps, and GitHub Actions
                  </li>
                  <li>
                    <strong>Enterprise Projects:</strong> Successfully managed complex projects for leading organizations
                  </li>
                  <li>
                    <strong>Content Creator:</strong> Active YouTube channel and Udemy instructor
                  </li>
                </ul>
              </div>

              <p>
                Passionate about building scalable automation frameworks, mentoring junior QA engineers, 
                and staying updated with the latest testing technologies. I believe in continuous learning 
                and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-title">
            <h2>My Achievements</h2>
            <p>What defines my professional journey</p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="achievement-icon">
                  <i className={`fas ${achievement.icon}`}></i>
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
