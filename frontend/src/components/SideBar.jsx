function Sidebar({ role, currentPage, setCurrentPage }) {
  const leaderLinks = [
    {
      icon: "📊",
      label: "Dashboard",
      page: "leaderDashboard",
    },
    {
      icon: "👥",
      label: "My Team",
      page: "myTeam",
    },
    {
      icon: "📋",
      label: "Tasks",
      page: "tasks",
    },
    {
      icon: "🗓",
      label: "Stand-ups",
      page: "standups",
    },
    {
      icon: "📈",
      label: "Analytics",
      page: "analytics",
    },
    {
      icon: "👤",
      label: "Profile",
      page: "profile",
    },
  ];

  const memberLinks = [
    {
      icon: "📊",
      label: "Dashboard",
      page: "memberDashboard",
    },
    {
      icon: "📋",
      label: "My Tasks",
      page: "myTasks",
    },
    {
      icon: "🗓",
      label: "Daily Stand-up",
      page: "dailyStandup",
    },
    {
      icon: "📈",
      label: "My Contribution",
      page: "myContribution",
    },
    {
      icon: "👤",
      label: "Profile",
      page: "memberProfile",
    },
  ];

  const links = role === "leader" ? leaderLinks : memberLinks;

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h1 className="sidebar-logo">TeamSync</h1>

        <p className="sidebar-role">
          {role === "leader" ? "Team Leader" : "Team Member"}
        </p>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <button
              key={link.page}
              type="button"
              className={`sidebar-link ${
                currentPage === link.page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(link.page)}
            >
              <span className="sidebar-icon">
                {link.icon}
              </span>

              <span>{link.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button
          type="button"
          className="logout-btn"
          onClick={() => setCurrentPage("landing")}
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;