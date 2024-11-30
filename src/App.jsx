import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./assets/pages/Navbar";
import CreateUsPage from './assets/pages/contectus';
import Login from './assets/pages/Login';
import Signup from './assets/pages/sigup';
import Footer from "./assets/pages/Footer";
// import CarRental from "./assets/pages/About";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-30 w-full">
        <Navbar />
      </div>

      {/* Main Content with margin-top to avoid overlap with Navbar */}
      <div className="mt-[80%] sm:mt-[20%] top-44"> {/* Adjust margin-top based on the height of the navbar */}
        <Routes>
          <Route path="/" />
          <Route path="/contactus" element={<CreateUsPage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/About" element={<CarRental />} /> */}

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
