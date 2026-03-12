import { useEffect, useRef, useState } from "react";
import aria from "../../assets/aria.png";
import cert from "../../assets/cert.png";
import check from "../../assets/check.png";
import cristalli from "../../assets/cristalli.png";
import freni from "../../assets/freni.png";
import gomme from "../../assets/gomme.png";
import lampadine from "../../assets/lampadine.png";
import manutenzione from "../../assets/manutenzione.png";
import meccanica from "../../assets/meccanica.png";
import motor from "../../assets/motor.png";
import suspens from "../../assets/suspens.png";
import tagliando from "../../assets/tagliando.png";

function Services({ lang }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const [columns, setColumns] = useState(1);
  const cardsRef = useRef([]);

  const text = {
    en: {
      title: "Our Services",
      services: [
        "Brake maintenance",
        "Windshield repair",
        "Tire service",
        "Mechanical repairs",
        "Air conditioning service",
        "Vehicle check up",
        "Car light inspection",
        "Engine check and repair",
        "Scheduled service",
        "Routine maintenance",
        "Brake and suspension repair",
        "Roadworthy inspections",
      ],
      brand: "Officina Auto",
      ctaTitle: "Contact us today for fast and professional assistance",
      ctaText:
        "Repairs, maintenance and complete diagnostics for your car, with reliable service and direct support.",
      callNow: "Call Now",
    },
    es: {
      title: "Nuestros Servicios",
      services: [
        "Mantenimiento de frenos",
        "Reparación de cristales",
        "Servicio de neumáticos",
        "Reparaciones mecánicas",
        "Servicio de aire acondicionado",
        "Revisión del vehículo",
        "Control de luces del coche",
        "Revisión y reparación del motor",
        "Servicio programado",
        "Mantenimiento general",
        "Reparación de frenos y suspensión",
        "Certificaciones e inspecciones",
      ],
      brand: "Officina Auto",
      ctaTitle: "Contáctanos hoy para una asistencia rápida y profesional",
      ctaText:
        "Reparaciones, mantenimiento y diagnóstico completo para tu coche, con servicio confiable y soporte directo.",
      callNow: "Llamar Ahora",
    },
  };

  const icons = [
    freni,
    cristalli,
    gomme,
    meccanica,
    aria,
    check,
    lampadine,
    motor,
    tagliando,
    manutenzione,
    suspens,
    cert,
  ];

  const services = icons.map((icon, index) => ({
    name: text[lang].services[index],
    icon,
  }));

  const t = text[lang];

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(4);
      } else if (window.innerWidth >= 640) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          setVisibleCards((prev) =>
            prev.includes(index) ? prev : [...prev, index],
          );

          observer.unobserve(entry.target);
        });
      },
      isMobile
        ? {
            threshold: 0.35,
            rootMargin: "0px 0px -80px 0px",
          }
        : {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px",
          },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getDelay = (index) => {
    if (columns === 1) {
      return "0ms"; // mobile resta uguale
    }

    const row = Math.floor(index / columns);
    const col = index % columns;

    const rowDelay = row * 600; // ritardo tra le righe
    const colDelay = col * 220; // una card alla volta nella stessa riga

    return `${rowDelay + colDelay}ms`;
  };

  const getCardTransform = (index) => {
    const isVisibleCard = visibleCards.includes(index);

    if (isVisibleCard) {
      return "perspective(1400px) translateX(0px) rotateY(0deg) rotateX(0deg) scale(1)";
    }

    if (columns === 1) {
      return "translateX(-16px) scale(0.97)";
    }

    return "perspective(1400px) translateX(-70px) rotateY(18deg) rotateX(8deg) scale(0.95)";
  };

  return (
    <section
      id="servizi"
      className="scroll-mt-24 bg-[#f2f2f2] pt-20 pb-24 md:pt-32 md:pb-40"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-6">
        <h2 className="mb-14 text-center text-3xl font-extrabold text-[#0c3b63] md:mb-20 md:text-6xl">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 [perspective:1400px]">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className="
                group flex min-h-[200px] flex-col items-center justify-center
                rounded-xl border border-black bg-[#e6e6e6]
                p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.45)]
                transition-[opacity,transform] duration-[1200ms] ease-out
                hover:-translate-y-2 hover:bg-blue-600
                hover:border-sky-800 hover:shadow-[0_18px_45px_rgba(0,0,0,0.65)]
              "
              style={{
                transformStyle: "preserve-3d",
                transitionDelay: visibleCards.includes(index)
                  ? getDelay(index)
                  : "0ms",
                transform: getCardTransform(index),
                opacity: visibleCards.includes(index) ? 1 : 0,
              }}
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl md:h-36 md:w-36">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="h-24 w-24 object-contain transition-transform duration-200 group-hover:scale-110 group-hover:brightness-0 group-hover:invert md:h-36 md:w-36"
                />
              </div>

              <h3 className="max-w-[240px] text-lg font-bold text-[#0c3b63] transition-colors duration-75 group-hover:text-[#f5f5dc] md:text-2xl">
                {service.name}
              </h3>

              <span className="mt-4 text-2xl text-[#0f7ac7] transition-colors duration-75 group-hover:text-white">
                →
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[900px] rounded-3xl border border-black px-6 py-10 text-center transition-all duration-200 hover:shadow-[0_14px_35px_rgba(2,132,199,0.7)] md:mt-24 md:px-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-800 md:text-sm">
            {t.brand}
          </p>

          <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#0c3b63] md:mt-4 md:text-4xl">
            {t.ctaTitle}
          </h3>

          <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-gray-700 md:mt-5 md:text-lg md:leading-8">
            {t.ctaText}
          </p>

          <a
            href="tel:0435209776"
            className="mt-6 inline-flex rounded-xl border border-black bg-sky-800 px-6 py-3 text-base font-semibold text-white transition-all duration-150 hover:-translate-y-1 hover:bg-[#0c3b63] md:mt-8 md:px-8 md:py-4 md:text-lg"
          >
            {t.callNow}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
