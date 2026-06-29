import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function MyContribution({
  currentPage,
  setCurrentPage,
  tasks = [],
}) {

  const memberName = "Swathi";

  const assignedTasks = tasks.filter(
    task => task.assignee === memberName
  );

  const completedTasks = assignedTasks.filter(
    task => task.status === "Completed"
  );

  const pendingTasks = assignedTasks.filter(
    task => task.status !== "Completed"
  );

  const completion =
    assignedTasks.length === 0
      ? 0
      : Math.round(
          (completedTasks.length /
            assignedTasks.length) *
            100
        );

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
          title="My Contribution"
          subtitle="Track your personal performance."
          role="member"
          setCurrentPage={setCurrentPage}
        />

        <section className="analytics-grid">

          <div className="analytics-card">
            <h3>{assignedTasks.length}</h3>
            <p>Assigned Tasks</p>
          </div>

          <div className="analytics-card">
            <h3>{completedTasks.length}</h3>
            <p>Completed</p>
          </div>

          <div className="analytics-card">
            <h3>{pendingTasks.length}</h3>
            <p>Pending</p>
          </div>

          <div className="analytics-card">
            <h3>{completion}%</h3>
            <p>Completion Rate</p>
          </div>

        </section>

        <div className="table-card">

          <h2>Assigned Tasks</h2>

          <table>

            <thead>

              <tr>

                <th>Task</th>

                <th>Status</th>

                <th>Deadline</th>

              </tr>

            </thead>

            <tbody>

              {assignedTasks.length === 0 ? (

                <tr>

                  <td
                    colSpan="3"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                    }}
                  >
                    No tasks assigned.
                  </td>

                </tr>

              ) : (

                assignedTasks.map(task => (

                  <tr key={task.id}>

                    <td>{task.title}</td>

                    <td>{task.status}</td>

                    <td>{task.deadline}</td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default MyContribution;