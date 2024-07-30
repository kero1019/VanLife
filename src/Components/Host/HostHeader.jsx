import React from "react";
import { NavLink } from "react-router-dom";
export default function HostHeader() {
  return (
    <div className="flex items-center gap-10 p-5 bg-main-background ">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive
            ? "text-red-500 text-[1.2rem] font-bold underline"
            : "text-gray-text hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Dashbourd
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 text-[1.2rem] font-bold underline"
            : "text-gray-text hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Income
      </NavLink>
      <NavLink
        to="hostVans"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 text-[1.2rem] font-bold underline"
            : "text-gray-text hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 text-[1.2rem] font-bold underline"
            : "text-gray-text hover:font-semibold text-[1.2rem] hover:text-red-500 hover:underline"
        }
      >
        Review
      </NavLink>
    </div>
  );
}
