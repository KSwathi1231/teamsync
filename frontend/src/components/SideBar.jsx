function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">TeamSync</h1>
      <p className="role-label">Team Leader</p>

      <nav className="nav-links">
        <a href="#dashboard" className="active">
          📊 Dashboard
        </a>
        <a href="#team">👥 My Team</a>
        <a href="#tasks">📋 Tasks</a>
        <a href="#standups">🗓 Stand-ups</a>
        <a href="#analytics">📈 Analytics</a>
        <a href="#profile">👤 Profile</a>
      </nav>

      <button className="logout-btn">Logout</button>
    </aside>
  );
}

export default Sidebar;