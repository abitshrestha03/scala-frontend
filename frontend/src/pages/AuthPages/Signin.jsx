import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles for Toastify
import { useAuth } from "../../Context/AuthContext";
import NavLogo from "../../assets/images/NavLogo.svg";
// import { signIn } from "../../api-client";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
console.log(API_BASE_URL);

const SigninPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "ADMIN",
  });
  const { login } = useAuth();

  const [isSigningIn,setIsSigningIn] = useState(false);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    if(isSigningIn) return;
    setIsSigningIn(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/admin/login`,
        {
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }
      );
      console.log(response);

      const userData = {
        username: response?.data?.data?.username,
        email: response?.data?.data?.email,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      // await signIn(formData);
      if (response?.data?.data?.role === "ADMIN") {
        toast.success("Signin successfully!");
        login();
        navigate("/dashboard");
      } else if (response.data?.isOtpRequired) {
        navigate("/otp-login", {
          state: {
            email: formData.email,
            username: response?.data?.data?.username,
            password:formData.password,
            role:formData.role,
          },
        });
      }
    } catch (error) {
      console.error(error);
      // Handle invalid email/password error
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password. Please try again.");
      } else if (error.response.status === 404) {
        toast.error("Email not found. Please check your email and try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }finally{
      setIsSigningIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        {/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign In
        </h2> */}

        <div className="flex justify-center mb-6">
          <img src={NavLogo} alt="Logo" className="w-[15vw] h-auto" />
        </div>
        <form onSubmit={handleSubmit}>
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
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Role
            </label>
            <select
              id="role"
              value={formData.role}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            >
              <option value="ADMIN">Admin</option>
              <option value="SUPERADMIN">Superadmin</option>
            </select>
          </div>
          <button
            type="submit"
            className={`w-full bg-navblue text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-200 ${isSigningIn ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {isSigningIn?"Signing . . .":"Signin"}
            </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/signup" className="text-indigo-500 hover:underline">
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
