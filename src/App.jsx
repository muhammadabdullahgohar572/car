import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./assets/pages/Navbar";
import CreateUsPage from "./assets/pages/contectus";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/sigup";
import Footer from "./assets/pages/Footer";
import CarRental from "./assets/pages/About";
import { Vehicle } from "./assets/pages/Vehicle";
import { Tours } from "./assets/pages/Tower";
import { Location } from "./assets/pages/Location";
import { About1 } from "./assets/pages/About1";
import { Services } from "./assets/pages/Services";
import { Home } from "./assets/pages/Home";
import Booking from "./assets/pages/Booking";
import PrivateRoute from "./assets/pages/PrivateRoute"; // Import the PrivateRoute component

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-30 w-full">
        <Navbar /> 
      
      </div>

      {/* Main Content */}
      <div className="mt-[80%] ssml:mt-[60%] sm:mt-[18%] top-44">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/contactus"
            element={
              <PrivateRoute>
                <CreateUsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/Vehicle"
            element={
              <PrivateRoute>
                <Vehicle />
              </PrivateRoute>
            }
          />
          <Route
            path="/Tours"
            element={
              <PrivateRoute>
                <Tours />
              </PrivateRoute>
            }
          />
          <Route
            path="/Location"
            element={
              <PrivateRoute>
                <Location />
              </PrivateRoute>
            }
          />
          <Route
            path="/About"
            element={
              <PrivateRoute>
                <About1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/Services"
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            }
          />
          <Route
            path="/Booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path="/Rates"
            element={
              <PrivateRoute>
                <CarRental />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
