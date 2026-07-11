import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function DashboardLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;