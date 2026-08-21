import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Inicio" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollY = window.pageYOffset;
      for (const link of LINKS) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (scrollY > top && scrollY < top + height) {
          setActive(link.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header id="header" className={scrolled ? "abajo" : ""}>
      <nav>
        <div className="logo">EP</div>
        <ul className={"nav-links" + (menuOpen ? " active" : "")}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={active === link.id ? "active" : ""} onClick={(e) => goTo(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </nav>
    </header>
  );
}
