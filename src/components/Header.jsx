import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header({ lang, setLang }) {
  const navigate = useNavigate();
  const location = useLocation();

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

  const navClass = `
    relative px-2 py-1 text-sm font-semibold text-white
    transition duration-300
    before:absolute before:left-1/2 before:top-0 before:h-[2px] before:w-0
    before:bg-sky-800 before:transition-all before:duration-300
    after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0
    after:bg-sky-800 after:transition-all after:duration-300
    hover:before:left-0 hover:before:w-full
    hover:after:left-0 hover:after:w-full
    sm:px-3 sm:py-1.5 sm:text-base
    md:px-5 md:py-2 md:text-[20px]
  `;

  const goToSection = (sectionId) => {
    if (sectionId === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        return;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const currentElement = document.getElementById(sectionId);

    if (currentElement) {
      currentElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
            className={navClass}
          >
            {text[lang].home}
          </button>

          <button
            type="button"
            onClick={() => goToSection("servizi")}
            className={navClass}
          >
            {text[lang].services}
          </button>

          <button
            type="button"
            onClick={() => goToSection("location")}
            className={navClass}
          >
            {text[lang].location}
          </button>

          <button
            type="button"
            onClick={() => goToSection("contatti")}
            className={navClass}
          >
            {text[lang].contact}
          </button>
        </nav>

        <div className="flex gap-2 text-xl sm:gap-3 sm:text-2xl">
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
