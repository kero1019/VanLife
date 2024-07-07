import React from "react";
import HeaderButton from "../HeaderButton";
import { Link } from "react-router-dom";
export default function HostHeader() {
  return (
    <div className="flex items-center gap-10 p-5 bg-main-background ">
      <Link to="/VanLife/host/dashboard">
        <HeaderButton>Dashboard</HeaderButton>
      </Link>
      <Link to="/VanLife/host/income">
        <HeaderButton>Income</HeaderButton>
      </Link>
      <Link to="/VanLife/host/hostVans">
        <HeaderButton>Vans</HeaderButton>
      </Link>
      <Link to="/VanLife/host/reviews">
        <HeaderButton>Reviews</HeaderButton>
      </Link>
    </div>
  );
}
