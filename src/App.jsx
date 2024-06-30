import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import "./Server"

function App() {
  return (
    <div className=" h-screen">
      <BrowserRouter>
        <header className="bg-main-background flex justify-between p-5 items-center h-[15%]">
          <Link
            to="/"
            className=" font-extrabold text-[2rem]"
          >
            #VANLIFE
          </Link>
          <nav className="flex  gap-5 text-gray-text font-semibold">
            <Link to="/About.jsx">About</Link>
            <Link to="/Vans.jsx">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About.jsx" element={<About />} />
          <Route path="/Vans.jsx" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
