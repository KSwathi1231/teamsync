function TaskList({ tasks }) {
  return (
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
  );
}

export default TaskList;