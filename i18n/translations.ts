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
    about_p1: string;
    about_p2: string;
    about_p3: string;
    about_founder_alt_female: string;
    about_founder_alt_male: string;
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
    contact_whatsapp: string;
    footer_copyright: string;
    footer_terms: string;
    footer_privacy_policy: string;
    cookie_message: string;
    cookie_accept: string;
    cookie_learn_more: string;
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
    about_title: "¿Quiénes Somos?",
    about_p1: "Melena Marketing es una empresa de marketing digital especializada en ayudar a pequeñas y medianas empresas a mejorar su presencia en Internet y a atraer a más clientes potenciales. Contamos con un equipo de profesionales altamente cualificados en áreas como <strong>diseño gráfico, diseño web, marketing digital y publicidad online.</strong>",
    about_p2: "Ofrecemos una amplia gama de servicios personalizados para <strong>adaptarnos a las necesidades de cada uno de nuestros clientes.</strong> Desde la creación de una página web profesional hasta la gestión de redes sociales, pasando por el diseño de cartelería y la realización de sesiones fotográficas, trabajamos de la mano con nuestros clientes para ayudarles a mejorar su presencia en Internet y a alcanzar sus objetivos de negocio.",
    about_p3: "Si estás interesado en nuestros servicios y quieres saber cómo podemos ayudar a tu empresa, no dudes en ponerte en contacto con nosotros. <strong>Estaremos encantados de atenderte y ofrecerte una solución a medida.</strong>",
    about_founder_alt_female: "Cofundadora de Melena Marketing",
    about_founder_alt_male: "Cofundador de Melena Marketing",
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
    contact_whatsapp: "Contactar por WhatsApp",
    footer_copyright: "Melena Marketing. Todos los derechos reservados.",
    footer_terms: "Términos y Condiciones",
    footer_privacy_policy: "Política de Privacidad",
    cookie_message: "Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.",
    cookie_accept: "Aceptar",
    cookie_learn_more: "Saber más",
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
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="border-b-2 p-2">Cookie Name</th>
            <th class="border-b-2 p-2">Utilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-b p-2">_utma,utmb,utmc,_utmz (Google Analytics)</td>
            <td class="border-b p-2">Estas cookies habilitan la utilización de Google Analytics. Este software nos permite recopilar y utilizar información sobre cómo interactúan con nuestro sitio web los usuarios, o cifras de nuevos usuarios. Esta información nos permite mejorar el sitio web y su experiencia como usuario.</td>
          </tr>
          <tr>
            <td class="border-b p-2">web_session_id</td>
            <td class="border-b p-2">Esta cookie permite al servidor web saber si usted ha iniciado o no sesión.</td>
          </tr>
        </tbody>
      </table>

      <h3 class="mt-6">Cómo deshabilitar las Cookies:</h3>
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
    about_title: "Who We Are",
    about_p1: "Melena Marketing is a digital marketing company specializing in helping small and medium-sized businesses improve their online presence and attract more potential customers. We have a team of highly qualified professionals in areas such as <strong>graphic design, web design, digital marketing, and online advertising.</strong>",
    about_p2: "We offer a wide range of personalized services to <strong>adapt to the needs of each of our clients.</strong> From creating a professional website to managing social media, designing posters, and conducting photo shoots, we work hand-in-hand with our clients to help them improve their online presence and achieve their business goals.",
    about_p3: "If you are interested in our services and want to know how we can help your company, do not hesitate to contact us. <strong>We will be delighted to assist you and offer you a tailor-made solution.</strong>",
    about_founder_alt_female: "Co-founder of Melena Marketing",
    about_founder_alt_male: "Co-founder of Melena Marketing",
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
    contact_whatsapp: "Contact via WhatsApp",
    footer_copyright: "Melena Marketing. All rights reserved.",
    footer_terms: "Terms and Conditions",
    footer_privacy_policy: "Privacy Policy",
    cookie_message: "We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.",
    cookie_accept: "Accept",
    cookie_learn_more: "Learn more",
    privacy_content: `
      <h2>1.- DATA CONTROLLER</h2>
      <p>Melena Marketing<br>GRUPO INFINITY, S.COOP.AND<br>CIF: F16945909<br>29679, Benahavís, Málaga, Spain<br>Phone: 660532823<br>Email: info@melenamarketing.com</p>
      
      <h2>CONSENT TO PROCESS YOUR DATA FOR THE MANAGEMENT OF YOUR ENERGY BILL</h2>
      <p>To offer you our free energy bill management service, we need your authorization to transfer your data to Observatorio Energético (Llanquihue Inversiones SL, Calle los olivos 300 Marbella, España CIF: B93717973), a partner company of Melena Marketing, acting as energy advisors. This transfer will be made for the sole purpose of them contacting you to offer information and advice on energy saving and managing your bills.</p>
      <p>We want to inform you that your personal data will be treated confidentially and will be used exclusively for the aforementioned purpose. Under no circumstances will your data be transferred to third parties without your express consent.</p>
      <p>We guarantee that we comply with all legal obligations regarding personal data protection, as established in current regulations.</p>
      <p>If you wish to exercise your rights of access, rectification, cancellation, or opposition, you can do so at any time by sending an email to info@melenamarketing.com.</p>
      <p>If you agree to this transfer of your data, please check the corresponding box on the service registration form.</p>

      <h2>2.- GENERAL PURPOSES OF PROCESSING FOR OTHER SERVICES</h2>
      <p>Through this website, Melena Marketing may collect your data for various purposes; at the time of collection, the necessary information about its purpose will be provided. In any case, the data you provide may be processed to address your queries, complaints, or suggestions if you use the forms provided for this purpose, as well as the specific email addresses. In this case, your data will be processed for the time necessary to respond to your request. If it is necessary to keep the data for a longer period, Melena Marketing will inform you. If you send us your resume, your data will be processed to study your candidacy for possible selection processes. The data will be processed for a period of one year from their receipt.</p>
      
      <h2>3.- BASIS OF PROCESSING</h2>
      <p>The processing of personal data you provide through contact forms or emails will be based on your consent. If a prior contractual relationship exists, the data may be processed based on the contract.</p>
      
      <h2>4.- DATA RECIPIENTS</h2>
      <p>Melena Marketing does not provide information to third parties except when legally required.</p>

      <h2>5.- RIGHTS</h2>
      <p>The interested party may at any time request from Melena Marketing access to their personal data, its rectification, or its deletion. In turn, the user can request the limitation of processing, their opposition, or the portability of their data. To exercise any of the described rights, the interested party must send a communication to Melena Marketing, or by email to info@melenamarketing.com. In the communication, the interested party must indicate which right they wish to exercise and attach a photocopy of their ID or equivalent document that proves their identity. If you believe your rights have been violated, you can file a complaint with the Spanish Data Protection Agency (www.aepd.es).</p>
      
      <h2>7.- THIRD-PARTY DATA</h2>
      <p>If the User provides personal data of third parties for any purpose, they guarantee that they have previously informed the affected parties and have obtained their consent for the communication of their data to Melena Marketing. The User guarantees that the affected parties are of legal age and that the information provided is accurate and truthful. If responsibilities arise from a breach of these conditions by the User, they must answer for the consequences of said breach.</p>
      
      <h2>COOKIE POLICY</h2>
      <p>Cookies are small text files that are downloaded to your browser when you access the internet. They are used by website promoters to help users navigate them efficiently and to perform certain functions. Because their central role is to improve/enable the use or processes of the website, disabling cookies could prevent users from performing certain functions. Cookies are created when the user's browser loads a particular website. The website sends information to the browser which creates a text file. Each time the user returns to the same website, the browser retrieves and sends this file to the website's server. We use some types of strictly necessary cookies for the proper functioning of our website (see table). This category of cookies includes those that allow web servers to determine whether you are logged in, respond to actions while you are logged in, or set the website language according to your location. Consequently, if you do not allow these cookies to be downloaded to your browser, you will not be able to access some services provided by our website. We also use a Google Analytics Cookie which performs statistical analysis. We use this cookie to monitor and evaluate the use of our website (such as browser usage, number of new visitors, and responses to marketing activities). This helps to inform any improvements made to the website.</p>
      
      <h3>Our website uses the following cookies:</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="border-b-2 p-2">Cookie Name</th>
            <th class="border-b-2 p-2">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-b p-2">_utma,utmb,utmc,_utmz (Google Analytics)</td>
            <td class="border-b p-2">These cookies enable the use of Google Analytics. This software allows us to collect and use information about how users interact with our website, or numbers of new users. This information allows us to improve the website and your user experience.</td>
          </tr>
          <tr>
            <td class="border-b p-2">web_session_id</td>
            <td class="border-b p-2">This cookie allows the web server to know if you are logged in or not.</td>
          </tr>
        </tbody>
      </table>

      <h3 class="mt-6">How to disable Cookies:</h3>
      <p>Depending on the browser used, the method for disabling cookies is different. The main browsers are listed below.</p>
      <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Internet Explorer</li>
        <li>Safari</li>
        <li>Safari for iOS</li>
      </ul>
    `,
    terms_content: `
      <p>Welcome to MelenaMarketing.com!</p>
      <p>These terms and conditions outline the rules and regulations for the use of Melena Marketing's (Grupo Infinity S:COOP.AND) Website, located at https://www.melenamarketing.com/.</p>
      <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use MelenaMarketing.com if you do not agree to take all of the terms and conditions stated on this page.</p>
      
      <h3>Cookies:</h3>
      <p>The website uses cookies to help personalize your online experience. By accessing MelenaMarketing.com, you agreed to use the necessary cookies.</p>
      <p>A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.</p>
      <p>We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.</p>
      
      <h3>License:</h3>
      <p>Unless otherwise stated, Melena Marketing (Grupo Infinity S:COOP.AND) and/or its licensors own the intellectual property rights for all material on MelenaMarketing.com. All intellectual property rights are reserved. You may access this from MelenaMarketing.com for your own personal use subjected to restrictions set in these terms and conditions.</p>
      <p>You must not:</p>
      <ul>
        <li>Copy or republish material from MelenaMarketing.com</li>
        <li>Sell, rent, or sub-license material from MelenaMarketing.com</li>
        <li>Reproduce, duplicate or copy material from MelenaMarketing.com</li>
        <li>Redistribute content from MelenaMarketing.com</li>
      </ul>
      <p>This Agreement shall begin on the date hereof.</p>
      <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Melena Marketing (Grupo Infinity S:COOP.AND) does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Melena Marketing (Grupo Infinity S:COOP.AND), its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Melena Marketing (Grupo Infinity S:COOP.AND) shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
      <p>Melena Marketing (Grupo Infinity S:COOP.AND) reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.</p>
      <p>You warrant and represent that:</p>
      <ul>
        <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
        <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
        <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.</li>
        <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
      </ul>
      <p>You hereby grant Melena Marketing (Grupo Infinity S:COOP.AND) a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.</p>
      
      <h3>Hyperlinking to our Content:</h3>
      <p>The following organizations may link to our Website without prior written approval:</p>
      <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
      </ul>
      <p>These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>
      <p>We may consider and approve other link requests from the following types of organizations:</p>
      <ul>
        <li>commonly-known consumer and/or business information sources;</li>
        <li>dot.com community sites;</li>
        <li>associations or other groups representing charities;</li>
        <li>online directory distributors;</li>
        <li>internet portals;</li>
        <li>accounting, law, and consulting firms; and</li>
        <li>educational institutions and trade associations.</li>
      </ul>
      <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Melena Marketing (Grupo Infinity S:COOP.AND); and (d) the link is in the context of general resource information.</p>
      <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
      <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Melena Marketing (Grupo Infinity S:COOP.AND). Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
      <p>Approved organizations may hyperlink to our Website as follows:</p>
      <ul>
        <li>By use of our corporate name; or</li>
        <li>By use of the uniform resource locator being linked to; or</li>
        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
      </ul>
      <p>No use of Melena Marketing's (Grupo Infinity S:COOP.AND) logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
      
      <h3>Content Liability:</h3>
      <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
      
      <h3>Reservation of Rights:</h3>
      <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
      
      <h3>Removal of links from our website:</h3>
      <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
      <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
      
      <h3>Disclaimer:</h3>
      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
      <ul>
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ul>
      <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</p>
      <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
    `,
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
    about_title: "Кто мы",
    about_p1: "Melena Marketing — это компания цифрового маркетинга, специализирующаяся на помощи малым и средним предприятиям в улучшении их онлайн-присутствия и привлечении большего числа потенциальных клиентов. У нас есть команда высококвалифицированных профессионалов в таких областях, как <strong>графический дизайн, веб-дизайн, цифровой маркетинг и онлайн-реклама.</strong>",
    about_p2: "Мы предлагаем широкий спектр персонализированных услуг, чтобы <strong>адаптироваться к потребностям каждого из наших клиентов.</strong> От создания профессионального веб-сайта до управления социальными сетями, разработки плакатов и проведения фотосессий — мы работаем рука об руку с нашими клиентами, чтобы помочь им улучшить свое онлайн-присутствие и достичь своих бизнес-целей.",
    about_p3: "Если вы заинтересованы в наших услугах и хотите узнать, как мы можем помочь вашей компании, не стесняйтесь обращаться к нам. <strong>Мы будем рады помочь вам и предложить индивидуальное решение.</strong>",
    about_founder_alt_female: "Сооснователь Melena Marketing",
    about_founder_alt_male: "Сооснователь Melena Marketing",
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
    contact_whatsapp: "Связаться по WhatsApp",
    footer_copyright: "Melena Marketing. Все права защищены.",
    footer_terms: "Условия и положения",
    footer_privacy_policy: "Политика конфиденциальности",
    cookie_message: "Мы используем файлы cookie для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь на использование нами файлов cookie.",
    cookie_accept: "Принять",
    cookie_learn_more: "Узнать больше",
    privacy_content: `
      <h2>1.- ДАННЫЕ ОТВЕТСТВЕННОГО ЛИЦА</h2>
      <p>Melena Marketing<br>GRUPO INFINITY, S.COOP.AND<br>CIF: F16945909<br>29679, Benahavís, Málaga, Испания<br>Телефон: 660532823<br>Электронная почта: info@melenamarketing.com</p>
      
      <h2>СОГЛАСИЕ НА ОБРАБОТКУ ВАШИХ ДАННЫХ ДЛЯ УПРАВЛЕНИЯ ВАШИМ СЧЕТОМ ЗА ЭЛЕКТРОЭНЕРГИЮ</h2>
      <p>Чтобы предложить вам нашу бесплатную услугу по управлению счетами за электроэнергию, нам необходимо ваше разрешение на передачу ваших данных компании Observatorio Energético (Llanquihue Inversiones SL, Calle los olivos 300 Marbella, España CIF: B93717973), компании-партнеру Melena Marketing, выступающей в качестве консультантов по энергетике. Эта передача будет осуществляться с единственной целью — чтобы они могли связаться с вами для предоставления информации и консультаций по вопросам энергосбережения и управления вашими счетами.</p>
      <p>Мы хотим сообщить вам, что ваши личные данные будут обрабатываться конфиденциально и использоваться исключительно в вышеупомянутых целях. Ни при каких обстоятельствах ваши данные не будут переданы третьим лицам без вашего явного согласия.</p>
      <p>Мы гарантируем, что соблюдаем все юридические обязательства по защите персональных данных, установленные действующим законодательством.</p>
      <p>Если вы хотите воспользоваться своими правами на доступ, исправление, удаление или возражение, вы можете сделать это в любое время, отправив электронное письмо по адресу info@melenamarketing.com.</p>
      <p>Если вы согласны на передачу ваших данных, пожалуйста, отметьте соответствующее поле в форме регистрации услуги.</p>

      <h2>2.- ОБЩИЕ ЦЕЛИ ОБРАБОТКИ ДЛЯ ДРУГИХ УСЛУГ</h2>
      <p>Через этот веб-сайт Melena Marketing может собирать ваши данные для различных целей; в момент сбора будет предоставлена необходимая информация о цели. В любом случае, предоставленные вами данные могут обрабатываться для ответа на ваши запросы, жалобы или предложения, если вы используете предоставленные для этого формы, а также указанные адреса электронной почты. В этом случае ваши данные будут обрабатываться в течение времени, необходимого для ответа на ваш запрос. Если потребуется хранить данные дольше, Melena Marketing сообщит вам об этом. Если вы отправите нам свое резюме, ваши данные будут обработаны для рассмотрения вашей кандидатуры в возможных процессах отбора. Данные будут обрабатываться в течение одного года с момента их получения.</p>
      
      <h2>3.- ОСНОВАНИЯ ДЛЯ ОБРАБОТКИ</h2>
      <p>Обработка персональных данных, которые вы предоставляете через контактные формы или по электронной почте, будет основана на вашем согласии. При наличии предварительных договорных отношений данные могут обрабатываться на основании договора.</p>
      
      <h2>4.- ПОЛУЧАТЕЛИ ДАННЫХ</h2>
      <p>Melena Marketing не предоставляет информацию третьим лицам, за исключением случаев, предусмотренных законом.</p>

      <h2>5.- ПРАВА</h2>
      <p>Заинтересованное лицо может в любое время запросить у Melena Marketing доступ к своим персональным данным, их исправление или удаление. В свою очередь, пользователь может запросить ограничение обработки, возразить против нее или запросить переносимость своих данных. Для осуществления любого из описанных прав заинтересованное лицо должно направить сообщение в Melena Marketing или по электронной почте на info@melenamarketing.com. В сообщении заинтересованное лицо должно указать, какое право оно желает осуществить, и приложить ксерокопию своего удостоверения личности или эквивалентного документа, подтверждающего личность. Если вы считаете, что ваши права были нарушены, вы можете подать жалобу в Испанское агентство по защите данных (www.aepd.es).</p>
      
      <h2>7.- ДАННЫЕ ТРЕТЬИХ ЛИЦ</h2>
      <p>В случае, если Пользователь предоставляет персональные данные третьих лиц для каких-либо целей, он гарантирует, что предварительно проинформировал затронутых лиц и получил их согласие на передачу их данных в Melena Marketing. Пользователь гарантирует, что затронутые лица являются совершеннолетними и предоставленная информация является точной и достоверной. В случае возникновения ответственности за нарушение этих условий Пользователем, он должен будет нести ответственность за последствия такого нарушения.</p>
      
      <h2>ПОЛИТИКА ИСПОЛЬЗОВАНИЯ ФАЙЛОВ COOKIE</h2>
      <p>Файлы cookie — это небольшие текстовые файлы, которые загружаются в ваш браузер при доступе в интернет. Они используются разработчиками веб-сайтов для помощи пользователям в эффективной навигации и выполнения определенных функций. Поскольку их основная роль заключается в улучшении/обеспечении использования или процессов веб-сайта, отключение файлов cookie может помешать пользователям выполнять определенные функции. Файлы cookie создаются, когда браузер пользователя загружает определенный веб-сайт. Веб-сайт отправляет информацию в браузер, который создает текстовый файл. Каждый раз, когда пользователь возвращается на тот же веб-сайт, браузер извлекает и отправляет этот файл на сервер веб-сайта. Мы используем некоторые типы строго необходимых файлов cookie для правильной работы нашего веб-сайта (см. таблицу). Эта категория файлов cookie включает те, которые позволяют веб-серверам определять, вошли ли вы в систему, отвечать на действия, пока вы находитесь в системе, или настраивать язык веб-сайта в соответствии с вашим местоположением. Следовательно, если вы не разрешите загрузку этих файлов cookie в ваш браузер, вы не сможете получить доступ к некоторым услугам, предоставляемым нашим веб-сайтом. Мы также используем аналитический файл cookie Google, который выполняет статистический анализ. Мы используем этот файл cookie для мониторинга и оценки использования нашего веб-сайта (например, использование браузера, количество новых посетителей и реакция на маркетинговые мероприятия). Это помогает информировать о любых улучшениях, внесенных на веб-сайт.</p>
      
      <h3>Наш сайт использует следующие файлы cookie:</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="border-b-2 p-2">Имя cookie</th>
            <th class="border-b-2 p-2">Назначение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-b p-2">_utma,utmb,utmc,_utmz (Google Analytics)</td>
            <td class="border-b p-2">Эти файлы cookie обеспечивают работу Google Analytics. Это программное обеспечение позволяет нам собирать и использовать информацию о том, как пользователи взаимодействуют с нашим сайтом, или о количестве новых пользователей. Эта информация позволяет нам улучшать сайт и ваш пользовательский опыт.</td>
          </tr>
          <tr>
            <td class="border-b p-2">web_session_id</td>
            <td class="border-b p-2">Этот файл cookie позволяет веб-серверу узнать, вошли ли вы в систему.</td>
          </tr>
        </tbody>
      </table>

      <h3 class="mt-6">Как отключить файлы cookie:</h3>
      <p>В зависимости от используемого браузера способ отключения файлов cookie различается. Ниже перечислены основные браузеры.</p>
      <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Internet Explorer</li>
        <li>Safari</li>
        <li>Safari для iOS</li>
      </ul>
    `,
    terms_content: `
      <p>Добро пожаловать на MelenaMarketing.com!</p>
      <p>Настоящие правила и условия определяют порядок использования веб-сайта компании Melena Marketing (Grupo Infinity S:COOP.AND), расположенного по адресу https://www.melenamarketing.com/.</p>
      <p>Заходя на этот веб-сайт, мы предполагаем, что вы принимаете эти правила и условия. Не продолжайте использовать MelenaMarketing.com, если вы не согласны со всеми правилами и условиями, изложенными на этой странице.</p>
      
      <h3>Файлы cookie:</h3>
      <p>Веб-сайт использует файлы cookie для персонализации вашего онлайн-опыта. Заходя на MelenaMarketing.com, вы согласились использовать необходимые файлы cookie.</p>
      <p>Файл cookie — это текстовый файл, который размещается на вашем жестком диске сервером веб-страницы. Файлы cookie не могут использоваться для запуска программ или доставки вирусов на ваш компьютер. Файлы cookie уникально присваиваются вам и могут быть прочитаны только веб-сервером в домене, который выдал вам файл cookie.</p>
      <p>Мы можем использовать файлы cookie для сбора, хранения и отслеживания информации в статистических или маркетинговых целях для работы нашего веб-сайта. У вас есть возможность принять или отклонить необязательные файлы cookie. Существуют некоторые обязательные файлы cookie, которые необходимы для работы нашего веб-сайта. Эти файлы cookie не требуют вашего согласия, так как они всегда работают. Пожалуйста, имейте в виду, что, принимая обязательные файлы cookie, вы также принимаете файлы cookie третьих сторон, которые могут использоваться через услуги, предоставляемые третьими сторонами, если вы используете такие услуги на нашем веб-сайте, например, окно для просмотра видео, предоставленное третьими сторонами и интегрированное в наш веб-сайт.</p>
      
      <h3>Лицензия:</h3>
      <p>Если не указано иное, Melena Marketing (Grupo Infinity S:COOP.AND) и/или ее лицензиары владеют правами интеллектуальной собственности на все материалы на MelenaMarketing.com. Все права интеллектуальной собственности защищены. Вы можете получить доступ к этому с MelenaMarketing.com для личного использования с учетом ограничений, установленных в настоящих правилах и условиях.</p>
      <p>Вы не должны:</p>
      <ul>
        <li>Копировать или переиздавать материалы с MelenaMarketing.com</li>
        <li>Продавать, сдавать в аренду или сублицензировать материалы с MelenaMarketing.com</li>
        <li>Воспроизводить, дублировать или копировать материалы с MelenaMarketing.com</li>
        <li>Перераспределять контент с MelenaMarketing.com</li>
      </ul>
      <p>Настоящее Соглашение вступает в силу с даты его заключения.</p>
      <p>Части этого веб-сайта предоставляют пользователям возможность публиковать и обмениваться мнениями и информацией в определенных областях веб-сайта. Melena Marketing (Grupo Infinity S:COOP.AND) не фильтрует, не редактирует, не публикует и не просматривает Комментарии до их появления на веб-сайте. Комментарии не отражают взгляды и мнения Melena Marketing (Grupo Infinity S:COOP.AND), ее агентов и/или аффилированных лиц. Комментарии отражают взгляды и мнения лица, которое их публикует. В пределах, разрешенных действующим законодательством, Melena Marketing (Grupo Infinity S:COOP.AND) не несет ответственности за Комментарии или за какую-либо ответственность, ущерб или расходы, вызванные и/или понесенные в результате любого использования и/или публикации и/или появления Комментариев на этом веб-сайте.</p>
      <p>Melena Marketing (Grupo Infinity S:COOP.AND) оставляет за собой право отслеживать все Комментарии и удалять любые Комментарии, которые могут быть сочтены неуместными, оскорбительными или нарушающими настоящие Условия и положения.</p>
      <p>Вы гарантируете и заявляете, что:</p>
      <ul>
        <li>Вы имеете право публиковать Комментарии на нашем веб-сайте и имеете все необходимые лицензии и согласия для этого;</li>
        <li>Комментарии не нарушают никаких прав интеллектуальной собственности, включая, без ограничений, авторское право, патент или товарный знак любой третьей стороны;</li>
        <li>Комментарии не содержат клеветнических, оскорбительных, непристойных или иных незаконных материалов, которые являются вторжением в частную жизнь.</li>
        <li>Комментарии не будут использоваться для привлечения или продвижения бизнеса или обычаев, а также для представления коммерческой деятельности или незаконной деятельности.</li>
      </ul>
      <p>Настоящим вы предоставляете Melena Marketing (Grupo Infinity S:COOP.AND) неисключительную лицензию на использование, воспроизведение, редактирование и разрешение другим лицам использовать, воспроизводить и редактировать любые ваши Комментарии в любых формах, форматах или средствах массовой информации.</p>
      
      <h3>Гиперссылки на наш контент:</h3>
      <p>Следующие организации могут ссылаться на наш Веб-сайт без предварительного письменного разрешения:</p>
      <ul>
        <li>Государственные учреждения;</li>
        <li>Поисковые системы;</li>
        <li>Новостные организации;</li>
        <li>Распространители онлайн-каталогов могут ссылаться на наш Веб-сайт так же, как они делают гиперссылки на веб-сайты других перечисленных предприятий; и</li>
        <li>Аккредитованные на всю систему предприятия, за исключением некоммерческих организаций, благотворительных торговых центров и групп по сбору благотворительных средств, которые не могут делать гиперссылки на наш Веб-сайт.</li>
      </ul>
      <p>Эти организации могут ссылаться на нашу домашнюю страницу, на публикации или на другую информацию Веб-сайта, если ссылка: (а) никоим образом не вводит в заблуждение; (b) не подразумевает ложно спонсорство, одобрение или утверждение связывающей стороны и ее продуктов и/или услуг; и (c) соответствует контексту сайта связывающей стороны.</p>
      <p>Мы можем рассматривать и утверждать другие запросы на ссылки от следующих типов организаций:</p>
      <ul>
        <li>общеизвестные источники потребительской и/или деловой информации;</li>
        <li>сайты сообщества dot.com;</li>
        <li>ассоциации или другие группы, представляющие благотворительные организации;</li>
        <li>распространители онлайн-каталогов;</li>
        <li>интернет-порталы;</li>
        <li>бухгалтерские, юридические и консалтинговые фирмы; и</li>
        <li>учебные заведения и торговые ассоциации.</li>
      </ul>
      <p>Мы одобрим запросы на ссылки от этих организаций, если решим, что: (а) ссылка не создаст неблагоприятного впечатления о нас или наших аккредитованных предприятиях; (b) у организации нет отрицательных записей о нас; (c) выгода для нас от видимости гиперссылки компенсирует отсутствие Melena Marketing (Grupo Infinity S:COOP.AND); и (d) ссылка находится в контексте общей информации о ресурсах.</p>
      <p>Эти организации могут ссылаться на нашу домашнюю страницу, если ссылка: (а) никоим образом не вводит в заблуждение; (b) не подразумевает ложно спонсорство, одобрение или утверждение связывающей стороны и ее продуктов или услуг; и (c) соответствует контексту сайта связывающей стороны.</p>
      <p>Если вы являетесь одной из организаций, перечисленных в пункте 2 выше, и заинтересованы в ссылке на наш веб-сайт, вы должны сообщить нам об этом, отправив электронное письмо в Melena Marketing (Grupo Infinity S:COOP.AND). Пожалуйста, укажите ваше имя, название вашей организации, контактную информацию, а также URL-адрес вашего сайта, список URL-адресов, с которых вы собираетесь ссылаться на наш Веб-сайт, и список URL-адресов на нашем сайте, на которые вы хотели бы сослаться. Подождите 2-3 недели для ответа.</p>
      <p>Утвержденные организации могут делать гиперссылки на наш Веб-сайт следующим образом:</p>
      <ul>
        <li>Используя наше корпоративное название; или</li>
        <li>Используя унифицированный указатель ресурса, на который делается ссылка; или</li>
        <li>Используя любое другое описание нашего Веб-сайта, на который делается ссылка, которое имеет смысл в контексте и формате контента на сайте связывающей стороны.</li>
      </ul>
      <p>Использование логотипа Melena Marketing (Grupo Infinity S:COOP.AND) или других произведений искусства для ссылок не допускается без лицензионного соглашения на товарный знак.</p>
      
      <h3>Ответственность за контент:</h3>
      <p>Мы не несем ответственности за любой контент, который появляется на вашем Веб-сайте. Вы соглашаетесь защищать нас от всех претензий, возникающих на вашем Веб-сайте. Никакие ссылки не должны появляться на любом Веб-сайте, который может быть истолкован как клеветнический, непристойный или преступный, или который нарушает, иным образом нарушает или пропагандирует нарушение или иное нарушение прав третьих лиц.</p>
      
      <h3>Сохранение прав:</h3>
      <p>Мы оставляем за собой право потребовать, чтобы вы удалили все ссылки или любую конкретную ссылку на наш Веб-сайт. Вы обязуетесь немедленно удалить все ссылки на наш Веб-сайт по запросу. Мы также оставляем за собой право в любое время вносить поправки в эти условия и положения и свою политику ссылок. Постоянно ссылаясь на наш Веб-сайт, вы соглашаетесь быть связанными и соблюдать эти условия и положения о ссылках.</p>
      
      <h3>Удаление ссылок с нашего веб-сайта:</h3>
      <p>Если вы найдете на нашем Веб-сайте какую-либо ссылку, которая по какой-либо причине является оскорбительной, вы можете связаться с нами и сообщить нам об этом в любой момент. Мы рассмотрим запросы на удаление ссылок, но мы не обязаны делать это или отвечать вам напрямую.</p>
      <p>Мы не гарантируем, что информация на этом веб-сайте является верной, мы не гарантируем ее полноту или точность; мы также не обещаем обеспечивать доступность веб-сайта или актуальность материалов на нем.</p>
      
      <h3>Отказ от ответственности:</h3>
      <p>В максимальной степени, разрешенной действующим законодательством, мы исключаем все заявления, гарантии и условия, касающиеся нашего веб-сайта и его использования. Ничто в этом отказе от ответственности не будет:</p>
      <ul>
        <li>ограничивать или исключать нашу или вашу ответственность за смерть или телесные повреждения;</li>
        <li>ограничивать или исключать нашу или вашу ответственность за мошенничество или мошенническое введение в заблуждение;</li>
        <li>ограничивать любую из наших или ваших ответственностей любым способом, который не разрешен действующим законодательством; или</li>
        <li>исключать любую из наших или ваших ответственностей, которые не могут быть исключены в соответствии с действующим законодательством.</li>
      </ul>
      <p>Ограничения и запреты ответственности, установленные в этом разделе и в других частях этого отказа от ответственности: (а) подпадают под действие предыдущего пункта; и (b) регулируют все обязательства, возникающие в соответствии с отказом от ответственности, включая обязательства, возникающие по договору, в результате деликта и за нарушение установленных законом обязанностей.</p>
      <p>Пока веб-сайт и информация и услуги на нем предоставляются бесплатно, мы не несем ответственности за любые убытки или ущерб любого характера.</p>
    `,
  },
};