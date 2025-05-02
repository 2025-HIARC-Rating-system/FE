import {Navigate} from "react-router-dom";

export const AdminGuard = ({children}: {children: JSX.Element}) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};
