import React from "react";
import Button from "./Button";
import CarInfo from "./CarInfo";
import { useSearchParams, Link } from "react-router-dom";
export default function Vans() {
  // Search Params to search for van
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  // useState that hold the Date
  const [data, setData] = React.useState([]);
  // useEffect to fetch Data
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);
  // to get search result
  const myNewData = typeFilter
    ? data.filter((van) => van.type === typeFilter)
    : data;
  return (
    <>
      {data === null ? (
        <div className=" p-10 flex h-full justify-center items-center">
          <span className="loader "></span>
        </div>
      ) : (
        <div className="bg-main-background">
          <div className="p-10 flex gap-10 flex-col">
            <p className="font-bold text-[2rem]">Explore our van options</p>
            <div className="flex items-center justify-between text-gray-text flex-wrap gap-4">
              <div className="flex gap-5 flex-wrap">
                <Link to="?type=simple">
                  <Button type={"bg-light-beige"}>Simple</Button>
                </Link>
                <Link to="?type=luxury">
                  <Button type={"bg-light-beige"}>Luxury</Button>
                </Link>
                <Link to="?type=rugged">
                  <Button type={"bg-light-beige"}>Rugged</Button>
                </Link>
              </div>
              {typeFilter && <Link to=".">
                <div className="">
                  <button>Clear filters</button>
                  <p className="w-full h-[0.1rem] bg-gray-text"></p>
                </div>
              </Link>}
            </div>
            <div className="grid grid-cols-3 gap-10 car-content">
              {myNewData.map((van) => {
                return (
                  <CarInfo
                    key={van.id}
                    id={van.id}
                    description={van.description}
                    image={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    type={van.type}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
