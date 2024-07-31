import React from "react";
import { NavLink } from "react-router-dom";
export default function VansHostHeader() {
  return (
    <div className=" flex gap-5 text-gray-text mb-10">
      <NavLink
        end
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-red-500 font-bold underline text-[1.2rem]"
            : "hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Details
      </NavLink>
      <NavLink
        to="Price"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 font-bold underline text-[1.2rem]"
            : "hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Price
      </NavLink>
      <NavLink
        to="Photo"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 font-bold underline text-[1.2rem]"
            : "hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Photo
      </NavLink>
    </div>
  );
}
