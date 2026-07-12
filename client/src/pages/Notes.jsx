import { useState } from "react";

function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote("");
    }
  }

  // --- Styles ---
  const containerStyle = {
    padding: "40px 24px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const textareaStyle = {
    width: "100%",
    height: "120px",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "1rem",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "16px",
    resize: "vertical",
  };

  const btnStyle = {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "0.95rem",
    marginBottom: "32px",
  };

  const noteCardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    padding: "16px 20px",
    borderRadius: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
    color: "#334155",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", marginBottom: "24px" }}>My Notes</h1>

      <textarea
        placeholder="Write your interview notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={textareaStyle}
      />

      <button onClick={addNote} style={btnStyle}>
        Save Note
      </button>

      <div>
        {notes.map((n, index) => (
          <div key={index} style={noteCardStyle}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;