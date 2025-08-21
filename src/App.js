import React from "react";
// importăm React (obligatoriu în fiecare componentă)

import { Routes, Route, Link } from "react-router-dom";
// importăm pachetele din react-router-dom
// Routes = container pentru toate rutele
// Route = definește o rută (path + componentă)
// Link = ne permite să navigăm între pagini fără refresh

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
// importăm paginile proiectului

import Header from "./components/Header";
import Footer from "./components/Footer";
// importăm componentele globale de header și footer

function App() {
  return (
    <div>
      {/* Header-ul e afișat pe toate paginile */}
      <Header />

      {/* Bara de navigație simplă */}
      {/* TODO: Fa o componetna de navbar pentru acest nav */}
      <nav className="p-3 bg-dark text-light">
        {/* Link = echivalent cu <a>, dar fără refresh */}
        <Link to="/" className="me-3 text-light">
          Home
        </Link>
        <Link to="/menu" className="me-3 text-light">
          Menu
        </Link>
        <Link to="/about" className="me-3 text-light">
          About
        </Link>
        <Link to="/contact" className="text-light">
          Contact
        </Link>
      </nav>

      {/* Container unde se încarcă fiecare pagină în funcție de rută */}
      <div style={{ height: "80vh" }} className="container my-4">
        <Routes>
          {/* Fiecare rută încarcă componenta asociată */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer-ul e afișat pe toate paginile */}
      <Footer />
    </div>
  );
}

export default App;
// exportăm componenta principală App ca să fie folosită în index.tsx
