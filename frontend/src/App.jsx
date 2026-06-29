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
import "./styles/myTeam.css";
import "./styles/standups.css";
import "./styles/analytics.css";
import "./styles/profile.css";
import "./styles/dailyStandup.css";
import "./styles/memberTasks.css";
import "./styles/contribution.css";

import LandingPage from "./pages/auth/LandingPage";
import RegisterLeader from "./pages/auth/RegisterLeader";
import LeaderLogin from "./pages/auth/LeaderLogin";
import MemberLogin from "./pages/auth/MemberLogin";

import LeaderDashboard from "./pages/leader/LeaderDashboard";
import MemberDashboard from "./pages/member/MemberDashboard";

import TasksPage from "./pages/leader/TasksPage";
import CreateTaskPage from "./pages/leader/CreateTaskPage";
import MyTeam from "./pages/leader/MyTeam";
import Standups from "./pages/leader/Standups";
import Analytics from "./pages/leader/Analytics";
import LeaderProfile from "./pages/leader/Leaderprofile";
//member
import MyTasks from "./pages/member/MyTasks";
import DailyStandup from "./pages/member/DailyStandup";
import MyContribution from "./pages/member/MyContribution";
import MemberProfile from "./pages/member/MemberProfile";


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
  return (
    <MemberDashboard
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tasks={tasks}
      setTasks={setTasks}
    />
  );
  }

  if (currentPage === "myTeam") {
  return (
    <MyTeam
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

  if (currentPage === "standups") {
  return (
    <Standups
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

  if (currentPage === "analytics") {
  return (
    <Analytics
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tasks={tasks}
    />
  );
}

  if (currentPage === "profile") {
  return (
    <LeaderProfile
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
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
          tasks={tasks}
          setTasks={setTasks}
      />
    );
  }
  if(currentPage==="myTasks"){

    return(

        <MyTasks
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            tasks={tasks}
            setTasks={setTasks}
        />

    );
}
  if(currentPage==="dailyStandup"){

    return(

        <DailyStandup
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />

    );
  }
  if (currentPage === "myContribution") {
  return (
    <MyContribution
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tasks={tasks}
    />
  );
  }

if (currentPage === "memberProfile") {
  return (
    <MemberProfile
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

  return <LandingPage setCurrentPage={setCurrentPage} />;
}


export default App;