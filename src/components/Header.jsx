import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="bg-[#0c2d48] py-10">
      <div className="mx-auto flex w-[90%] max-w-[1400px] items-center justify-between">
        <a href="#home">
          <img
            src={logo}
            alt="Officina Auto Logo"
            className="h-[60px] w-auto object-contain"
          />
        </a>

        <nav className="flex gap-6">
          <a
            href="#home"
            className="text-base text-white no-underline transition duration-300 hover:text-[#d8e6f2]"
          >
            Home
          </a>
          <a
            href="#servizi"
            className="text-base text-white no-underline transition duration-300 hover:text-[#d8e6f2]"
          >
            Servizi
          </a>
          <a
            href="#contatti"
            className="text-base text-white no-underline transition duration-300 hover:text-[#d8e6f2]"
          >
            Contatti
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
