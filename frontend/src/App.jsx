import { useState } from "react";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/dashboard.css";
import "./styles/tasks.css";
import "./styles/landing.css";
import "./styles/auth.css";
import "./styles/register.css";
import "./styles/responsive.css";

import LandingPage from "./pages/auth/LandingPage";
import RegisterLeader from "./pages/auth/RegisterLeader";
import LeaderLogin from "./pages/auth/LeaderLogin";
import MemberLogin from "./pages/auth/MemberLogin";

import LeaderDashboard from "./pages/leader/LeaderDashboard";
import MemberDashboard from "./pages/member/MemberDashboard";

import TasksPage from "./pages/leader/TasksPage";
import CreateTaskPage from "./pages/leader/CreateTaskPage";


function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create login page UI",
      days: 2,
      deadline: "June 28",
      assignee: "Swathi",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Design database schema",
      days: 3,
      deadline: "June 30",
      assignee: "",
      status: "To Do",
    },
    {
      id: 3,
      title: "Build task dashboard",
      days: 2,
      deadline: "June 26",
      assignee: "Rahul",
      status: "Completed",
    },
  ]);

  if (currentPage === "landing") {
    return <LandingPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "registerLeader") {
  return (
    <RegisterLeader
      setCurrentPage={setCurrentPage}
    />
  );
}

  if (currentPage === "leaderLogin") {
  return <LeaderLogin setCurrentPage={setCurrentPage} />;
}

if (currentPage === "memberLogin") {
  return <MemberLogin setCurrentPage={setCurrentPage} />;
}

  if (currentPage === "leaderDashboard") {
    return <LeaderDashboard 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
       tasks={tasks}
    />;
  }


  if (currentPage === "memberDashboard") {
    return <MemberDashboard setCurrentPage={setCurrentPage} />;
  }

   if (currentPage === "myTeam") {
    return <h1>My Team Page</h1>;
  }

  if (currentPage === "standups") {
    return <h1>Stand-ups Page</h1>;
  }

  if (currentPage === "analytics") {
    return <h1>Analytics Page</h1>;
  }

  if (currentPage === "profile") {
    return <h1>Profile Page</h1>;
  }
  if (currentPage === "tasks") {
    return (
      <TasksPage
        setCurrentPage={setCurrentPage}
        tasks={tasks}
        setTasks={setTasks}
      />
    );
  }

  if (currentPage === "createTask") {
    return (
      <CreateTaskPage
        setCurrentPage={setCurrentPage}
        setTasks={setTasks}
      />
    );
  }

  return <LandingPage setCurrentPage={setCurrentPage} />;
}


export default App;