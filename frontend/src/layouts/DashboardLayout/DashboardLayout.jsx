import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-[20vw]">
        <Header />
        <div className="content bg-[#f9f9f9] min-h-screen">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
