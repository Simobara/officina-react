import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header({ lang, setLang }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const manualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef(null);

  const text = {
    en: {
      home: "Home",
      services: "Services",
      location: "Location",
      contact: "Contact",
    },
    es: {
      home: "Inicio",
      services: "Servicios",
      location: "Ubicación",
      contact: "Contacto",
    },
  };

  useEffect(() => {
    const sectionIds = ["home", "servizi", "location", "contatti"];

    const updateActiveSection = () => {
      if (manualScrollRef.current) return;

      const headerOffset = 120;

      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (scrollBottom) {
        setActiveSection("contatti");
        return;
      }

      let currentSection = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  const getNavClass = (sectionId) => `
    relative px-2 py-1 text-sm font-semibold
    transition duration-300
    before:absolute before:left-1/2 before:top-0 before:h-[2px] before:w-0
    before:bg-sky-800 before:transition-all before:duration-300
    after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0
    after:bg-sky-800 after:transition-all after:duration-300
    hover:before:left-0 hover:before:w-full
    hover:after:left-0 hover:after:w-full
    sm:px-3 sm:py-1.5 sm:text-base
    md:px-5 md:py-2 md:text-[20px]
    ${
      activeSection === sectionId
        ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.95)]"
        : "text-white"
    }
  `;

  const goToSection = (sectionId) => {
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }

    manualScrollRef.current = true;
    setActiveSection(sectionId);

    if (sectionId === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        return;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });

      manualScrollTimeoutRef.current = setTimeout(() => {
        manualScrollRef.current = false;
        setActiveSection("home");
      }, 900);

      return;
    }

    const currentElement = document.getElementById(sectionId);

    if (currentElement) {
      const headerOffset = 110;
      const elementPosition =
        currentElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      manualScrollTimeoutRef.current = setTimeout(() => {
        manualScrollRef.current = false;
        setActiveSection(sectionId);
      }, 900);

      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0c2d48] shadow-lg">
      <div className="mx-auto flex w-[94%] max-w-[1400px] flex-wrap items-center justify-between gap-y-3 py-3 md:w-[90%] md:flex-nowrap md:py-5">
        <button
          type="button"
          onClick={() => goToSection("home")}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Officina Auto Logo"
            className="h-[52px] w-[52px] object-contain transition duration-300 hover:scale-110 sm:h-[62px] sm:w-[62px] md:h-[80px] md:w-[80px]"
          />
        </button>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 md:order-none md:w-auto md:gap-8">
          <button
            type="button"
            onClick={() => goToSection("home")}
            className={getNavClass("home")}
          >
            {text[lang].home}
          </button>

          <button
            type="button"
            onClick={() => goToSection("servizi")}
            className={getNavClass("servizi")}
          >
            {text[lang].services}
          </button>

          <button
            type="button"
            onClick={() => goToSection("location")}
            className={getNavClass("location")}
          >
            {text[lang].location}
          </button>

          <button
            type="button"
            onClick={() => goToSection("contatti")}
            className={getNavClass("contatti")}
          >
            {text[lang].contact}
          </button>
        </nav>

        <div className="flex gap-3 text-3xl sm:gap-4 sm:text-4xl">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`transition duration-300 hover:scale-125 ${
              lang === "en" ? "opacity-100" : "opacity-50"
            }`}
            aria-label="English"
          >
            🇬🇧
          </button>

          <button
            type="button"
            onClick={() => setLang("es")}
            className={`transition duration-300 hover:scale-125 ${
              lang === "es" ? "opacity-100" : "opacity-50"
            }`}
            aria-label="Español"
          >
            🇪🇸
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
