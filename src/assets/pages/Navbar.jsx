import { Link } from "react-router-dom";
import logo from "../img/navbarlogo/Car-Logo-PNG-Image.png";

export const Navbar = () => {
  return (
    <>
      {/* Top Info Section */}
      <div className="bg-black py-3 text-white sm:py-5 flex flex-col sm:flex-row sm:justify-around text-center">
        {/* Phone */}
        <div className="mb-2 sm:mb-0 flex items-center justify-center">
          <i className="fa-solid fa-phone text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm sm:text-lg ml-2 font-semibold">
            0313038410
          </span>
        </div>
        {/* Email */}
        <div className="mb-2 sm:mb-0 items-center justify-center">
          <i className="fa-solid fa-envelope text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm sm:text-lg ml-2 font-semibold">
            engineermuhammadabdullahgohar 572@gmail.com
          </span>
        </div>
        {/* Address */}
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-location-dot text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm sm:text-lg ml-2 font-semibold">
            Nafees Rent A Car, Shahrah-e-Faisal, Karachi
          </span>
        </div>
      </div>

        {/* Navbar Section */}
        <div className="bg-white shadow-sm sm:flex sm:justify-between items-center text-center p-4">
          {/* Logo */}
          <div className="mb-4 sm:mb-0 flex justify-center">
            <Link to="/">
              <img
                src={logo}
                alt="Nafees Rent A Car Logo"
                className="w-36 h-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "#", label: "Services" },
              { path: "/contactus", label: "Contact" },
              { path: "#", label: "Reviews" },
              { path: "#", label: "Location" },
              { path: "Rates", label: "Rates" },
              { path: "#", label: "Tours" },
              { path: "#", label: "Vehicles" },
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

          {/* Buttons */}
          <div className="sm:flex hidden flex-col sm:flex-row items-center sm:space-x-4 mt-4 sm:mt-0">
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

            <button
              className="px-4 py-2 text-sm font-semibold bg-yellow-300 text-black rounded-md hover:bg-yellow-500 transition duration-200"
              aria-label="Book now"
            >
              Book Now
            </button>
          </div>
        <div className="sm:hidden ">
          <i className="fa-solid fa-bars h-7"></i>
        </div>
        </div>

    
    </>
  );
};
