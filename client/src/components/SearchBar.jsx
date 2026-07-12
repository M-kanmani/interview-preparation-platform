import { FaSearch } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function SearchBar({ placeholder = "Search...", value = "", onChange }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // --- Theme-based Dynamic Values ---
  const borderColor = isDark ? "#334155" : "#cbd5e1";
  const focusBorderColor = "#2563eb";
  const bgColor = isDark ? "#1e293b" : "#ffffff";
  const textColor = isDark ? "#f8fafc" : "#0f172a";

  // --- Inline Styles ---
  const wrapperStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "360px",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const iconStyle = {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    color: isDark ? "#64748b" : "#94a3b8",
    pointerEvents: "none",
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 16px 11px 40px",
    border: `1px solid ${borderColor}`,
    borderRadius: "10px",
    backgroundColor: bgColor,
    color: textColor,
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  };

  return (
    <div style={wrapperStyle}>
      <FaSearch style={iconStyle} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        // Focus state-il dynamic input element border toggles
        onFocus={(e) => {
          e.target.style.borderColor = focusBorderColor;
          if (isDark) e.target.style.boxShadow = "0 0 0 2px rgba(37, 99, 235, 0.2)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = borderColor;
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

export default SearchBar;