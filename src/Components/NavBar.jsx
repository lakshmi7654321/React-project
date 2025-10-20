import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navContent } from "../Utils/Constant";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    alert("You have been logged out!");
    navigate("/login");
  };

  return (
    <nav className="bg-white text-black text-lg font-bold px-6 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div
        className="text-2xl md:text-3xl font-extrabold text-blue-700 px-4 py-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        {navContent.logo}
      </div>
      {isLoggedIn && (
        <div className="hidden md:flex gap-4">
          {navContent.links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-transparent hover:bg-blue-500 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
      <div className="flex gap-4">
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              {navContent.buttons.login}
            </Link>
            <Link
              to="/signin"
              className="px-5 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              {navContent.buttons.signup}
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

