import React from "react";
import OrangeButton from "./OrangeButton";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-content flex-1 bg-green-900 home">
      <div className="image h-full text-white p-6 flex flex-col justify-around">
        <p className="text-[3rem] font-bold ">You got the travel plans, we got the travel vans.</p>
        <p className="">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <NavLink  to="/VanLife/vans">
        <OrangeButton>Find your Van</OrangeButton>
        </NavLink>
      </div> 
    </div>
  );
}
