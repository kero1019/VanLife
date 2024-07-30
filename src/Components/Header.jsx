import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-main-background flex justify-between p-5 items-center h-[15%]">
      <NavLink to="/VanLife/" className=" font-extrabold text-[2rem]">
        #VANLIFE
      </NavLink>
      <nav className="flex  gap-5 text-gray-text font-semibold">
        <NavLink to="/VanLife/host" className={({isActive})=>isActive? "text-red-500 font-bold underline text-[1.2rem]":"hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"}>Host</NavLink>
        <NavLink to="/VanLife/about" className={({isActive})=>isActive? "text-red-500 font-bold underline text-[1.2rem]":"hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"}>About</NavLink>
        <NavLink to="/VanLife/vans" className={({isActive})=>isActive? "text-red-500 font-bold underline text-[1.2rem]":"hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"}>Vans</NavLink>
      </nav>
    </header>
  );
}
