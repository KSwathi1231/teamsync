function ProjectInfo({
  formData,
  setFormData,
  previousStep,
  nextStep,
}) {
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
        <h2>📁 Project Information</h2>

        <p>
          Tell us about your team and the project you are going to build.
        </p>
      </div>

      <div className="form-grid">

        {/* Team Name */}

        <div className="input-group">
          <label>Team Name</label>

          <div className="input-box">
            <span>👥</span>

            <input
              type="text"
              name="teamName"
              placeholder="Example: CodeCrafters"
              value={formData.teamName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Project Name */}

        <div className="input-group">
          <label>Project Name</label>

          <div className="input-box">
            <span>💻</span>

            <input
              type="text"
              name="projectName"
              placeholder="Example: TeamSync"
              value={formData.projectName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}

        <div className="input-group full-width">
          <label>Project Description</label>

          <textarea
            name="projectDescription"
            placeholder="Briefly describe your project..."
            value={formData.projectDescription}
            onChange={handleChange}
            rows="6"
          ></textarea>
        </div>

      </div>

      <div className="register-buttons">

        <button
          type="button"
          className="back-btn"
          onClick={previousStep}
        >
          ← Previous
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

export default ProjectInfo;