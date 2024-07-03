import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import VanDetails from "./Components/VanDetails";
import Layout from "./Components/Layout";
import Host from "./Components/Host/Host";
import Dashboard from "./Components/Host/Dashboard";
import "./Server";
import Income from "./Components/Host/Income";
import HostVans from "./Components/Host/HostVans";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/VanLife/" element={<Home />} />
            <Route path="/VanLife/host" element={<Host />} />
            <Route path="/VanLife/about" element={<About />} />
            <Route path="VanLife/vans" element={<Vans />} />
            <Route path="VanLife/dashboard" element={<Dashboard />} />
            <Route path="VanLife/income" element={<Income />} />
            <Route path="VanLife/hostVans" element={<HostVans />} />
            <Route path="VanLife/vanDetails/:id" element={<VanDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
