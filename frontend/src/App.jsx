import { useState } from "react";
import "./index.css";
import TasksPage from "./pages/TasksPage";
import CreateTaskPage from "./pages/CreateTaskPage";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LeaderDashboard from "./pages/LeaderDashboard";
import MemberDashboard from "./pages/MemberDashboard";


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

  if (currentPage === "register") {
    return <RegisterPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "login") {
    return <LoginPage setCurrentPage={setCurrentPage} />;
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