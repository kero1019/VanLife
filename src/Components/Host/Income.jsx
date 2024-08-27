import React from "react";
import Image from "../../assets/Images/Group 312.png";

export default function Income() {
  return (
    <div className="p-5 flex flex-col gap-5 bg-main-background">
      <h1 className="text-3xl font-bold flex gap-4 items-center">Income</h1>
      <span className="text-gray-text font-normal text-xl">
        Last <span className="underline font-semibold">30 days</span>
      </span>
      <p className="text-[2.7rem] font-bold">$2,260</p>
      <img src={Image} alt="Photo" className="w-[35rem]" />
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Your transactions (3)</h3>
        <span className="text-gray-text font-normal text-xl">
          Last <span className="underline font-semibold">30 days</span>
        </span>
      </div>
      <div className="flex flex-col gap-10">
        <div className="bg-white flex justify-between p-8">
          <p className="font-bold text-3xl">$720</p>
          <p className="font-semibold text-gray-text">1/12/22</p>
        </div>
        <div className="bg-white flex justify-between p-8">
          <p className="font-bold text-3xl">$560</p>
          <p className="font-semibold text-gray-text">10/11/22</p>
        </div>
        <div className="bg-white flex justify-between p-8">
          <p className="font-bold text-3xl">$980</p>
          <p className="font-semibold text-gray-text">23/11/22</p>
        </div>
      </div>
    </div>
  );
}
