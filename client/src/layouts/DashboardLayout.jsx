import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function DashboardLayout({ children }) {
  const { theme } = useTheme();

  // Flexbox container properties for Sidebar alongside Main panel
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
    color: theme === "dark" ? "#ffffff" : "#0f172a",
    transition: "background-color 0.3s ease",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const mainWrapperStyle = {
    display: "flex",
    flex: 1,
  };

  const contentStyle = {
    flex: 1,
    padding: "32px",
    boxSizing: "border-box",
    overflowY: "auto",
  };

  return (
    <div style={layoutStyle}>
      <Navbar />

      <div style={mainWrapperStyle}>
        <Sidebar />

        <main style={contentStyle}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;