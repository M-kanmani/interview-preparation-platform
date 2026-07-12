function StatCard({ title, value, color, isDark }) {
  return (
    <div style={{
      backgroundColor: isDark ? "#1e293b" : "#ffffff",
      borderRadius: "16px",
      border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
      padding: "24px",
      transition: "all 0.3s ease",
    }}>
      <h3 style={{ margin: 0, fontSize: "0.9rem", fontWeight: "600", color: isDark ? "#94a3b8" : "#64748b" }}>{title}</h3>
      <p style={{ margin: "8px 0 0 0", fontSize: "2rem", fontWeight: "800", color: color }}>{value}</p>
    </div>
  );
}
export default StatCard;