import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Corrected import
import { setLoginStatus } from "../authentication/Authenticate";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sing = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      if (formData.email !== "" && formData.password !== "") {
        const response = await fetch("https://ecommerce-two-alpha-61.vercel.app/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data === "User not found") {
          toast.error("User not found", {
            position: "top-center",
          });
        } else {
          toast.success("Login Successful", {
            position: "top-center",
            theme: "dark",
          });

          // Save token in localStorage
          localStorage.setItem("token", JSON.stringify(data));

          // Update Redux store
          dispatch(setLoginStatus({ isAuthenticated: true, token: data }));

          // Redirect to the homepage
          navigate("/");
        }
      } else {
        toast.error("Please fill in correct details", {
          position: "top-center",
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={sing}>
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Login
          </button>
          <p className="text-sm text-gray-700 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>{" "}
            now.
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
