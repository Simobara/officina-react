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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servizi" className="scroll-mt-24 bg-[#f2f2f2] pt-32 pb-40">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="mb-20 text-center text-5xl font-extrabold text-[#0c3b63] md:text-6xl">
          {t.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`
                group flex min-h-[260px] flex-col items-center justify-center
                rounded-xl border border-black bg-[#e6e6e6] p-8 text-center
                transition-all duration-700
                hover:-translate-y-2
                hover:bg-blue-600
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.6)]
                hover:border-sky-800

                ${
                  visibleCards.includes(index)
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-14 scale-95 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-6 flex h-40 w-40 items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="h-40 w-40 object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <h3 className="max-w-[260px] text-xl font-extrabold text-[#0c3b63] transition-colors duration-300 group-hover:text-[#f5f5dc] md:text-2xl">
                {service.name}
              </h3>

              <span className="mt-6 text-3xl font-light text-[#0f7ac7] transition-colors duration-300 group-hover:text-white">
                →
              </span>
            </div>
          ))}
        </div>

        <div
          className="
            mx-auto mt-24 max-w-[900px]
            rounded-3xl border border-black px-8 py-12 text-center
            shadow-none transition-all duration-300
            hover:shadow-[0_14px_35px_rgba(2,132,199,0.7)]
          "
        >
          <p className="text-sm uppercase tracking-[0.25em] text-sky-800">
            {t.brand}
          </p>

          <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#0c3b63] md:text-4xl">
            {t.ctaTitle}
          </h3>

          <p className="mx-auto mt-5 max-w-[720px] text-lg leading-8 text-gray-700">
            {t.ctaText}
          </p>

          <a
            href="tel:0435209776"
            className="mt-8 inline-flex rounded-xl border border-black bg-sky-800 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c3b63]"
          >
            {t.callNow}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
