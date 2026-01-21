import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  // Check if already logged in
  useEffect(() => {
    const storedLogin = localStorage.getItem('lms_login');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === '9777641455') {
      localStorage.setItem('lms_login', 'true');
      setIsLoggedIn(true);
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('lms_login');
    setIsLoggedIn(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-avatar">A</div>
          <h1>Welcome Back, Ashish!</h1>
          <p>Continue your learning journey</p>
          <div className="input-group">
            <i className="fas fa-lock input-icon"></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter password: 9777641455"
            />
          </div>
          <button className="login-btn" onClick={handleLogin}>
            <i className="fas fa-rocket"></i> Login
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`app-container ${theme}`}>
      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <div className="header-avatar">A</div>
          <div className="header-info">
            <h1>Ashish's Learning Dashboard</h1>
            <p>Full-Stack Development Progress</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="header-btn" onClick={toggleTheme} title="Toggle Theme">
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <button className="header-btn" onClick={handleLogout} title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="app-content">
        <aside className="sidebar">
          <div className="progress-widget">
            <h3>Overall Progress</h3>
            <div className="progress-percent">0%</div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="phase-list">
            <div className="phase-item active">
              <div className="phase-icon" style={{ background: '#e34c26' }}>
                <i className="fab fa-html5"></i>
              </div>
              <div className="phase-content">
                <div className="phase-title">HTML Fundamentals</div>
              </div>
              <div className="phase-progress">0%</div>
            </div>
            <div className="phase-item">
              <div className="phase-icon" style={{ background: '#264de4' }}>
                <i className="fab fa-css3-alt"></i>
              </div>
              <div className="phase-content">
                <div className="phase-title">CSS Styling</div>
              </div>
              <div className="phase-progress">0%</div>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="content-header">
            <div className="header-content">
              <div className="header-icon" style={{ background: '#e34c26' }}>
                <i className="fab fa-html5"></i>
              </div>
              <div className="header-text">
                <h2>HTML Mastery</h2>
                <p>HTML Fundamentals</p>
              </div>
            </div>
          </div>

          <div className="focus-view">
            <div className="topic-content">
              <div className="topic-header">
                <div>
                  <h1 className="topic-title">HTML Mastery</h1>
                  <div className="topic-tags">
                    <span className="topic-tag">HTML Fundamentals</span>
                    <span className="topic-tag important">Important</span>
                  </div>
                  <div className="motivational-quote">
                    The expert in anything was once a beginner. — Helen Hayes
                  </div>
                </div>
                <div className="topic-actions">
                  <button className="topic-btn" title="Toggle All">
                    <i className="fas fa-check-double"></i>
                  </button>
                  <button className="topic-btn" title="Pomodoro Timer">
                    <i className="fas fa-clock"></i>
                  </button>
                </div>
              </div>

              <div className="goal-tracker">
                <div className="goal-input">
                  <input type="number" placeholder="Set daily goal" min="1" max="20" />
                  <button>Set Goal</button>
                </div>
                <div className="goal-progress">
                  <span>Goal: 0/0</span>
                  <div className="goal-bar">
                    <div className="goal-fill"></div>
                  </div>
                </div>
              </div>

              <div className="progress-display">
                <div className="progress-circle">
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <circle className="progress-ring-bg" cx="50" cy="50" r="45"></circle>
                    <circle className="progress-ring" cx="50" cy="50" r="45" strokeDasharray="283" strokeDashoffset="283"></circle>
                  </svg>
                  <div className="progress-percent-large">0%</div>
                </div>
                <div className="progress-details">
                  <h4>Topic Progress</h4>
                  <div className="progress-stats">
                    <div className="stat-item">
                      <div className="stat-value">0</div>
                      <div className="stat-label">Completed</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">20</div>
                      <div className="stat-label">Total</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">20</div>
                      <div className="stat-label">Remaining</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subtopics-section">
                <div className="section-header">
                  <h3><i className="fas fa-list-check"></i> Subtopics</h3>
                  <button className="toggle-all-btn">Toggle All</button>
                </div>
                <div className="subtopics-grid">
                  <div className="subtopic-card">
                    <div className="subtopic-check">
                      <input type="checkbox" id="html_0" />
                      <div className="subtopic-title">HTML Basics & History</div>
                    </div>
                    <div className="subtopic-time">30 min</div>
                    <div className="subtopic-resources">
                      <a href="#" title="Resources">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                    <div className="difficulty-rating">
                      <span>Difficulty: </span>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="notes-sidebar">
              <div className="notes-header">
                <h3><i className="fas fa-sticky-note"></i> Notes</h3>
                <button className="add-note-btn">
                  <i className="fas fa-plus"></i> Add
                </button>
              </div>
              <div className="notes-container">
                <div className="note-card">
                  <div className="note-pin"></div>
                  <textarea className="note-text" placeholder="Write your note..."></textarea>
                  <div className="note-footer">
                    <div className="note-date">Just now</div>
                    <div className="note-actions">
                      <button className="note-btn" title="Delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;