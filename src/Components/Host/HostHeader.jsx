import React from "react";
import HeaderButton from "../HeaderButton";

export default function HostHeader() {
  return (
    <div className="flex items-center gap-10 p-5 bg-main-background ">
      <HeaderButton>Dashboard</HeaderButton>
      <HeaderButton>Income</HeaderButton>
      <HeaderButton>Vans</HeaderButton>
      <HeaderButton>Reviews</HeaderButton>
    </div>
  );
}
