import Service from "../img/controlar/service";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Slickk } from "./slick";
import Aos from "aos";
import { Booking } from "./Booking";

const cars = [
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-2.png",
    category: "Standard/Sedan",
    model: "Toyota Corolla Altis",
    price: 6000,
  },
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/2016-Toyota-Corolla-GLi.png",
    category: "Standard/Sedan",
    model: "Toyota Corolla GLI",
    price: 5000,
  },
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Honda-Civic-1.png",
    category: "Standard/Sedan",
    model: "Honda Civic",
    price: 8000,
  },
];

const cars1 = [
  {
    image:
      "https://img.freepik.com/premium-vector/realistic-black-sport-two-tone-luxury-car-set-grey-metallic-background-vector_33869-3703.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
    category: "Standard/Sedan",
    model: "Toyota Corolla Altis",
    price: 6000,
  },
  {
    image:
      "https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
    category: "Standard/Sedan",
    model: "Toyota Corolla GLI",
    price: 5000,
  },
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-6.png",
    category: "Standard/Sedan",
    model: "Honda Civic",
    price: 8000,
  },
];

const cars2 = [
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-8.png",
    category: "Standard/Sedan",
    model: "Toyota Corolla Altis",
    price: 6000,
  },
  {
    image:
      "https://img.freepik.com/free-vector/black-hatchback-car-isolated-white-vector_53876-67410.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
    category: "Standard/Sedan",
    model: "Toyota Corolla GLI",
    price: 5000,
  },
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-3.png",
    category: "Standard/Sedan",
    model: "Honda Civic",
    price: 8000,
  },
];

