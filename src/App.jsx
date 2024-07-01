import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import VanDetails from "./Components/VanDetails";
import "./Server"

function App() {
  return (
    <div className=" h-screen">
      <BrowserRouter>
        <header className="bg-main-background flex justify-between p-5 items-center h-[15%]">
          <Link
            // to="/Components/Home.jsx"
            to="/VanLife/"
            className=" font-extrabold text-[2rem]"
          >
            #VANLIFE
          </Link>
          <nav className="flex  gap-5 text-gray-text font-semibold">
            <Link to="/VanLife/about">About</Link>
            <Link to="/VanLife/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          {/* <Route path="/Components/Home.jsx" element={<Home />} /> */}
          <Route path="/VanLife/" element={<Home />} />
          <Route path="/VanLife/about" element={<About />} />
          <Route path="VanLife/vans" element={<Vans />} />
          <Route path="VanLife/vanDetails/:id" element={<VanDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
