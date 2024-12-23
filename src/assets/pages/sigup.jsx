import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { Bounce } from "react-toastify"; // Import Bounce transition
import { Link } from "react-router";

function Signup() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const [data, setdata] = useState({
    Username: "",
    Email: "",
    Password: "",
    Company_Name: "",
    Age: "",
    Gender: "", // Added Gender field
  });

  const methodpost = async () => {
    if (
      data.Username &&
      data.Password &&
      data.Email &&
      data.Age &&
      data.Company_Name &&
      data.Gender
    ) {
      await fetch("https://ecommerce-two-alpha-61.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((dataa) => {
          console.log(dataa);
          setdata({
            Username: "",
            Email: "",
            Password: "",
            Company_Name: "",
            Age: "",
            Gender: "",
          });

          // Show toast notification first
          toast.success("Account created successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce, // Apply Bounce transition
          });

          // Redirect after the toast has been shown
          setTimeout(() => {
            setRedirectToHome(true);
          }, 2000); // Delay for 5 seconds to match the toast autoClose
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log(data);
    } else {
      console.log("Please fill all fields:", data);
    }
  };

  useEffect(() => {
    methodpost();
  }, []);
  
  if (redirectToHome) {
    return <Navigate to="/" />; // Redirect to home page
  }
 

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Signup
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              methodpost();
            }}
          >
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setdata({ ...data, Username: e.target.value })}
                value={data.Username}
                className="w-full p-2 border border-gray-300 rounded-md"
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
                onChange={(e) => setdata({ ...data, Email: e.target.value })}
                value={data.Email}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setdata({ ...data, Password: e.target.value })}
                value={data.Password}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={(e) =>
                  setdata({ ...data, Company_Name: e.target.value })
                }
                value={data.Company_Name}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="age"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={(e) => setdata({ ...data, Age: e.target.value })}
                value={data.Age}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) =>
                      setdata({ ...data, Gender: e.target.value })
                    }
                    checked={data.Gender === "Male"}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) =>
                      setdata({ ...data, Gender: e.target.value })
                    }
                    checked={data.Gender === "Female"}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Signup
            </button>
           
           <div className="text-center text-gray-600 mt-4">
            Already have an account? <Link to="/Login">Login</Link>
</div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
