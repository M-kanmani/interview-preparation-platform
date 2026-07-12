import SearchBar from "./SearchBar";

function DashboardHeader({ search, setSearch }) {
  // Styles
  const headerContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    width: "100%",
    fontFamily: "'Inter', system-ui, sans-serif",
  };

  const titleStyle = {
    fontSize: "1.85rem",
    fontWeight: "800",
    color: "#0f172a",
    margin: 0,
    letterSpacing: "-0.5px",
  };

  const subtitleStyle = {
    color: "#64748b",
    fontSize: "0.95rem",
    marginTop: "6px",
    marginBottom: 0,
  };

  return (
    <div style={headerContainerStyle}>
      <div>
        <h1 style={titleStyle}>Dashboard</h1>
        <p style={subtitleStyle}>Track your interview preparation progress.</p>
      </div>

      <SearchBar
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default DashboardHeader;