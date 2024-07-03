import React from "react";
import photo from "../../assets/Images/Rectangle 155.png";

export default function HostYourListVans() {
  return (
    <div className="bg-white p-5 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-10">
        <img src={photo} alt="Photo" className="w-[5rem] rounded-lg" />
        <div className="">
          <p className="text-2xl font-bold">Modest Explorer</p>
          <p className="text-gray-text text-xl">$60/day</p>
        </div>
      </div>
      <p className="text-xl font-medium  hover:underline hover:cursor-pointer">
        Edit
      </p>
    </div>
  );
}
