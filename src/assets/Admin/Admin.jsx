import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Admin = () => {
  const [contactData, setContactData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("ContactUs");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
        const filteredData = data.filter(
          (item) => item.message && item.message.split(" ").length > 20
        );
        setContactData(filteredData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContactData();
  }, []);

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-two-alpha-61.vercel.app/userAllDeatils"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
    alert(`Switched to ${newView} view.`);
  };

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
              <th className="border-b py-2 text-left px-4">
                Drop-off Location
              </th>
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
      <div
        className="max-w-full mx-auto bg-white shadow-md rounded-lg p-6"
        data-aos="fade-up"
      >
        <h2
          className="mt-4 text-xl font-semibold text-gray-700"
          data-aos="zoom-in"
        >
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
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 50}`}
                >
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
          onClick={() => handleViewChange("ContactUs")}
          className={`text-sm px-4 py-2 rounded ${
            view === "ContactUs"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-500"
          }`}
        >
          Contact Us Data
        </button>
        <button
          onClick={() => handleViewChange("BookingDetails")}
          className={`text-sm px-4 py-2 rounded ${
            view === "BookingDetails"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-500"
          }`}
        >
          Booking Details
        </button>
        <button
          onClick={() => handleViewChange("UserDetails")}
          className={`text-sm px-4 py-2 rounded ${
            view === "UserDetails"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-500"
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
                      {item.message.length > 50 ? (
                        <span>
                          {item.message.slice(0, 50)}...
                          <button
                            className="text-blue-500 hover:underline ml-2"
                            onClick={() => alert(item.message)}
                          >
                            View More
                          </button>
                        </span>
                      ) : (
                        item.message
                      )}
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
