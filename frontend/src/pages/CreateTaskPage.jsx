import { useState } from "react";
import Sidebar from "../components/Sidebar";

function CreateTaskPage({ setCurrentPage, setTasks }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [days, setDays] = useState("");

  function handleCreateTask(event) {
    event.preventDefault();

    if (!taskTitle || !days) {
      return;
    }

        const newTask = {
    id: Date.now(),
    title: taskTitle,
    days: Number(days),
    deadline: `${days} day${Number(days) > 1 ? "s" : ""}`,
    assignee: "",
    status: "To Do",
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);

    setCurrentPage("tasks");
  }

  return (
    <div className="app-layout">
      <Sidebar
        role="leader"
        currentPage="createTask"
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">
        <header className="topbar">
          <div>
            <h2>Create New Task</h2>
            <p>Add a task, then assign it to a team member.</p>
          </div>
        </header>

        <div className="create-task-form-card">
          <form className="auth-form" onSubmit={handleCreateTask}>
            <label>Task Name</label>
            <input
              type="text"
              placeholder="Example: Create MongoDB user model"
              value={taskTitle}
              onChange={(event) => setTaskTitle(event.target.value)}
              required
            />

            <label>Number of Days to Complete</label>
            <input
              type="number"
              min="1"
              placeholder="Example: 3"
              value={days}
              onChange={(event) => setDays(event.target.value)}
              required
            />

            <div className="task-form-buttons">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setCurrentPage("tasks")}
              >
                Cancel
              </button>

              <button type="submit" className="auth-submit-btn">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateTaskPage;