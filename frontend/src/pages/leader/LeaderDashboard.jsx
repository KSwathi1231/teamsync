import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import StatCard from "../../components/StatCard";
import TaskList from "../../components/TaskList";
import ProgressCard from "../../components/ProgressCard";

function LeaderDashboard({ currentPage, setCurrentPage ,tasks}) {
  const stats = [
    { title: "Team Members", value: "5", icon: "👥" },
    { title: "Total Tasks", value: "18", icon: "📋" },
    { title: "Completed Tasks", value: "10", icon: "✅" },
    { title: "Overdue Tasks", value: "2", icon: "⚠️" },
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
            title="TeamSync Project Workspace"
            subtitle="Manage your team, tasks, deadlines, and contribution."
            setCurrentPage={setCurrentPage}
            role="leader"
        />

        <section className="workspace-heading">
          <div>
            <p className="workspace-label">YOUR TEAM</p>
            <h2>CodeCrafters</h2>
            <p>Project: TeamSync</p>
          </div>

          <div className="invite-code-box">
            <span>Team Invite Code</span>
            <strong>TEAM-7X92</strong>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </section>

        <section className="dashboard-grid">
          <TaskList tasks={tasks} />
          <ProgressCard
            completedTasks="10"
            totalTasks="18"
            percentage="56"
            message="Your team is making steady progress."
          />
        </section>
      </main>
    </div>
  );
}

export default LeaderDashboard;