const cars3 = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NlnqW4qBoi4bVEyPc02zqs_NstszAzcMwg&s",
    category: "Standard/Sedan",
    model: "Toyota Corolla Altis",
    price: 6000,
  },
  {
    image:
      "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-10.png",
    category: "Standard/Sedan",
    model: "Toyota Corolla GLI",
    price: 5000,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_E5JtKjzl8fXG1wyEHrKcyCGWG6vxnag7g&s",
    category: "Standard/Sedan",
    model: "Honda Civic",
    price: 8000,
  },
];
export const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Duration of animation
    });
    // Refresh to apply AOS to dynamically rendered content
  }, []);
  const [open, closed] = useState("Standard Vehicles");
  return (
    <>
      <div className="relative bg-black">
        {/* Background Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhqLRUJ9cJJaiLrPMKJ8RxoN9t6U2ZmS9Iw&s"
          alt="Connect us"
          className="w-full h-[50vh] object-cover opacity-25"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-start px-4 py-6">
          <h1 className="text-lg sm:text-2xl lg:text-3xl text-yellow-400 font-bold">
            Nafees Rent A Car Pakistan
          </h1>
          <h1 className="mt-2 text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
            Rent a Car Pakistan
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white max-w-2xl">
            With our operations spread citywide, we offer satisfactory rent a
            car in Karachi services to everyone. We comprise the highest-ranking
            cars with well-built exteriors and interiors.
          </p>
          <button className="mt-6 bg-yellow-500 text-sm sm:text-base lg:text-lg px-6 py-3 font-medium rounded hover:bg-yellow-700 hover:text-white transition-colors duration-200">
            Book Your Ride Right Now
          </button>
        </div>
      </div>

<Booking/>

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

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Hire Car in Karachi: A Unforgettable Voyage for Tourists
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_tEV-TXe7SR1hhuvPjNy8uemUeWg3D3VCw&s"
              alt="Mazar-e-Quaid"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-landmark text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Mazar-e-Quaid
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A majestic white marble mausoleum, this iconic landmark serves
                as the final resting place of Pakistans founder. Its serene
                atmosphere and architectural grandeur make it a must-visit
                destination.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZgXn-Sb6oO3YEkughQZEAO33z0AIB0Eilw&s"
              alt="Frere Hall"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-building text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">Frere Hall</h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A historic building featuring stunning Victorian architecture,
                now serving as a library and art gallery. Its beautiful gardens
                provide a peaceful escape.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyeIMHYoabObsuq8k6ZZIoEnD7XpsEo88Lw&s"
              alt="St Patrick's Cathedral"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-church text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  St Patricks Cathedral
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                One of the most impressive examples of Gothic Revival
                architecture in the region, featuring stunning stained glass
                windows and towering spires.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x6EGC_9HPSe9io3NSy8CrDkx5jBqXfByQ&s"
              alt="Clifton Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-umbrella-beach text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Clifton Beach
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A popular recreational spot offering camel rides, beach
                activities, and stunning sunset views along the Arabian Sea.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d9piJWYFApYOXeGUaLLjSHfxp-IAbDbpyA&s"
              alt="PAF Museum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-plane text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Pakistan Air Force (PAF) Museum
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                Showcasing the history of Pakistans air force through aircraft
                displays, artifacts, and interactive exhibits.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden group h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PVEj96e7iBw4K79jfO7dqkXdK26WkU1tVA&s"
              alt="Empress Market"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-store text-amber-400 text-xl"></i>
                <h3 className="text-white text-xl font-semibold">
                  Empress Market
                </h3>
              </div>
              <p className="text-white text-sm opacity-90">
                A historic British-era market known for its distinctive
                architecture and bustling bazaar atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center align-middle sm:grid sm:grid-cols-4 m-4">
        <div className="mt-[3%]">
          <button
            onClick={() => closed("Standard Vehicles")}
            className={
              open === "Standard Vehicles"
                ? `bg-yellow-500 text-white p-5 rounded-md`
                : `bg-black text-white px-10 py-5 rounded-md`
            }
          >
            Standard Vehicles
          </button>
        </div>
        <div className="mt-[3%]">
          <button
            onClick={() => closed("SUV")}
            className={
              open === "SUV"
                ? `bg-yellow-500 text-white p-5 rounded-md`
                : `bg-black text-white px-10 py-5 rounded-md`
            }
          >
            {" "}
            SUV
          </button>
        </div>
        <div className="mt-[3%]">
          <button
            onClick={() => closed("Luxury Vehicles")}
            className={
              open === "Luxury Vehicles"
                ? `bg-yellow-500 text-white p-5 rounded-md`
                : `bg-black text-white px-10 py-5 rounded-md`
            }
          >
            Luxury Vehicles
          </button>
        </div>
        <div className="mt-[3%]">
          <button
            onClick={() => closed("Vans & Coasters")}
            className={
              open === "Vans & Coasters"
                ? `bg-yellow-500 text-white p-5 rounded-md`
                : `bg-black text-white px-10 py-5 rounded-md`
            }
          >
            Vans & Coasters
          </button>
        </div>
      </div>
      {open === "Standard Vehicles" ? (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Available Cars
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Car Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Car Details */}
                <div className="p-4">
                  <motion.div
                    className="text-amber-500 text-sm font-medium mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    {car.category}
                  </motion.div>
                  <motion.div
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {car.model}
                  </motion.div>
                  <motion.div
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    Rs: {car.price.toLocaleString()} Per Day
                  </motion.div>
                </div>

                {/* Book Button */}
                <motion.div
                  className="p-4 pt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition-colors duration-300">
                    Book Your Ride
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : open === "SUV" ? (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Available Cars
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars2.map((car, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Car Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Car Details */}
                <div className="p-4">
                  <motion.div
                    className="text-amber-500 text-sm font-medium mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    {car.category}
                  </motion.div>
                  <motion.div
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {car.model}
                  </motion.div>
                  <motion.div
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    Rs: {car.price.toLocaleString()} Per Day
                  </motion.div>
                </div>

                {/* Book Button */}
                <motion.div
                  className="p-4 pt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition-colors duration-300">
                    Book Your Ride
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : open === "Luxury Vehicles" ? (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Available Cars
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars1.map((car, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Car Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="object-cover w-[100%] h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Car Details */}
                <div className="p-4">
                  <motion.div
                    className="text-amber-500 text-sm font-medium mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    {car.category}
                  </motion.div>
                  <motion.div
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {car.model}
                  </motion.div>
                  <motion.div
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    Rs: {car.price.toLocaleString()} Per Day
                  </motion.div>
                </div>

                {/* Book Button */}
                <motion.div
                  className="p-4 pt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition-colors duration-300">
                    Book Your Ride
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : open === "Vans & Coasters" ? (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Available Cars
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars3.map((car, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Car Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="object-cover w-[100%] h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Car Details */}
                <div className="p-4">
                  <motion.div
                    className="text-amber-500 text-sm font-medium mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    {car.category}
                  </motion.div>
                  <motion.div
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {car.model}
                  </motion.div>
                  <motion.div
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    Rs: {car.price.toLocaleString()} Per Day
                  </motion.div>
                </div>

                {/* Book Button */}
                <motion.div
                  className="p-4 pt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition-colors duration-300">
                    Book Your Ride
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div>j</div>
      )}

      <Slickk />

      <Service />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://nafeesrentacarpakistan.pk/wp-content/uploads/2024/11/renting-a-car-for-weddings.webp"
              alt="Car Rental Tips"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">
                Tips to Save Money When Renting a Car for Weddings
              </h3>
              <p className="text-gray-600 text-sm mb-4">November 4, 2024</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://nafeesrentacarpakistan.pk/wp-content/uploads/2024/11/renting-a-car-for-weddings.webp"
              alt="Business Travel"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">
                10 Benefits of Renting a Car for Business Travel
              </h3>
              <p className="text-gray-600 text-sm mb-4">September 18, 2024</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://nafeesrentacarpakistan.pk/wp-content/uploads/2024/11/renting-a-car-for-weddings.webp"
              alt="Common Mistakes"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">
                10 Common Mistakes to Avoid When Renting a Car
              </h3>
              <p className="text-gray-600 text-sm mb-4">September 5, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
