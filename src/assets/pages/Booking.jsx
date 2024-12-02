export default function Booking() {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Car Type Selection */}
            <div className="space-y-2">
              <label htmlFor="carType" className="text-sm font-medium text-gray-700">
                Select Your Car Type
              </label>
              <select
                id="carType"
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
  