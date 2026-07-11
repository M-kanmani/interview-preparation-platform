import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaQuestionCircle,
  FaBookmark,
  FaStickyNote,
  FaChartLine,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Questions",
      path: "/questions",
      icon: <FaQuestionCircle />,
    },
    {
      name: "Bookmarks",
      path: "/bookmarks",
      icon: <FaBookmark />,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: <FaStickyNote />,
    },
    {
      name: "Progress",
      path: "/progress",
      icon: <FaChartLine />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside className="hidden md:block w-64 bg-white shadow-md min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          Dashboard
        </h2>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;