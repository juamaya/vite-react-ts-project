import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "GitHub", url: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-5">
            <NavLink
              to="/"
              className="inline-block text-3xl font-extrabold tracking-tight"
            >
            Juamaya<span className="text-cyan-400">26</span>
            </NavLink>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              Creamos experiencias digitales innovadoras, transformando ideas en
              soluciones tecnológicas modernas y funcionales.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Navegación
            </h3>

            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-300 hover:pl-2 hover:text-cyan-400 ${
                        isActive ? "text-cyan-400" : "text-gray-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Servicios
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="transition-colors hover:text-cyan-400">
                Desarrollo Web
              </li>
              <li className="transition-colors hover:text-cyan-400">
                Diseño UI/UX
              </li>
              <li className="transition-colors hover:text-cyan-400">
                Aplicaciones Web
              </li>
              <li className="transition-colors hover:text-cyan-400">
                Consultoría Digital
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Contacto
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="mb-1 block text-xs text-gray-500">Email</span>
                <a
                  href="mailto:info@nexus.com"
                  className="transition-colors hover:text-cyan-400"
                >
                  info@nexus.com
                </a>
              </li>

              <li>
                <span className="mb-1 block text-xs text-gray-500">
                  Teléfono
                </span>
                <a
                  href="tel:+34000000000"
                  className="transition-colors hover:text-cyan-400"
                >
                  +34 000 000 000
                </a>
              </li>

              <li>
                <span className="mb-1 block text-xs text-gray-500">
                  Ubicación
                </span>
              Puerto Real (Cadiz)  , España
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Juamaya26 Todos los derechos reservados.
          </p>

          
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs font-semibold text-cyan-400 transition-all hover:-translate-y-1"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
