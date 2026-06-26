import { useState } from "react";
import SideBar from "../../components/SideBar";

function TasksPage({ setCurrentPage, tasks, setTasks }) {
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const teamMembers = ["Swathi", "Anjali", "Rahul", "Priya", "Kiran"];

  function assignTask(taskId, memberName) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, assignee: memberName, status: "To Do" }
          : task
      )
    );

    setSelectedTaskId(null);
  }

  return (
    <div className="app-layout">
      <Sidebar role="leader" currentPage="tasks" setCurrentPage={setCurrentPage} />

      <main className="dashboard-content">
        <header className="topbar">
          <div>
            <h2>Project Tasks</h2>
            <p>View, create, and assign tasks to your team members.</p>
          </div>

          <button
            className="create-task-btn"
            onClick={() => setCurrentPage("createTask")}
          >
            + Create Task
          </button>
        </header>

        <div className="all-tasks-container">
          <h3>All Tasks ({tasks.length})</h3>

          {tasks.map((task) => (
            <div className="project-task-card" key={task.id}>
              <div>
                <h4>{task.title}</h4>
                <p>
                  Duration: {task.days} day{task.days > 1 ? "s" : ""}
                </p>
                <p>
                  {task.assignee
                    ? `Assigned to ${task.assignee}`
                    : "Not assigned yet"}
                </p>
              </div>

              <div className="task-action-area">
                <span
                  className={`status ${task.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {task.status}
                </span>

                {!task.assignee ? (
                  <div className="assign-area">
                    <button
                      className="assign-btn"
                      onClick={() =>
                        setSelectedTaskId(
                          selectedTaskId === task.id ? null : task.id
                        )
                      }
                    >
                      Assign
                    </button>

                    {selectedTaskId === task.id && (
                      <div className="member-dropdown">
                        {teamMembers.map((member) => (
                          <button
                            key={member}
                            onClick={() => assignTask(task.id, member)}
                          >
                            {member}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button className="assigned-btn">
                    Assigned to {task.assignee}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TasksPage;