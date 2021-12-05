import { Navigate } from "react-router";
//import { getTokenFromSessionStorage } from "../services/saveToken";

const RequireLogin = ({ token, children }) =>
  token === null ? <Navigate to="/login" /> : children;
  

export default RequireLogin;
