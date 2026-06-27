import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";

function LeaderLogin({ setCurrentPage }) {
  const [leaderLogin, setLeaderLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setLeaderLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!leaderLogin.email.trim()) {
      alert("Please enter your Email Address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(leaderLogin.email)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (!leaderLogin.password.trim()) {
      alert("Please enter your Password.");
      return;
    }

    // Backend API will be added later
    console.log("Leader Login:", leaderLogin);

    setCurrentPage("leaderDashboard");
  }

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login as Team Leader"

      footerText="Don't have a team account?"

      footerButtonText="Create Team"

      onFooterClick={() =>
        setCurrentPage("registerLeader")
      }
    >
      <form
        className="auth-form"
        onSubmit={handleLogin}
      >
        <div className="input-group">

          <label>Email Address</label>

          <div className="input-box">

            <span>📧</span>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={leaderLogin.email}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="input-group">

          <label>Password</label>

          <div className="input-box">

            <span>🔒</span>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={leaderLogin.password}
              onChange={handleChange}
            />

          </div>

        </div>

        <button
          type="submit"
          className="auth-submit-btn"
        >
          Login
        </button>

      </form>
    </AuthLayout>
  );
}

export default LeaderLogin;