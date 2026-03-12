function Footer() {
  return (
    <footer id="contatti" className="mt-24 bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <h2 className="mb-14 mt-10 text-center text-4xl font-semibold md:text-5xl">
          Visit Us Now
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-2xl text-black shadow-md">
              ☎
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Contact Information
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-wide">
              0435 209 776
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-2xl text-black shadow-md">
              📍
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
              Location
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-200">
              1/147 Boniface St Archerfield
              <br />
              4108, Brisbane, QLD, Australia
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Officina Auto
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Contattaci oggi per assistenza rapida e professionale
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-300">
              Riparazioni, manutenzione e diagnosi complete per la tua auto, con
              servizio affidabile e supporto diretto.
            </p>

            <a
              href="tel:0435209776"
              className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Chiama ora
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Officina Auto - Tutti i diritti riservati</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-cyan-400">
              Privacy
            </a>
            <a href="#" className="transition hover:text-cyan-400">
              Termini
            </a>
            <a href="#" className="transition hover:text-cyan-400">
              Contatti
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
