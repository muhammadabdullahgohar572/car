import React, { useEffect } from "react";
import Service from "../img/controlar/service";
import { Slickk } from "./slick";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS JS

export const About1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Duration of animation
    });
   // Refresh to apply AOS to dynamically rendered content
  }, []);

  return (
    <>
      <div className="relative bg-black">
        {/* Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6bmlIucVIfLAFFsZQ6A51YM3JwBOCMoryw&s"
          alt="Connect us"
          className="w-full h-[10%] opacity-25 bg-black"
        />

        {/* Text */}
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
          <h1 className="text-lg sm:text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="sm:flex sm:justify-around p-8">
        <div>
          <h1 className="text-lg font-medium text-yellow-400">
            Best Car Rental Service Providers
          </h1>
          <h1 className="text-3xl font-bold text-yellow-400">
            Car Rental Services In Karachi, Pakistan
          </h1>
          <span className="font-semibold">
            CHOOSE YOUR FANTASTIC CAR, TRAVEL YOUR WAY ENJOYABLY!
            <br />
            When you need a car at any time for any purpose, simply head to
            Nafees Rent A Car’s booking page—it’s that easy to have a <br />
            hassle-free and smooth car hire service! We provide our car rental
            <br />
            services in major parts of Pakistan, with complete dedication to
            <br />
            quality customer service and reasonable rates for every rental—no
            <br />
            hidden charges!
          </span>
          <br />
          <br />
          <button className="bg-yellow-500 p-3 mt-[4%] sm:mt-0 font-medium hover:text-white hover:bg-yellow-700 hover:duration-200 ">
            Book Your Ride Right Now
          </button>
        </div>

        {/* Image with AOS Animation */}
        <div data-aos="fade-up-right">
          <div>
            <img
              src="https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-768x576.png"
              alt="Car Rental"
            />
          </div>
        </div>
      </div>

      {/* Slickk Component */}
      <Slickk />

      {/* Service Component */}
      <Service />
    </>
  );
};
