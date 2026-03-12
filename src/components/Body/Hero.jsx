function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center"
    >
      <div className="mx-auto max-w-[1400px] px-6 text-center text-white">
        <h2 className="mb-5 text-4xl font-bold md:text-5xl">
          Riparazioni e manutenzione per la tua auto
        </h2>

        <p className="mx-auto mb-8 max-w-[720px] text-lg text-gray-200">
          Professionalità, affidabilità e servizio rapido per ogni tipo di
          veicolo.
        </p>

        <button className="rounded-lg bg-red-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-red-700">
          Prenota ora
        </button>
      </div>
    </section>
  );
}

export default Hero;
