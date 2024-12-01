import Service from "../img/controlar/service";
import { useState } from "react";

import { motion } from "framer-motion";


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
export const Location = () => {
    const [open, closed] = useState("Standard Vehicles");
  return (
    <>
          <div className="text-center text-2xl justify-center">
<h1 className="font-semibold text-2xl">Discover Our Wide Vehicle Brand Range</h1>

          </div>
     <div className="text-center align-middle sm:grid sm:grid-cols-4 m-4">
        
        <div className="mt-[3%]">
          <button
            onClick={() => closed("Standard Vehicles")}
            className={open==="Standard Vehicles"?`bg-yellow-500 text-white p-5 rounded-md`:`bg-black text-white px-10 py-5 rounded-md` }
          >
            Standard Vehicles
          </button>
        </div>
        <div className="mt-[3%]">
          <button
            onClick={() => closed("SUV")}
            className={open==="SUV"?`bg-yellow-500 text-white p-5 rounded-md`:`bg-black text-white px-10 py-5 rounded-md` }
          >
            {" "}
            SUV
          </button>
        </div>
        <div className="mt-[3%]">
          <button
            onClick={() => closed("Luxury Vehicles")}
            className={open==="Luxury Vehicles"?`bg-yellow-500 text-white p-5 rounded-md`:`bg-black text-white px-10 py-5 rounded-md` }

          >
            Luxury Vehicles
          </button>
        </div>
        <div className="mt-[3%]">
          <button
            onClick={() => closed("Vans & Coasters")}
            className={open==="Vans & Coasters"?`bg-yellow-500 text-white p-5 rounded-md`:`bg-black text-white px-10 py-5 rounded-md` }

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
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
      <div className="p-6">
        <h2 className="text-yellow-600 text-lg font-semibold mb-2">Rent a Car with Driver</h2>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Luxurious & Affordable Car Rental in Karachi</h1>
        <p className="text-gray-600 mb-4">
          With our premium car rental services in Karachi, Pakistan, you can relish a wide range of vehicles and travel anywhere in the city with a reliable driver accompanying you. Also, Nafees Rent a Car Pakistan provides an expert vehicle maintenance team and easy online booking.
        </p>
        <p className="text-gray-600 mb-6">
          All you have to do is submit your basic information and schedule, alongside selecting a vehicle to enjoy renting a car in Karachi at exceptionally reduced prices.
        </p>
        <a href="#" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md shadow hover:bg-yellow-600 transition">Book Your Ride</a>
      </div>
      
 
      <div>
        <img src="https://nafeesrentacarpakistan.pk/wp-content/uploads/elementor/thumbs/Car-Rental-Services-In-Karachi-Pakistan-qg3c1ul8m1hnzfw0jdf7ionlkr3dsevisxyxcvq5io.jpg" alt="Mazar-e-Quaid" className="w-full h-full object-cover rounded-r-lg"/>
      </div>
    </div>
  </div>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2">
            Tours / Weddings, Birthday Parties, Concerts & Charity Events
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Hire a Car for an Event in Karachi
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            If your destination is an elite function in a marriage hall,
            auditorium, or golf club, our automobile rental service proves
            handy! You can conveniently drop off gifts, visit a show, or take
            many of your family members out. Besides, Nafees Rent a Car Pakistan
            assures you it will pick you up and drop you off on time. Hence, no
            time hassle for your most significant events and luxurious
            occasions!
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://nafeesrentacarpakistan.pk/wp-content/uploads/elementor/thumbs/pexels-zain-ali-14933964-qg3cvjbqgo4ywdfrcqq918vp6rztj7px6mgx0yz0is.jpg"
              alt="Car rental service in Karachi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service Highlights */}
          <div className="space-y-8">
            {[
              {
                title: "Professional & Licensed Drivers",
                description:
                  "Our online car hire Karachi services will always fetch you a skilled and well-spoken chauffeur. They will fetch you from your doorstep at the exact second and take you to the venue with the best possible route to make your festivities more illustrious. Enjoy Our Online Car Hire Services Today!",
              },
              {
                title: "Back and Forth Airport Travel via Renting a Car",
                description:
                  "For a comfy tour to airports, either to greet someone special or commute for a job ride, we have a collection of branded cars for rent in Karachi. You can rely on 24/7 online booking services for short or long trips to airports to never miss your flight!",
              },
              {
                title: "Reserve High-Class Cars for Business Trips",
                description:
                  "For a lasting impression on business clients and well-heeled executives alike, we provide lavish cars for rent in Karachi with a well-dressed driver. You are surely gonna fit fine in the business deal.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="hover:transform hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="mb-6">Experience premium car rental services in Karachi</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt text-amber-400 text-2xl mr-3"></i>
                        <h2 className="text-xl font-bold">Famous Markets (Bazaars) In Karachi</h2>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Bolton Market</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Empress Market</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Paper Market</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Soldier Bazaar</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Sunday Bazaar</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Tariq Road</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Urdu Bazaar</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Zainab Market</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt text-amber-400 text-2xl mr-3"></i>
                        <h2 className="text-xl font-bold">Famous Supermarkets In Karachi</h2>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Al-Fatah</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Bin Hashim</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Carrefour</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Chase/Chase Up/Chase Value</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Imtiaz Supermarket</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Metro</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>SPAR Supermarket</span>
                        </li>
                    </ul>
                </div>
            </div>

           
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt text-amber-400 text-2xl mr-3"></i>
                        <h2 className="text-xl font-bold">Famous Shopping Malls In Karachi</h2>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Atrium Mall</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Dolmen Mall</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Lucky One Mall</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Millennium Mall</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-amber-500 transition-colors">
                            <i className="fas fa-location-dot text-amber-400"></i>
                            <span>Ocean Mall</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

     
       
    </div>
      {/* Contact Section */}
      <div className="bg-black sm:flex sm:justify-around p-4 my-4">
        <div>
          <h1 className="text-yellow-500 font-semibold">
            Feel free to contact us with any questions
          </h1>
          <span className="text-white">
            We provide car rentals throughout Karachi for various expeditions.
          </span>
        </div>
        <div>
          <button className="bg-yellow-500 p-3 mt-[4%] sm:mt-0 font-medium hover:text-white hover:bg-yellow-700 transition-colors duration-200">
            Book Your Ride Right Now
          </button>
        </div>
      </div>

      {/* Service Component */}
      <Service />
    </>
  );
};
