import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function MemberProfile({
  currentPage,
  setCurrentPage,
}) {

  const [member] = useState({

    name: "Swathi",

    email: "swathi@gmail.com",

    role: "Frontend Developer",

    team: "CodeCrafters",

    project: "TeamSync",

    inviteCode: "TEAM-7X92",

  });

  return (

    <div className="app-layout">

      <SideBar
        role="member"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">

        <TopBar
          userName={member.name}
          title="My Profile"
          subtitle="View your profile information."
          role="member"
          setCurrentPage={setCurrentPage}
        />

        <div className="profile-container">

          <div className="profile-card">

            <div className="profile-avatar">

              {member.name.charAt(0)}

            </div>

            <h2>{member.name}</h2>

            <span className="profile-role">

              {member.role}

            </span>

            <button
              className="edit-profile-btn"
            >

              Edit Profile

            </button>

          </div>

          <div className="profile-details">

            <div className="detail-card">

              <h3>Personal Information</h3>

              <div className="detail-row">

                <span>Email</span>

                <strong>{member.email}</strong>

              </div>

              <div className="detail-row">

                <span>Team</span>

                <strong>{member.team}</strong>

              </div>

              <div className="detail-row">

                <span>Project</span>

                <strong>{member.project}</strong>

              </div>

              <div className="detail-row">

                <span>Invite Code</span>

                <strong>{member.inviteCode}</strong>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

}

export default MemberProfile;