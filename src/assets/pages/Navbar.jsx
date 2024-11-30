import { Link } from "react-router-dom";
import logo from "../img/navbarlogo/Black and White Automotive Logo.png";

export const Navbar = () => {
  return (
    <>
      {/* Top Info Section */}
      <div className="bg-black pt-3 text-white sm:p-5 flex flex-col sm:flex-row sm:justify-around text-center overflow-hidden">
        {/* Phone */}
        <div className="mb-2 sm:mb-0 align-middle flex items-center justify-center">
          <i className="fa-solid fa-phone text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm sm:text-lg ml-2 font-semibold">
            0313038410
          </span>
        </div>
        {/* Email */}
        <div className="mb-2 sm:mb-0 align-middle text-center">
          <i className="fa-solid fa-envelope text-yellow-300 text-lg sm:text-xl"></i>
          <span className="text-sm xxlm:text-[16px] sm:text-lg ml-2 font-semibold">
            engineermuhammadabdullahgohar
            572@gmail.com
          </span>
        </div>
        {/* Address */}
        <div className="flex items-center align-middle justify-center">
          <i className="fa-solid fa-location-dot text-yellow-300 text-lg sm:text-xl"></i>
          <span className="xxlm:text-[16px] text-sm sm:text-lg ml-2 font-semibold">
            Nafees Rent A Car, Shahrah-e-Faisal, Karachi
          </span>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="sm:flex sm:justify-between align-middle items-center text-center p-4 w-full">
  {/* Logo */}
  <div className="mb-4 sm:mb-0 flex justify-center">
   <Link to={"/"}>
   <img
      src={logo}
      alt="Logo"
      className="w-36 h-auto" // Set responsive image size
    />
   </Link>
  </div>

  {/* Navigation Links */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
    <Link
      to="/"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Home
    </Link>

    <Link
      to="#"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Services
    </Link>

    <Link
      to="contactus"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Contact 
    </Link>

    <Link
      to="#"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Reviews
    </Link>

    <Link
      to="#"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Location
    </Link>

    <Link
      to="#"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Rates
    </Link>

    <Link
      to="#"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Tours
    </Link>

    <Link
      to="#"
      className="text-black font-bold text-sm sm:text-sm hover:text-yellow-950 transition duration-200"
    >
      Vehicles
    </Link>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
      <button
        className="px-4 py-1 text-sm sm:text-sm text-black font-semibold bg-yellow-300 rounded-md hover:bg-yellow-500 transition duration-200"
        aria-label="Sign up"
      >
        Signup
      </button>

      <button
        className="px-4 py-1 text-sm sm:text-sm text-black font-semibold bg-yellow-300 rounded-md hover:bg-yellow-500 transition duration-200"
        aria-label="Login"
      >
        Login
      </button>

      <button
        className="px-4 py-1 text-sm sm:text-sm text-black font-semibold bg-yellow-300 rounded-md hover:bg-yellow-500 transition duration-200"
        aria-label="Book now"
      >
        Book Now
      </button>
    </div>
  </div>
</div>

    </>
  );
};
