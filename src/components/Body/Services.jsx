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

function Services() {
  const services = [
    { name: "Manutenzione freni", icon: freni, isImage: true },
    { name: "Riparazione Cristalli", icon: cristalli, isImage: true },
    { name: "Servizio pneumatici", icon: gomme, isImage: true },
    { name: "Riparazioni meccaniche", icon: meccanica, isImage: true },
    { name: "Manutenzione aria condizionata", icon: aria, isImage: true },
    { name: "Check up auto", icon: check, isImage: true },
    {
      name: "Controllo delle lampadine dell'auto",
      icon: lampadine,
      isImage: true,
    },
    { name: "Controllo e riparazione motore", icon: motor, isImage: true },
    {
      name: "Tagliando e manutenzione libretto",
      icon: tagliando,
      isImage: true,
    },
    { name: "Manutenzione ordinaria", icon: manutenzione, isImage: true },
    { name: "Riparazione freni e sospensioni", icon: suspens, isImage: true },
    { name: "Certificazioni e controlli stradali", icon: cert, isImage: true },
  ];

  return (
    <section id="servizi" className="bg-[#f2f2f2] pt-40 pb-40">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="mb-24 text-center text-5xl font-extrabold text-[#0c3b63] md:text-6xl">
          I nostri servizi
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex min-h-[260px] flex-col items-center justify-center bg-[#e6e6e6] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600"
            >
              <div className="mb-6 flex h-42 w-42 items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="h-42 w-42 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
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
      </div>
    </section>
  );
}

export default Services;
