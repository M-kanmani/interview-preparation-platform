function ProgressBar({ title, percentage }) {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    padding: "24px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const flexHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  };

  const trackStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "#e2e8f0",
    borderRadius: "999px",
    overflow: "hidden",
  };

  const fillStyle = {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: "999px",
    width: `${percentage}%`,
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div style={cardStyle}>
      <div style={flexHeaderStyle}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "600", color: "#475569" }}>{title}</h3>
        <span style={{ fontWeight: "750", color: "#2563eb" }}>{percentage}%</span>
      </div>

      <div style={trackStyle}>
        <div style={fillStyle}></div>
      </div>
    </div>
  );
}

export default ProgressBar;