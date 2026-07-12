import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  const [search, setSearch] = useState("");

  // Clean layout style object
  const dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",          /* Periya gap-kaaga high pixels select seiyapatathu */
    padding: "30px",       /* Side layout margins padding */
    backgroundColor: "#f8fafc",
    minHeight: "100vh"
  };

  return (
    <DashboardLayout>
      {/* style attribute moolamaga apply seiyapadugirathu */}
      <div style={dashboardStyle}>

        <DashboardHeader
          search={search}
          setSearch={setSearch}
        />

        <DashboardStats />
        
        <RecentActivity />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;