// Fix: Removed unused 'Testimonial' type from import as it does not exist in '../types'.
import { BlogPost } from '../types';

interface Project {
  title: string;
  description: string;
}

interface Translations {
  [key: string]: {
    header_slogan: string;
    nav_links: { [key: string]: string };
    hero_title: string;
    hero_subtitle: string;
    hero_description: string;
    hero_cta: string;
    services_title: string;
    services_subtitle: string;
    services: { [key: string]: string };
    about_title: string;
    about_subtitle: string;
    about_feature1_title: string;
    about_feature1_desc: string;
    about_feature2_title: string;
    about_feature2_desc: string;
    about_feature3_title: string;
    about_feature3_desc: string;
    projects_title: string;
    projects_subtitle: string;
    projects_list: Project[];
    blog_title: string;
    blog_subtitle: string;
    blog_read_more: string;
    blog_posts: Omit<BlogPost, 'imageUrl' | 'link'>[];
    contact_title: string;
    contact_subtitle: string;
    contact_info_title: string;
    contact_form_name: string;
    contact_form_email: string;
    contact_form_message: string;
    contact_form_submit: string;
    footer_copyright: string;
    footer_terms: string;
    footer_privacy_policy: string;
    terms_content: string;
    privacy_content: string;
  };
}

export const translations: Translations = {
  es: {
    header_slogan: "Impulsando Pymes",
    nav_links: { home: "Inicio", services: "Servicios", about: "Sobre Nosotros", blog: "Blog", contact: "Contacto" },
    hero_title: "Impulsando Pymes",
    hero_subtitle: "En el Mundo Digital",
    hero_description: "Somos una agencia de marketing digital especializada en ayudar a pequeñas y medianas empresas a mejorar su presencia en Internet y atraer más clientes potenciales.",
    hero_cta: "Pide tu Presupuesto",
    services_title: "Nuestros Servicios",
    services_subtitle: "Hacemos presupuestos a medida para cada cliente.<br/>No pagues ni un euro de más, solo lo que necesitas.",
    services: {
        graphic_design: "DISEÑO GRÁFICO",
        web_page: "PÁGINA WEB",
        google_management: "GESTIÓN DE GOOGLE",
        social_media: "REDES SOCIALES",
        logo_brand: "LOGOTIPO Y MARCA",
        corp_emails: "EMAILS CORPORATIVOS",
        online_ads: "PUBLICIDAD ONLINE",
        translations: "TRADUCCIONES INGLÉS ESPAÑOL RUSO",
        press_articles: "ARTÍCULOS DE PRENSA",
        online_store: "TIENDA ONLINE",
        signage_design: "DISEÑOS DE CARTELERÍA",
        smart_cards: "TARJETAS DE VISITA INTELIGENTES",
        photo_sessions: "SESIONES FOTOGRÁFICAS",
        video_reports: "VIDEO REPORTAJES",
    },
    about_title: "¿Por Qué Elegir Melena Marketing?",
    about_subtitle: "Entendemos los desafíos de las PYMES porque somos especialistas en ellas. Nuestro éxito es ver crecer tu negocio.",
    about_feature1_title: "Especialistas en PYMES",
    about_feature1_desc: "No somos una agencia más. Nos centramos exclusivamente en las necesidades y presupuestos de pequeñas y medianas empresas.",
    about_feature2_title: "Propuesta de Valor Clara",
    about_feature2_desc: "Sin rodeos ni tecnicismos. Te ofrecemos soluciones directas para mejorar tu presencia online y atraer más clientes.",
    about_feature3_title: "Servicio Cercano y Transparente",
    about_feature3_desc: "Creemos en la comunicación constante y la confianza. Seremos tu equipo de marketing de confianza, siempre accesible.",
    projects_title: "Algunos de nuestros proyectos deportivos",
    projects_subtitle: "Nos enorgullece colaborar en eventos de primer nivel que fomentan el deporte y posicionan a Marbella como un destino de referencia.",
    projects_list: [
      { 
        title: "SBE Marbella Media Maratón", 
        description: "Un evento icónico que reúne a miles de corredores. Gestionamos la comunicación y el marketing para posicionarlo como una de las medias maratones más importantes de la Costa del Sol." 
      },
      { 
        title: "Marbella THE ONE", 
        description: "El torneo Pro-Am de pádel y golf más exclusivo. Un evento de lujo que fusiona deporte de élite con networking al más alto nivel, atrayendo a personalidades y grandes marcas." 
      },
      { 
        title: "Copa del Rey de Voley Playa 2025", 
        description: "Marbella se convierte en la capital nacional del vóley playa. Un prestigioso torneo que traerá a los mejores jugadores de España a nuestras costas, consolidando la ciudad como destino deportivo." 
      },
      {
        title: "Colaboradores del CB Marbella",
        description: "Apoyamos al principal club de baloncesto de la ciudad. Colaboramos en su comunicación y marketing para fortalecer su conexión con la afición y promover el deporte base en la comunidad."
      }
    ],
    blog_title: "Desde Nuestro Blog",
    blog_subtitle: "Ideas, consejos y estrategias para que tu PYME destaque en el mundo digital.",
    blog_read_more: "Leer más",
    blog_posts: [
      { title: '5 Consejos de SEO Local para Tiendas en Málaga', excerpt: 'Atrae a más clientes de tu zona optimizando tu presencia en búsquedas locales. Te mostramos cómo empezar hoy mismo.' },
      { title: 'Cómo Usar Instagram para tu Restaurante y Llenar Mesas', excerpt: 'Descubre estrategias visuales y de contenido para convertir seguidores en comensales fieles para tu negocio de hostelería.' },
      { title: 'La Importancia de un Logotipo Profesional para tu PYME', excerpt: 'Tu marca es más que un nombre. Analizamos por qué una identidad visual sólida es una inversión crucial para el éxito.' },
    ],
    contact_title: "Hablemos de tu Proyecto",
    contact_subtitle: "Rellena el formulario o contáctanos directamente. Estamos listos para escuchar tus ideas e impulsar tu negocio.",
    contact_info_title: "Información de Contacto",
    contact_form_name: "Tu Nombre",
    contact_form_email: "Tu Email",
    contact_form_message: "Cuéntanos sobre tu proyecto",
    contact_form_submit: "Enviar Mensaje",
    footer_copyright: "Melena Marketing. Todos los derechos reservados.",
    footer_terms: "Términos y Condiciones",
    footer_privacy_policy: "Política de Privacidad",
    privacy_content: `
      <h2>1.- DATOS DEL RESPONSABLE</h2>
      <p>Melena Marketing<br>GRUPO INFINITY, S.COOP.AND<br>Cif: F16945909<br>29679, Benahavís, Málaga<br>Teléfono: 660532823<br>Correo electrónico: info@melenamarketing.com</p>
      
      <h2>CONSENTIMIENTO PARA TRATAR SUS DATOS CON MOTIVO DE LA GESTIÓN DE SU FACTURA ENERGÉTICA</h2>
      <p>Para poder ofrecerte nuestro servicio gratuito de gestión de factura energética, necesitamos que nos autorices la cesión de tus datos a Observatorio Energético (Llanquihue Inversiones SL, Calle los olivos 300 Marbella, España CIF : B93717973), una empresa colaboradora de Melena Marketing, que actúa como asesores energéticos. Esta cesión se realizará con el único objetivo de que puedan contactarte para ofrecerte información y asesoramiento en materia de ahorro energético y en la gestión de tus facturas.</p>
      <p>Queremos informarte que tus datos personales serán tratados de forma confidencial y se utilizarán exclusivamente con la finalidad mencionada anteriormente. En ningún caso se cederán tus datos a terceros sin tu consentimiento expreso.</p>
      <p>Te garantizamos que cumplimos con todas las obligaciones legales en materia de protección de datos personales, tal y como se establece en la normativa vigente.</p>
      <p>En caso de que desees ejercer tus derechos de acceso, rectificación, cancelación u oposición, puedes hacerlo en cualquier momento enviando un correo electrónico a info@melenamarketing.com.</p>
      <p>Si estás de acuerdo con esta cesión de tus datos, por favor, marca la casilla correspondiente en el formulario de registro del servicio.</p>

      <h2>2.- FINALIDADES DEL TRATAMIENTO GENERAL DEL RESTO DE SERVICIOS</h2>
      <p>A través del presente sitio web Melena Marketing puede recabar tus datos para distintas finalidades; en el momento en que sean recabados se facilitará la información necesaria sobre su finalidad. En todo caso, los datos que nos facilites podrán ser tratados para atender tus consultas, quejas o sugerencias si utilizas los formularios facilitados al efecto, así como las direcciones de correo electrónico específicas. En este caso, tus datos serán tratados durante el plazo necesario para dar respuesta a tu solicitud. En caso de ser necesario conservar los datos durante más tiempo, Melena Marketing informaría de ello. En el caso de que nos remitas tu currículum, tus datos serán tratados con objeto de estudiar tu candidatura ante posibles procesos de selección. Los datos serán tratados durante el plazo de un año desde la recepción de los mismos.</p>
      
      <h2>3.- BASES DEL TRATAMIENTO</h2>
      <p>El tratamiento de los datos personales que nos facilites a través de los formularios de contacto o de los correos electrónicos serán tratados en base a tu consentimiento. En caso de existir una relación contractual previa, los datos podrán ser tratados en base al contrato.</p>
      
      <h2>4.- DESTINATARIOS DE LOS DATOS</h2>
      <p>Melena Marketing no facilita información a terceros excepto por imperativo legal.</p>

      <h2>5.- DERECHOS</h2>
      <p>El interesado puede solicitar a Melena Marketing en cualquier momento el acceso a sus datos personales, la rectificación de los mismos o su supresión. A su vez, el usuario puede solicitar la limitación del tratamiento, su oposición o la portabilidad de sus datos. Para ejercitar cualquiera de los derechos descritos, el interesado debe remitir una comunicación a Melena Marketing, o por correo electrónico a info@melenamarketing.com En la comunicación el interesado debe indicar qué derecho desea ejercitar y adjuntar una fotocopia de su DNI o documento equivalente que acredite su identidad. En caso de considerar que tus derechos han sido vulnerados, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
      
      <h2>7.- DATOS DE TERCEROS</h2>
      <p>En caso de que el Usuario facilite datos personales de terceras personas con cualquier finalidad, garantiza haber informado previamente a los afectados y haber obtenido su consentimiento para la comunicación de sus datos a Melena Marketing. El Usuario garantiza que los afectados son mayores de edad y que la información facilitada es exacta y veraz. En caso de que se deriven responsabilidades por un incumplimiento de estas condiciones por parte del Usuario, deberá responder de las consecuencias de dicho incumplimiento.</p>
      
      <h2>POLÍTICA DE COOKIES</h2>
      <p>Las cookies son pequeños archivos de texto, que se descargan a su navegador cuando accede a internet. Son usados por los promotores de páginas web para ayudar a los usuarios a navegar por las mismas de forma eficiente y así poder ejecutar ciertas funciones. Debido a que su papel central es mejorar/posibilitar el uso o los procesos de la página web, inutilizar los cookies podría impedir a los usuarios ejecutar ciertas funciones. Las cookies se crean cuando el navegador del usuario carga alguna página web en particular. La página web manda información al navegador el cual crea un archivo de texto. Cada vez que el usuario vuelve a la misma página web, el navegador recupera y envía este archivo al servidor de la página web. Usamos algunos tipos de cookies estrictamente necesarias para el correcto funcionamiento de nuestro sitio web (ver tabla). Esta categoría de cookies incluye aquellas que permiten a los servidores web establecer si usted ha iniciado o no sesión en el sistema, responder a acciones siempre que usted mantenga una sesión activa, o configurar el idioma de la página web según su ubicación. En consecuencia, si no permite la descarga de dichas cookies en su navegador, no podrá acceder a algunos servicios proporcionados por nuestro sitio web. Asimismo, utilizamos un Cookie Analítico de Google el cual lleva a cabo análisis estadísticos. Utilizamos este cookie para controlar y evaluar el uso de nuestra página Web (como el uso del navegador, la cantidad de nuevos visitantes y las respuestas a las actividades de marketing) Esto ayuda a informar de cualquier mejoría realizada en la página Web.</p>
      
      <h3>Nuestro sitio web emplea las siguientes cookies:</h3>
      <p><strong>Cookie Name:</strong> _utma,utmb,utmc,_utmz (Google Analytics)<br><strong>Utilidad:</strong> Estas cookies habilitan la utilización de Google Analytics. Este software nos permite recopilar y utilizar información sobre cómo interactúan con nuestro sitio web los usuarios, o cifras de nuevos usuarios. Esta información nos permite mejorar el sitio web y su experiencia como usuario.</p>
      <p><strong>Cookie Name:</strong> web_session_id<br><strong>Utilidad:</strong> Esta cookie permite al servidor web saber si usted ha iniciado o no sesión.</p>
      
      <h3>Cómo deshabilitar las Cookies:</h3>
      <p>Dependiendo del navegador utilizado, el método para deshabilitar las cookies es distinto. A continuación se enumeran los principales navegadores.</p>
      <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Internet Explorer</li>
        <li>Safari</li>
        <li>Safari para iOS</li>
      </ul>
    `,
    terms_content: `
      <p>¡Bienvenido a MelenaMarketing.com!</p>
      <p>Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Melena Marketing (Grupo Infinity S:COOP.AND), ubicado en https://www.melenamarketing.com/.</p>
      <p>Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando MelenaMarketing.com si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.</p>
      
      <h3>Cookies:</h3>
      <p>El sitio web utiliza cookies para ayudar a personalizar tu experiencia en línea. Al acceder a MelenaMarketing.com, aceptaste utilizar las cookies necesarias.</p>
      <p>Una cookie es un archivo de texto que un servidor de páginas web coloca en tu disco duro. Las cookies no se pueden utilizar para ejecutar programas o enviar virus a tu computadora. Las cookies se te asignan de forma exclusiva y solo un servidor web en el dominio que emitió la cookie puede leerlas.</p>
      <p>Podemos utilizar cookies para recopilar, almacenar y rastrear información con fines estadísticos o de marketing para operar nuestro sitio web. Tienes la capacidad de aceptar o rechazar cookies opcionales. Hay algunas cookies obligatorias que son necesarias para el funcionamiento de nuestro sitio web. Estas cookies no requieren tu consentimiento ya que siempre funcionan. Ten en cuenta que al aceptar las cookies requeridas, también aceptas las cookies de terceros, que podrían usarse a través de servicios proporcionados por terceros si utilizas dichos servicios en nuestro sitio web, por ejemplo, una ventana de visualización de video proporcionada por terceros e integrada en nuestro sitio web.</p>
      
      <h3>Licencia:</h3>
      <p>A menos que se indique lo contrario, Melena Marketing (Grupo Infinity S:COOP.AND) y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en MelenaMarketing.com. Todos los derechos de propiedad intelectual son reservados. Puedes acceder desde MelenaMarketing.com para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.</p>
      <p>No debes:</p>
      <ul>
        <li>Copiar o volver a publicar material de MelenaMarketing.com</li>
        <li>Vender, alquilar o sublicenciar material de MelenaMarketing.com</li>
        <li>Reproducir, duplicar o copiar material de MelenaMarketing.com</li>
        <li>Redistribuir contenido de MelenaMarketing.com</li>
      </ul>
      <p>Este acuerdo comenzará en la fecha presente.</p>
      <p>Partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e información en determinadas áreas. Melena Marketing (Grupo Infinity S:COOP.AND) no filtra, edita, publica ni revisa los comentarios antes de su presencia en el sitio web. Los comentarios no reflejan los puntos de vista ni las opiniones de Melena Marketing (Grupo Infinity S:COOP.AND), sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que publica. En la medida en que lo permitan las leyes aplicables, Melena Marketing (Grupo Infinity S:COOP.AND) no será responsable de los comentarios ni de ninguna responsabilidad, daños o gastos causados o sufridos como resultado de cualquier uso o publicación o apariencia de comentarios en este sitio web.</p>
      <p>Melena Marketing (Grupo Infinity S:COOP.AND) se reserva el derecho de monitorear todos los comentarios y eliminar los que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.</p>
      <p>Garantizas y declaras que:</p>
      <ul>
        <li>Tienes derecho a publicar comentarios en nuestro sitio web y tienes todas las licencias y consentimientos necesarios para hacerlo;</li>
        <li>Los comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, los derechos de autor, patentes o marcas comerciales de terceros;</li>
        <li>Los comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal de otro modo, que sea una invasión de la privacidad.</li>
        <li>Los comentarios no se utilizarán para solicitar o promover negocios o actividades comerciales personalizadas o presentes o actividades ilegales.</li>
      </ul>
      <p>Por la presente, otorgas a Melena Marketing (Grupo Infinity S:COOP.AND) una licencia no exclusiva para usar, reproducir, editar y autorizar a otros a usar, reproducir y editar cualquiera de tus comentarios en todas y cada una de las formas, formatos, o medios.</p>
      
      <h3>Hipervínculos a nuestro contenido:</h3>
      <p>Las siguientes organizaciones pueden vincularse a nuestro sitio web sin aprobación previa por escrito:</p>
      <ul>
        <li>Agencias gubernamentales;</li>
        <li>Motores de búsqueda;</li>
        <li>Organizaciones de noticias;</li>
        <li>Los distribuidores de directorios en línea pueden vincularse a nuestro sitio web de la misma manera que hacen hipervínculos a los sitios web de otras empresas que figuran en la lista; y</li>
        <li>Empresas acreditadas en todo el sistema, excepto que soliciten organizaciones sin fines de lucro, centros comerciales de caridad y grupos de recaudación de fondos de caridad que no pueden hacer hipervínculos a nuestro sitio web.</li>
      </ul>
      <p>Estas organizaciones pueden enlazar a nuestra página de inicio, a publicaciones o a otra información del sitio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos y/o servicios; y (c) encaja en el contexto del sitio de la parte vinculante.</p>
      <p>Podemos considerar y aprobar otras solicitudes de enlaces de los siguientes tipos de organizaciones:</p>
      <ul>
        <li>fuentes de información de consumidores y/o empresas comúnmente conocidas;</li>
        <li>sitios de la comunidad .com;</li>
        <li>asociaciones u otros grupos que representan organizaciones benéficas;</li>
        <li>distribuidores de directorios en línea;</li>
        <li>portales de Internet;</li>
        <li>firmas de contabilidad, derecho y consultoría; y</li>
        <li>instituciones educativas y asociaciones comerciales.</li>
      </ul>
      <p>Aprobaremos las solicitudes de enlace de estas organizaciones si: (a) el enlace no nos haría vernos desfavorablemente a nosotros mismos ni a nuestras empresas acreditadas; (b) la organización no tiene registros negativos con nosotros; (c) el beneficio para nosotros de la visibilidad del hipervínculo compensa la ausencia de Melena Marketing (Grupo Infinity S:COOP.AND); y (d) el enlace está en el contexto de información general de recursos.</p>
      <p>Estas organizaciones pueden enlazar a nuestra página de inicio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos o servicios; y (c) encaja en el contexto del sitio de la parte vinculante.</p>
      <p>Si eres una de las organizaciones enumeradas en el párrafo 2 y estás interesada en vincularte a nuestro sitio web, debes informarnos enviando un correo electrónico a Melena Marketing (Grupo Infinity S:COOP.AND). Incluye tu nombre, el nombre de tu organización, la información de contacto, así como la URL de tu sitio, una lista de las URL desde las que tienes la intención de vincular a nuestro sitio web y una lista de las URL de nuestro sitio a las que te gustaría acceder. Espera 2-3 semanas para recibir una respuesta.</p>
      <p>Las organizaciones aprobadas pueden hacer hipervínculos a nuestro sitio web de la siguiente manera:</p>
      <ul>
        <li>Mediante el uso de nuestro nombre corporativo; o</li>
        <li>Mediante el uso del localizador uniforme de recursos al que se está vinculando; o</li>
        <li>Usar cualquier otra descripción de nuestro sitio web al que está vinculado que tenga sentido dentro del contexto y formato del contenido en el sitio de la parte vinculante.</li>
      </ul>
      <p>No se permitirá el uso del logotipo de Melena Marketing (Grupo Infinity S:COOP.AND) u otro material gráfico para vincular sin un acuerdo de licencia de marca comercial.</p>
      
      <h3>Responsabilidad del contenido:</h3>
      <p>No seremos responsables de ningún contenido que aparezca en tu sitio web. Aceptas protegernos y defendernos contra todas las reclamaciones que se presenten en tu sitio web. Ningún enlace(s) debe aparecer en ningún sitio web que pueda interpretarse como difamatorio, obsceno o criminal, o que infrinja, de otra manera viole o defienda la infracción u otra violación de los derechos de terceros.</p>
      
      <h3>Reserva de derechos:</h3>
      <p>Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web cuando se solicite. También nos reservamos el derecho de modificar estos términos y condiciones y su política de enlaces en cualquier momento. Al vincular continuamente a nuestro sitio web, aceptas estar vinculado y seguir estos términos y condiciones de vinculación.</p>
      
      <h3>Eliminación de enlaces de nuestro sitio web:</h3>
      <p>Si encuentras algún enlace en nuestro sitio que sea ofensivo por cualquier motivo, puedes contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para eliminar enlaces, pero no estamos obligados a hacerlo ni a responder directamente.</p>
      <p>No nos aseguramos de que la información de este sitio web sea correcta. No garantizamos su integridad o precisión, ni prometemos asegurarnos de que el sitio web permanezca disponible o que el material en el sitio se mantenga actualizado.</p>
      
      <h3>Exención de responsabilidad:</h3>
      <p>En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio web y el uso de este. Nada en este descargo de responsabilidad:</p>
      <ul>
        <li>limitará o excluirá nuestra responsabilidad o la tuya por muerte o lesiones personales;</li>
        <li>limitará o excluirá nuestra responsabilidad o la tuya por fraude o tergiversación fraudulenta;</li>
        <li>limitará cualquiera de nuestras responsabilidades o las tuyas de cualquier manera que no esté permitida por la ley aplicable; o</li>
        <li>excluirá cualquiera de nuestras responsabilidades o las tuyas que no puedan estar excluidas según la ley aplicable.</li>
      </ul>
      <p>Las limitaciones y prohibiciones de responsabilidad establecidas en esta sección y en otras partes de este descargo de responsabilidad: (a) están sujetas al párrafo anterior; y (b) regirá todas las responsabilidades que surjan en virtud de la exención de responsabilidad, incluidas las responsabilidades que surjan en el contrato, en agravio y por incumplimiento de la obligación legal.</p>
      <p>Siempre que el sitio web y la información y los servicios en el sitio se proporcionen de forma gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.</p>
    `,
  },
  en: {
    header_slogan: "Boosting SMEs",
    nav_links: { home: "Home", services: "Services", about: "About Us", blog: "Blog", contact: "Contact" },
    hero_title: "Boosting SMEs",
    hero_subtitle: "In the Digital World",
    hero_description: "We are a digital marketing agency specializing in helping small and medium-sized businesses improve their online presence and attract more potential customers.",
    hero_cta: "Request a Quote",
    services_title: "Our Services",
    services_subtitle: "We create custom quotes for each client.<br/>Don't pay a euro more, only what you need.",
    services: {
        graphic_design: "GRAPHIC DESIGN",
        web_page: "WEBSITE",
        google_management: "GOOGLE MANAGEMENT",
        social_media: "SOCIAL MEDIA",
        logo_brand: "LOGO & BRAND",
        corp_emails: "CORPORATE EMAILS",
        online_ads: "ONLINE ADVERTISING",
        translations: "ENGLISH SPANISH RUSSIAN TRANSLATIONS",
        press_articles: "PRESS ARTICLES",
        online_store: "ONLINE STORE",
        signage_design: "SIGNAGE DESIGNS",
        smart_cards: "SMART BUSINESS CARDS",
        photo_sessions: "PHOTO SESSIONS",
        video_reports: "VIDEO REPORTS",
    },
    about_title: "Why Choose Melena Marketing?",
    about_subtitle: "We understand the challenges of SMEs because we specialize in them. Our success is seeing your business grow.",
    about_feature1_title: "SME Specialists",
    about_feature1_desc: "We are not just another agency. We focus exclusively on the needs and budgets of small and medium-sized businesses.",
    about_feature2_title: "Clear Value Proposition",
    about_feature2_desc: "No jargon or technicalities. We offer you direct solutions to improve your online presence and attract more customers.",
    about_feature3_title: "Close and Transparent Service",
    about_feature3_desc: "We believe in constant communication and trust. We will be your trusted marketing team, always accessible.",
    projects_title: "Some of Our Sports Projects",
    projects_subtitle: "We are proud to collaborate on top-level events that promote sport and position Marbella as a benchmark destination.",
    projects_list: [
      { 
        title: "SBE Marbella Half Marathon", 
        description: "An iconic event that brings together thousands of runners. We manage communication and marketing to position it as one of the most important half marathons on the Costa del Sol." 
      },
      { 
        title: "Marbella THE ONE", 
        description: "The most exclusive padel and golf Pro-Am tournament. A luxury event that merges elite sports with top-level networking, attracting personalities and major brands." 
      },
      { 
        title: "King's Cup of Beach Volleyball 2025", 
        description: "Marbella becomes the national capital of beach volleyball. A prestigious tournament that will bring the best players from Spain to our shores, consolidating the city as a top-tier sports destination." 
      },
      {
        title: "Partners of CB Marbella",
        description: "We support the city's main basketball club. We collaborate on their communication and marketing to strengthen their connection with fans and promote grassroots sports in the community."
      }
    ],
    blog_title: "From Our Blog",
    blog_subtitle: "Ideas, tips, and strategies for your SME to stand out in the digital world.",
    blog_read_more: "Read more",
    blog_posts: [
      { title: '5 Local SEO Tips for Shops in Malaga', excerpt: 'Attract more customers from your area by optimizing your presence in local searches. We show you how to start today.' },
      { title: 'How to Use Instagram for Your Restaurant and Fill Tables', excerpt: 'Discover visual and content strategies to turn followers into loyal diners for your hospitality business.' },
      { title: 'The Importance of a Professional Logo for Your SME', excerpt: 'Your brand is more than a name. We analyze why a solid visual identity is a crucial investment for success.' },
    ],
    contact_title: "Let's Talk About Your Project",
    contact_subtitle: "Fill out the form or contact us directly. We are ready to hear your ideas and boost your business.",
    contact_info_title: "Contact Information",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_message: "Tell us about your project",
    contact_form_submit: "Send Message",
    footer_copyright: "Melena Marketing. All rights reserved.",
    footer_terms: "Terms and Conditions",
    footer_privacy_policy: "Privacy Policy",
    privacy_content: "Privacy Policy content will be available soon.",
    terms_content: "Terms and Conditions content will be available soon.",
  },
  ru: {
    header_slogan: "Продвижение МСП",
    nav_links: { home: "Главная", services: "Услуги", about: "О нас", blog: "Блог", contact: "Контакты" },
    hero_title: "Продвижение МСП",
    hero_subtitle: "В цифровом мире",
    hero_description: "Мы — агентство цифрового маркетинга, специализирующееся на помощи малым и средним предприятиям в улучшении их онлайн-присутствия и привлечении большего числа потенциальных клиентов.",
    hero_cta: "Запросить расчет",
    services_title: "Наши услуги",
    services_subtitle: "Мы составляем индивидуальные сметы для каждого клиента.<br/>Не платите ни евро больше, только то, что вам нужно.",
    services: {
        graphic_design: "ГРАФИЧЕСКИЙ ДИЗАЙН",
        web_page: "ВЕБ-САЙТ",
        google_management: "УПРАВЛЕНИЕ GOOGLE",
        social_media: "СОЦИАЛЬНЫЕ СЕТИ",
        logo_brand: "ЛОГОТИП И БРЕНД",
        corp_emails: "КОРПОРАТИВНЫЕ EMAIL",
        online_ads: "ОНЛАЙН-РЕКЛАМА",
        translations: "ПЕРЕВОДЫ АНГЛ-ИСП-РУС",
        press_articles: "СТАТЬИ В ПРЕССЕ",
        online_store: "ИНТЕРНЕТ-МАГАЗИН",
        signage_design: "ДИЗАЙН ВЫВЕСОК",
        smart_cards: "УМНЫЕ ВИЗИТКИ",
        photo_sessions: "ФОТОСЕССИИ",
        video_reports: "ВИДЕОРЕПОРТАЖИ",
    },
    about_title: "Почему выбирают Melena Marketing?",
    about_subtitle: "Мы понимаем проблемы МСП, потому что мы специализируемся на них. Наш успех — это рост вашего бизнеса.",
    about_feature1_title: "Специалисты по МСП",
    about_feature1_desc: "Мы не просто очередное агентство. Мы фокусируемся исключительно на потребностях и бюджетах малых и средних предприятий.",
    about_feature2_title: "Четкое ценностное предложение",
    about_feature2_desc: "Без лишних слов и технических терминов. Мы предлагаем вам прямые решения для улучшения вашего онлайн-присутствия и привлечения клиентов.",
    about_feature3_title: "Близкий и прозрачный сервис",
    about_feature3_desc: "Мы верим в постоянное общение и доверие. Мы будем вашей надежной маркетинговой командой, всегда доступной.",
    projects_title: "Некоторые из наших спортивных проектов",
    projects_subtitle: "Мы гордимся сотрудничеством в проведении мероприятий высшего уровня, которые продвигают спорт и позиционируют Марбелью как эталонное направление.",
    projects_list: [
      { 
        title: "SBE Полумарафон Марбельи", 
        description: "Знаковое событие, собирающее тысячи бегунов. Мы управляем коммуникациями и маркетингом, чтобы позиционировать его как один из самых важных полумарафонов на Коста-дель-Соль." 
      },
      { 
        title: "Marbella THE ONE", 
        description: "Самый эксклюзивный турнир Pro-Am по паделу и гольфу. Роскошное мероприятие, сочетающее элитный спорт с нетворкингом на высшем уровне, привлекающее знаменитостей и крупные бренды." 
      },
      { 
        title: "Кубок Короля по пляжному волейболу 2025", 
        description: "Марбелья становится национальной столицей пляжного волейбола. Престижный турнир, который соберет лучших игроков Испании, укрепляя город как первоклассное спортивное направление." 
      },
      {
        title: "Партнеры КБ Марбелья",
        description: "Мы поддерживаем главный баскетбольный клуб города. Мы сотрудничаем в их коммуникациях и маркетинге, чтобы укрепить связь с болельщиками и продвигать массовый спорт."
      }
    ],
    blog_title: "Из нашего блога",
    blog_subtitle: "Идеи, советы и стратегии, чтобы ваше МСП выделялось в цифровом мире.",
    blog_read_more: "Читать далее",
    blog_posts: [
      { title: '5 советов по локальному SEO для магазинов в Малаге', excerpt: 'Привлекайте больше клиентов из вашего района, оптимизируя ваше присутствие в локальном поиске. Мы покажем, как начать уже сегодня.' },
      { title: 'Как использовать Instagram для вашего ресторана и заполнить столы', excerpt: 'Откройте для себя визуальные и контентные стратегии, чтобы превратить подписчиков в постоянных посетителей вашего заведения.' },
      { title: 'Важность профессионального логотипа для вашего МСП', excerpt: 'Ваш бренд — это больше, чем просто название. Мы анализируем, почему сильная визуальная идентичность — это ключевая инвестиция в успех.' },
    ],
    contact_title: "Давайте обсудим ваш проект",
    contact_subtitle: "Заполните форму или свяжитесь с нами напрямую. Мы готовы выслушать ваши идеи и дать толчок вашему бизнесу.",
    contact_info_title: "Контактная информация",
    contact_form_name: "Ваше имя",
    contact_form_email: "Ваш Email",
    contact_form_message: "Расскажите нам о вашем проекте",
    contact_form_submit: "Отправить сообщение",
    footer_copyright: "Melena Marketing. Все права защищены.",
    footer_terms: "Условия и положения",
    footer_privacy_policy: "Политика конфиденциальности",
    privacy_content: "Содержание Политики конфиденциальности скоро будет доступно.",
    terms_content: "Содержание Условий и положений скоро будет доступно.",
  },
};