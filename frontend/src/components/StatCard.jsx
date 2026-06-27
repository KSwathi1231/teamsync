function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div>
        <p>{title}</p>
        <h3>{value}</h3>
      </div>

      <span className="stat-card-icon">{icon}</span>
    </div>
  );
}

export default StatCard;