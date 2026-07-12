import { useState } from "react";
import questions from "../data/questions";

function Questions() {
  const [selected, setSelected] = useState(null);
  const [solved, setSolved] = useState([]);

  function markSolved(id) {
    if (!solved.includes(id)) {
      setSolved([...solved, id]);
    }
  }

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
    position: "relative",
    transition: "all 0.2s ease-in-out",
  };

  const questionTextStyle = {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "12px",
    lineHeight: "1.4",
  };

  const metaWrapperStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginBottom: "20px",
  };

  const categoryBadgeStyle = {
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "600",
  };

  const getDifficultyStyle = (diff) => {
    const base = { padding: "4px 10px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "600" };
    if (diff === "Easy") return { ...base, backgroundColor: "#f0fdf4", color: "#16a34a" };
    if (diff === "Medium") return { ...base, backgroundColor: "#fff7ed", color: "#ea580c" };
    return { ...base, backgroundColor: "#fef2f2", color: "#dc2626" };
  };

  const btnGroupStyle = {
    display: "flex",
    gap: "12px",
    marginTop: "auto",
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
    fontSize: "0.9rem",
    transition: "background 0.2s",
  };

  const secondaryBtnStyle = {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#475569",
    border: "1px solid #cbd5e1",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.2s",
  };

  // Modal Backdrop and Content
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
    maxWidth: "500px",
    width: "100%",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    position: "relative",
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={pageTitleStyle}>Interview Questions</h1>

      <div style={gridStyle}>
        {questions.map((q) => {
          const isSolved = solved.includes(q.id);
          return (
            <div
              className="q-card"
              key={q.id}
              style={{
                ...cardStyle,
                borderColor: isSolved ? "#bbf7d0" : "#e2e8f0",
                backgroundColor: isSolved ? "#fdfdfd" : "#ffffff",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={questionTextStyle}>{q.question}</h3>
                  {isSolved && <span style={{ fontSize: "1.2rem", marginLeft: "8px" }}>✅</span>}
                </div>
                
                <div style={metaWrapperStyle}>
                  <span style={categoryBadgeStyle}>{q.category}</span>
                  <span style={getDifficultyStyle(q.difficulty)}>{q.difficulty}</span>
                </div>
              </div>

              <div style={btnGroupStyle}>
                <button
                  style={primaryBtnStyle}
                  onClick={() => setSelected(q)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
                >
                  Solve Question
                </button>

                <button
                  disabled={isSolved}
                  style={{
                    ...secondaryBtnStyle,
                    backgroundColor: isSolved ? "#f1f5f9" : "#ffffff",
                    color: isSolved ? "#94a3b8" : "#475569",
                    cursor: isSolved ? "not-allowed" : "pointer",
                  }}
                  onClick={() => markSolved(q.id)}
                >
                  {isSolved ? "Solved" : "Mark Solved"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Smooth Premium Answer Modal --- */}
      {selected && (
        <div style={modalOverlayStyle} onClick={() => setSelected(null)}>
          <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
            <span style={{ ...categoryBadgeStyle, marginBottom: "12px", display: "inline-block" }}>
              {selected.category}
            </span>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#0f172a", marginBottom: "16px", lineHeight: "1.4" }}>
              {selected.question}
            </h2>
            
            <div style={{ backgroundColor: "#f8fafc", padding: "16px", borderRadius: "8px", borderLeft: "4px solid #2563eb", marginBottom: "24px" }}>
              <p style={{ color: "#334155", lineHeight: "1.6", fontSize: "0.95rem", fontWeight: "500" }}>
                {selected.answer}
              </p>
            </div>

            <button
              style={{ ...primaryBtnStyle, width: "100%", backgroundColor: "#0f172a" }}
              onClick={() => setSelected(null)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e293b")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0f172a")}
            >
              Close Answer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Questions;