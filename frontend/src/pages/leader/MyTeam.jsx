import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function MyTeam({ currentPage, setCurrentPage }) {
  const [search, setSearch] = useState("");

  const members = [
    {
      id: 1,
      name: "Swathi",
      role: "Team Leader",
      email: "swathi@gmail.com",
      assigned: 6,
      completed: 5,
    },
    {
      id: 2,
      name: "Rahul",
      role: "Frontend Developer",
      email: "rahul@gmail.com",
      assigned: 4,
      completed: 2,
    },
    {
      id: 3,
      name: "Anjali",
      role: "UI / UX Designer",
      email: "anjali@gmail.com",
      assigned: 3,
      completed: 2,
    },
    {
      id: 4,
      name: "Priya",
      role: "Backend Developer",
      email: "priya@gmail.com",
      assigned: 5,
      completed: 4,
    },
    {
      id: 5,
      name: "Kiran",
      role: "Testing",
      email: "kiran@gmail.com",
      assigned: 2,
      completed: 1,
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-layout">
      <SideBar
        role="leader"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">
        <TopBar
          userName="Swathi"
          title="My Team"
          subtitle="Manage your team members and monitor their contribution."
          role="leader"
          setCurrentPage={setCurrentPage}
        />

        <div className="team-header">
          <div>
            <h2>Team Members</h2>
            <p>View and manage everyone working on this project.</p>
          </div>

          <button
            className="create-task-btn"
            onClick={() => alert("Backend integration coming soon")}
          >
            + Invite Member
          </button>
        </div>

        <div className="team-search">
          <input
            type="text"
            placeholder="Search member by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="team-grid">
          {filteredMembers.map((member) => (
            <div className="member-card" key={member.id}>
              <div className="member-avatar">
                {member.name.charAt(0)}
              </div>

              <h3>{member.name}</h3>

              <span className="member-role">
                {member.role}
              </span>

              <p className="member-email">
                {member.email}
              </p>

              <div className="member-stats">
                <div>
                  <strong>{member.assigned}</strong>
                  <span>Assigned</span>
                </div>

                <div>
                  <strong>{member.completed}</strong>
                  <span>Completed</span>
                </div>
              </div>

              <button
                className="view-profile-btn"
                onClick={() =>
                  alert(`${member.name}'s profile will open here.`)
                }
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MyTeam;