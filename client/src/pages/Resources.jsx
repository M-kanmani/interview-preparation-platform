import resources from "../data/resource";

function Resources() {
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
    marginBottom: "8px",
    letterSpacing: "-0.5px",
  };

  const pageSubtitleStyle = {
    color: "#64748b",
    fontSize: "1rem",
    marginBottom: "32px",
    fontWeight: "500",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "10px",
  };

  const cardDescStyle = {
    fontSize: "0.95rem",
    color: "#64748b",
    lineHeight: "1.5",
    marginBottom: "24px",
  };

  const actionBtnStyle = {
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#2563eb",
    border: "1px solid #bfdbfe",
    padding: "11px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    textAlign: "center",
    transition: "all 0.2s ease",
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={pageTitleStyle}>Curated Resources</h1>
      <p style={pageSubtitleStyle}>Handpicked materials to boost your interview preparation journey.</p>

      <div style={gridStyle}>
        {resources.map((item) => (
          <div key={item.id} style={cardStyle}>
            <div>
              <h2 style={cardTitleStyle}>{item.title}</h2>
              <p style={cardDescStyle}>{item.description}</p>
            </div>

            <button
              style={actionBtnStyle}
              onClick={() => window.open(item.link, "_blank")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#eff6ff";
                e.target.style.borderColor = "#2563eb";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.borderColor = "#bfdbfe";
              }}
            >
              Open Resource ↗
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;