import React from "react";
import Button from "./Button";
import CarInfo from "./CarInfo";
import Footer from "./Footer";
export default function Vans() {
  // useState that hold the Date
  const [data, setData] = React.useState(null);
  // useEffect to fetch Data
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);
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
                <Button type={"bg-light-beige"}>Simple</Button>
                <Button type={"bg-light-beige"}>Luxury</Button>
                <Button type={"bg-light-beige"}>Rugged</Button>
              </div>
              <div className="">
                <button>Clear filters</button>
                <p className="w-full h-[0.1rem] bg-gray-text"></p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 car-content">
              {data.map((van) => {
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
