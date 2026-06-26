import { useState } from "react";

function LoginPage({ setCurrentPage }) {
  const [role, setRole] = useState("leader");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    inviteCode: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setLoginData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!loginData.email) {
      setMessage("Please enter your email address.");
      return;
    }

    if (role === "leader" && !loginData.password) {
      setMessage("Please enter your password.");
      return;
    }

    if (role === "member" && !loginData.inviteCode) {
      setMessage("Please enter your team invite code.");
      return;
    }

    setMessage(
      `Team ${role === "leader" ? "Leader" : "Member"} login successful! Opening your workspace...`
    );

    setTimeout(() => {
      if (role === "leader") {
        setCurrentPage("leaderDashboard");
      } else {
        setCurrentPage("memberDashboard");
      }
    }, 1000);
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <button
          type="button"
          className="back-home-btn login-back-btn"
          onClick={() => setCurrentPage("landing")}
        >
          ← Back to Home
        </button>

        <h1>TeamSync</h1>
        <p className="login-welcome">Welcome back!</p>
        <p className="login-description">
          Login to access your team workspace.
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

        <form className="auth-form" onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          {role === "leader" ? (
            <>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </>
          ) : (
            <>
              <label>Team Invite Code</label>
              <input
                type="text"
                name="inviteCode"
                placeholder="Example: TEAM-7X92"
                value={loginData.inviteCode}
                onChange={handleChange}
                required
              />
            </>
          )}

          {message && (
            <p
              className={
                message.includes("successful")
                  ? "form-message success-message"
                  : "form-message error-message"
              }
            >
              {message}
            </p>
          )}

          <button type="submit" className="auth-submit-btn">
            Login as {role === "leader" ? "Team Leader" : "Team Member"}
          </button>
        </form>

        <p className="auth-switch-text">
          New to TeamSync?{" "}
          <button type="button" onClick={() => setCurrentPage("register")}>
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;