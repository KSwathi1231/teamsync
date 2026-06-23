function LoginPage({ setCurrentPage }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <button
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

        <form className="auth-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button">Forgot password?</button>
          </div>

          <button type="button" className="auth-submit-btn">
            Login
          </button>
        </form>

        <p className="auth-switch-text">
          New to TeamSync?{" "}
          <button onClick={() => setCurrentPage("register")}>
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;