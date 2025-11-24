
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to continue.");
    return (
      <Navigate
        to="/register/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
