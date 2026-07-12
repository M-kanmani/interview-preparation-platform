import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function Home() {
  // Styles for clean layout & professional typography
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "85vh",
    width: "100%",
    padding: "0 24px",
    fontFamily: "'Inter', system-ui, sans-serif",
    backgroundColor: "#ffffff",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#0f172a", // Deep premium slate
    letterSpacing: "-1px",
    marginBottom: "16px",
    maxWidth: "800px",
    lineHeight: "1.2",
  };

  const descStyle = {
    fontSize: "1.15rem",
    color: "#475569", // Subdued muted blue-gray
    maxWidth: "600px",
    lineHeight: "1.6",
    marginBottom: "36px",
  };

  const btnContainerStyle = {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  };

  // Base style for buttons
  const baseBtnStyle = {
    padding: "12px 32px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
  };

  return (
    <MainLayout>
      <section style={sectionStyle}>

        <h1 style={titleStyle}>
          Welcome to Interview Preparation Platform
        </h1>

        <p style={descStyle}>
          Prepare for coding interviews, aptitude tests, mock interviews, and track your progress in one place.
        </p>

        <div style={btnContainerStyle}>
          <Link
            to="/login"
            style={{
              ...baseBtnStyle,
              backgroundColor: "#2563eb",
              color: "#ffffff"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#1d4ed8";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              ...baseBtnStyle,
              backgroundColor: "#ffffff",
              color: "#0f172a",
              border: "1px solid #e2e8f0"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f8fafc";
              e.target.style.borderColor = "#cbd5e1";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.borderColor = "#e2e8f0";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Register
          </Link>
        </div>

      </section>
    </MainLayout>
  );
}

export default Home;