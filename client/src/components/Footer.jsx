import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const footerStyle = {
    padding: "16px 0",
    textAlign: "center",
    backgroundColor: isDark ? "#1e293b" : "#0f172a",
    color: isDark ? "#cbd5e1" : "#ffffff",
    borderTop: isDark ? "1px solid #334155" : "none",
    transition: "all 0.3s ease",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        © 2026 Interview Preparation Platform. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;