import React from "react";
import Footer from "./Footer";
import OrangeButton from "./OrangeButton";
export default function Home() {
  return (
    <div className="home-content flex-1 bg-green-900 home">
      <div className="image h-full text-white p-6 flex flex-col justify-around">
        <p className="text-[3rem] font-bold ">You got the travel plans, we got the travel vans.</p>
        <p className="">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <OrangeButton>Find your Van</OrangeButton>
      </div> 
    </div>
  );
}
