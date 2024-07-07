import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import OrangeButton from "./OrangeButton";

export default function VanDetails() {
  const params = useParams();
  const [van, setVanData] = React.useState(null);

  // useEffect to fetch data
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, [params.id]);

  return (
    <div className="flex-1">
      {van === null ? (
        <div className=" p-10 flex h-full justify-center items-center">
          <span className="loader "></span>
        </div>
      ) : (
        <div className="bg-main-background p-10 flex flex-col gap-10"> 
          <Link to="/VanLife/vans" className=" p-2 w-fit">
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <FaArrowLeft className="text-gray-text" />
              <button className="underline decoration-solid font-semibold">
                Back to all vans
              </button>
            </div>
          </Link>
          <div className="flex flex-col gap-10">
            <img
              src={van.imageUrl}
              alt="Photo of car"
              className="rounded-lg max-w-[40rem]"
            />
            <p>
            <Button type={van.type}>{van.type}</Button>
            </p>
            <p className="font-bold text-[2rem]">{van.name}</p>
            <p className="text-[1.5rem] text-gray-text">
              <span className="font-bold text-normal-text">${van.price}</span>
              /day
            </p>
            <p className="text-normal-text text-[1.2rem] font-medium">
              {van.description}
            </p>
            <OrangeButton>
              <p className="text-white">Rent this van</p>
            </OrangeButton>
          </div>
        </div>
      )}
    </div>
  );
}
