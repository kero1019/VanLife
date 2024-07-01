import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import VanDetails from "./Components/VanDetails";
import Layout from "./Components/Layout";
import "./Server";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/VanLife/" element={<Home />} />
            <Route path="/VanLife/about" element={<About />} />
            <Route path="VanLife/vans" element={<Vans />} />
            <Route path="VanLife/vanDetails/:id" element={<VanDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
