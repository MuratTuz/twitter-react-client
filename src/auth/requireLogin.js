import { Navigate } from "react-router";
import { getTokenFromSessionStorage } from "../services/tokenServices";

const RequireLogin = ({ children }) => {
  const { token } = getTokenFromSessionStorage();
  return token === null ? <Navigate to="/login" /> : children;
};

export default RequireLogin;
