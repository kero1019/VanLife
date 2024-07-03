import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-main-background flex justify-between p-5 items-center h-[15%]">
      <Link to="/VanLife/" className=" font-extrabold text-[2rem]">
        #VANLIFE
      </Link>
      <nav className="flex  gap-5 text-gray-text font-semibold">
        <Link to="/VanLife/host">Host</Link>
        <Link to="/VanLife/about">About</Link>
        <Link to="/VanLife/vans">Vans</Link>
      </nav>
    </header>
  );
}
