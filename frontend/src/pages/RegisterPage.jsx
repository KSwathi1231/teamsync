import { useState } from "react";

function RegisterPage({ setCurrentPage }) {
  const [role, setRole] = useState("leader");

  return (
    <div className="auth-page">
      <div className="auth-left">
        <button
          className="back-home-btn"
          onClick={() => setCurrentPage("landing")}
        >
          ← Back to Home
        </button>

        <div className="auth-brand">
          <h1>TeamSync</h1>
          <p>Organize projects. Grow together.</p>
        </div>

        <div className="auth-benefits">
          <h2>Start building better as a team.</h2>
          <p>Manage project tasks, deadlines, daily stand-ups, and contribution in one place.</p>

          <div className="benefit-item">✓ Create and manage project teams</div>
          <div className="benefit-item">✓ Assign work and track progress</div>
          <div className="benefit-item">✓ Understand each member’s contribution</div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Create your account</h2>
          <p className="auth-subtitle">Join TeamSync and start collaborating.</p>

          <div className="role-selector">
            <button
              className={role === "leader" ? "role-btn active-role" : "role-btn"}
              onClick={() => setRole("leader")}
            >
              Team Leader
            </button>

            <button
              className={role === "member" ? "role-btn active-role" : "role-btn"}
              onClick={() => setRole("member")}
            >
              Team Member
            </button>
          </div>

          <form className="auth-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />

            <label>Password</label>
            <input type="password" placeholder="Create a password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />

            {role === "leader" ? (
              <>
                <label>Team Name</label>
                <input type="text" placeholder="Example: CodeCrafters" />

                <label>Project Name</label>
                <input type="text" placeholder="Example: TeamSync" />

                <label>Project Description</label>
                <textarea placeholder="Briefly describe your project"></textarea>
              </>
            ) : (
              <>
                <label>Team Invite Code</label>
                <input type="text" placeholder="Example: TEAM-7X92" />
              </>
            )}

            <button type="button" className="auth-submit-btn">
              Create Account
            </button>
          </form>

          <p className="auth-switch-text">
            Already have an account?{" "}
            <button onClick={() => setCurrentPage("login")}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;