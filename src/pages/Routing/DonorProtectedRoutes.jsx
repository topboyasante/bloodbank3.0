import React from "react";
import { Navigate } from "react-router-dom";
import DashBoard from "../Donor/Dashboard/Dashboard";

function DonorProtectedRoutes({ isLoggedIn }) {
  return isLoggedIn ? <DashBoard /> : <Navigate to="/donor/donor-login" />;
}

export default DonorProtectedRoutes;
