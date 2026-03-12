import { useEffect, useRef, useState } from "react";

function Map({ lang }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const text = {
    en: {
      title: "Where We Are",
      description: "Visit us or open the location directly on Google Maps.",
      open: "Open on Google Maps",
    },
    es: {
      title: "Dónde Estamos",
      description:
        "Ven a visitarnos o abre la ubicación directamente en Google Maps.",
      open: "Abrir en Google Maps",
    },
  };

  const t = text[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="w-full h-[70px] bg-sky-900"></div>
      <section
        id="location"
        ref={sectionRef}
        className={`scroll-mt-28 bg-[#f8fafc] py-16 transition-all duration-1000 md:scroll-mt-32 md:py-20 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 md:translate-y-16"
        }`}
      >
        <div className="mx-auto w-[92%] max-w-[1400px]">
          <div className="mb-8 text-center md:mb-10">
            <h2 className="mb-6 text-center text-3xl font-extrabold text-[#0c3b63] sm:text-4xl md:mb-8 md:text-6xl">
              {t.title}
            </h2>

            <p className="mx-auto max-w-[700px] text-base leading-7 text-gray-600 sm:text-lg">
              {t.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl md:rounded-3xl md:shadow-2xl">
            <iframe
              title="Emmanuel Mobile Auto Service"
              src="https://www.google.com/maps?q=-27.5653395,153.0192292&z=16&output=embed"
              width="100%"
              height="320"
              className="md:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-6 flex justify-center md:mt-8">
            <a
              href="https://www.google.com/maps/place/Emmanuel+Mobile+Auto+Serive/@-27.5653395,153.0166543,692m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b9145003830b2f3:0x6f172fa6cf81ba28!8m2!3d-27.5653395!4d153.0192292!16s%2Fg%2F11ygrfx1bf?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl bg-[#0c2d48] px-6 py-3 text-base font-semibold text-white transition duration-300 hover:bg-white hover:text-[#0c2d48] hover:shadow-lg md:w-auto md:max-w-none md:px-8 md:py-3 md:text-lg"
            >
              {t.open}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Map;
