import SearchIcon from "../../assets/icons/SearchIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import BellIcon from "../../assets/icons/BellIcon";
// import ProfilePhoto from "../../assets/images/Ellipse.png";
// import ProfilePhoto1 from "../../assets/images/ProfilePhoto1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const {logout}=useAuth();
  const navigate=useNavigate();

  const handleLogout =async () => {

    const response=await axios.get(`${API_BASE_URL/api/v1/admin/logout`);
    if(response.data.success){
      logout();
      localStorage.removeItem("user");
  
      // Optionally, update state or redirect after logout
      setUsername("");
      setEmail("");
  
      // Close the popup
      togglePopup();
  
       navigate('/signin');
    }else{
      toast.error("Error while logging out.");
    }
  };

  useEffect(() => {
    // Retrieve the user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // If user data exists in localStorage, update the state
    if (storedUser) {
      setUsername(storedUser.username);
      setEmail(storedUser.email);
    }
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="hidden md:flex fixed top-0 right-0 left-0 md:left-72 items-center justify-between py-4 px-6 bg-white z-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-medium">Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Header Icons */}
        <div className="header-icons flex gap-3 sm:gap-4">
          <div className="bg-white shadow p-2 rounded">
            <SearchIcon />
          </div>
          <div className="bg-white shadow p-2 rounded">
            <SettingsIcon />
          </div>
          <div className="bg-white shadow p-2 rounded relative">
            <BellIcon />
            {/* Red notification dot */}
            <div className="absolute top-3  left-3 w-2 h-2 bg-[#FF0000] rounded-full"></div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="border-l border-black h-8 mx-4 hidden md:block"></div>

        {/* Profile and Name Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-black font-medium text-sm sm:text-base">
            {username}
          </div>

          {/* <img
            src={ProfilePhoto}
            alt="profilephoto"
            className="w-[37px] h-[37px] rounded-full object-cover cursor-pointer"
            onClick={togglePopup}
          /> */}

          {/* Dropdown Arrow */}
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={togglePopup}
          >
            <path d="M6.29032 10L0 0H13L6.29032 10Z" fill="#26A5FF" />
          </svg>
        </div>
      </div>

      {/* Profile Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] md:w-[529px] relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-black font-normal rounded-full px-1 py-1 hover:text-gray-700 bg-white shadow-lg text-3xl w-10 h-10"
            >
              &times;
            </button>

            {/* Profile Info */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                // src={ProfilePhoto1}
                alt="Profile"
                className="rounded-full object-cover w-16 h-16"
              />
              <div>
                <h2 className="text-xl mb-1 font-semibold">{username}</h2>
                <p className="text-gray-500 text-xs">{email}</p>
              </div>
            </div>

            {/* Profile Form */}
            {/* <form className="space-y-4 pt-4">
              <div className="flex space-x-4 items-center justify-between">
                <label className="block text-black font-medium text-xs">
                  Name
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="Abit"
                    className="border border-gray-300 rounded py-2 pl-2 w-[169px] text-sm"
                  />
                  <input
                    type="text"
                    value="Shrestha"
                    className="border border-gray-300 rounded py-2 pl-2 w-[160px] text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <label className="block text-black font-medium text-xs">
                  Email
                </label>
                <input
                  type="email"
                  value="abitshrestha03@gmail.com"
                  className="w-full md:w-[338px] border border-gray-300 pl-2 rounded py-2 text-sm"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="block text-black font-medium text-xs">
                  Username
                </label>
                <input
                  type="text"
                  value="abitshrestha11"
                  className="w-full md:w-[338px] border border-gray-300 rounded pl-2 py-2 text-sm"
                />
              </div>

              <div className="flex justify-between items-center">
                <label className="block font-medium text-xs">
                  Phone Number
                </label>
                <input
                  type="text"
                  value="9812345678"
                  className="w-full md:w-[338px] border border-gray-300 rounded pl-2 py-2  text-sm"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="px-2 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-2 py-1 text-white bg-blue rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form> */}
            {/* Logout Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleLogout}
                className="py-2 px-2 text-white text-xs bg-red-500 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
