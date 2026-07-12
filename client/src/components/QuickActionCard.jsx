import { Link } from "react-router-dom";
import { useState } from "react";

function QuickActionCard({ title, description, icon, to }) {
  const [isHovered, setIsHovered] = useState(false);

  // --- Inline Styles ---
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    padding: "24px",
    boxShadow: isHovered 
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)" 
      : "0 4px 6px -1px rgba(0,0,0,0.02)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "block",
    textDecoration: "none",
    fontFamily: "'Inter', system-ui, sans-serif",
    cursor: "pointer",
  };

  const iconWrapperStyle = {
    fontSize: "2rem",
    marginBottom: "16px",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 8px 0",
  };

  const descStyle = {
    fontSize: "0.9rem",
    color: "#64748b",
    lineHeight: "1.5",
    margin: 0,
  };

  return (
    <Link
      to={to}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconWrapperStyle}>
        {icon}
      </div>

      <h3 style={titleStyle}>
        {title}
      </h3>

      <p style={descStyle}>
        {description}
      </p>
    </Link>
  );
}

export default QuickActionCard;