function SectionTitle({ children }) {
  return (
    <h2 className="mb-4 mt-10 text-2xl font-semibold text-white md:text-3xl">
      {children}
    </h2>
  );
}

function Privacy({ lang }) {
  const text = {
    en: {
      title: "Privacy Policy",
      effective: "This Privacy Policy is effective from 12 March 2026.",
      introTitle: "Our commitment to privacy",
      intro1:
        "Emmanuel Auto Service, its staff, contractors and related service providers (collectively referred to as “we”, “our” or “us”) respect the privacy of every customer, visitor and person we deal with.",
      intro2:
        "This Privacy Policy explains how we collect, use, store and disclose personal information through our website, enquiries, bookings, vehicle servicing activities, social media pages and any other services we provide.",
      intro3:
        "We may update this Privacy Policy from time to time. The most current version will be the one published on our website.",

      section1: "Types of personal information we collect",
      section1p1:
        "The personal information we collect depends on your dealings with us, the services you request and the way you interact with us. This information may include:",
      s1a: "your name, phone number, email address and other contact details;",
      s1b: "your address or suburb, where relevant;",
      s1c: "vehicle details such as registration number, make, model, year, colour and service history;",
      s1d: "payment, invoicing or transaction details;",
      s1e: "communications you send to us by phone, email, website form or social media;",
      s1f: "technical information such as IP address, browser type, device data and website usage data;",
      s1g: "location-related information where needed to provide services or respond to your enquiry; and",
      s1h: "any other information you voluntarily provide to us.",

      section2: "Website cookies and digital services",
      section2p1:
        "When you use our website, certain information may be collected automatically, including the date and time of your visit, pages viewed, browser type, device information and IP address.",
      section2p2:
        "Our website may use cookies and similar technologies to improve website performance, remember preferences, understand visitor behaviour and help us improve our services and marketing.",
      section2p3:
        "Most web browsers accept cookies automatically, but you can usually modify your browser settings to refuse cookies. If you disable cookies, some parts of the website may not function properly.",

      section3: "Why we collect personal information",
      section3p1:
        "We collect, hold and use personal information so that we can:",
      s3a: "respond to enquiries and provide quotes;",
      s3b: "book and carry out vehicle inspections, repairs and servicing;",
      s3c: "contact you about your vehicle, appointments or requested services;",
      s3d: "process payments and maintain business records;",
      s3e: "improve our customer service, operations and website performance;",
      s3f: "send service reminders, updates or promotional communications where permitted; and",
      s3g: "comply with legal and regulatory obligations.",

      section4: "How we collect personal information",
      section4p1:
        "We generally collect personal information directly from you, including when you:",
      s4a: "contact us by phone, email, social media or website form;",
      s4b: "visit our workshop;",
      s4c: "request a quote, booking or service;",
      s4d: "communicate with us about your vehicle;",
      s4e: "interact with our website, advertisements or social media pages.",
      section4p2:
        "We may also receive information from third parties where relevant, such as payment providers, website service providers, advertising partners or fleet/vehicle representatives acting on your behalf.",

      section5: "Storage and protection of personal information",
      section5p1:
        "We store personal information in secure electronic systems, paper records and other business files as reasonably necessary for our operations.",
      section5p2:
        "We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure.",
      section5p3:
        "While we take reasonable precautions, no method of transmitting information over the internet or storing it electronically can be guaranteed to be completely secure.",

      section6: "How we use and disclose personal information",
      section6p1:
        "We may use and disclose your personal information for purposes connected with running our business and providing services to you, including:",
      s6a: "managing bookings, repairs, servicing and customer support;",
      s6b: "communicating with you about your vehicle or requested services;",
      s6c: "processing invoices and payments;",
      s6d: "working with contractors, service providers or advisers who assist us in operating our business;",
      s6e: "marketing our services where permitted by law; and",
      s6f: "meeting legal obligations or responding to lawful requests.",
      section6p2:
        "We do not sell or rent your personal information to third parties.",

      section7: "Direct marketing",
      section7p1:
        "We may use your contact information to send you updates, promotions, reminders or offers relating to our automotive services, where permitted by law.",
      section7p2:
        "These communications may be sent by email, phone, SMS or through online advertising platforms.",
      section7p3:
        "You can opt out of marketing communications at any time by contacting us or using the unsubscribe option included in electronic messages, where available.",

      section8: "Location-based and technical data",
      section8p1:
        "In some circumstances, we may collect location or device-related information where this is relevant to responding to an enquiry, arranging service support, improving our website, or measuring the effectiveness of advertising.",
      section8p2:
        "If you choose not to provide certain information, some services or website functions may not be fully available.",

      section9: "Access to and correction of personal information",
      section9p1:
        "You may request access to the personal information we hold about you, and you may ask us to correct information that is inaccurate, incomplete or out of date.",
      section9p2:
        "We may need to verify your identity before providing access or making corrections.",

      section10: "Contact us",
      section10p1:
        "If you have any questions about this Privacy Policy, would like to access or correct your personal information, or wish to make a privacy-related complaint, please contact us:",
      business: "Business:",
      phone: "Phone:",
      address: "Address:",
      email: "Email:",
      emailValue: "emmanuelautoservice2016@gmail.com",
    },

    es: {
      title: "Política de Privacidad",
      effective:
        "Esta Política de Privacidad entra en vigor el 12 de marzo de 2026.",
      introTitle: "Nuestro compromiso con la privacidad",
      intro1:
        "Emmanuel Auto Service, su personal, contratistas y proveedores de servicios relacionados (colectivamente “nosotros”, “nuestro” o “nos”) respetan la privacidad de cada cliente, visitante y persona con la que tratamos.",
      intro2:
        "Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y divulgamos información personal a través de nuestro sitio web, consultas, reservas, servicios de reparación y mantenimiento de vehículos, redes sociales y cualquier otro servicio que prestemos.",
      intro3:
        "Podemos actualizar esta Política de Privacidad ocasionalmente. La versión más reciente será la publicada en nuestro sitio web.",

      section1: "Tipos de información personal que recopilamos",
      section1p1:
        "La información personal que recopilamos depende de su relación con nosotros, de los servicios que solicite y de cómo interactúe con nuestro negocio. Esta información puede incluir:",
      s1a: "su nombre, número de teléfono, correo electrónico y otros datos de contacto;",
      s1b: "su dirección o suburbio, cuando sea necesario;",
      s1c: "datos del vehículo como matrícula, marca, modelo, año, color e historial de servicio;",
      s1d: "datos de pago, facturación o transacciones;",
      s1e: "comunicaciones que nos envíe por teléfono, correo electrónico, formulario web o redes sociales;",
      s1f: "información técnica como dirección IP, tipo de navegador, datos del dispositivo y uso del sitio web;",
      s1g: "información de ubicación cuando sea necesaria para prestar servicios o responder a su consulta; y",
      s1h: "cualquier otra información que nos proporcione voluntariamente.",

      section2: "Cookies del sitio web y servicios digitales",
      section2p1:
        "Cuando utiliza nuestro sitio web, cierta información puede recopilarse automáticamente, incluyendo la fecha y hora de su visita, páginas visitadas, tipo de navegador, información del dispositivo y dirección IP.",
      section2p2:
        "Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar el rendimiento del sitio, recordar preferencias, comprender el comportamiento de los visitantes y ayudarnos a mejorar nuestros servicios y marketing.",
      section2p3:
        "La mayoría de los navegadores aceptan cookies automáticamente, pero normalmente puede cambiar la configuración de su navegador para rechazarlas. Si desactiva las cookies, es posible que algunas partes del sitio no funcionen correctamente.",

      section3: "Por qué recopilamos información personal",
      section3p1:
        "Recopilamos, conservamos y utilizamos información personal para poder:",
      s3a: "responder consultas y proporcionar presupuestos;",
      s3b: "reservar y realizar inspecciones, reparaciones y mantenimientos del vehículo;",
      s3c: "contactarle sobre su vehículo, citas o servicios solicitados;",
      s3d: "procesar pagos y mantener registros comerciales;",
      s3e: "mejorar nuestro servicio al cliente, operaciones y rendimiento del sitio web;",
      s3f: "enviar recordatorios de servicio, actualizaciones o comunicaciones promocionales cuando esté permitido; y",
      s3g: "cumplir con obligaciones legales y reglamentarias.",

      section4: "Cómo recopilamos la información personal",
      section4p1:
        "Generalmente recopilamos información personal directamente de usted, incluyendo cuando:",
      s4a: "nos contacta por teléfono, correo electrónico, redes sociales o formulario web;",
      s4b: "visita nuestro taller;",
      s4c: "solicita un presupuesto, una reserva o un servicio;",
      s4d: "se comunica con nosotros sobre su vehículo;",
      s4e: "interactúa con nuestro sitio web, anuncios o redes sociales.",
      section4p2:
        "También podemos recibir información de terceros cuando sea relevante, como proveedores de pago, proveedores de servicios web, socios publicitarios o representantes de flotas/vehículos que actúen en su nombre.",

      section5: "Almacenamiento y protección de la información personal",
      section5p1:
        "Almacenamos la información personal en sistemas electrónicos seguros, registros en papel y otros archivos comerciales razonablemente necesarios para nuestras operaciones.",
      section5p2:
        "Tomamos medidas razonables para proteger la información personal contra uso indebido, interferencia, pérdida, acceso no autorizado, modificación o divulgación.",
      section5p3:
        "Aunque tomamos precauciones razonables, ningún método de transmisión por internet o almacenamiento electrónico puede garantizarse como completamente seguro.",

      section6: "Cómo usamos y divulgamos la información personal",
      section6p1:
        "Podemos usar y divulgar su información personal para fines relacionados con la gestión de nuestro negocio y la prestación de servicios, incluyendo:",
      s6a: "gestionar reservas, reparaciones, mantenimiento y atención al cliente;",
      s6b: "comunicarnos con usted sobre su vehículo o servicios solicitados;",
      s6c: "procesar facturas y pagos;",
      s6d: "trabajar con contratistas, proveedores de servicios o asesores que nos ayuden a operar nuestro negocio;",
      s6e: "promocionar nuestros servicios cuando la ley lo permita; y",
      s6f: "cumplir obligaciones legales o responder a solicitudes legales.",
      section6p2:
        "No vendemos ni alquilamos su información personal a terceros.",

      section7: "Marketing directo",
      section7p1:
        "Podemos usar su información de contacto para enviarle actualizaciones, promociones, recordatorios u ofertas relacionadas con nuestros servicios automotrices, cuando la ley lo permita.",
      section7p2:
        "Estas comunicaciones pueden enviarse por correo electrónico, teléfono, SMS o mediante plataformas de publicidad en línea.",
      section7p3:
        "Puede darse de baja de las comunicaciones de marketing en cualquier momento contactándonos o usando la opción de cancelación de suscripción incluida en los mensajes electrónicos, cuando esté disponible.",

      section8: "Datos de ubicación y datos técnicos",
      section8p1:
        "En algunas circunstancias, podemos recopilar información relacionada con la ubicación o el dispositivo cuando sea relevante para responder a una consulta, organizar soporte de servicio, mejorar nuestro sitio web o medir la eficacia de la publicidad.",
      section8p2:
        "Si decide no proporcionar cierta información, es posible que algunos servicios o funciones del sitio web no estén completamente disponibles.",

      section9: "Acceso y corrección de la información personal",
      section9p1:
        "Puede solicitar acceso a la información personal que conservamos sobre usted, y puede pedirnos que corrijamos información inexacta, incompleta o desactualizada.",
      section9p2:
        "Es posible que necesitemos verificar su identidad antes de proporcionar acceso o realizar correcciones.",

      section10: "Contáctenos",
      section10p1:
        "Si tiene preguntas sobre esta Política de Privacidad, desea acceder o corregir su información personal, o desea presentar una queja relacionada con la privacidad, contáctenos:",
      business: "Empresa:",
      phone: "Teléfono:",
      address: "Dirección:",
      email: "Correo electrónico:",
      emailValue: "Agregue aquí el correo electrónico de su negocio",
    },
  };

  const t = text[lang] || text.en;

  return (
    <div className="min-h-screen bg-[#111] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-12">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
        <p className="mb-8 text-sm text-cyan-400">{t.effective}</p>

        <SectionTitle>{t.introTitle}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.intro1}</p>
        <p className="mb-4 leading-8 text-gray-300">{t.intro2}</p>
        <p className="leading-8 text-gray-300">{t.intro3}</p>

        <SectionTitle>{t.section1}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section1p1}</p>
        <ul className="space-y-3 pl-6 text-gray-300 marker:text-cyan-400 list-disc">
          <li>{t.s1a}</li>
          <li>{t.s1b}</li>
          <li>{t.s1c}</li>
          <li>{t.s1d}</li>
          <li>{t.s1e}</li>
          <li>{t.s1f}</li>
          <li>{t.s1g}</li>
          <li>{t.s1h}</li>
        </ul>

        <SectionTitle>{t.section2}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section2p1}</p>
        <p className="mb-4 leading-8 text-gray-300">{t.section2p2}</p>
        <p className="leading-8 text-gray-300">{t.section2p3}</p>

        <SectionTitle>{t.section3}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section3p1}</p>
        <ul className="space-y-3 pl-6 text-gray-300 marker:text-cyan-400 list-disc">
          <li>{t.s3a}</li>
          <li>{t.s3b}</li>
          <li>{t.s3c}</li>
          <li>{t.s3d}</li>
          <li>{t.s3e}</li>
          <li>{t.s3f}</li>
          <li>{t.s3g}</li>
        </ul>

        <SectionTitle>{t.section4}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section4p1}</p>
        <ul className="space-y-3 pl-6 text-gray-300 marker:text-cyan-400 list-disc">
          <li>{t.s4a}</li>
          <li>{t.s4b}</li>
          <li>{t.s4c}</li>
          <li>{t.s4d}</li>
          <li>{t.s4e}</li>
        </ul>
        <p className="mt-4 leading-8 text-gray-300">{t.section4p2}</p>

        <SectionTitle>{t.section5}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section5p1}</p>
        <p className="mb-4 leading-8 text-gray-300">{t.section5p2}</p>
        <p className="leading-8 text-gray-300">{t.section5p3}</p>

        <SectionTitle>{t.section6}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section6p1}</p>
        <ul className="space-y-3 pl-6 text-gray-300 marker:text-cyan-400 list-disc">
          <li>{t.s6a}</li>
          <li>{t.s6b}</li>
          <li>{t.s6c}</li>
          <li>{t.s6d}</li>
          <li>{t.s6e}</li>
          <li>{t.s6f}</li>
        </ul>
        <p className="mt-4 leading-8 text-gray-300">{t.section6p2}</p>

        <SectionTitle>{t.section7}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section7p1}</p>
        <p className="mb-4 leading-8 text-gray-300">{t.section7p2}</p>
        <p className="leading-8 text-gray-300">{t.section7p3}</p>

        <SectionTitle>{t.section8}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section8p1}</p>
        <p className="leading-8 text-gray-300">{t.section8p2}</p>

        <SectionTitle>{t.section9}</SectionTitle>
        <p className="mb-4 leading-8 text-gray-300">{t.section9p1}</p>
        <p className="leading-8 text-gray-300">{t.section9p2}</p>

        <SectionTitle>{t.section10}</SectionTitle>
        <p className="mb-6 leading-8 text-gray-300">{t.section10p1}</p>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-gray-300">
          <p className="mb-2">
            <span className="font-semibold text-white">{t.business}</span>{" "}
            Emmanuel Auto Service
          </p>
          <p className="mb-2">
            <span className="font-semibold text-white">{t.phone}</span> 0435 209
            776
          </p>
          <p className="mb-2">
            <span className="font-semibold text-white">{t.address}</span> 1/147
            Boniface St Archerfield, 4108, Brisbane, QLD, Australia
          </p>
          <p>
            <span className="font-semibold text-white">{t.email}</span>{" "}
            {t.emailValue}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
