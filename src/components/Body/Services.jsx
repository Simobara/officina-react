function Services() {
  const services = [
    "Manutenzione freni",
    "Riparazione Cristalli",
    "Servizio pneumatici",
    "Riparazioni meccaniche",
    "Manutenzione aria condizionata",
    "Check up auto",
    "Elettrauto",
    "Controllo delle lampadine dell'auto",
  ];

  return (
    <section className="services-section" id="servizi">
      <div className="container">
        <h2 className="services-title">I nostri servizi</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">🔧</div>
              <h3>{service}</h3>
              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;