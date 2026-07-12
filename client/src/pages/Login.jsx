import MainLayout from "../layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      toast.error("Please register first");
      return;
    }
    if (email === savedUser.email && password === savedUser.password) {
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/tips");
      }, 1500);
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  // Modern UI Styles
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "40px 16px",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "420px",
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
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.2s ease",
    marginBottom: "20px",
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
    marginTop: "10px",
  };

  return (
    <MainLayout>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: "2rem", fontWeight: "800", textCenter: "center", color: "#0f172a", marginBottom: "8px", textAlign: "center" }}>
            Welcome Back
          </h2>

          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "32px", fontSize: "0.95rem" }}>
            Login to continue your interview preparation.
          </p>

          <form onSubmit={handleLogin}>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              Sign In
            </button>
          </form>

          <p style={{ textAlign: "center", color: "#64748b", marginTop: "24px", fontSize: "0.9rem" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;