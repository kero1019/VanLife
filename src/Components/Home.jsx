import React from "react";
import Footer from "./Footer";
import OrangeButton from "./OrangeButton";
export default function Home() {
  return (
    <div className="bg-green-500 home-content h-[85%]">
      <div className="image w-full h-[85%] text-white p-6 flex flex-col justify-around">
        <p className="text-[3rem] font-bold ">You got the travel plans, we got the travel vans.</p>
        <p className="">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <OrangeButton>Find your Van</OrangeButton>
      </div>
        <Footer />
    </div>
  );
}
