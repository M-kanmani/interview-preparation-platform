import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaHome, FaQuestionCircle, FaBookmark, FaStickyNote, FaChartLine, FaUser } from "react-icons/fa";

function Sidebar() {
  const { theme } = useTheme();
  
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Questions", path: "/questions", icon: <FaQuestionCircle /> },
    { name: "Bookmarks", path: "/bookmarks", icon: <FaBookmark /> },
    { name: "Notes", path: "/notes", icon: <FaStickyNote /> },
    { name: "Progress", path: "/progress", icon: <FaChartLine /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
  ];


  const sidebarStyle = {
    width: "260px",
    backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff", 
    borderRight: theme === "dark" ? "1px solid #334155" : "1px solid #e2e8f0",
    minHeight: "100vh",
    padding: "24px 16px",
    boxSizing: "border-box",
    fontFamily: "'Inter', system-ui, sans-serif",
    transition: "all 0.3s ease",
  };

  const navContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "24px",
  };

  return (
    <aside style={sidebarStyle}>
      <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#2563eb", margin: "0 0 0 12px" }}>
        PrepPortal
      </h2>

      <nav style={navContainerStyle}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.95rem",
              backgroundColor: isActive ? "#2563eb" : "transparent",
              // ஆக்டிவ் இல்லாத டெக்ஸ்ட் கலர் டார்க் மோடுக்கு ஏத்த மாதிரி மாறும்
              color: isActive ? "#ffffff" : (theme === "dark" ? "#94a3b8" : "#475569"),
              transition: "all 0.2s",
            })}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;