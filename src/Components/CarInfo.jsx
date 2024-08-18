import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function CarInfo({id, name, price, searchParams, image, type, typeFilter }) {
  return (
    <div className="flex flex-col gap-5">
      <Link to={`/VanLife/vanDetails/${id}`} state={{search:searchParams.toString(), type: typeFilter}}>
        <div className="flex flex-col gap-8">
          <img src={image} alt="Photo" className="rounded-md w-full" />
          <div className="flex  justify-between items-center font-bold text-[1.2rem]">
            <p>{name}</p>
            <p className="">${price} / day</p>
          </div>
        </div>
        <Button type={type}>{type}</Button>
      </Link>
    </div>
  );
}
