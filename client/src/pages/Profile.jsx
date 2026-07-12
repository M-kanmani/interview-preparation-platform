import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useTheme } from "../context/ThemeContext";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Profile() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Chennai, India"
  });

  const [formData, setFormData] = useState(user);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function saveProfile() {
    setUser(formData);
    setEdit(false);
  }

  // --- Styles ---
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "800",
    color: isDark ? "#f8fafc" : "#0f172a",
    margin: 0,
  };

  const subTitleStyle = {
    color: isDark ? "#94a3b8" : "#64748b",
    marginTop: "8px",
    margin: 0,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  };

  const statCardStyle = {
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
    transition: "all 0.3s ease",
  };

  const profileCardStyle = {
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
    transition: "all 0.3s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: isDark ? "1px solid #334155" : "1px solid #cbd5e1",
    backgroundColor: isDark ? "#0f172a" : "#ffffff",
    color: isDark ? "#f8fafc" : "#0f172a",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "16px",
  };

  const btnPrimary = {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.95rem",
  };

  const btnSuccess = {
    ...btnPrimary,
    backgroundColor: "#16a34a",
  };

  return (
    <DashboardLayout>
      <div style={containerStyle}>
        {/* Title */}
        <div>
          <h1 style={titleStyle}>My Profile</h1>
          <p style={subTitleStyle}>Manage your profile information.</p>
        </div>

        {/* Stats Grid */}
        <div style={gridStyle}>
          <div style={statCardStyle}>
            <h3 style={{ margin: 0, fontSize: "0.9rem", color: isDark ? "#94a3b8" : "#64748b" }}>Questions Solved</h3>
            <p style={{ margin: "8px 0 0 0", fontSize: "2rem", fontWeight: "800", color: "#2563eb" }}>120</p>
          </div>
          <div style={statCardStyle}>
            <h3 style={{ margin: 0, fontSize: "0.9rem", color: isDark ? "#94a3b8" : "#64748b" }}>Bookmarks</h3>
            <p style={{ margin: "8px 0 0 0", fontSize: "2rem", fontWeight: "800", color: "#16a34a" }}>35</p>
          </div>
          <div style={statCardStyle}>
            <h3 style={{ margin: 0, fontSize: "0.9rem", color: isDark ? "#94a3b8" : "#64748b" }}>Mock Tests</h3>
            <p style={{ margin: "8px 0 0 0", fontSize: "2rem", fontWeight: "800", color: "#ea580c" }}>10</p>
          </div>
          <div style={statCardStyle}>
            <h3 style={{ margin: 0, fontSize: "0.9rem", color: isDark ? "#94a3b8" : "#64748b" }}>Achievements</h3>
            <p style={{ margin: "8px 0 0 0", fontSize: "2rem", fontWeight: "800", color: "#9333ea" }}>8</p>
          </div>
        </div>

        {/* Profile Card */}
        <div style={profileCardStyle}>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", itemsAlignment: "center", gap: "32px" }}>
            {/* Avatar */}
            <div style={{ color: "#2563eb", display: "flex", alignItems: "center" }}>
              <FaUserCircle size={100} />
            </div>

            <div style={{ flex: 1, minWidth: "260px" }}>
              {edit ? (
                <div>
                  <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="Name" />
                  <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="Email" />
                  <input name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="Phone" />
                  <input name="location" value={formData.location} onChange={handleChange} style={inputStyle} placeholder="Location" />
                  <button onClick={saveProfile} style={btnSuccess}>Save Changes</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "750", margin: 0, color: isDark ? "#f8fafc" : "#0f172a" }}>{user.name}</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: isDark ? "#cbd5e1" : "#475569" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><FaEnvelope /> <span>{user.email}</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><FaPhone /> <span>{user.phone}</span></div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><FaMapMarkerAlt /> <span>{user.location}</span></div>
                  </div>
                  <button onClick={() => setEdit(true)} style={{ ...btnPrimary, alignSelf: "flex-start", marginTop: "8px" }}>Edit Profile</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;