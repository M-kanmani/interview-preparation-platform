import QuickActionCard from "./QuickActionCard";
import { useTheme } from "../context/ThemeContext";
import { FaLaptopCode, FaBook, FaBuilding, FaStickyNote } from "react-icons/fa";

function QuickActions() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const titleStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: isDark ? "#f8fafc" : "#0f172a",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };

  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <h2 style={titleStyle}>Quick Actions</h2>
      <div style={gridStyle}>
        <QuickActionCard title="Mock Test" description="Practice full interview tests." icon={<FaLaptopCode />} to="/mock-test" isDark={isDark} />
        <QuickActionCard title="Questions" description="Solve coding interview questions." icon={<FaBook />} to="/questions" isDark={isDark} />
        <QuickActionCard title="Companies" description="Explore company-wise questions." icon={<FaBuilding />} to="/companies" isDark={isDark} />
        <QuickActionCard title="Notes" description="View your saved interview notes." icon={<FaStickyNote />} to="/notes" isDark={isDark} />
      </div>
    </div>
  );
}

export default QuickActions;