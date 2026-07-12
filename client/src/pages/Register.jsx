import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Registration Successful!");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  // Modern UI Styles
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "85vh",
    padding: "40px 16px",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    border: "1px solid #f1f5f9",
  };

  const labelStyle = {
    display: "block",
    color: "#334155",
    fontWeight: "600",
    fontSize: "0.9rem",
    marginBottom: "6px",
  };

  const inputStyle = {
    width: "100%",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "11px 16px",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.2s ease",
    marginBottom: "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginTop: "12px",
  };

  return (
    <MainLayout>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "800", textCenter: "center", color: "#0f172a", marginBottom: "8px", textAlign: "center" }}>
            Create Account
          </h2>

          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "28px", fontSize: "0.95rem" }}>
            Start your interview preparation journey today.
          </p>

          <form onSubmit={handleRegister}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#2563eb";
                  e.target.style.boxShadow = "0 0 0 4px rgba(37, 99, 235, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#cbd5e1";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#2563eb";
                  e.target.style.boxShadow = "0 0 0 4px rgba(37, 99, 235, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#cbd5e1";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#2563eb";
                  e.target.style.boxShadow = "0 0 0 4px rgba(37, 99, 235, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#cbd5e1";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#2563eb";
                  e.target.style.boxShadow = "0 0 0 4px rgba(37, 99, 235, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#cbd5e1";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#2563eb"}
            >
              Register Now
            </button>
          </form>

          <p style={{ textAlign: "center", color: "#64748b", marginTop: "24px", fontSize: "0.9rem" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;