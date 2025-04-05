import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedLoginRoute = ({ children }) => {
  const token = Cookies.get("verification_token");
  return token ? <Navigate to="/studentdashboard" replace /> : children;
};

export default ProtectedLoginRoute;
