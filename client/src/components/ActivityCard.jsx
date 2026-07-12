function ActivityCard({ title, time, isDark }) {
  const cardStyle = {
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
    transition: "all 0.3s ease",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  return (
    <div style={cardStyle}>
      <div>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "600", color: isDark ? "#f1f5f9" : "#1e293b" }}>
          {title}
        </h3>
        <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: isDark ? "#94a3b8" : "#64748b" }}>
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;