import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
const UniqueSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-red-800 rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <UniqueSpinner />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
