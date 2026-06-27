import team from "../../assets/team.jpg";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerAction,
  footerButtonText,
  onFooterClick,
}) {
  return (
    <div className="auth-page">

      {/* Left Side */}

      <div className="auth-left">

        <div className="auth-card">

          <h1 className="auth-logo">
            TeamSync
          </h1>

          <h2 className="auth-title">
            {title}
          </h2>

          <p className="auth-subtitle">
            {subtitle}
          </p>

          {/* Login Form */}

          {children}

          {/* Footer */}

          <div className="auth-footer">

            <span>{footerText}</span>

            {footerButtonText && (
              <button
                type="button"
                className="auth-footer-btn"
                onClick={onFooterClick}
              >
                {footerButtonText}
              </button>
            )}

            {footerAction && (
              <p className="auth-footer-note">
                {footerAction}
              </p>
            )}

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="auth-right">

        <img
          src={team}
          alt="Students collaborating"
          className="auth-image"
        />

        <div className="auth-overlay">

          <h2>
            Collaborate.
            <br />
            Build.
            <br />
            Succeed.
          </h2>

          <p>
            Manage projects, assign tasks,
            track progress and work together
            using one collaborative workspace.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;