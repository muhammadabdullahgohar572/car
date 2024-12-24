import { Link, useNavigate } from "react-router-dom";
import logo from "../img/navbarlogo/Car-Logo-PNG-Image.png";
import Bras from "../img/navbarlogo/1.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "../authentication/Authenticate";

export const Navbar = () => {
  const [open, setOpen] = useState(false); // Controls mobile menu visibility
  const isAuthenticated = useSelector(
    (state) => state.authenticate.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear Redux state and localStorage
    dispatch(setLoginStatus({ isAuthenticated: false, token: null }));
    localStorage.removeItem("token");

    // Redirect to the homepage or login page
    navigate("/login");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black px-3 py-3 text-white sm:py-5 flex flex-col sm:flex-row sm:justify-around text-center">
        {/* Phone */}
        <div className="mb-2 sm:mb-0 cursor-pointer flex items-center justify-center">
          <i className="fa-solid fa-phone text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm md:text-lg ml-2 font-semibold">
            03133038410
          </span>
        </div>
        {/* Email */}
        <div className="mb-2 sm:mb-0 cursor-pointer items-center justify-center">
          <i className="fa-solid fa-envelope text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm md:text-base ml-2 font-semibold">
            engineermuhammadabdullahgohar @gmail.com
          </span>
        </div>
        {/* Address */}
        <div className="flex items-center cursor-pointer justify-center">
          <i className="fa-solid fa-location-dot text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm md:text-base ml-2 font-semibold">
            Nafees Rent A Car, Shahrah-e-Faisal, Karachi
          </span>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white shadow-sm flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Nafees Rent A Car Logo"
            className="w-36 h-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { path: "/", label: "Home" },
            { path: "/Services", label: "Services" },
            { path: "/contactus", label: "Contact" },
            { path: "/About", label: "About" },
            { path: "/Location", label: "Location" },
            { path: "/Rates", label: "Rates" },
            { path: "/Tours", label: "Tours" },
            { path: "/Vehicle", label: "Vehicles" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-black font-bold text-sm hover:text-yellow-500 transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Buttons for Signup/Login/Logout/Booking */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated && (
            <>
              <Link to="/Signup">
                <button
                  className="px-4 py-2 text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
                  aria-label="Sign up"
                >
                  Signup
                </button>
              </Link>
              <Link to="/Login">
                <button
                  className="px-4 py-2 text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
                  aria-label="Login"
                >
                  Login
                </button>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <Link to="/admin">
                <button
                  className="px-4 py-2 text-sm font-semibold bg-blue-500 hover:text-black text-white rounded-md hover:bg-yellow-400 transition duration-200"
                  aria-label="Logout"
                >
                  Admin
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          )}
          <Link to="/Booking">
            <button
              className="px-4 py-2 text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
              aria-label="Book now"
            >
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setOpen(true)} // Opens the mobile menu
        >
          <img src={Bras} alt="Menu Toggle" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-full bg-gray-100 shadow-lg z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={() => setOpen(false)} // Closes the mobile menu
        >
          &times;
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col mt-16 space-y-4 px-6">
          {[
            { path: "/", label: "Home" },
            { path: "/Services", label: "Services" },
            { path: "/contactus", label: "Contact" },
            { path: "/About", label: "About" },
            { path: "/Location", label: "Location" },
            { path: "/Rates", label: "Rates" },
            { path: "/Tours", label: "Tours" },
            { path: "/Vehicle", label: "Vehicles" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-black text-lg font-bold hover:text-yellow-500 transition duration-200"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="mt-4 grid grid-cols-1 gap-3">
            {!isAuthenticated && (
              <>
                <Link to="/Signup">
                  <button
                    className="px-4 py-2 w-full text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
                    aria-label="Sign up"
                  >
                    Signup
                  </button>
                </Link>
                <Link to="/Login">
                  <button
                    className="px-4 py-2 w-full text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
                    aria-label="Login"
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 w-full text-sm font-semibold bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                aria-label="Logout"
              >
                Logout
              </button>
            )}
            <Link to="/Booking">
              <button
                className="px-4 py-2 w-full text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
                aria-label="Book now"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
