import React from "react";
import Button from "./Button";
/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */
export default function CarInfo({ name, price, description, image, type }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-8">
        <img src={image} alt="Photo" className="rounded-md w-full" />
        <div className="flex  justify-between items-center font-bold text-[1.2rem]">
          <p>{name}</p>
          <p className="">${price} / day</p>
        </div>
      </div>
      <Button type={type}>{type}</Button>
    </div>
  );
}
