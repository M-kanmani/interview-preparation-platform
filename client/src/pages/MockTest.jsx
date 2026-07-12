function MockTest() {
  const tests = [
    { title: "Frontend Developer Test", questions: 30, time: "30 min" },
    { title: "MERN Stack Test", questions: 50, time: "45 min" },
    { title: "JavaScript Test", questions: 25, time: "20 min" },
    { title: "React Test", questions: 20, time: "15 min" },
    { title: "Node.js Test", questions: 30, time: "25 min" },
    { title: "Python Test", questions: 40, time: "30 min" },
    { title: "Java Test", questions: 35, time: "30 min" },
    { title: "C++ Test", questions: 30, time: "25 min" },
  ];

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
  };

  const btnStyle = {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0" }}>Mock Tests</h1>
      <p style={{ color: "#64748b", margin: 0 }}>Test your interview preparation status level.</p>

      <div style={gridStyle}>
        {tests.map((test, index) => (
          <div style={cardStyle} key={index}>
            <div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", margin: "0 0 16px 0" }}>{test.title}</h2>
              <p style={{ margin: "6px 0", color: "#475569", fontSize: "0.95rem" }}><b>Questions:</b> {test.questions}</p>
              <p style={{ margin: "6px 0", color: "#475569", fontSize: "0.95rem" }}><b>Duration:</b> {test.time}</p>
            </div>
            <button style={btnStyle}>Start Test</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MockTest;