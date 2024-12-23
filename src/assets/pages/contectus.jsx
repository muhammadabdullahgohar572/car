import { Link } from "react-router-dom";
import conect from "../img/navbarlogo/rent-a-car-banner-1.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const CreateUsPage = () => {
  const [getData, sendData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const Conactus = async () => {
    if (getData.name && getData.email && getData.phone && getData.message) {
      await fetch("ecommerce-two-alpha-61.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getData),
      })
        .then((res) => {
          res.json();
        })
        .then((Dataa) => {
          console.log(Dataa);
          toast.success("Data Send Successfully!", {
            position: "top-center",
            autoClose: 2000,
            // Apply Bounce transition
          });
          sendData();
        })
        .catch((error) => {
          alert("catch work");
          console.error("Error:", error);
        });
    } else {
      alert("All Fields Are Required");
      console.log(getData);
    }
  };

  return (
    <>
      <div className="relative bg-black">
        {/* Image */}
        <img
          src={conect}
          alt="Connect us"
          className="w-full h-auto opacity-25 bg-black"
        />

        {/* Text */}
        <div className=" text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
          <h1 className="text-lg sm:text-4xl font-bold">Connect Us</h1>
        </div>
      </div>

      <div className="p-2">
        <br />
        <h1 className="text-2xl text-yellow-400 mb-[2%]">Customers Center</h1>
        <h1 className="font-bold sm:text-6xl  mb-[5%]">
          Feel Free To Contact Us With Any Questions
        </h1>
        <p className="text-2xl font-semibold">
          Top Airports. Local Suppliers. 24/7 Support.
        </p>
        <br />

        <p>
          If you need any further information come to our office or call us.
        </p>
      </div>

      <div className="mt-6 p-2">
        <div className="flex text-4xl mt-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10l2-2m0 0l7-7 7 7m-9 2v10m0 0h-4m4 0h4"
            />
          </svg>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Head Office:</span>{" "}
            <span className="text-yellow-700  font-bold  sm:text-lg hover:underline">
              {" "}
              Nafees Rent A Car, Shahrah-e-Faisal, Karachi
            </span>
          </p>
        </div>
        <div className="flex text-5xl mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10l2-2m0 0l7-7 7 7m-9 2v10m0 0h-4m4 0h4"
            />
          </svg>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Phone:</span>{" "}
            <a
              href="tel:+923177100001"
              className="text-yellow-700  font-bold  sm:text-lg hover:underline"
            >
              0317-7100001
            </a>
          </p>
        </div>
        <div className="flex text-5xl mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12v3m0 0h4m-4 0H8m4 0v3m0-6v-2a4 4 0 00-8 0v2a4 4 0 008 0z"
            />
          </svg>
          <p className="text-sm flex align-middle text-gray-600">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:engineermuhammmadabdullahgohar@gmail.com"
              className="text-yellow-700  font-bold   sm:text-lg hover:underline"
            >
              engineermuhammmadabdullahgohar @gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen flex-col items-center py-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Get in Touch
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => sendData({ ...getData, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) =>
                  sendData({ ...getData, email: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={(e) =>
                  sendData({ ...getData, phone: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                onChange={(e) =>
                  sendData({ ...getData, message: e.target.value })
                }
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                onClick={Conactus}
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-500 hover:text-yellow-600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115769.58012750048!2d67.04134225845337!3d24.938903491810557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338980b4615af%3A0xe968e4f0fd0119cd!2sUniversity%20of%20Karachi!5e0!3m2!1sen!2s!4v1733000028679!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <ToastContainer />
    </>
  );
};

export default CreateUsPage;
