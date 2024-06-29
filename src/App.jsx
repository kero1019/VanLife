import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/Components/Home.jsx">#VANLIFE</Link>
        <nav>
          <Link to="/Components/About.jsx">About Page</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/Components/Home.jsx" element={<Home />} />
        <Route path="/Components/About.jsx" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
