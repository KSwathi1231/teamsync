import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function Analytics({ currentPage, setCurrentPage, tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const overdueTasks = tasks.filter(
    (task) => task.status === "Overdue"
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const contributors = [
    {
      name: "Swathi",
      completed: 8,
      assigned: 10,
    },
    {
      name: "Rahul",
      completed: 6,
      assigned: 8,
    },
    {
      name: "Priya",
      completed: 5,
      assigned: 6,
    },
    {
      name: "Anjali",
      completed: 4,
      assigned: 7,
    },
    {
      name: "Kiran",
      completed: 3,
      assigned: 5,
    },
  ];

  return (
    <div className="app-layout">

      <SideBar
        role="leader"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">

        <TopBar
          userName="Swathi"
          title="Analytics"
          subtitle="Track your team's productivity and project progress."
          role="leader"
          setCurrentPage={setCurrentPage}
        />

        <section className="analytics-grid">

          <div className="analytics-card">
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="analytics-card">
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>

          <div className="analytics-card">
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>

          <div className="analytics-card">
            <h3>{overdueTasks}</h3>
            <p>Overdue</p>
          </div>

          <div className="analytics-card">
            <h3>5</h3>
            <p>Team Members</p>
          </div>

          <div className="analytics-card">
            <h3>{progress}%</h3>
            <p>Overall Progress</p>
          </div>

        </section>

        <section className="contribution-section">

          <div className="table-card">

            <h2>Team Contribution</h2>

            <table>

              <thead>

                <tr>

                  <th>Member</th>

                  <th>Assigned</th>

                  <th>Completed</th>

                  <th>Completion %</th>

                </tr>

              </thead>

              <tbody>

                {contributors.map((member) => {

                  const percentage = Math.round(
                    (member.completed / member.assigned) * 100
                  );

                  return (

                    <tr key={member.name}>

                      <td>{member.name}</td>

                      <td>{member.assigned}</td>

                      <td>{member.completed}</td>

                      <td>{percentage}%</td>

                    </tr>

                  );

                })}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Analytics;