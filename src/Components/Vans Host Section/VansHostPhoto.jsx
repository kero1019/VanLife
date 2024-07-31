import React from "react";
import { useOutletContext } from "react-router-dom";
export default function VansHostPhoto() {
  const { vanData } = useOutletContext();
  return (
    <div>
      <img src={vanData.imageUrl} alt="Photo" className="w-[10rem] rounded-lg" />
    </div>
  );
}
