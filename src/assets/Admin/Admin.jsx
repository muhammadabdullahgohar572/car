import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Admin = () => {
  const [contactData, setContactData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [userData, setUserData] = useState(null); // New state for user details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("ContactUs");

  // Get username from JWT token in localStorage (optional)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetching "Contact Us" data
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-two-alpha-61.vercel.app/getconectus"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contact data.");
        }
        const data = await response.json();
        setContactData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContactData();
  }, []);

  // Fetching "Booking Details" data
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-two-alpha-61.vercel.app/getUserDetails"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch booking data.");
        }
        const data = await response.json();
        setBookingData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBookingData();
  }, []);

  // Fetching "User Details" data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://ecommerce-two-alpha-61.vercel.app/userAllDeatils");
        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }
        const data = await response.json();
        console.log(data); // Log the response to check the structure
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, []);
  

  if (loading) {
    return <p className="text-center text-lg animate-pulse">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 font-semibold">Error: {error}</p>
    );
  }

  const BookingDetails = () => {
    return (
      <div className="overflow-x-auto mt-4" data-aos="fade-up">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200" data-aos="fade-down">
              <th className="border-b py-2 text-left px-4">#</th>
              <th className="border-b py-2 text-left px-4">Car Type</th>
              <th className="border-b py-2 text-left px-4">Pickup Location</th>
              <th className="border-b py-2 text-left px-4">Drop-off Location</th>
              <th className="border-b py-2 text-left px-4">Pick-up Date</th>
              <th className="border-b py-2 text-left px-4">Pick-up Time</th>
              <th className="border-b py-2 text-left px-4">Drop-off Time</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
              >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item.car_type}</td>
                <td className="py-2 px-4">{item.pickup_location}</td>
                <td className="py-2 px-4">{item.dropoff_location}</td>
                <td className="py-2 px-4">{item.pickup_date}</td>
                <td className="py-2 px-4">{item.pickup_time}</td>
                <td className="py-2 px-4">{item.dropoff_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  const UserDetails = () => {
    if (!userData || userData.length === 0) {
      return <p>No user data available.</p>;
    }
  
    return (
      <div className="max-w-full mx-auto bg-white shadow-md rounded-lg p-6" data-aos="fade-up">
        <h2 className="mt-4 text-xl font-semibold text-gray-700" data-aos="zoom-in">
          User Details
        </h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b py-2 text-left px-4">#</th>
                <th className="border-b py-2 text-left px-4">Username</th>
                <th className="border-b py-2 text-left px-4">Email</th>
                <th className="border-b py-2 text-left px-4">Age</th>
                <th className="border-b py-2 text-left px-4">Company Name</th>
                <th className="border-b py-2 text-left px-4">Gender</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay={`${index * 50}`}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.age}</td>
                  <td className="py-2 px-4">{user.Companyname}</td>
                  <td className="py-2 px-4">{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
 

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("ContactUs")}
          className={`text-sm px-4 py-2 rounded ${
            view === "ContactUs" ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"
          }`}
        >
          Contact Us Data
        </button>
        <button
          onClick={() => setView("BookingDetails")}
          className={`text-sm px-4 py-2 rounded ${
            view === "BookingDetails" ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"
          }`}
        >
          Booking Details
        </button>
        <button
          onClick={() => setView("UserDetails")}
          className={`text-sm px-4 py-2 rounded ${
            view === "UserDetails" ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"
          }`}
        >
          User Details
        </button>
      </div>

      {view === "ContactUs" && (
        <div
          className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6"
          data-aos="fade-up"
        >
          <h2
            className="mt-4 text-xl font-semibold text-gray-700"
            data-aos="zoom-in"
          >
            Contact Us Data
          </h2>
          {contactData.length > 0 ? (
            <div className="overflow-x-auto mt-4" data-aos="fade-up">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200" data-aos="fade-down">
                    <th className="border-b py-2 text-left px-4">#</th>
                    <th className="border-b py-2 text-left px-4">Name</th>
                    <th className="border-b py-2 text-left px-4">Email</th>
                    <th className="border-b py-2 text-left px-4">Phone</th>
                    <th className="border-b py-2 text-left px-4">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contactData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition-colors duration-300"
                      data-aos="fade-up"
                      data-aos-delay={`${index * 50}`}
                    >
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.email}</td>
                      <td className="py-2 px-4">{item.phone}</td>
                      <td className="py-2 px-4">{item.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No contact data available.</p>
          )}
        </div>
      )}

      {view === "BookingDetails" && <BookingDetails />}
      {view === "UserDetails" && <UserDetails />}
    </div>
  );
};

