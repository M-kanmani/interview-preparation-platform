import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function SearchBar({ placeholder = "Search...", value = "", onChange }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Focus ஸ்டேட்டைக் கண்காணிக்க ஒரு புதிய ஸ்டேட்
  const [isFocused, setIsFocused] = useState(false);

  // --- Theme-based Dynamic Values ---
  const focusBorderColor = "#2563eb";
  const borderColor = isFocused 
    ? focusBorderColor 
    : (isDark ? "#334155" : "#cbd5e1");
    
  const bgColor = isDark ? "#1e293b" : "#ffffff";
  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const boxShadow = (isFocused && isDark) 
    ? "0 0 0 2px rgba(37, 99, 235, 0.2)" 
    : "none";

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
    transition: "color 0.2s ease",
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
    boxShadow: boxShadow,
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default SearchBar;