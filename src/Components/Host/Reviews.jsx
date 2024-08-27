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
      <div className="flex flex-col gap-5">
        <ReviewBar color={"bg-orange"} number={5} percentage={100} />
        <ReviewBar color={"bg-bar-color"} number={4} percentage={0} />
        <ReviewBar color={"bg-bar-color"} number={3} percentage={0} />
        <ReviewBar color={"bg-bar-color"} number={2} percentage={0} />
        <ReviewBar color={"bg-bar-color"} number={1} percentage={0} />
      </div>
      <h1 className="font-bold text-2xl">Reviews (2)</h1>
      <div className="">
        <div className="flex gap-2">
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
        </div>
        <h3 className="font-semibold">
          Elliot <span className="text-bar-color">December 1, 2022</span>
        </h3>
        <p>
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
        <hr className="mt-5" />
      </div>
      <div className="">
        <div className="flex gap-2">
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
          <FaStar className="text-orange" />
        </div>
        <h3 className="font-semibold">
          Sandy <span className="text-bar-color">November 23, 2022</span>
        </h3>
        <p>
          This is our third time using the Modest Explorer for our travels and
          we love it! No complaints, absolutely perfect!
        </p>
        <hr className="mt-5 mb-10"  />
      </div>
    </div>
  );
}
