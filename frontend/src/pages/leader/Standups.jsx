import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function Standups({ currentPage, setCurrentPage }) {

  const [updates] = useState([
    {
      id: 1,
      member: "Swathi",
      completed: "Designed Login Page",
      working: "Authentication Backend",
      blocker: "None",
      time: "10:15 AM",
    },
    {
      id: 2,
      member: "Rahul",
      completed: "Navbar Component",
      working: "Task Page UI",
      blocker: "Waiting for API",
      time: "11:30 AM",
    },
    {
      id: 3,
      member: "Priya",
      completed: "MongoDB Schema",
      working: "Task APIs",
      blocker: "None",
      time: "12:05 PM",
    },
  ]);

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
          title="Daily Stand-ups"
          subtitle="Monitor today's updates from every team member."
          role="leader"
          setCurrentPage={setCurrentPage}
        />

        <div className="standup-header">

          <div>
            <h2>Today's Stand-ups</h2>
            <p>Track daily progress across your team.</p>
          </div>

          <button
            className="create-task-btn"
            onClick={() => alert("Members will submit stand-ups from their dashboard.")}
          >
            View Today's Summary
          </button>

        </div>

        <div className="standup-list">

          {updates.map((update) => (

            <div className="standup-card" key={update.id}>

              <div className="standup-top">

                <div>

                  <h3>{update.member}</h3>

                  <span>{update.time}</span>

                </div>

                <span className="standup-status">
                  Submitted
                </span>

              </div>

              <div className="standup-section">

                <h4>✅ Completed</h4>

                <p>{update.completed}</p>

              </div>

              <div className="standup-section">

                <h4>🚧 Working On</h4>

                <p>{update.working}</p>

              </div>

              <div className="standup-section">

                <h4>⚠ Blockers</h4>

                <p>{update.blocker}</p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Standups;