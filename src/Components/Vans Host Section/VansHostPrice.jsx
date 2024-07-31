import React from "react";
import { useOutletContext } from "react-router-dom";
export default function VansHostPrice() {
  const { vanData } = useOutletContext();

  return (
    <div>
      <h2 className="text-gray-text flex items-center"><span className="text-2xl font-bold">${vanData.price}.00</span>/day</h2>
    </div>
  );
}
