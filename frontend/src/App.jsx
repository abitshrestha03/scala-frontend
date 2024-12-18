import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";
import Portfolio from "./pages/ResourcePages/Portfolio";
import Career from "./pages/ResourcePages/Career";
import Blog from "./pages/ResourcePages/Blog";
import JobDetails from "./components/CareerComponent/JobDetails";
import BlogDetails from "./components/BlogComponent/BlogDetails";
import SignupPage from "./pages/AuthPages/Signup";
import SigninPage from "./pages/AuthPages/Signin";
import Dashboard from "./pages/DashboardPages.jsx/Dashboard";
import OTP from "./pages/AuthPages/OTP";
import OTPLogin from "./pages/AuthPages/OTPLogin";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import CreateAdmin from "./pages/DashboardPages.jsx/CreateAdmin";
import { useAuth } from "./Context/AuthContext";
import ProtectedRoute from "./pages/DashboardPages.jsx/ProtectedRoute";
import NotFoundPage from "./NotFoundPage";
const App = () => {
  const {isLoggedIn}=useAuth();
  console.log("is logged in",isLoggedIn);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home/></Layout>,
    },
    {
      path: "/signup",
      element: <SignupPage/>,
    },
    {
      path: "/otp-verify",
      element: <OTP/>,
    },
    {
      path: "/otp-login",
      element: <OTPLogin/>,
    },
    {
      path: "/signin",
      element: <SigninPage/>,
    },
    // {
    //   path: "/dashboard",
    //   element:<ProtectedRoute><DashboardLayout><Dashboard/></DashboardLayout></ProtectedRoute>,
    // },
    // {
    //   path: "/admins",
    //   element:<ProtectedRoute><DashboardLayout><CreateAdmin/></DashboardLayout></ProtectedRoute>,
    // },
       {
      path: "/dashboard",
      element:<DashboardLayout><Dashboard/></DashboardLayout>,
    },
    {
      path: "/admins",
      element:<DashboardLayout><CreateAdmin/></DashboardLayout>,
    },
    {
      path:"/about",
      element:<Layout><About/></Layout>
    },
    {
      path:'/services',
      element:<Layout><Services/></Layout>
    },
    {
      path:'/contact-us',
      element:<Layout><ContactPage/></Layout>
    },
    {
      path:'/resources',
      children:[
        {
          path:"portfolio",
          element:<Layout><Portfolio/></Layout>
        },
        {
          path:"careers",
          children:[
            {
              path:"",
              element:<Layout><Career/></Layout>
            },
            {
                path:":jobId",
              element:<Layout><JobDetails/></Layout>
            }
          ]
        },
        {
          path:"blogs",
          children:[
            {
              path:"",
              element:<Layout><Blog/></Layout>
            },
            {
                path:":articleId",
              element:<Layout><BlogDetails/></Layout>
            }
          ]
        },
      ]
    },
    {
      path: "*",
      element: <NotFoundPage />, // Display 404 page
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
