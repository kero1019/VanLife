import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewBar from "../Reviews section/ReviewBar";

export default function Reviews() {
  return (
    <div className="bg-main-background  p-5 flex flex-col gap-5">
      <div className="text-3xl font-bold flex gap-4 items-center">
        Your reviews
        <span className="text-gray-text font-normal text-xl">
          last <span className="underline font-semibold">30 days</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-3xl font-bold">5.0 </p>
        <FaStar className="text-orange" />
        <p className="font-semibold">overall rating</p>
      </div>
      <div className="">
        <ReviewBar color={"bg-orange"} percentage={100}/>
      </div>
    </div>
  );
}
