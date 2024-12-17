import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from 'prop-types';
import { useEffect } from "react";

const Layout = ({children}) => {
  const location=useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.pathname]);
  return (
      <div className="bg-dark overflow-x-hidden">
      <Header />
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,  
  };

export default Layout;
