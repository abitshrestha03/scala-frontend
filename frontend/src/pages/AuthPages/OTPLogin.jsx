const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

const OTPLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || ""; // Get the email from navigation state
  const password = location.state?.password || ""; // Get the email from navigation state
  const role = location.state?.role|| ""; // Get the email from navigation state
  const username=location.state?.username || ""; 
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {login}=useAuth();
  const [isResending, setIsResending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(email);
      console.log(otp);
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/admin/verify-login`,
        {
          email,
          otp,
        },
        {
          withCredentials: true, // This should be outside the request body
        }
      );

      console.log(response);
      const userData = {
        username:username,
        email: email,
      };
      console.log(userData);

      localStorage.setItem("user", JSON.stringify(userData));
      login();
      alert("OTP verified successfully!");
      navigate("/dashboard"); // Navigate to dashboard or any other page
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const handleResendOTP = async () => {
    if(isResending) return;
    setIsResending(true);
    console.log(email,password,role);
    try {
      await axios.post(
        `${API_BASE_URL}/api/v1/admin/login`,
        { email,password,role },
      );
      alert("OTP resent successfully!Check your email.");
    } catch (error) {
      console.error("Resend OTP failed:", error);
      alert("Failed to resend OTP. Please try again.");
    }finally{
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Verify Your Email
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the OTP sent to <span className="font-medium">{email}</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              OTP Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter 6-digit OTP"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || otp.length !== 6}
            className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 ${
              isSubmitting || otp.length !== 6
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
          Didn't receive the code?{" "}
          <button
            onClick={handleResendOTP}
            className={`text-indigo-500 hover:underline ${isResending ? "opacity-50 hover:no-underline" : "opacity-100"}`}
            disabled={isResending}
          >
            {isResending? "Resending . . .":"Resend OTP"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPLogin;

