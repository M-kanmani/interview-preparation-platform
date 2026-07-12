import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function MainLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const layoutStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: isDark ? "#0f172a" : "#f8fafc",
    color: isDark ? "#f8fafc" : "#0f172a",
    transition: "all 0.3s ease",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={{ flex: 1, width: "100%" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;