import NavLogo from "../../assets/images/NavLogo.svg";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import { NavLink } from "react-router-dom";
// import ShipmentIcon from "../../assets/icons/ShipmentIcon";
// import InventoryIcon from "../../assets/icons/InventoryIcon";
// import OrdersIcon from "../../assets/icons/OrdersIcons";
import CustomersIcon from "../../assets/icons/CustomersIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const Sidebar = () => {
  // State to toggle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [adminRole, setAdminRole] = useState("");

  // Toggle function for hamburger menu
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchAdminRole = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/v1/admin/get-admin`,
          {
            withCredentials: true,
          }
        );
        setAdminRole(response.data.data.role);
      } catch (error) {
        console.error("Error fetching admin role", error);
      }
    };

    fetchAdminRole();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      {/* Hamburger icon for small screens */}
      <div className="md:hidden absolute top-9 z-20">
        <button
          onClick={toggleSidebar}
          className={`flex flex-col space-y-1 items-center ${
            isSidebarOpen ? "hidden" : "visible"
          }`}
        >
          <div className="w-4 h-0.5 bg-black rounded-lg"></div>
          <div className="w-4 h-0.5 bg-black rounded-lg"></div>
          <div className="w-4 h-0.5 bg-black rounded-lg"></div>
        </button>
      </div>
      {/* dashboard for larger screens */}
      <div className="hidden md:block bg-white-900 text-black h-screen p-6 space-y-5  md:w-[276px] fixed left-0 top-0 z-10">
        <div className="frame112">
          <img src={NavLogo} alt="Logo" className="w-[15vw] h-auto mb-20" />
          <nav className="space-y-2 w-[212px]">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                  : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
              }
            >
              <DashboardIcon
                className="w-6 h-6"
                style={{ fill: "currentColor" }}
              />
              {/* Hide text on small screens */}
              <span className="ml-5 font-normal text-sm hidden md:block">
                Dashboard
              </span>
            </NavLink>
            {adminRole === "SUPERADMIN" && (
              <NavLink
                to="/admins"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                    : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
                }
              >
                <CustomersIcon
                  className="w-6 h-6"
                  style={{ fill: "currentColor" }}
                />
                <span className="ml-5 font-normal text-sm hidden md:block">
                  Users
                </span>
              </NavLink>
            )}

            <div className="flex flex-col">
              <div className="mt-12">
                <hr className="border-t border-gray-300" />
              </div>
            </div>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                  : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
              }
            >
              <SupportIcon
                className="w-6 h-6"
                style={{ fill: "currentColor" }}
              />
              <span className="ml-5 font-normal text-sm hidden md:block">
                Help and Support
              </span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] sm:w-[15.56vw] rounded-md"
                  : "flex items-center block text-black px-2 py-3 w-[10vw] sm:w-[15.56vw] hover:bg-custom-hover rounded-md"
              }
            >
              <SettingsIcon
                className="w-6 h-6"
                style={{ fill: "currentColor" }}
              />
              <span className="ml-5 font-normal text-sm hidden md:block">
                Settings
              </span>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* sidebar for smaller screens */}
      <div
        ref={sidebarRef}
        className={`md:hidden fixed top-0 text-black left-0 ms:w-[60%] h-screen bg-white py-6 px-4 space-y-5 transition-all ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="frame112">
          <img src={NavLogo} alt="Logo" className="h-auto mb-12" />
          <nav className="space-y-2 w-[212px]">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center block text-white bg-[#003DFF] py-3 px-2 w-[10vw] ms:w-[50vw] rounded-md"
                  : "flex items-center block text-black px-2 py-3 w-[10vw] ms:w-[40vw] hover:bg-custom-hover rounded-md"
              }
            >
              {/* <DashboardIcon
                className="w-6 h-6"
                style={{ fill: "currentColor" }}
              /> */}
              <span className="ml-2 font-normal text-sm">Dashboard</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
