import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user && !sessionStorage.getItem("authAlertShown")) {
      alert("Please login first");
      sessionStorage.setItem("authAlertShown", "true");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  sessionStorage.removeItem("authAlertShown");
  return children;
};

export default ProtectedRoute;
