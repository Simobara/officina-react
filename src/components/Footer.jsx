import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ lang }) {
  const text = {
    en: {
      title: "Visit Us Now",
      contactInfo: "Contact Information",
      location: "Location",
      socials: "Socials",
      facebook: "Facebook",
      instagram: "Instagram",
      rights: "© 2026 Officina Auto - All rights reserved",
      privacy: "Privacy",
      terms: "Terms & Conditions",
      contacts: "Contacts",
    },
    es: {
      title: "Visítanos Ahora",
      contactInfo: "Información de Contacto",
      location: "Ubicación",
      socials: "Redes Sociales",
      facebook: "Facebook",
      instagram: "Instagram",
      rights: "© 2026 Officina Auto - Todos los derechos reservados",
      privacy: "Privacidad",
      terms: "Términos y Condiciones",
      contacts: "Contacto",
    },
  };

  const t = text[lang] || text.en;

  return (
    <footer id="contatti" className="mt-16 bg-[#0b0f14] text-white md:mt-24">
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-6 md:py-16">
        <h2 className="mb-10 mt-4 text-center text-3xl font-semibold md:mb-14 md:mt-10 md:text-5xl">
          {t.title}
        </h2>

        <div className="grid gap-5 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-sky-800 hover:shadow-[0_14px_35px_rgba(0,0,0,0.55)] md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl text-black shadow-md md:mb-5 md:h-14 md:w-14 md:text-2xl">
              ☎
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
              {t.contactInfo}
            </p>

            <p className="mt-3 text-xl font-semibold tracking-wide md:text-2xl">
              0435 209 776
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-sky-800 hover:shadow-[0_14px_35px_rgba(0,0,0,0.55)] md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl text-black shadow-md md:mb-5 md:h-14 md:w-14 md:text-2xl">
              📍
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
              {t.location}
            </p>

            <p className="mt-3 text-base leading-7 text-gray-200 md:text-lg md:leading-8">
              1/147 Boniface St Archerfield
              <br />
              4108, Brisbane, QLD, Australia
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-sky-800 hover:shadow-[0_14px_35px_rgba(0,0,0,0.55)] md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl text-black shadow-md md:mb-5 md:h-14 md:w-14 md:text-2xl">
              #
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
              {t.socials}
            </p>

            <div className="mt-5 flex items-center justify-center gap-4 md:mt-6 md:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white transition-all duration-300 hover:border-sky-800 hover:bg-cyan-500 hover:text-black md:h-14 md:w-14 md:text-xl"
                aria-label={t.facebook}
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white transition-all duration-300 hover:border-sky-800 hover:bg-cyan-500 hover:text-black md:h-14 md:w-14 md:text-xl"
                aria-label={t.instagram}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 text-center text-xs text-gray-400 md:mt-14 md:text-sm">
          <p className="leading-6">{t.rights}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
            <Link to="/privacy" className="transition hover:text-cyan-400">
              {t.privacy}
            </Link>

            <Link to="/terms" className="transition hover:text-cyan-400">
              {t.terms}
            </Link>

            <a href="#contatti" className="transition hover:text-cyan-400">
              {t.contacts}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
