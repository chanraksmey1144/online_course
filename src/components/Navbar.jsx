// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiSearch, FiLogIn, FiUserPlus, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo_online_course.png";

// Utility function to convert course name to URL slug
const courseToSlug = (courseName) => {
  return courseName.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpenDesktop, setDropOpenDesktop] = useState(false);
  const [dropOpenMobile, setDropOpenMobile] = useState(false);

  const [searchInput, setSearchInput] = useState("");        // Desktop main search
  const [dropdownSearch, setDropdownSearch] = useState("");  // Desktop dropdown filter
  const [searchMobileTerm, setSearchMobileTerm] = useState(""); // Mobile search filter

  const dropdownRef = useRef(null);

  const courses = [
    "HTML", "CSS", "Bootstrap", "JavaScript",
    "React", "Tailwind", "jQuery", "Frontend", "API", "Git & GitHub"
  ];

  const activeLink = "text-yellow-400 font-extrabold border-b-4 border-yellow-400 pb-1"; 
  const inactiveLink = "text-white hover:text-yellow-300 hover:scale-[1.02] transition-all duration-200";

  const filteredCoursesDesktop = courses.filter(course =>
    course.toLowerCase().includes(dropdownSearch.toLowerCase())
  );

  const filteredCoursesMobile = courses.filter(course =>
    course.toLowerCase().includes(searchMobileTerm.toLowerCase())
  );

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropOpenDesktop(false);
        setDropdownSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setDropOpenMobile(false);
    setSearchMobileTerm("");
  };

  const handleDesktopCourseClick = () => {
    setDropOpenDesktop(false);
    setDropdownSearch("");
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-900/90 backdrop-blur-sm shadow-2xl border-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-4 rounded-lg transition-all duration-300 hover:bg-blue-800/40 p-1 -ml-1">
            <img 
              src={Logo} 
              alt="OnlineAcademy Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-xl bg-white p-0.5 md:p-1" 
            />
            <span className="text-white text-3xl font-extrabold tracking-tight hidden md:block">
              OnlineCourse
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-lg font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : inactiveLink}>
              Home
            </NavLink>

            {/* Courses Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropOpenDesktop(!dropOpenDesktop)}
                aria-expanded={dropOpenDesktop}
                aria-controls="courses-dropdown"
                className="text-white hover:text-yellow-300 flex items-center gap-1 transition-all"
              >
                Courses
                <FiChevronDown className={`transition-transform ${dropOpenDesktop ? "rotate-180" : ""}`} />
              </button>

              <ul
                id="courses-dropdown"
                className={`absolute top-full left-0 mt-3 bg-white shadow-2xl rounded-lg w-64 max-h-72 overflow-y-auto border border-gray-200 transition-all duration-300 origin-top z-50 ${
                  dropOpenDesktop ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
              >
                {/* Desktop Dropdown Filter */}
                <li className="p-2 sticky top-0 bg-white z-10 border-b border-gray-100">
                  <div className="relative flex items-center">
                    <FiSearch className="absolute left-3 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Filter by topic..."
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      className="outline-none pl-9 pr-3 py-1.5 w-full text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 transition text-sm"
                    />
                  </div>
                </li>

                {filteredCoursesDesktop.length > 0 ? (
                  filteredCoursesDesktop.map(course => (
                    <li key={course}>
                      <NavLink 
                        to={`/course/${courseToSlug(course)}`}
                        onClick={handleDesktopCourseClick}
                        className="w-full block text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition text-base"
                      >
                        {course}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-gray-500 text-sm italic">No courses found</li>
                )}
              </ul>
            </div>

            <NavLink to="/content" className={({ isActive }) => isActive ? activeLink : inactiveLink}>
              About Us
            </NavLink>
          </nav>

          {/* Desktop Search & Auth */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search */}
            <div className="relative flex items-center bg-gray-700 rounded-lg shadow-inner">
              <input
                type="text"
                placeholder="Search all courses..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="outline-none pl-4 pr-10 py-2 w-56 text-white bg-transparent rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 transition"
              />
              <button type="button" className="absolute right-0 top-0 bottom-0 px-3 text-gray-300 hover:text-yellow-400 transition">
                <FiSearch size={20} />
              </button>
            </div>

            {/* Login */}
            <NavLink to="/login" className="group flex items-center gap-1 text-white px-5 py-2 rounded-lg border border-white hover:bg-yellow-400 hover:text-blue-900 hover:border-yellow-400 transition-all font-semibold shadow-md">
              <FiLogIn className="text-yellow-400 group-hover:text-blue-900" size={18} />
              Login
            </NavLink>

            {/* Sign Up */}
            <NavLink to="/signup" className="group flex items-center gap-1 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 hover:scale-[1.02] shadow-lg transition font-bold">
              <FiUserPlus  size={18} />
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white text-3xl p-2 rounded hover:bg-blue-800 transition"
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-blue-800 rounded-b-lg p-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 text-lg ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <NavLink to="/" onClick={handleMobileLinkClick} className={({ isActive }) => isActive ? activeLink : inactiveLink}>
            Home
          </NavLink>

          {/* Mobile Courses Dropdown */}
          <div className="border-t border-blue-700/50 pt-3">
            <button
              onClick={() => setDropOpenMobile(!dropOpenMobile)}
              aria-expanded={dropOpenMobile}
              className="text-white flex items-center gap-2 hover:text-yellow-300 transition font-semibold"
            >
              Courses
              <FiChevronDown className={`transition-transform ${dropOpenMobile ? "rotate-180" : ""}`} />
            </button>

            <ul className={`bg-white rounded-lg shadow-lg mt-3 p-3 overflow-y-auto transition-all duration-300 ${
              dropOpenMobile ? "max-h-72 opacity-100 visible" : "max-h-0 opacity-0 invisible"
            }`}>
              <li className="pb-3 sticky top-0 bg-white z-10">
                <div className="relative flex items-center">
                  <FiSearch className="absolute left-3 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Filter by topic..."
                    value={searchMobileTerm}
                    onChange={(e) => setSearchMobileTerm(e.target.value)}
                    className="outline-none pl-9 pr-3 py-1.5 w-full text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 transition text-sm"
                  />
                </div>
              </li>

              {filteredCoursesMobile.length > 0 ? (
                filteredCoursesMobile.map(course => (
                  <li key={course}>
                    <NavLink
                      to={`/course/${courseToSlug(course)}`}
                      onClick={handleMobileLinkClick}
                      className="w-full block text-left px-3 py-2 text-gray-800 hover:bg-blue-600/10 hover:text-blue-700 transition text-base"
                    >
                      {course}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500 text-sm italic">No courses found</li>
              )}
            </ul>
          </div>

          <NavLink to="/content" onClick={handleMobileLinkClick} className={({ isActive }) => isActive ? activeLink : inactiveLink}>
             About Us
          </NavLink>

          {/* Mobile Auth */}
          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-blue-700/50">
            <NavLink to="/login" onClick={handleMobileLinkClick} className="group flex items-center justify-center gap-2 text-white px-5 py-2 rounded-lg border border-white hover:bg-yellow-400 hover:text-blue-900 transition-all font-semibold">
              <FiLogIn className="text-yellow-400 group-hover:text-blue-900" size={18} />
              Login
            </NavLink>

            <NavLink to="/signup" onClick={handleMobileLinkClick} className="group flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg text-center hover:bg-red-700 hover:scale-[1.01] transition font-bold shadow-md">
              <FiUserPlus size={18} />
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
