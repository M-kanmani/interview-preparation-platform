import SearchBar from "./SearchBar";
import StatCard from "./StatCard";
import ProgressBar from "./ProgressBar";
function DashboardHeader({ search, setSearch }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      Dashboard
    </h1>

    <p className="text-gray-500 mt-2">
      Track your interview preparation progress.
    </p>
  </div>

  <SearchBar
    placeholder="Search questions..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>
)}
export default DashboardHeader;