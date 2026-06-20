import React from 'react';
import './Training.css';

export default function Training() {
  const courses = [
    {
      id: 1,
      platform: 'Udemy',
      icon: 'fa-play-circle',
      title: 'Playwright Automation Testing From Scratch',
      description: 'Complete Playwright automation framework development course',
      students: '5000+',
      rating: 4.8,
      duration: '25 hours',
      topics: ['Playwright Basics', 'Advanced Features', 'Framework Design', 'CI/CD Integration'],
    },
    {
      id: 2,
      platform: 'Udemy',
      icon: 'fa-play-circle',
      title: 'Selenium WebDriver with Java and TestNG',
      description: 'Master Selenium automation with Java and TestNG framework',
      students: '4500+',
      rating: 4.7,
      duration: '30 hours',
      topics: ['WebDriver Basics', 'Page Object Model', 'TestNG Framework', 'CI/CD Integration'],
    },
    {
      id: 3,
      platform: 'YouTube',
      icon: 'fab fa-youtube',
      title: 'YouTube Channel - QA Automation Hub',
      description: 'Free tutorials, tips, and techniques for automation testing',
      subscribers: '15000+',
      rating: 4.6,
      videos: '200+',
      topics: ['Playwright', 'Selenium', 'API Testing', 'Best Practices'],
    },
    {
      id: 4,
      platform: 'Custom Training',
      icon: 'fa-chalkboard-user',
      title: 'Automation Testing Training Program',
      description: 'Comprehensive training program tailored for your team',
      duration: 'Customizable',
      rating: 4.9,
      format: 'Hands-on',
      topics: ['Framework Design', 'Best Practices', 'Project Work', 'Q&A Sessions'],
    },
    {
      id: 5,
      platform: 'Custom Training',
      icon: 'fa-user-secret',
      title: 'Interview Preparation Session',
      description: 'Prepare for QA automation interviews with expert guidance',
      duration: '1-2 hours',
      rating: 4.8,
      format: 'One-on-One',
      topics: ['Technical Questions', 'Framework Design', 'Mock Interviews', 'Resume Review'],
    },
    {
      id: 6,
      platform: 'Custom Training',
      icon: 'fa-code',
      title: 'API Testing Masterclass',
      description: 'Deep dive into API testing with Postman and RestAssured',
      duration: 'Customizable',
      rating: 4.7,
      format: 'Online',
      topics: ['REST APIs', 'GraphQL', 'Tools & Frameworks', 'Real-world Projects'],
    },
  ];

  const resources = [
    {
      category: 'Documentation',
      icon: 'fa-book',
      description: 'Comprehensive guides and documentation',
    },
    {
      category: 'Code Samples',
      icon: 'fa-code-branch',
      description: 'Real-world code examples and templates',
    },
    {
      category: 'Tools & Scripts',
      icon: 'fa-tools',
      description: 'Useful scripts and tool configurations',
    },
    {
      category: 'Job Opportunities',
      icon: 'fa-briefcase',
      description: 'Connect with employers and job opportunities',
    },
  ];

  return (
    <main>
      <section className="section training-section">
        <div className="container">
          <div className="section-title">
            <h2>Training & Courses</h2>
            <p>Learn automation testing from industry experts</p>
          </div>

          <div className="training-grid">
            {courses.map((course) => (
              <div key={course.id} className="training-card card fade-in">
                <div className="course-platform">
                  <i className={`${course.icon.includes('fab') ? course.icon : 'fas ' + course.icon}`}></i>
                  <span>{course.platform}</span>
                </div>

                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>

                <div className="course-meta">
                  {course.platform === 'YouTube' ? (
                    <>
                      <div className="meta-item">
                        <i className="fas fa-users"></i>
                        <span>{course.subscribers} Subscribers</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-video"></i>
                        <span>{course.videos} Videos</span>
                      </div>
                    </>
                  ) : course.platform === 'Udemy' ? (
                    <>
                      <div className="meta-item">
                        <i className="fas fa-users"></i>
                        <span>{course.students} Students</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-video"></i>
                        <span>{course.format}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="course-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa${i < Math.floor(course.rating) ? 's' : 'r'} fa-star`}
                      ></i>
                    ))}
                  </div>
                  <span className="rating-value">{course.rating}</span>
                </div>

                <div className="course-topics">
                  <h4>Topics Covered</h4>
                  <div className="topic-tags">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>

                <a href="#enroll" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', display: 'inline-block', textAlign: 'center' }}>
                  <i className="fas fa-external-link-alt"></i> Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section resources-section">
        <div className="container">
          <div className="section-title">
            <h2>Learning Resources</h2>
            <p>Additional materials to support your learning journey</p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="resource-icon">
                  <i className={`fas ${resource.icon}`}></i>
                </div>
                <h3>{resource.category}</h3>
                <p>{resource.description}</p>
                <button className="resource-link" onClick={() => alert('Learn more about ' + resource.category)}>
                  Access <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>Student Testimonials</h2>
            <p>What learners say about my courses</p>
          </div>

          <div className="testimonials-grid">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="testimonial-card card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="testimonial-header">
                  <div className="avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div>
                    <h4>Student Name</h4>
                    <p className="role">QA Engineer</p>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">
                  "This course was incredibly helpful! The instructor explains complex concepts in a simple way. 
                  I was able to implement everything I learned in my projects. Highly recommended!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
