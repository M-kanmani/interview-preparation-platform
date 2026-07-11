import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import Progress from "../components/Progress";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-8">

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