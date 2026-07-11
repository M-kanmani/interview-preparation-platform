import QuickActionCard from "./QuickActionCard";
import {
  FaLaptopCode,
  FaBook,
  FaBuilding,
  FaStickyNote,
} from "react-icons/fa";

function QuickActions() {
    return (
        <div>
  <h2 className="text-2xl font-bold text-gray-800 mb-5">
    Quick Actions
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    <QuickActionCard
      title="Mock Test"
      description="Practice full interview tests."
      icon={<FaLaptopCode />}
      to="/mock-test"
    />

    <QuickActionCard
      title="Questions"
      description="Solve coding interview questions."
      icon={<FaBook />}
      to="/questions"
    />

    <QuickActionCard
      title="Companies"
      description="Explore company-wise questions."
      icon={<FaBuilding />}
      to="/companies"
    />

    <QuickActionCard
      title="Notes"
      description="View your saved interview notes."
      icon={<FaStickyNote />}
      to="/notes"
    />

  </div>
</div>
    )}
export default QuickActions;