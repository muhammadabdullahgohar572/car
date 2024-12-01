import Service from "../img/controlar/service";
import Vehicls from "../img/navbarlogo/bugatti-centodieci.jpg";

import { motion } from "framer-motion"


export const Tours = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      }
    
      const locations = [
        {
          title: "Abdullah Rent A Car Maahad Tours",
          images: [
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-1.jpg",
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-2.jpg", 
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-5.jpg"
          ]
        },
        {
          title: "Abdullah Rent A Car Swat Tours",
          images: [
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-3.jpg",
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-6.jpg",
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-8.jpg"
          ]
        },
        {
          title: "Abdullah Rent A Car Maahad Tours", 
          images: [
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-4.jpg",
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-7.jpg",
            "https://nafeesrentacarpakistan.pk/wp-content/uploads/2023/11/Nafees-Rent-A-Car-Tours-9.jpg"
          ]
        }
      ]
  return (
    <>
 <div className="relative bg-black">
        <img
          src={Vehicls}
          alt="Connect us"
          className="w-full h-auto opacity-25 bg-black"
        />
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
          <h1 className="text-lg sm:text-4xl font-bold">Abdullah Rent A Car Tours</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
      {locations.map((location, index) => (
        <motion.section 
          key={location.title}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-center mb-8"
          >
            {location.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.images.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                {...fadeInUp}
                transition={{ delay: 0.2 * (imageIndex + 1) }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image}
                  alt={`Tour location ${imageIndex + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-2 bg-white text-black rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>







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
          <button className="bg-yellow-500 p-3 mt-[4%] sm:mt-0 font-medium hover:text-white hover:bg-yellow-700 hover:duration-200 ">
            Book Your Ride Right Now
          </button>
        </div>
      </div>

      <Service />
    </>
  );
};
