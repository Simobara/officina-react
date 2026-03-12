function SectionTitle({ children }) {
  return (
    <h2 className="mb-3 mt-8 text-xl font-semibold text-white sm:text-2xl md:mb-4 md:mt-10 md:text-3xl">
      {children}
    </h2>
  );
}

function Terms({ lang }) {
  const text = {
    en: {
      title: "Terms & Conditions",
      effective: "Terms of use effective from 12 March 2026.",

      section1: "Conditions of Use",
      s1p1: "This website is the property of Emmanuel Auto Service. By accessing or otherwise using this website, you agree to be bound by these Terms & Conditions.",
      s1p2: "We may update or change these Terms & Conditions from time to time without prior notice. Your continued use of this website after any changes are published means you accept the updated Terms & Conditions.",

      section2: "Intellectual Property",
      s2p1: "All intellectual property rights on this website, including text, graphics, branding, logos, images, layout and other content, belong to Emmanuel Auto Service unless otherwise stated.",
      s2p2: "Nothing on this website grants you any licence or right to use any logo, brand name, design or content without our prior written consent.",
      s2p3: "You must not copy, reproduce, republish, upload, transmit, distribute or store any material from this website in any form without our written permission, except where permitted by law.",

      section3: "Disclaimers",
      s3p1: "This website and its content are provided on an “as is” and “as available” basis. Your use of this website is at your own risk.",
      s3p2: "The information on this website is provided for general informational purposes only. While we try to keep information accurate and current, we do not guarantee the accuracy, completeness, reliability or suitability of any content.",
      s3p3: "To the extent permitted by law, we make no express or implied warranties, representations or guarantees regarding this website, its availability, its content or any linked third-party websites.",
      s3p4: "We do not warrant that the website will be uninterrupted, secure, error-free or free from viruses or other harmful components, or that any defects will be corrected.",

      section4: "Use of Our Website",
      s4p1: "You must not use this website for any unlawful, prohibited or improper purpose. You agree to comply with all applicable laws and regulations when using this website.",
      s4p2: "If this website allows you to submit content, comments, messages, enquiries, images or other materials (“Submitted Content”), you grant Emmanuel Auto Service a non-exclusive, royalty-free right to use, reproduce, store and display that content for the purpose of operating our business and website.",
      s4p3: "When submitting content, you agree that you will not:",
      s4a: "post or transmit unlawful, abusive, defamatory, obscene, offensive or misleading material;",
      s4b: "impersonate any person or entity;",
      s4c: "upload viruses, malicious code or any material intended to disrupt systems or software;",
      s4d: "submit material you do not have the right to provide;",
      s4e: "include personal information of others without their consent;",
      s4f: "use the website for spam, promotions, chain messages or unsolicited communications.",
      s4p4: "We may remove, edit or refuse any Submitted Content at our discretion and without notice.",
      s4p5: "Opinions expressed in any Submitted Content are those of the individual author and do not necessarily reflect our views.",

      section5: "Privacy",
      s5p1: "Our Privacy Policy explains how we collect, use and handle personal information provided through this website and our services.",

      section6: "Links and Third-Party Materials",
      s6p1: "This website may contain links to third-party websites, services or materials for convenience or informational purposes.",
      s6p2: "We do not control and are not responsible for the content, accuracy, security, availability or privacy practices of any third-party websites.",
      s6p3: "Accessing third-party websites is at your own risk. Inclusion of a link does not imply endorsement by Emmanuel Auto Service.",

      section7: "Location-Based Features and Services",
      s7p1: "Certain website functions or services may rely on location-related data in order to provide directions, service availability or other location-based features.",
      s7p2: "By using those features, you consent to the collection and use of location-related information where necessary for those services.",
      s7p3: "You may stop providing location information at any time by disabling location services on your device or ceasing to use those features, although this may affect the services available to you.",

      section8: "Advertising",
      s8p1: "Any advertising or promotional material displayed on this website remains the responsibility of the relevant advertiser or provider.",
      s8p2: "We do not guarantee the accuracy of advertising material or accept responsibility for third-party offers, products or services promoted on this website.",

      section9: "Purchase of Goods and Services",
      s9p1: "Any goods or services offered through this website are subject to availability and may also be subject to separate terms agreed between you and Emmanuel Auto Service.",
      s9p2: "Unless otherwise stated, prices are in Australian Dollars and may include GST where applicable.",
      s9p3: "Prices, availability and service details may change at any time without notice.",
      s9p4: "By making a booking, enquiry or purchase through this website, you confirm that the information you provide is accurate and complete and that you are legally able to enter into a binding agreement.",

      section10: "Limitation of Liability",
      s10p1:
        "To the extent permitted by law, Emmanuel Auto Service is not liable for any loss, damage, cost or expense arising from your use of, or reliance on, this website or its content.",
      s10p2:
        "This includes, without limitation, indirect, incidental, special or consequential loss, loss of profits, business interruption, data loss or damage arising from website access, inability to access the website, third-party conduct, or goods and services obtained through third parties.",
      s10p3:
        "Nothing in these Terms & Conditions excludes any rights or remedies that cannot be excluded under applicable law.",

      section11: "General",
      s11p1:
        "These Terms & Conditions are governed by the laws of Queensland, Australia.",
      s11p2:
        "If any part of these Terms & Conditions is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.",
      s11p3:
        "Headings are for convenience only and do not affect interpretation.",
      s11p4:
        "References to “we”, “our” and “us” mean Emmanuel Auto Service. References to “you” mean any user of this website.",

      section12: "Contact Details",
      s12p1:
        "If you have any questions about these Terms & Conditions or need to contact us regarding this website, please contact us using the details below:",
      business: "Business:",
      phone: "Phone:",
      address: "Address:",
      email: "Email:",
      emailValue: "emmanuelautoservice2016@gmail.com",
    },

    es: {
      title: "Términos y Condiciones",
      effective: "Términos de uso vigentes desde el 12 de marzo de 2026.",

      section1: "Condiciones de Uso",
      s1p1: "Este sitio web es propiedad de Emmanuel Auto Service. Al acceder o utilizar este sitio web, usted acepta quedar sujeto a estos Términos y Condiciones.",
      s1p2: "Podemos actualizar o modificar estos Términos y Condiciones ocasionalmente sin previo aviso. Su uso continuado del sitio web después de la publicación de cambios significa que acepta los Términos y Condiciones actualizados.",

      section2: "Propiedad Intelectual",
      s2p1: "Todos los derechos de propiedad intelectual de este sitio web, incluyendo textos, gráficos, marca, logotipos, imágenes, diseño y demás contenido, pertenecen a Emmanuel Auto Service salvo que se indique lo contrario.",
      s2p2: "Nada de lo contenido en este sitio web le concede una licencia o derecho para usar ningún logotipo, marca, diseño o contenido sin nuestro consentimiento previo por escrito.",
      s2p3: "No debe copiar, reproducir, republicar, cargar, transmitir, distribuir o almacenar ningún material de este sitio web en ninguna forma sin nuestro permiso por escrito, salvo que la ley lo permita.",

      section3: "Exenciones de Responsabilidad",
      s3p1: "Este sitio web y su contenido se proporcionan “tal cual” y “según disponibilidad”. El uso de este sitio web es bajo su propia responsabilidad.",
      s3p2: "La información de este sitio web se proporciona únicamente con fines informativos generales. Aunque intentamos mantener la información exacta y actualizada, no garantizamos la exactitud, integridad, fiabilidad o idoneidad de ningún contenido.",
      s3p3: "En la medida permitida por la ley, no otorgamos garantías, declaraciones o compromisos expresos o implícitos respecto a este sitio web, su disponibilidad, su contenido o cualquier sitio web de terceros enlazado.",
      s3p4: "No garantizamos que el sitio web funcione de forma ininterrumpida, segura, libre de errores o de virus u otros componentes dañinos, ni que cualquier defecto vaya a corregirse.",

      section4: "Uso de Nuestro Sitio Web",
      s4p1: "No debe utilizar este sitio web para ningún fin ilegal, prohibido o inadecuado. Usted acepta cumplir con todas las leyes y reglamentos aplicables al usar este sitio web.",
      s4p2: "Si este sitio web le permite enviar contenido, comentarios, mensajes, consultas, imágenes u otros materiales (“Contenido Enviado”), usted concede a Emmanuel Auto Service un derecho no exclusivo y libre de regalías para usar, reproducir, almacenar y mostrar dicho contenido con el fin de operar nuestro negocio y sitio web.",
      s4p3: "Al enviar contenido, usted acepta que no va a:",
      s4a: "publicar o transmitir material ilegal, abusivo, difamatorio, obsceno, ofensivo o engañoso;",
      s4b: "suplantar a ninguna persona o entidad;",
      s4c: "subir virus, código malicioso o cualquier material destinado a interrumpir sistemas o software;",
      s4d: "enviar material que no tenga derecho a proporcionar;",
      s4e: "incluir información personal de otras personas sin su consentimiento;",
      s4f: "usar el sitio web para spam, promociones, cadenas o comunicaciones no solicitadas.",
      s4p4: "Podemos eliminar, editar o rechazar cualquier Contenido Enviado a nuestra discreción y sin previo aviso.",
      s4p5: "Las opiniones expresadas en cualquier Contenido Enviado pertenecen únicamente a su autor y no reflejan necesariamente nuestras opiniones.",

      section5: "Privacidad",
      s5p1: "Nuestra Política de Privacidad explica cómo recopilamos, usamos y tratamos la información personal proporcionada a través de este sitio web y nuestros servicios.",

      section6: "Enlaces y Materiales de Terceros",
      s6p1: "Este sitio web puede contener enlaces a sitios web, servicios o materiales de terceros con fines de comodidad o información.",
      s6p2: "No controlamos ni somos responsables del contenido, exactitud, seguridad, disponibilidad o prácticas de privacidad de sitios web de terceros.",
      s6p3: "El acceso a sitios web de terceros es bajo su propia responsabilidad. La inclusión de un enlace no implica respaldo por parte de Emmanuel Auto Service.",

      section7: "Funciones y Servicios Basados en la Ubicación",
      s7p1: "Ciertas funciones o servicios del sitio web pueden depender de datos relacionados con la ubicación para proporcionar direcciones, disponibilidad del servicio u otras funciones basadas en la ubicación.",
      s7p2: "Al usar esas funciones, usted consiente la recopilación y el uso de información relacionada con la ubicación cuando sea necesario para dichos servicios.",
      s7p3: "Puede dejar de proporcionar información de ubicación en cualquier momento desactivando los servicios de ubicación en su dispositivo o dejando de usar esas funciones, aunque esto puede afectar los servicios disponibles para usted.",

      section8: "Publicidad",
      s8p1: "Cualquier material publicitario o promocional mostrado en este sitio web sigue siendo responsabilidad del anunciante o proveedor correspondiente.",
      s8p2: "No garantizamos la exactitud del material publicitario ni aceptamos responsabilidad por ofertas, productos o servicios de terceros promocionados en este sitio web.",

      section9: "Compra de Bienes y Servicios",
      s9p1: "Cualquier bien o servicio ofrecido a través de este sitio web está sujeto a disponibilidad y también puede estar sujeto a términos separados acordados entre usted y Emmanuel Auto Service.",
      s9p2: "Salvo que se indique lo contrario, los precios están en dólares australianos y pueden incluir GST cuando corresponda.",
      s9p3: "Los precios, la disponibilidad y los detalles del servicio pueden cambiar en cualquier momento sin previo aviso.",
      s9p4: "Al realizar una reserva, consulta o compra a través de este sitio web, usted confirma que la información proporcionada es exacta y completa, y que tiene capacidad legal para celebrar un acuerdo vinculante.",

      section10: "Limitación de Responsabilidad",
      s10p1:
        "En la medida permitida por la ley, Emmanuel Auto Service no será responsable por ninguna pérdida, daño, coste o gasto derivado del uso de este sitio web o de la confianza depositada en su contenido.",
      s10p2:
        "Esto incluye, entre otros, pérdidas indirectas, incidentales, especiales o consecuentes, pérdida de beneficios, interrupción del negocio, pérdida de datos o daños derivados del acceso al sitio web, imposibilidad de acceso, conducta de terceros o bienes y servicios obtenidos a través de terceros.",
      s10p3:
        "Nada de lo dispuesto en estos Términos y Condiciones excluye derechos o recursos que no puedan excluirse según la ley aplicable.",

      section11: "General",
      s11p1:
        "Estos Términos y Condiciones se rigen por las leyes de Queensland, Australia.",
      s11p2:
        "Si alguna parte de estos Términos y Condiciones se considera inválida o inaplicable, las disposiciones restantes seguirán en pleno vigor y efecto.",
      s11p3:
        "Los encabezados se incluyen solo por comodidad y no afectan la interpretación.",
      s11p4:
        "Las referencias a “nosotros”, “nuestro” y “nos” significan Emmanuel Auto Service. Las referencias a “usted” significan cualquier usuario de este sitio web.",

      section12: "Datos de Contacto",
      s12p1:
        "Si tiene alguna pregunta sobre estos Términos y Condiciones o necesita contactarnos sobre este sitio web, puede hacerlo utilizando los datos a continuación:",
      business: "Empresa:",
      phone: "Teléfono:",
      address: "Dirección:",
      email: "Correo electrónico:",
      emailValue: "emmanuelautoservice2016@gmail.com",
    },
  };

  const t = text[lang] || text.en;

  return (
    <div className="min-h-screen bg-[#111] px-4 py-10 text-white sm:px-5 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-6 md:rounded-3xl md:p-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl md:mb-4 md:text-5xl">
          {t.title}
        </h1>

        <p className="mb-6 text-xs text-cyan-400 sm:text-sm md:mb-8">
          {t.effective}
        </p>

        <SectionTitle>{t.section1}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s1p1}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s1p2}
        </p>

        <SectionTitle>{t.section2}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s2p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s2p2}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s2p3}
        </p>

        <SectionTitle>{t.section3}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s3p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s3p2}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s3p3}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s3p4}
        </p>

        <SectionTitle>{t.section4}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s4p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s4p2}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s4p3}
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300 marker:text-cyan-400 sm:pl-6 sm:text-base md:space-y-3">
          <li>{t.s4a}</li>
          <li>{t.s4b}</li>
          <li>{t.s4c}</li>
          <li>{t.s4d}</li>
          <li>{t.s4e}</li>
          <li>{t.s4f}</li>
        </ul>
        <p className="mt-4 mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s4p4}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s4p5}
        </p>

        <SectionTitle>{t.section5}</SectionTitle>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s5p1}
        </p>

        <SectionTitle>{t.section6}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s6p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s6p2}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s6p3}
        </p>

        <SectionTitle>{t.section7}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s7p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s7p2}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s7p3}
        </p>

        <SectionTitle>{t.section8}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s8p1}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s8p2}
        </p>

        <SectionTitle>{t.section9}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s9p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s9p2}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s9p3}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s9p4}
        </p>

        <SectionTitle>{t.section10}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s10p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s10p2}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s10p3}
        </p>

        <SectionTitle>{t.section11}</SectionTitle>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s11p1}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s11p2}
        </p>
        <p className="mb-4 text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s11p3}
        </p>
        <p className="text-sm leading-7 text-gray-300 sm:text-base md:leading-8">
          {t.s11p4}
        </p>

        <SectionTitle>{t.section12}</SectionTitle>
        <p className="mb-5 text-sm leading-7 text-gray-300 sm:text-base md:mb-6 md:leading-8">
          {t.s12p1}
        </p>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-gray-300 sm:p-5 sm:text-base md:p-6">
          <p className="mb-3 leading-7">
            <span className="font-semibold text-white">{t.business}</span>{" "}
            Emmanuel Auto Service
          </p>
          <p className="mb-3 leading-7">
            <span className="font-semibold text-white">{t.phone}</span> 0435 209
            776
          </p>
          <p className="mb-3 leading-7">
            <span className="font-semibold text-white">{t.address}</span> 1/147
            Boniface St Archerfield, 4108, Brisbane, QLD, Australia
          </p>
          <p className="leading-7 break-words">
            <span className="font-semibold text-white">{t.email}</span>{" "}
            {t.emailValue}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
