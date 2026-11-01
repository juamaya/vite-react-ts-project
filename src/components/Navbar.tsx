import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full animate-navbar">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-extrabold tracking-tight text-white"
        >
        Juamaya<span className="text-cyan-400">26</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 p-2 shadow-xl backdrop-blur-xl md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
