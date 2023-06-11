import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const UniqueSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-red-800 rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <UniqueSpinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
