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

  return (
    <section
      id="home"
      className="flex min-h-[80vh] items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center"
    >
      <div className="mx-auto max-w-[1400px] px-6 text-center text-white">
        <h2 className="mb-5 text-4xl font-bold md:text-5xl">
          {text[lang].title}
        </h2>

        <p className="mx-auto mb-8 max-w-[720px] text-lg text-gray-200">
          {text[lang].description}
        </p>

        <button className="rounded-lg bg-red-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-red-700">
          {text[lang].button}
        </button>
      </div>
    </section>
  );
}

export default Hero;
