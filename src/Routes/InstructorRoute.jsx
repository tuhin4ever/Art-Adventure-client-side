import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const UniqueSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-red-800 rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <UniqueSpinner />;
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;