import "./index.css";

function App() {
  const stats = [
    { title: "Total Members", value: "5", icon: "👥" },
    { title: "Total Tasks", value: "18", icon: "📋" },
    { title: "Completed Tasks", value: "10", icon: "✅" },
    { title: "Pending Tasks", value: "8", icon: "⏳" },
  ];

  const tasks = [
    {
      title: "Create login page UI",
      assignee: "Swathi",
      deadline: "June 25",
      status: "In Progress",
    },
    {
      title: "Design dashboard layout",
      assignee: "Anjali",
      deadline: "June 26",
      status: "To Do",
    },
    {
      title: "Create MongoDB models",
      assignee: "Rahul",
      deadline: "June 27",
      status: "Completed",
    },
  ];

  return (
    <div className="app-layout">
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

      <main className="dashboard-content">
        <header className="topbar">
          <div>
            <h2>Welcome back, Swathi 👋</h2>
            <p>Here is your team’s project progress today.</p>
          </div>

          <button className="create-task-btn">+ Create Task</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.title}>
              <div>
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
              </div>
              <span className="stat-icon">{stat.icon}</span>
            </div>
          ))}
        </section>

        <section className="dashboard-grid">
          <div className="recent-tasks card">
            <div className="section-heading">
              <h3>Recent Tasks</h3>
              <button>View All</button>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <div className="task-item" key={task.title}>
                  <div>
                    <h4>{task.title}</h4>
                    <p>
                      Assigned to {task.assignee} · Due {task.deadline}
                    </p>
                  </div>

                  <span
                    className={`status ${task.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="progress-card card">
            <h3>Project Progress</h3>
            <p className="progress-text">10 of 18 tasks completed</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <h2>56%</h2>
            <p className="progress-subtext">Your team is making good progress!</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;