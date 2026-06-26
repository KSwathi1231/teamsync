import team from "../../assets/team.jpg";

function LandingPage({ setCurrentPage }) {
  return (
    <div className="landing-page">

      {/* ---------------- Navbar ---------------- */}

      <nav className="landing-navbar">

        <h1 className="landing-logo">
          TeamSync
        </h1>

        <div className="landing-nav-actions">

          <button
            className="leader-login-btn"
            onClick={() => setCurrentPage("leaderLogin")}
          >
            Leader Login
          </button>

          <button
            className="member-login-btn"
            onClick={() => setCurrentPage("memberLogin")}
          >
            Member Login
          </button>

        </div>

      </nav>

      {/* ---------------- Hero ---------------- */}

      <main className="hero-section">

        <div className="hero-content">

          <p className="hero-tag">
            STUDENT PROJECT COLLABORATION PLATFORM
          </p>

          <h2>
            Build Better Projects
            <span> Together.</span>
          </h2>

          <p className="hero-description">

            TeamSync helps student teams manage
            projects, assign tasks, submit daily
            stand-ups and monitor contribution
            through one centralized workspace.

          </p>

          <button
            className="hero-primary-btn"
            onClick={() => setCurrentPage("registerLeader")}
          >
            Create Your Team →
          </button>

        </div>

        <div className="hero-image-wrapper">

          <img
            src={team}
            alt="Students collaborating"
            className="hero-team-image"
          />

        </div>

      </main>

      {/* ---------------- Features ---------------- */}

      <section className="landing-features">

        <div className="feature-card">

          <span>👥</span>

          <h3>Create Teams</h3>

          <p>
            Create project teams and invite
            members easily.
          </p>

        </div>

        <div className="feature-card">

          <span>📋</span>

          <h3>Task Management</h3>

          <p>
            Assign tasks and monitor progress
            efficiently.
          </p>

        </div>

        <div className="feature-card">

          <span>📝</span>

          <h3>Daily Stand-ups</h3>

          <p>
            Collect daily updates from every
            team member.
          </p>

        </div>

        <div className="feature-card">

          <span>📈</span>

          <h3>Contribution Analytics</h3>

          <p>
            Measure each member's participation
            fairly.
          </p>

        </div>

      </section>

      {/* ---------------- Footer ---------------- */}

      <footer className="landing-footer">

        © 2026 TeamSync • Student Project Collaboration Platform

      </footer>

    </div>
  );
}

export default LandingPage;