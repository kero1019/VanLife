import React from "react";
import { Link } from "react-router-dom";
export default function HostYourListVans({ name, image, price,id }) {
  return (
    <Link to={`/VanLife/host/hostVans/${id}`}>
      <div className="bg-white p-5 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={image} alt="Photo" className="w-[5rem] rounded-lg" />
          <div className="">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-gray-text text-xl">${price}/day</p>
          </div>
        </div>
        <p className="text-xl font-medium  hover:underline hover:cursor-pointer">
          Edit
        </p>
      </div>
    </Link>
  );
}
