import ActivityCard from "./ActivityCard";

function RecentActivity() {
  return (
    <div>
  <h2 className="text-2xl font-bold text-gray-800 mb-5">
    Recent Activity
  </h2>

  <div className="space-y-4">

    <ActivityCard
      title="Solved 'Two Sum' Question"
      time="10 minutes ago"
    />

    <ActivityCard
      title="Completed Mock Test #3"
      time="1 hour ago"
    />

    <ActivityCard
      title="Bookmarked Amazon Interview Questions"
      time="Yesterday"
    />

    <ActivityCard
      title="Added Notes for Binary Trees"
      time="2 days ago"
    />

  </div>
</div>
  )}
export default RecentActivity;