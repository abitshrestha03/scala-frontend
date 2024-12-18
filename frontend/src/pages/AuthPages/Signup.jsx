import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import NavLogo from "../../assets/images/NavLogo.svg";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isCreatingAccount,setIsCreatingAccount] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      if(isCreatingAccount) return;
      setIsCreatingAccount(true);
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/admin/create`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log(response);
      alert("Account created successfully!");
      navigate("/otp-verify", {
        state: {
          email: formData.email,
          username: formData.username,
          password: formData.password,
        },
      });
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account. Please try again.");
    }finally{
      setIsCreatingAccount(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        {/* <h2 className="text-2xl font-bold text-gray-800 text-center">
          Sign Up
        </h2> */}
        <div className="flex justify-center mb-6">
          <img src={NavLogo} alt="Logo" className="w-[15vw] h-auto" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Username . . ."
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              id="password"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm your password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-navblue text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-200 ${isCreatingAccount ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isCreatingAccount}
          >
            {isCreatingAccount?"Creating . . .":"Create Account"}
        </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/signin" className="text-indigo-500 hover:underline">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

