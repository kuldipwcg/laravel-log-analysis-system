import { Navigate } from "react-router-dom";
/**
 * ? condition that only if there is token there the children is render
 */
const ProtectedLogin = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  }
  localStorage.setItem("token", "Kuldip");
  return <Navigate to="/login" replace />;
};

export default ProtectedLogin;
