import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/inicio";
import Servicios from "../pages/servicios";
import Proyectos from "../pages/proyectos";
import Nosotros from "../pages/nosotros";
import Contacto from "../pages/contacto";

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-animation">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}
