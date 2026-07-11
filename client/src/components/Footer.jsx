import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-4 text-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-200"
          : "bg-gray-900 text-white"
      }`}
    >
      <p>© 2026 Interview Preparation Platform. All rights reserved.</p>
    </footer>
  );
}

export default Footer;