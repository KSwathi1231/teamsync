import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";

function DailyStandup({ currentPage, setCurrentPage }) {
  const [standup, setStandup] = useState({
    completed: "",
    working: "",
    blocker: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setStandup((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !standup.completed.trim() ||
      !standup.working.trim() ||
      !standup.blocker.trim()
    ) {
      alert("Please complete all the fields.");
      return;
    }

    // Backend API will be called here later
    alert("Daily Stand-up submitted successfully!");

    setStandup({
      completed: "",
      working: "",
      blocker: "",
    });
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
          title="Daily Stand-up"
          subtitle="Share today's progress with your Team Leader."
          role="member"
          setCurrentPage={setCurrentPage}
        />

        <div className="standup-container">

          <div className="standup-card">

            <h2>Today's Stand-up</h2>

            <p>
              Submit your daily progress update before ending your work.
            </p>

            <div className="standup-note">

              <h4>Daily Stand-up Guidelines</h4>

              <p>
                • Mention what you completed today.
                <br />
                • Describe what you will work on next.
                <br />
                • Mention any blockers. If none, simply write <b>None</b>.
              </p>

            </div>

            <form
              className="standup-form"
              onSubmit={handleSubmit}
            >

              <div className="standup-group">

                <label>
                  ✅ What did you complete today?
                </label>

                <textarea
                  name="completed"
                  rows="4"
                  value={standup.completed}
                  onChange={handleChange}
                  placeholder="Example: Completed Login Page UI and integrated authentication."
                  maxLength="500"
                />

                <small>
                  {standup.completed.length}/500 characters
                </small>

              </div>

              <div className="standup-group">

                <label>
                  🚧 What are you working on next?
                </label>

                <textarea
                  name="working"
                  rows="4"
                  value={standup.working}
                  onChange={handleChange}
                  placeholder="Example: Working on Backend APIs and MongoDB integration."
                  maxLength="500"
                />

                <small>
                  {standup.working.length}/500 characters
                </small>

              </div>

              <div className="standup-group">

                <label>
                  ⚠ Any blockers?
                </label>

                <textarea
                  name="blocker"
                  rows="4"
                  value={standup.blocker}
                  onChange={handleChange}
                  placeholder="Example: Waiting for API response from backend team or write None."
                  maxLength="300"
                />

                <small>
                  {standup.blocker.length}/300 characters
                </small>

              </div>

              <div className="standup-buttons">

                <button
                  type="button"
                  className="standup-cancel"
                  onClick={() => setCurrentPage("memberDashboard")}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="standup-submit"
                >
                  Submit Stand-up
                </button>

              </div>

            </form>

          </div>

        </div>
      </main>
    </div>
  );
}

export default DailyStandup;