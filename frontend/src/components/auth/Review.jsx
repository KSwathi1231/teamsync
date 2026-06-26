function Review({
  formData,
  members,
  previousStep,
  createTeam,
}) {
  return (
    <div className="register-card">

      <div className="section-header">
        <h2>✅ Review & Create Team</h2>

        <p>
          Please verify all the information before creating your team.
        </p>
      </div>

      {/* Leader Information */}

      <div className="review-section">

        <h3>👤 Leader Information</h3>

        <div className="review-item">
          <span>Full Name</span>
          <strong>{formData.fullName}</strong>
        </div>

        <div className="review-item">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-item">
          <span>Phone</span>
          <strong>{formData.phone}</strong>
        </div>

      </div>

      {/* Project Information */}

      <div className="review-section">

        <h3>📁 Project Information</h3>

        <div className="review-item">
          <span>Team Name</span>
          <strong>{formData.teamName}</strong>
        </div>

        <div className="review-item">
          <span>Project Name</span>
          <strong>{formData.projectName}</strong>
        </div>

        <div className="review-item">
          <span>Description</span>
          <strong>{formData.projectDescription}</strong>
        </div>

      </div>

      {/* Members */}

      <div className="review-section">

        <h3>👥 Team Members</h3>

        {members.map((member, index) => (

          <div
            key={index}
            className="member-review-card"
          >

            <p>
              <strong>Member {index + 1}</strong>
            </p>

            <p>{member.name}</p>

            <p>{member.email}</p>

          </div>

        ))}

      </div>

      <div className="register-buttons">

        <button
          className="back-btn"
          onClick={previousStep}
        >
          ← Previous
        </button>

        <button
          className="create-team-btn"
          onClick={createTeam}
        >
          🚀 Create Team
        </button>

      </div>

    </div>
  );
}

export default Review;