function ProgressCard({ completedTasks, totalTasks, percentage, message }) {
  return (
    <div className="progress-card card">
      <h3>Project Progress</h3>
      <p className="progress-text">
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <h2>{percentage}%</h2>
      <p className="progress-subtext">{message}</p>
    </div>
  );
}

export default ProgressCard;