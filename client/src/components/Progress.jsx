import ProgressBar from "../components/ProgressBar";

function Progress() {
  const containerStyle = {
    padding: "40px 24px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", margin: 0 }}>Progress Overview</h1>

      <div style={gridStyle}>
        <ProgressBar title="DSA Progress" percentage={75} />
        <ProgressBar title="Aptitude Progress" percentage={60} />
        <ProgressBar title="Mock Interview" percentage={45} />
        <ProgressBar title="HR Questions" percentage={80} />
      </div>
    </div>
  );
}

export default Progress;