function Hero({ lang }) {
  const text = {
    en: {
      title: "Repairs and maintenance for your car",
      description:
        "Professionalism, reliability and fast service for every type of vehicle.",
      button: "Book now",
    },
    es: {
      title: "Reparaciones y mantenimiento para tu coche",
      description:
        "Profesionalidad, fiabilidad y servicio rápido para todo tipo de vehículos.",
      button: "Reservar ahora",
    },
  };

  const t = text[lang];

  return (
    <section
      id="home"
      className="flex min-h-[70vh] items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center px-4 pt-24 pb-16 md:min-h-[80vh] md:px-6"
    >
      <div className="mx-auto w-full max-w-[900px] text-center text-white">
        <h2 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl md:mb-5 md:text-5xl">
          {t.title}
        </h2>

        <p className="mx-auto mb-7 max-w-[720px] text-base leading-7 text-gray-200 sm:text-lg md:mb-8 md:text-xl">
          {t.description}
        </p>

        <button className="rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:bg-red-700 md:px-7 md:py-3.5">
          {t.button}
        </button>
      </div>
    </section>
  );
}

export default Hero;
