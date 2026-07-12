import { useState } from "react";

function Bookmark() {
  const bookmarks = [
    {
      title: "React Hooks",
      difficulty: "Medium",
      question: "What is useEffect?",
      answer: "useEffect handles side effects in React.",
    },
  ];

  const [open, setOpen] = useState(null);

  // --- Styles ---
  const containerStyle = {
    padding: "40px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const badgeStyle = {
    alignSelf: "flex-start",
    backgroundColor: "#fff7ed",
    color: "#ea580c",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "600",
    marginBottom: "16px",
  };

  const btnGroupStyle = {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  };

  const primaryBtnStyle = {
    flex: 1,
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const deleteBtnStyle = {
    backgroundColor: "#fef2f2",
    color: "#dc2626",
    border: "1px solid #fee2e2",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  };

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
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", margin: 0 }}>Bookmarks</h1>

      <div style={gridStyle}>
        {bookmarks.map((b, index) => (
          <div style={cardStyle} key={index}>
            <div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", margin: "0 0 8px 0" }}>{b.title}</h2>
              <div style={badgeStyle}>{b.difficulty}</div>
            </div>

            <div style={btnGroupStyle}>
              <button style={primaryBtnStyle} onClick={() => setOpen(b)}>Open</button>
              <button style={deleteBtnStyle}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div style={modalOverlayStyle} onClick={() => setOpen(null)}>
          <div style={{ backgroundColor: "#ffffff", maxWidth: "500px", width: "100%", borderRadius: "16px", padding: "32px" }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "16px" }}>{open.question}</h2>
            <div style={{ backgroundColor: "#f8fafc", padding: "16px", borderRadius: "8px", borderLeft: "4px solid #2563eb", marginBottom: "24px" }}>
              <p style={{ color: "#334155", margin: 0, lineHeight: "1.6" }}>{open.answer}</p>
            </div>
            <button style={{ ...primaryBtnStyle, width: "100%", backgroundColor: "#0f172a" }} onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookmark;