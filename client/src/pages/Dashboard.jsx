import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import RecentActivity from "../components/RecentActivity";


function Dashboard() {


  // Clean layout style object
  const dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "30px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh"
  };

  return (
    <DashboardLayout>

      <div style={dashboardStyle}>

        <DashboardHeader />

        <DashboardStats />


        <RecentActivity />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;