import team from '../assets/team.jpg';

function LandingPage({ setCurrentPage }) {
  return (
    <div className="landing-page">
      <nav className="landing-navbar">
        <h1 className="landing-logo">TeamSync</h1>

        <div className="landing-nav-actions">
          <button
            className="login-link-btn"
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>

          <button
            className="get-started-btn"
            onClick={() => setCurrentPage("register")}
          >
            Get Started
          </button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">STUDENT PROJECT COLLABORATION PLATFORM</p>

          <h2>
            Build Better Projects
            <span> Together.</span>
          </h2>

          <p className="hero-description">
            Create teams, assign tasks, track deadlines, submit daily stand-ups,
            and measure contribution in one organized workspace.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-primary-btn"
              onClick={() => setCurrentPage("register")}
            >
              Create Your Team →
            </button>

            <button
              className="hero-secondary-btn"
              onClick={() => setCurrentPage("login")}
            >
              Login to TeamSync
            </button>
          </div>

          <div className="feature-points">
            <p>✓ Organize project work</p>
            <p>✓ Track team contribution</p>
            <p>✓ Never miss deadlines</p>
          </div>
        </div>
         <div className="hero-image-wrapper">
            <img
            src={team}
            alt="Students collaborating on a project"
            className="hero-team-image"
            />
        </div>

      </main>

      <section className="landing-features">
        <div>
          <span>📋</span>
          <h3>Task Management</h3>
          <p>Create, assign, and track project tasks clearly.</p>
        </div>

        <div>
          <span>🗓</span>
          <h3>Daily Stand-ups</h3>
          <p>Keep everyone aligned with short daily updates.</p>
        </div>

        <div>
          <span>📈</span>
          <h3>Contribution Analytics</h3>
          <p>Measure work contribution fairly and transparently.</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;