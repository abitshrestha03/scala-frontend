import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || ""; // Get the email from navigation state
  const password = location.state?.password || ""; // Get the email from navigation state
  const username = location.state?.username || ""; // Get the email from navigation state
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(email);
      console.log(otp);
      const response = await axios.post(
        "http://localhost:8000/api/v1/admin/verify-otp",
        {
          email,
          username,
          password,
          otp,
        },
        {
          withCredentials: true, // This should be outside the request body
        }
      );
      console.log(response);
      alert("OTP verified successfully!");
      navigate("/signin"); // Navigate to dashboard or any other page
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            onClick={() => alert("Resend OTP functionality here")}
            className="text-indigo-500 hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTP;
