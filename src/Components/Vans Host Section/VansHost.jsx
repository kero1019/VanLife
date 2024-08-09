import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";
export default function VansHost({ vanData }) {
  // TODO:make back to all vans go to vans page
  return (
    <div>
      
      <Link to=".." relative="path" className=" p-2 w-fit">
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <FaArrowLeft className="text-gray-text" />
          <button className="underline decoration-solid font-semibold">
            Back to all vans
          </button>
        </div>
      </Link>
      <div className="bg-white p-5 rounded-xl">
        <div className="flex gap-4 items-center">
          <img
            src={vanData.imageUrl}
            alt="Photo"
            className="w-[15rem] rounded-sm"
          />
          <div className="flex flex-col gap-8">
            <p>
              <Button type={vanData.type}>{vanData.type}</Button>
            </p>
            <p className="font-bold text-2xl">{vanData.name}</p>
            <p className="flex items-center">
              <span className="font-bold text-[1.5rem]">${vanData.price}</span>
              /day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
