import { FaSearch } from "react-icons/fa";

function SearchBar({
  placeholder = "Search...",
  value = "",
  onChange,
}) {
  return (
    <div className="relative w-full max-w-md">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;