import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Booking() {
  const [carType, setCarType] = useState('suzuki-alto');
  const [pickupLocation, setPickupLocation] = useState('islamabad');
  const [dropoffLocation, setDropoffLocation] = useState('faisalabad');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false); // New state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      car_type: carType,
      pickup_location: pickupLocation,
      dropoff_location: dropoffLocation,
      pickup_date: pickupDate,
      pickup_time: pickupTime,
      dropoff_time: dropoffTime,
      booking_id: '1', // Could be dynamic if needed
      created_at: new Date().toISOString(),
    };

    const response = await fetch('https://ecommerce-two-alpha-61.vercel.app/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      const result = await response.json();
      alert(result.message);
      setRedirectToHome(true); // Set redirectToHome to true upon successful booking
    } else {
      alert('Booking failed');
    }
  };

  if (redirectToHome) {
    return <Navigate to="/" />; // Redirect to home page
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Car Type Selection */}
          <div className="space-y-2">
            <label htmlFor="carType" className="text-sm font-medium text-gray-700">
              Select Your Car Type
            </label>
            <select
              id="carType"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="suzuki-alto">Suzuki Alto</option>
              <option value="honda-civic">Honda Civic</option>
              <option value="toyota-corolla">Toyota Corolla</option>
            </select>
          </div>

          {/* Pickup Location */}
          <div className="space-y-2">
            <label htmlFor="pickupLocation" className="text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <select
              id="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="islamabad">Islamabad</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
            </select>
          </div>

          {/* Drop-off Location */}
          <div className="space-y-2">
            <label htmlFor="dropoffLocation" className="text-sm font-medium text-gray-700">
              Drop-off Location
            </label>
            <select
              id="dropoffLocation"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="faisalabad">Faisalabad</option>
              <option value="multan">Multan</option>
              <option value="peshawar">Peshawar</option>
            </select>
          </div>
        </div>

        {/* Date and Time Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pick-up Date */}
          <div className="space-y-2">
            <label htmlFor="pickupDate" className="text-sm font-medium text-gray-700">
              Pick-up Date
            </label>
            <input
              type="date"
              id="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Pick-up Time */}
          <div className="space-y-2">
            <label htmlFor="pickupTime" className="text-sm font-medium text-gray-700">
              Pick-up Time
            </label>
            <input
              type="time"
              id="pickupTime"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Drop-off Time */}
          <div className="space-y-2">
            <label htmlFor="dropoffTime" className="text-sm font-medium text-gray-700">
              Drop-off Time
            </label>
            <input
              type="time"
              id="dropoffTime"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
