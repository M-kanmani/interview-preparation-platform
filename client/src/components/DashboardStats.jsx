import StatCard from "./StatCard";

function DashboardStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  <StatCard
    title="Questions Solved"
    value="120"
    color="text-blue-600"
  />

  <StatCard
    title="Companies Covered"
    value="18"
    color="text-green-600"
  />

  <StatCard
    title="Mock Tests"
    value="9"
    color="text-orange-500"
  />

  <StatCard
    title="Success Rate"
    value="82%"
    color="text-purple-600"
  />

</div>
    )}
export default DashboardStats;