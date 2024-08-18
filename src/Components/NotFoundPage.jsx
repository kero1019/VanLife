import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="h-full flex flex-col justify-between bg-main-background font-bold">
      <Header />
      <div className="p-10 flex flex-col gap-10">
        <h1 className="capitalize text-5xl ">
          Sorry, this page you were looking for was not found.
        </h1>
        <Link
          to="/VanLife/"
          className="bg-footer-background text-white  rounded-md p-5 text-center"
        >
          Return to home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
