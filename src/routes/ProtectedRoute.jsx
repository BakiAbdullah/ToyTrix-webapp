import { useContext } from "react";
import { AuthContext } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RevolvingDot } from "react-loader-spinner";
import Swal from "sweetalert2";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const userLocation = useLocation();

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
        <RevolvingDot
          height="80"
          width="80"
          radius="27"
          color="#218B82"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    Swal.fire({
      icon: "warning",
      title: "Please Login to Continue!",
    });
  }

  return <Navigate to="/login" state={{from : userLocation}} replace></Navigate> 
};

export default ProtectedRoute;
