import React from "react";
import VansHost from "./VansHost";
import { useParams } from "react-router-dom";
import VansHostHeader from "./VansHostHeader";
import { Outlet } from "react-router-dom";

export default function VansHostLayout() {
  const [vanData, setVanData] = React.useState([]);
  const params = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans[0]));
  }, [params.id]);
  return (
    <>
      {vanData.length === 0 ? (
        <div className=" p-10 flex h-full justify-center items-center">
          <span className="loader "></span>
        </div>
      ) : (
        <div className="bg-main-background p-5">
          <VansHost vanData={vanData} />
          <div className="bg-white rounded-lg p-5">
            <VansHostHeader />
            <Outlet context={{vanData}} />
          </div>
        </div>
      )}
    </>
  );
}
