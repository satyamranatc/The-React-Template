import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Unlock the Future of <span className="highlight">Learning</span>
            </h1>
            <p className="hero-subtitle">
              Master cutting-edge technologies with our specialized courses in Mathematics, 
              Cosmos Exploration, Brain-Machine Interface, and Advanced Tech Solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start Learning</button>
              <button className="btn btn-secondary">View Courses</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="floating-card card-1">
                <span className="card-icon">🧠</span>
                <span className="card-text">AI & ML</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🚀</span>
                <span className="card-text">Space Tech</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">∑</span>
                <span className="card-text">Mathematics</span>
              </div>
              <div className="floating-card card-4">
                <span className="card-icon">🔬</span>
                <span className="card-text">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Specialized Programs</h2>
            <p className="section-subtitle">
              Comprehensive courses designed for the future of technology and science
            </p>
          </div>
          
          <div className="courses-grid">
            <div className="course-card featured">
              <div className="course-icon">
                <span className="icon">∫</span>
              </div>
              <h3 className="course-title">Advanced Mathematics</h3>
              <p className="course-description">
                Master calculus, linear algebra, differential equations, and mathematical modeling 
                for real-world applications.
              </p>
              <div className="course-features">
                <span className="feature">• Calculus & Analysis</span>
                <span className="feature">• Linear Algebra</span>
                <span className="feature">• Statistical Methods</span>
              </div>
              <button className="course-btn">Explore Program</button>
            </div>

            <div className="course-card">
              <div className="course-icon">
                <span className="icon">🌌</span>
              </div>
              <h3 className="course-title">Cosmos & Astrophysics</h3>
              <p className="course-description">
                Explore the universe through advanced cosmology, stellar physics, 
                and space exploration technologies.
              </p>
              <div className="course-features">
                <span className="feature">• Cosmological Models</span>
                <span className="feature">• Stellar Evolution</span>
                <span className="feature">• Space Missions</span>
              </div>
              <button className="course-btn">Explore Program</button>
            </div>

            <div className="course-card">
              <div className="course-icon">
                <span className="icon">🧠</span>
              </div>
              <h3 className="course-title">Brain-Machine Interface</h3>
              <p className="course-description">
                Dive into neurotechnology, neural signal processing, and the future 
                of human-computer interaction.
              </p>
              <div className="course-features">
                <span className="feature">• Neural Signal Processing</span>
                <span className="feature">• BCI Hardware</span>
                <span className="feature">• Neurotechnology</span>
              </div>
              <button className="course-btn">Explore Program</button>
            </div>

            <div className="course-card">
              <div className="course-icon">
                <span className="icon">⚡</span>
              </div>
              <h3 className="course-title">Modern Tech Solutions</h3>
              <p className="course-description">
                Stay ahead with cutting-edge technologies including AI, quantum computing, 
                and emerging tech paradigms.
              </p>
              <div className="course-features">
                <span className="feature">• Artificial Intelligence</span>
                <span className="feature">• Quantum Computing</span>
                <span className="feature">• Emerging Technologies</span>
              </div>
              <button className="course-btn">Explore Program</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2 className="features-title">Why Choose Our Platform?</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>🎯</span>
                  </div>
                  <div className="feature-content">
                    <h4>Expert-Led Instruction</h4>
                    <p>Learn from industry professionals and academic experts with real-world experience.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>💡</span>
                  </div>
                  <div className="feature-content">
                    <h4>Hands-On Learning</h4>
                    <p>Practical projects and lab sessions to apply theoretical knowledge effectively.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>📊</span>
                  </div>
                  <div className="feature-content">
                    <h4>Progress Tracking</h4>
                    <p>Advanced analytics and personalized dashboards to monitor your learning journey.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>🌐</span>
                  </div>
                  <div className="feature-content">
                    <h4>Global Community</h4>
                    <p>Connect with learners worldwide and build professional networks in your field.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="features-visual">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-title">Learning Dashboard</div>
                  <div className="dashboard-controls">
                    <span className="control"></span>
                    <span className="control"></span>
                    <span className="control"></span>
                  </div>
                </div>
                <div className="dashboard-content">
                  <div className="progress-ring">
                    <div className="progress-circle">
                      <span className="progress-text">78%</span>
                    </div>
                  </div>
                  <div className="dashboard-stats">
                    <div className="mini-stat">
                      <div className="mini-stat-value">12</div>
                      <div className="mini-stat-label">Completed</div>
                    </div>
                    <div className="mini-stat">
                      <div className="mini-stat-value">5</div>
                      <div className="mini-stat-label">In Progress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Future?</h2>
            <p className="cta-subtitle">
              Join thousands of students who are already mastering the technologies of tomorrow.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Get Started Today</button>
              <button className="btn btn-outline btn-large">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;