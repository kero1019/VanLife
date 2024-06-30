import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <div className=" h-[85%]">
      <div className="image2 h-[90%]"></div>
      <div className="bg-main-background flex flex-col p-6 gap-10 ">
        <p className="text-normal-text font-bold text-[2rem]">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <div className="flex flex-col gap-16 text-[1.2rem]">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-light-orange rounded-lg flex flex-col gap-10  p-10 mb-10">
          <p className="font-bold text-normal-text text-[1.5rem] ">
            Your destination is waiting. Your van is ready.
          </p>
          <button className="text-white font-semibold bg-black w-fit p-5 rounded-lg">
            Explore our vans
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
