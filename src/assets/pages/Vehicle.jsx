import Vehicls from "../img/navbarlogo/front-left-side-47.avif";
import { motion } from "framer-motion";

const cars = [
  {
    image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-2.png",
    category: "Standard/Sedan",
    model: "Toyota Corolla Altis",
    price: 6000,
  },
  {
    image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/2016-Toyota-Corolla-GLi.png",
    category: "Standard/Sedan",
    model: "Toyota Corolla GLI",
    price: 5000,
  },
  {
    image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Honda-Civic-1.png",
    category: "Standard/Sedan",
    model: "Honda Civic",
    price: 8000,
  },
];








const cars1 = [
    {
      image: "https://img.freepik.com/premium-vector/realistic-black-sport-two-tone-luxury-car-set-grey-metallic-background-vector_33869-3703.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
      category: "Standard/Sedan",
      model: "Toyota Corolla Altis",
      price: 6000,
    },
    {
      image: "https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
      category: "Standard/Sedan",
      model: "Toyota Corolla GLI",
      price: 5000,
    },
    {
      image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-6.png",
      category: "Standard/Sedan",
      model: "Honda Civic",
      price: 8000,
    },
  ];


  const cars2 = [
    {
      image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-8.png",
      category: "Standard/Sedan",
      model: "Toyota Corolla Altis",
      price: 6000,
    },
    {
      image: "https://img.freepik.com/free-vector/black-hatchback-car-isolated-white-vector_53876-67410.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
      category: "Standard/Sedan",
      model: "Toyota Corolla GLI",
      price: 5000,
    },
    {
      image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-3.png",
      category: "Standard/Sedan",
      model: "Honda Civic",
      price: 8000,
    },
  ];







  const cars3 = [
    {
      image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-8.png",
      category: "Standard/Sedan",
      model: "Toyota Corolla Altis",
      price: 6000,
    },
    {
      image: "https://img.freepik.com/free-vector/black-hatchback-car-isolated-white-vector_53876-67410.jpg?ga=GA1.1.967368395.1724141851&semt=ais_hybrid",
      category: "Standard/Sedan",
      model: "Toyota Corolla GLI",
      price: 5000,
    },
    {
      image: "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Karachi-3.png",
      category: "Standard/Sedan",
      model: "Honda Civic",
      price: 8000,
    },
  ];





export const Vehicle = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative bg-black">
        <img
          src={Vehicls}
          alt="Connect us"
          className="w-full h-auto opacity-25 bg-black"
        />
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
          <h1 className="text-lg sm:text-4xl font-bold">Vehicle Models</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center sm:text-xl mt-[5%]">
        <h1 className="text-yellow-500 font-semibold">
          Best Car Rental Service Providers
        </h1>
        <h1 className="font-bold sm:text-3xl">
          Discover Your Budget-Friendly Vehicles
        </h1>
        <h1 className="m-[1%]">
          Explore premier vehicles-driven car rental services in Pakistan.
        </h1>
      </div>

      <div className="text-center align-middle sm:grid sm:grid-cols-4 m-4">
        <div  className="mt-[3%]">
          <button className="bg-black text-white p-5 rounded-md">
            Standard Vehicles
          </button>
        </div>
        <div  className="mt-[3%]">
          <button className="bg-black text-white px-10 py-5 rounded-md"> SUV</button>
        </div>
        <div  className="mt-[3%]">
          <button className="bg-black text-white p-5 rounded-md">
            Luxury Vehicles
          </button>
        </div>
        <div  className="mt-[3%]">
          <button className="bg-black text-white p-5 rounded-md">
            Vans & Coasters
          </button>
        </div>
      </div>


      {/* Cars Section */}
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Available Cars</h1>
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

      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Available Cars</h1>
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









      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Available Cars</h1>
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





    </>
  );
};
