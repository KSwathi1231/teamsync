function TeamMembers({
  members,
  setMembers,
  previousStep,
  nextStep,
}) {

  const handleChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    setMembers([
      ...members,
      {
        name: "",
        email: "",
      },
    ]);
  };

  const removeMember = (index) => {
    if (members.length === 1) return;

    const updatedMembers = members.filter(
      (_, i) => i !== index
    );

    setMembers(updatedMembers);
  };

  return (
    <div className="register-card">

      <div className="section-header">
        <h2>👥 Team Members</h2>

        <p>
          Add your teammates. They will receive an invitation
          email after your team is created.
        </p>
      </div>

      {members.map((member, index) => (

        <div className="member-card" key={index}>

          <div className="member-header">

            <h3>Member {index + 1}</h3>

            {members.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => removeMember(index)}
              >
                Remove
              </button>
            )}

          </div>

          <div className="form-grid">

            <div className="input-group">

              <label>Member Name</label>

              <div className="input-box">

                <span>👤</span>

                <input
                  type="text"
                  placeholder="Enter member name"
                  value={member.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

            <div className="input-group">

              <label>Member Email</label>

              <div className="input-box">

                <span>📧</span>

                <input
                  type="email"
                  placeholder="Enter member email"
                  value={member.email}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "email",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>

        </div>

      ))}

      <button
        className="add-member-btn"
        onClick={addMember}
      >
        + Add Another Member
      </button>

      <div className="register-buttons">

        <button
          className="back-btn"
          onClick={previousStep}
        >
          ← Previous
        </button>

        <button
          className="next-btn"
          onClick={nextStep}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default TeamMembers;