import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function Authorized() {
  const authorized = true;
  if (!authorized) {
    return <Navigate to="/VanLife/login" state={{message:"You must log in first"}} />;
  }
  return <Outlet />;
}
