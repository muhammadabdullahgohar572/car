import { Link } from "react-router-dom";  // Changed from 'next/link' to 'react-router-dom'
import { Phone } from "lucide-react";      // This import remains unchanged
import logo from "../img/navbarlogo/Black and White Automotive Logo.png";        // Path to your logo image

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-4">
            <img
              src={logo} // Directly use the logo image path in React
              alt="Nafees Rent A Car"
              width={150}
              height={60}
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">Have a Question? Feel Free to Ask...Feedback</h2>
            <p className="text-gray-300 mb-4">
              Nafees Rent A Car provides car rental services for various purposes, from casual to executive trips.
              Start your business deals in style to make a lasting impression by renting an excellent brand car,
              complete with a professional driver.
            </p>
            <div className="flex items-center gap-2 text-yellow-500">
              <Phone className="h-5 w-5" />
              <a href="tel:+92-317-710-0001" className="text-lg font-semibold">
                +92-317-710-0001
              </a>
            </div>
          </div>

          {/* Areas Column */}
          <div className="lg:col-span-2">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4">Areas</h3>
            <ul className="space-y-2">
              {[
                "Bufferzone",
                "Gulistan-E-Johar",
                "Gulshan-e-Iqbal",
                "Korangi Industrial Area",
                "Clifton",
                "Defence",
                "Bahria Town Karachi",
                "Tariq Road",
                "Sindh Muslim Society",
                "Landhi Industrial Area",
                "Baldia Town",
                "Shah Faisal",
                "Malir Cantt",
                "Saddar",
              ].map((area) => (
                <li key={area}>
                  <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cars Column */}
          <div className="lg:col-span-2">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4">Cars</h3>
            <ul className="space-y-2">
              {[
                "7 Seater",
                "BMW",
                "Honda Civic",
                "Hiace grand cabin",
                "Toyota Corolla",
                "Toyota Revo on rent",
                "Toyota Vigo on rent",
                "Toyota coaster",
                "Land Cruiser V8",
                "Land cruiser Prado",
                "Mercedes",
              ].map((car) => (
                <li key={car}>
                  <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    {car}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Column */}
          <div className="lg:col-span-2">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4">Cities</h3>
            <ul className="space-y-2">
              {["Karachi", "Lahore", "Islamabad"].map((city) => (
                <li key={city}>
                  <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events and Explore Columns */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-yellow-500 text-xl font-semibold mb-4">Events</h3>
              <ul className="space-y-2">
                {["Wedding", "Airport"].map((event) => (
                  <li key={event}>
                    <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                      {event}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-500 text-xl font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                {["About", "Contact Us", "Blog"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            Copyright © 2024 Nafees Rent A Car Pakistan | All Rights Reserved | Design & Developed By{" "}
            <a href="#" className="text-yellow-500 hover:underline">
              Creative Tech
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
