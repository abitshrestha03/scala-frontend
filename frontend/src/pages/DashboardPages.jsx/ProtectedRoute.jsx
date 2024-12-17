import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Redirect to sign-in page if not logged in
    return <Navigate to="/signin" replace />;
  }

  return children; // Render the protected content
};

export default ProtectedRoute;
