import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";

function MemberLogin({ setCurrentPage }) {
  const [memberLogin, setMemberLogin] = useState({
    email: "",
    inviteCode: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMemberLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!memberLogin.email.trim()) {
      alert("Please enter your Email Address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(memberLogin.email)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (!memberLogin.inviteCode.trim()) {
      alert("Please enter the Invite Code.");
      return;
    }

    // Backend API will be added later
    console.log("Member Login:", memberLogin);

    setCurrentPage("memberDashboard");
  }

  return (
    <AuthLayout
      title="Welcome 👋"
      subtitle="Login as Team Member"
      footerText="Need an Invite Code?"
      footerAction="Please contact your Team Leader."
    >
      <form
        className="auth-form"
        onSubmit={handleLogin}
      >
        {/* Email */}

        <div className="input-group">
          <label>Email Address</label>

          <div className="input-box">
            <span>📧</span>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={memberLogin.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Invite Code */}

        <div className="input-group">
          <label>Invite Code</label>

          <div className="input-box">
            <span>🔑</span>

            <input
              type="text"
              name="inviteCode"
              placeholder="Enter Team Invite Code"
              value={memberLogin.inviteCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="auth-submit-btn" 
        >
          Join Team
        </button>
      </form>
    </AuthLayout>
  );
}

export default MemberLogin;