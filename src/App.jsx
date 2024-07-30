import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import HostLayout from "./Components/Host/HostLayout";
import Reviews from "./Components/Host/Reviews";
import HostVansDetails from "./Components/Host/HostVansDetails";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/VanLife/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="host" element={<Host />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route
              path="vanDetails/:id"
              element={<VanDetails />}
            />
          </Route>

          <Route path="VanLife/host/" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="hostVans" element={<HostVans />} />
            <Route path="hostVans/:id" element={<HostVansDetails />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
