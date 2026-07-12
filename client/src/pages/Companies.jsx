import { useState } from "react";
import companies from "../data/companies";

function Companies() {
  const [company, setCompany] = useState(null);

  // --- Inline Premium Styles ---
  const pageContainerStyle = {
    padding: "40px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Inter', system-ui, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  };

  const pageTitleStyle = {
    fontSize: "2.25rem",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "32px",
    letterSpacing: "-0.5px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "24px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.2s ease-in-out",
  };

  const companyNameStyle = {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "4px",
  };

  const roleTextStyle = {
    fontSize: "0.95rem",
    color: "#475569",
    fontWeight: "500",
    marginBottom: "16px",
  };

  const infoRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "0.85rem",
  };

  const getDifficultyStyle = (diff) => {
    const base = { padding: "4px 10px", borderRadius: "6px", fontWeight: "600" };
    if (diff === "Easy") return { ...base, backgroundColor: "#f0fdf4", color: "#16a34a" };
    if (diff === "Medium") return { ...base, backgroundColor: "#fff7ed", color: "#ea580c" };
    return { ...base, backgroundColor: "#fef2f2", color: "#dc2626" };
  };

  const countBadgeStyle = {
    backgroundColor: "#f1f5f9",
    color: "#334155",
    padding: "4px 10px",
    borderRadius: "6px",
    fontWeight: "600",
  };

  const primaryBtnStyle = {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background 0.2s",
  };

  // --- Modal Backdrop & Layout ---
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    padding: "16px",
  };

  const modalBoxStyle = {
    backgroundColor: "#ffffff",
    maxWidth: "550px",
    width: "100%",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    maxHeight: "85vh",
    overflowY: "auto",
  };

  const questionListStyle = {
    listStyleType: "none",
    padding: 0,
    margin: "0 0 24px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const questionItemStyle = {
    backgroundColor: "#f8fafc",
    padding: "14px 16px",
    borderRadius: "8px",
    borderLeft: "4px solid #2563eb",
    color: "#334155",
    fontSize: "0.95rem",
    fontWeight: "500",
    lineHeight: "1.5",
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={pageTitleStyle}>Target Companies</h1>

      <div style={gridStyle}>
        {companies.map((c) => (
          <div key={c.id} style={cardStyle}>
            <div>
              <h2 style={companyNameStyle}>{c.name}</h2>
              <p style={roleTextStyle}>{c.role}</p>

              <div style={infoRowStyle}>
                <span style={getDifficultyStyle(c.difficulty)}>{c.difficulty}</span>
                <span style={countBadgeStyle}>{c.count} Questions</span>
              </div>
            </div>

            <button
              style={primaryBtnStyle}
              onClick={() => setCompany(c)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              View Questions
            </button>
          </div>
        ))}
      </div>

      {/* --- Premium Questions Modal Overlay --- */}
      {company && (
        <div style={modalOverlayStyle} onClick={() => setCompany(null)}>
          <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {company.role}
              </span>
            </div>

            <h2 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#0f172a", marginBottom: "20px" }}>
              {company.name} Interview Questions
            </h2>

            <ul style={questionListStyle}>
              {company.questions.map((q, index) => (
                <li key={index} style={questionItemStyle}>
                  <span style={{ color: "#64748b", marginRight: "8px", fontWeight: "600" }}>{index + 1}.</span> {q}
                </li>
              ))}
            </ul>

            <button
              style={{ ...primaryBtnStyle, backgroundColor: "#0f172a" }}
              onClick={() => setCompany(null)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e293b")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0f172a")}
            >
              Close Panel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Companies;