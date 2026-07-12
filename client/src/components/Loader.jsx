import React from "react";
import { useTheme } from "../context/ThemeContext";

function Loader() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // --- Inline Styles for Animation ---
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    width: "100%",
  };

  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: `4px solid ${isDark ? "#334155" : "#e2e8f0"}`,
    borderTop: "4px solid #2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const textStyle = {
    marginTop: "12px",
    fontSize: "0.95rem",
    color: isDark ? "#94a3b8" : "#64748b",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      {/* CSS Animation-க்காக ஒரு ஸ்டைல் டேக் */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={spinnerStyle}></div>
      <div style={textStyle}>Searching questions...</div>
    </div>
  );
}

export default Loader;