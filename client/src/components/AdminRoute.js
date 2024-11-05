import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    // TODO criar a pagina not-authorized
    return <Navigate to="/not-authorized" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
