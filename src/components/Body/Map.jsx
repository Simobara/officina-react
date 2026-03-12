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
    <section
      id="location"
      ref={sectionRef}
      className={`scroll-mt-32  bg-[#f8fafc] py-20 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="mx-auto w-[90%] max-w-[1400px]">
        <div className="mb-10 text-center">
          <h2 className="mb-20 text-center text-5xl font-extrabold text-[#0c3b63] md:text-6xl">
            {t.title}
          </h2>

          <p className="mt-4 text-lg text-gray-600">{t.description}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          <iframe
            title="Emmanuel Mobile Auto Service"
            src="https://www.google.com/maps?q=-27.5653395,153.0192292&z=16&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.google.com/maps/place/Emmanuel+Mobile+Auto+Serive/@-27.5653395,153.0166543,692m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b9145003830b2f3:0x6f172fa6cf81ba28!8m2!3d-27.5653395!4d153.0192292!16s%2Fg%2F11ygrfx1bf?entry=ttu"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#0c2d48] px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-[#0c2d48] hover:shadow-lg"
          >
            {t.open}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Map;
