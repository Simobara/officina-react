import Hero from "../components/Body/Hero";
import Map from "../components/Body/Map";
import Services from "../components/Body/Services";

function Body({ lang }) {
  return (
    <main>
      <Hero lang={lang} />
      <Services lang={lang} />
      <Map lang={lang} />
    </main>
  );
}

export default Body;
