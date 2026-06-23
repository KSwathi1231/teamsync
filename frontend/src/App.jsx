import { useState } from "react";
import "./index.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import TaskList from "./components/TaskList";
import ProgressCard from "./components/ProgressCard";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

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

  if (currentPage === "landing") {
    return <LandingPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "register") {
    return <RegisterPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "login") {
    return <LoginPage setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="dashboard-content">
        <Topbar />

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
          <ProgressCard />
        </section>
      </main>
    </div>
  );
}

export default App;