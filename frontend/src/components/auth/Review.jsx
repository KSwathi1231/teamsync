function Review({
  formData,
  members,
  previousStep,
  createTeam,
  loading,
  editLeader,
  editProject,
  editMembers,
}) {
  return (
    <div className="review-container">

      <h2>Review Your Team</h2>

      <p className="review-subtitle">
        Please review all information before creating your team.
      </p>

      {/* Leader Information */}

      <div className="review-card">

        <div className="review-header">

          <h3>👤 Leader Information</h3>

          <button
            className="edit-btn"
            onClick={editLeader}
          >
            ✏ Edit
          </button>

        </div>

        <div className="review-row">
          <span>Full Name</span>
          <strong>{formData.fullName}</strong>
        </div>

        <div className="review-row">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-row">
          <span>Phone</span>
          <strong>{formData.phone}</strong>
        </div>

      </div>

      {/* Project Information */}

      <div className="review-card">

        <div className="review-header">

          <h3>📁 Project Information</h3>

          <button
            className="edit-btn"
            onClick={editProject}
          >
            ✏ Edit
          </button>

        </div>

        <div className="review-row">
          <span>Team Name</span>
          <strong>{formData.teamName}</strong>
        </div>

        <div className="review-row">
          <span>Project Name</span>
          <strong>{formData.projectName}</strong>
        </div>

        <div className="review-row">
          <span>Description</span>
          <strong>{formData.projectDescription}</strong>
        </div>

      </div>

      {/* Members */}

      <div className="review-card">

        <div className="review-header">

          <h3>👥 Team Members</h3>

          <button
            className="edit-btn"
            onClick={editMembers}
          >
            ✏ Edit
          </button>

        </div>

        {members.map((member, index) => (

          <div
            className="member-review"
            key={index}
          >

            <h4>Member {index + 1}</h4>

            <p>{member.name}</p>

            <p>{member.email}</p>

          </div>

        ))}

      </div>

      <div className="review-note">

        After clicking <strong>Create Team</strong>, TeamSync will
        register your team, generate an invite code, and send invitation
        emails to all team members.

      </div>

      <div className="register-buttons">

        <button
          className="back-btn"
          onClick={previousStep}
        >
          ← Previous
        </button>

        <button
          className="next-btn"
          onClick={createTeam}
          disabled={loading}
        >
          {loading ? "Creating Team..." : "🚀 Create Team"}
        </button>

      </div>

    </div>
  );
}

export default Review;