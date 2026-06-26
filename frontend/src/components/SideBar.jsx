function Sidebar({ role, currentPage, setCurrentPage }) {
  const leaderLinks = [
    ["📊 Dashboard", "leaderDashboard"],
    ["👥 My Team", "myTeam"],
    ["📋 Tasks", "tasks"],
    ["🗓 Stand-ups", "standups"],
    ["📈 Analytics", "analytics"],
    ["👤 Profile", "profile"],
  ];

  const memberLinks = [
    ["📊 Dashboard", "memberDashboard"],
    ["📋 My Tasks", "myTasks"],
    ["🗓 Daily Stand-up", "daily-standups"],
    ["📈 My Contribution", "myContribution"],
    ["👤 Profile", "myprofile"],
  ];

  const links = role === "leader" ? leaderLinks : memberLinks;

  return (
    <aside className="sidebar">
      <h1 className="logo">TeamSync</h1>

      <p className="role-label">
        {role === "leader" ? "Team Leader" : "Team Member"}
      </p>

      <nav className="nav-links">
          {links.map(([label, page]) => (
            <button
              key={label}
              className={`nav-button ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {label}
            </button>
          ))}
      </nav>
      

      <button
        type="button"
        className="logout-btn"
        onClick={() => setCurrentPage("landing")}
      >
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;