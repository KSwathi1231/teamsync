import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function MyTasks({ currentPage, setCurrentPage, tasks = [], setTasks }) {

  const [search, setSearch] = useState("");

  const memberName = "Swathi";

  const memberTasks = tasks.filter(
    task =>
      task.assignee === memberName ||
      task.assignee === ""      // temporary until backend
  );

  const filteredTasks = memberTasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  function markCompleted(id) {

    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id
          ? { ...task, status: "Completed" }
          : task
      )
    );

  }

  return (

    <div className="app-layout">

      <SideBar
        role="member"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">

        <TopBar
          userName="Swathi"
          title="My Tasks"
          subtitle="View and complete your assigned work."
          role="member"
          setCurrentPage={setCurrentPage}
        />

        <div className="tasks-header">

          <div>

            <h2>Assigned Tasks</h2>

            <p>
              Complete your assigned tasks before the deadline.
            </p>

          </div>

        </div>

        <div className="team-search">

          <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

        <div className="task-list">

          {filteredTasks.length === 0 ? (

            <div className="empty-task">

              <h3>No Tasks Found</h3>

              <p>
                You don't have any assigned tasks yet.
              </p>

            </div>

          ) : (

            filteredTasks.map(task => (

              <div className="task-card" key={task.id}>

                <div className="task-top">

                  <h3 className="task-title">
                    {task.title}
                  </h3>

                  <span
                    className={`status-badge status-${task.status
                      .toLowerCase()
                      .replace(/\s+/g,"-")}`}
                  >
                    {task.status}
                  </span>

                </div>

                <p className="task-description">

                  {task.description || "No description provided."}

                </p>

                <div className="task-details">

                  <span className="task-chip">

                    📅 Deadline : {task.deadline}

                  </span>

                  <span className="task-chip">

                    👤 Assigned to : {memberName}

                  </span>

                </div>

                {task.status !== "Completed" && (

                  <button
                    className="save-btn"
                    onClick={()=>markCompleted(task.id)}
                  >

                    Mark as Completed

                  </button>

                )}

              </div>

            ))

          )}

        </div>

      </main>

    </div>

  );

}

export default MyTasks;