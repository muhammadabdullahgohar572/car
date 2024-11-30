import { useState } from "react";
import { Link } from "react-router-dom";
import conect  from "../img/navbarlogo/rent-a-car-banner-1.jpg"
const CreateUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log("Form submitted", formData);
  };

  return (

   <>
<div className="relative bg-black">
  {/* Image */}
  <img src={conect} alt="Connect us" className="w-full h-auto opacity-25 bg-black" />

  {/* Text */}
  <div className=" text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
    <h1 className="text-lg sm:text-4xl font-bold">Connect Us</h1>
  </div>
</div>


<div className="p-2">
<br/>
  <h1 className="text-2xl text-yellow-400 mb-[2%]">Customers Center</h1>
  <h1 className="font-bold sm:text-6xl  mb-[5%]">Feel Free To Contact Us With Any Questions</h1>
  <p className="text-2xl font-semibold">Top Airports. Local Suppliers. 24/7 Support.</p><br/>

  <p>If you need any further information come to our office or call us.</p>
</div>




<div className="bg-gray-100 min-h-screen flex-col items-center py-6">
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Get in Touch</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="Type your message here"
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
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
        <Link to="/login" className="text-yellow-500 hover:text-yellow-600">
          Login
        </Link>
      </p>
    </div>
  </div>
</div>

   </>
  );
};

export default CreateUsPage;
