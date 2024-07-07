import React from "react";
import { FaStar } from "react-icons/fa";
import HostYourListVans from "./HostYourListVans";
export default function Dashboard() {
  return (
    <div>
      <div className="p-10 bg-light-beige">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-5">
            <h1 className="text-[2rem] font-bold">Welcome !</h1>
            <p className="text-gray-text">
              income last{" "}
              <span className="font-semibold underline hover:cursor-pointer">
                30 days
              </span>
            </p>
            <p className="text-[2.7rem] font-bold">$2,260</p>
          </div>
          <p className="font-semibold hover:cursor-pointer">Details</p>
        </div>
      </div>
      <div className="bg-light-orange flex items-center p-10 font-bold text-2xl gap-3">
        <p>Review Score</p>
        <FaStar className="text-orange" />
        <p>
          5.0/<span className="text-gray-text font-medium">5</span>
        </p>
      </div>
      <div className="bg-main-background pb-10">
        <div className="flex justify-between  items-center p-10">
          <p className="font-bold text-2xl">Your listed vans</p>
          <p className="font-medium hover:font-medium hover:underline hover:cursor-pointer">
            View all
          </p>
        </div>
        <div className="px-10 flex flex-col gap-4 ">
          <HostYourListVans />
          <HostYourListVans />
          <HostYourListVans />
        </div>
      </div>
    </div>
  );
}
