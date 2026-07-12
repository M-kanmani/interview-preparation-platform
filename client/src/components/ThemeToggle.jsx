import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const isDark = theme === "dark";

  // --- Premium Toggle Button Styles ---
  const toggleBtnStyle = {
    backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
    color: isDark ? "#f8fafc" : "#0f172a",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.2s ease",
    boxShadow: isHovered ? "0 4px 6px -1px rgba(0,0,0,0.05)" : "none",
  };

  return (
    <button
      onClick={toggleTheme}
      style={toggleBtnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;