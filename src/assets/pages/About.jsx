import Service from "../img/controlar/service";

import img from "../img/navbarlogo/0x0.webp"

export default function CarRental() {
 

  const carRates = [
    { model: "Toyota Corolla 2021/2023", rates: ["6000/-", "5500/-", "5000/-", "4500/-"] },
    { model: "Toyota Corolla 2018/2020", rates: ["5000/-", "4500/-", "4500/-", "4500/-"] },
    { model: "Toyota Prado 2018/2023", rates: ["15000/-", "14000/-", "13000/-", "13000/-"] },
    { model: "Toyota Fortuner 2018/2023", rates: ["15000/-", "14000/-", "13000/-", "13000/-"] },
    { model: "Toyota V8 Land Cruiser 2018/2023", rates: ["25000/-", "23000/-", "22000/-", "20000/-"] },
    { model: "Honda Civic 2022/2023", rates: ["15000/-", "13000/-", "12000/-", "11000/-"] },
    { model: "Honda Civic 2018/2021", rates: ["8000/-", "7500/-", "7000/-", "6500/-"] },
    { model: "Honda City 2018/2023", rates: ["6000/-", "5500/-", "5000/-", "4500/-"] },
    { model: "Suzuki Cultus 2018/2023", rates: ["4000/-", "3500/-", "3500/-", "3500/-"] },
    { model: "Suzuki Alto 2018/2023", rates: ["4000/-", "3500/-", "3500/-", "3500/-"] },
  ];

  return (
   
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Car rental hero"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Nafees Rent A Car Rates
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">Best Car Rental Service Providers</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Rent A Car Rates In Karachi</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Rent a Car Service Pakistan provides not just vehicles but a total solution for your entire customized traveling needs.
            We maintain our charges at an affordable level. Our Rent a car rates in Karachi are cheap and geared for an enduring relationship.
            Cars for rent are available with driver.
          </p>
        </div>

        {/* Rates Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Make/Model
                </th>
                {["1-3 Days", "3-6 Days", "7-13 Days", "14+ Days"].map((label) => (
                  <th key={label} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {label} per Day Rate
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {carRates.map((car, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{car.model}</td>
                  {car.rates.map((rate, rateIndex) => (
                    <td key={rateIndex} className="px-6 py-4 text-sm text-gray-500">{rate}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <Service/>
      </div>
    </div>
  );
}
