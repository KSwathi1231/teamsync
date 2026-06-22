function ProgressCard() {
  return (
    <div className="progress-card card">
      <h3>Project Progress</h3>
      <p className="progress-text">10 of 18 tasks completed</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <h2>56%</h2>
      <p className="progress-subtext">Your team is making good progress!</p>
    </div>
  );
}

export default ProgressCard;