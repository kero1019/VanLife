import React from "react";
import HostYourListVans from "./HostYourListVans";
export default function HostVans() {
  const [vansData, setVansData] = React.useState([]);
  // useEffect to fetch data
  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setVansData(data.vans);
      });
  }, []);
  return (
    // TODO: solve the hight issue when loader render
    <> 
      {vansData.length === 0 ? (
        <div className=" p-10 flex justify-center items-center bg-green-200">
          <span className="loader "></span>
        </div>
      ) : (
        <div className="px-10 flex flex-col gap-4 ">
          {vansData.map((data) => {
            return (
              <HostYourListVans
                description={data.description}
                hostId={data.hostId}
                id={data.id}
                key={data.id}
                image={data.imageUrl}
                name={data.name}
                price={data.price}
                type={data}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
