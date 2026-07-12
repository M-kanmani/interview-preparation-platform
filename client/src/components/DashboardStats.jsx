import StatCard from "./StatCard";
import { useTheme } from "../context/ThemeContext";

function DashboardStats() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    width: "100%",
  };

  return (
    <div style={statsGridStyle}>
      <StatCard title="Questions Solved" value="120" color="#3b82f6" isDark={isDark} />
      <StatCard title="Companies Covered" value="18" color="#22c55e" isDark={isDark} />
      <StatCard title="Mock Tests" value="9" color="#f97316" isDark={isDark} />
      <StatCard title="Success Rate" value="82%" color="#a855f7" isDark={isDark} />
    </div>
  );
}

export default DashboardStats;