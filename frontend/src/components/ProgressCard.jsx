function ProgressCard({ completedTasks, totalTasks, percentage, message }) {
  return (
    <div className="progress-card card">
      <h3>Project Progress</h3>
      <p className="progress-message">
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="progress-circle">
        <div
          className="progress-inner"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <h2>{percentage}%</h2>
      <p className="progress-message">{message}</p>
    </div>
  );
}

export default ProgressCard;