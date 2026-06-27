import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function LeaderProfile({ currentPage, setCurrentPage }) {
  const [leader, setLeader] = useState({
    name: "Swathi",
    email: "swathi@gmail.com",
    phone: "+91 9876543210",
    company: "Vardhaman College of Engineering",
    project: "TeamSync",
    teamName: "CodeCrafters",
    role: "Team Leader",
  });

  return (
    <div className="app-layout">
      <SideBar
        role="leader"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">
        <TopBar
          userName={leader.name}
          title="Leader Profile"
          subtitle="View and manage your profile."
          role="leader"
          setCurrentPage={setCurrentPage}
        />

        <div className="profile-container">

          <div className="profile-card">

            <div className="profile-avatar">
              {leader.name.charAt(0)}
            </div>

            <h2>{leader.name}</h2>

            <span className="profile-role">
              {leader.role}
            </span>

            <button
              className="edit-profile-btn"
              onClick={() =>
                alert("Edit Profile feature will be added with backend.")
              }
            >
              Edit Profile
            </button>

          </div>

          <div className="profile-details">

            <div className="detail-card">

              <h3>Personal Information</h3>

              <div className="detail-row">
                <span>Full Name</span>
                <strong>{leader.name}</strong>
              </div>

              <div className="detail-row">
                <span>Email</span>
                <strong>{leader.email}</strong>
              </div>

              <div className="detail-row">
                <span>Phone</span>
                <strong>{leader.phone}</strong>
              </div>

              <div className="detail-row">
                <span>Organization</span>
                <strong>{leader.company}</strong>
              </div>

            </div>

            <div className="detail-card">

              <h3>Project Information</h3>

              <div className="detail-row">
                <span>Project</span>
                <strong>{leader.project}</strong>
              </div>

              <div className="detail-row">
                <span>Team Name</span>
                <strong>{leader.teamName}</strong>
              </div>

              <div className="detail-row">
                <span>Role</span>
                <strong>{leader.role}</strong>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default LeaderProfile;