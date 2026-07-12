import ActivityCard from "./ActivityCard";
import { useTheme } from "../context/ThemeContext";

function RecentActivity() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionStyle = {
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "24px",
    width: "100%",
    transition: "all 0.3s ease",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: isDark ? "#f8fafc" : "#0f172a",
    marginBottom: "20px",
    margin: 0,
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Recent Activity</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ActivityCard title="Solved 'Two Sum' Question" time="10 minutes ago" isDark={isDark} />
        <ActivityCard title="Completed Mock Test #3" time="1 hour ago" isDark={isDark} />
        <ActivityCard title="Bookmarked Amazon Interview Questions" time="Yesterday" isDark={isDark} />
        <ActivityCard title="Added Notes for Binary Trees" time="2 days ago" isDark={isDark} />
      </div>
    </div>
  );
}

export default RecentActivity;