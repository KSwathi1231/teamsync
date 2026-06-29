import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import StatCard from "../../components/StatCard";
import TaskList from "../../components/TaskList";
import ProgressCard from "../../components/ProgressCard";

function MemberDashboard({ setCurrentPage }) {
  const stats = [
    { title: "My Assigned Tasks", value: "4", icon: "📋" },
    { title: "Completed Tasks", value: "2", icon: "✅" },
    { title: "Tasks In Progress", value: "1", icon: "🔄" },
    { title: "Stand-up Status", value: "Pending", icon: "🗓" },
  ];

  const myTasks = [
    {
      title: "Create login page UI",
      assignee: "You",
      deadline: "June 28",
      status: "In Progress",
    },
    {
      title: "Write project README",
      assignee: "You",
      deadline: "June 30",
      status: "To Do",
    },
    {
      title: "Create landing page",
      assignee: "You",
      deadline: "June 26",
      status: "Completed",
    },
  ];

  return (
    <div className="app-layout">
      <SideBar
        role="member"
        currentPage="memberDashboard"
        setCurrentPage={setCurrentPage}
      />

      <main className="dashboard-content">
        <TopBar
            userName="Team Member"
            title="My Team Workspace"
            subtitle="Track your assigned work and stay updated with your team."
            setCurrentPage={setCurrentPage}
            role="member"
        />

        <section className="workspace-heading">
          <div>
            <p className="workspace-label">YOUR TEAM</p>
            <h2>CodeCrafters</h2>
            <p>Project: TeamSync</p>
          </div>

          <div className="standup-reminder">
            <span>Daily Stand-up</span>
            <strong>Not submitted today</strong>
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
          <TaskList tasks={myTasks} />
          <ProgressCard
            completedTasks="2"
            totalTasks="4"
            percentage="50"
            message="You are halfway through your assigned work."
          />
        </section>
      </main>
    </div>
  );
}

export default MemberDashboard;