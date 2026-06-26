function LeaderInfo({ formData, setFormData,previousStep,nextStep }) {
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  return (
    <div className="register-card">

      <div className="section-header">

        <h2>👤 Leader Information</h2>

        <p>
          Enter your personal details to create and manage your team.
        </p>

      </div>

      <div className="form-grid">

        <div className="input-group">
          <label>Full Name</label>

          <div className="input-box">
            <span>👤</span>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>

          <div className="input-box">
            <span>📧</span>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
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
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Confirm Password</label>

          <div className="input-box">
            <span>🔑</span>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

      </div>
      <div className="register-buttons">
          <button
            type="button"
            className="back-btn"
            onClick={previousStep}
          >
            ← Back
          </button>

          <button
            type="button"
            className="next-btn"
            onClick={nextStep}
          >
            Next →
          </button>
        </div>

    </div>
  );
}

export default LeaderInfo;