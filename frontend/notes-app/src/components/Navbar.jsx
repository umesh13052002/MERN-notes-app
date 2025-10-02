"use client";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

export default function Navbar() {
  const { logout,user } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            MyApp
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Notes"
              className="px-2 border border-[#acacac] rounded-md"
            />
          </div>
          {/* Desktop Menu */}
          {!user ? (
            <div className="flex items-center space-x-4">
              <div className="flex space-x-6 items-center">
                {/* User Info / Login Button */}
                <Link
                  to={"/login"}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Login
                </Link>
              </div>
              <div className="hidden md:flex space-x-6 items-center">
                {/* User Info / Login Button */}
                <Link
                  to={"/signup"}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <div>{`Hi ${user?.name}`}</div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-700"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile menu button */}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
    </nav>
  );
}
