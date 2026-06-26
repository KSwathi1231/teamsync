function Topbar({ userName, title, subtitle, setCurrentPage, role }) {
  function openCreateTaskForm() {
    setCurrentPage("createTask");
  }

  return (
    <header className="topbar">
      <div>
        <h2>{title}</h2>
        <p>
          Welcome back, {userName} 👋
        </p>
        <p className="topbar-subtitle">{subtitle}</p>
      </div>

      {role === "leader" && (
        <button
          type="button"
          className="create-task-btn"
          onClick={openCreateTaskForm}
        >
          + Create Task
        </button>
      )}
    </header>
  );
}

export default Topbar;