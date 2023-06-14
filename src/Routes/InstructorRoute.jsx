import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();

  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email && isInstructor) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default InstructorRoute;
