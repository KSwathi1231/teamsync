import { useState } from "react";

function RegisterPage({ setCurrentPage }) {
  const [role, setRole] = useState("leader");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    teamName: "",
    projectName: "",
    projectDescription: "",
    inviteCode: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  }

  function handleRegister(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (role === "leader" && (!formData.teamName || !formData.projectName)) {
      setMessage("Please enter team name and project name.");
      return;
    }

    if (role === "member" && !formData.inviteCode) {
      setMessage("Please enter your team invite code.");
      return;
    }

    setMessage(
      `Account created successfully as Team ${role === "leader" ? "Leader" : "Member"}!`
    );

    console.log("Registration Data:", {
      role,
      ...formData,
    });
  }

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
          <p>
            Manage project tasks, deadlines, daily stand-ups, and contribution
            in one place.
          </p>

          <div className="benefit-item">
            ✓ Create and manage project teams
          </div>
          <div className="benefit-item">
            ✓ Assign work and track progress
          </div>
          <div className="benefit-item">
            ✓ Understand each member’s contribution
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Create your account</h2>
          <p className="auth-subtitle">
            Join TeamSync and start collaborating.
          </p>

          <div className="role-selector">
            <button
              type="button"
              className={role === "leader" ? "role-btn active-role" : "role-btn"}
              onClick={() => {
                setRole("leader");
                setMessage("");
              }}
            >
              Team Leader
            </button>

            <button
              type="button"
              className={role === "member" ? "role-btn active-role" : "role-btn"}
              onClick={() => {
                setRole("member");
                setMessage("");
              }}
            >
              Team Member
            </button>
          </div>

          <form className="auth-form" onSubmit={handleRegister}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {role === "leader" ? (
              <>
                <label>Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  placeholder="Example: CodeCrafters"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                />

                <label>Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  placeholder="Example: TeamSync"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                />

                <label>Project Description</label>
                <textarea
                  name="projectDescription"
                  placeholder="Briefly describe your project"
                  value={formData.projectDescription}
                  onChange={handleChange}
                ></textarea>
              </>
            ) : (
              <>
                <label>Team Invite Code</label>
                <input
                  type="text"
                  name="inviteCode"
                  placeholder="Example: TEAM-7X92"
                  value={formData.inviteCode}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {message && (
              <p
                className={
                  message.includes("successfully")
                    ? "form-message success-message"
                    : "form-message error-message"
                }
              >
                {message}
              </p>
            )}

            <button type="submit" className="auth-submit-btn">
              Create Account
            </button>
          </form>

          <p className="auth-switch-text">
            Already have an account?{" "}
            <button type="button" onClick={() => setCurrentPage("login")}>
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;