import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Questions", path: "/questions" },
    { name: "Companies", path: "/companies" },
    { name: "Resources", path: "/resources" },
    {name: "Dashboard", path: "/dashboard"}
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          InterviewPrep
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

  <ThemeToggle />

  <Link
    to="/login"
    className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
  >
    Login
  </Link>

  <Link
    to="/register"
    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
  >
    Register
  </Link>

</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="py-2">
  <ThemeToggle />
</div>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;