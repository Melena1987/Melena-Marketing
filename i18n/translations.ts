

import { BlogPost } from '../types';

interface Project {
  title: string;
  description: string;
  link?: string;
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
    services_descriptions: { [key: string]: string };
    service_modal_cta: string;
    service_modal_whatsapp_text: string;
    about_title: string;
    about_p1: string;
    about_p2: string;
    about_p3: string;
    projects_title: string;
    projects_subtitle: string;
    projects_list: Project[];
    blog_title: string;
    blog_subtitle: string;
    blog_read_more: string;
    blog_view_all: string;
    blog_posts: Omit<BlogPost, 'imageUrl' | 'slug'>[];
    contact_title: string;
    contact_subtitle: string;
    contact_info_title: string;
    contact_form_name: string;
    contact_form_email: string;
    contact_form_message: string;
    contact_form_submit: string;
    contact_form_sending: string;
    contact_form_terms: string;
    contact_form_validation_error: string;
    contact_whatsapp: string;
    footer_copyright: string;
    footer_terms: string;
    footer_privacy_policy: string;
    cookie_message: string;
    cookie_accept: string;
    cookie_learn_more: string;
    terms_content: string;
    privacy_content: string;
    collaboration_title: string;
    collaboration_subtitle: string;
    collaboration_cta: string;
    // Energy Promo Section on Home Page
    energy_promo_title: string;
    energy_promo_description: string;
    energy_promo_cta: string;
    // Energy Page
    energy_form_title: string;
    energy_form_subtitle1: string;
    energy_form_subtitle2: string;
    energy_form_more_info: string;
    energy_form_upload_label: string;
    energy_form_phone: string;
    energy_form_terms: string;
    energy_form_validation_error: string;
    energy_page_send_success: string;
    energy_page_send_error: string;
    energy_page_content_title: string;
    energy_page_content_p1: string;
    energy_page_content_p2: string;
    energy_page_content_p3: string;
    energy_page_content_how_title: string;
    energy_page_content_how_p1: string;
    energy_page_content_how_p2: string;
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
        photo_sessions: "SESIONES FOTOGRÁFicas",
        video_reports: "VIDEO REPORTAJES",
        energy_management: "GESTIÓN FACTURA ENERGÉTICA",
    },
    services_descriptions: {
        graphic_design: "Creamos identidades visuales impactantes y materiales de marketing que comunican la esencia de tu marca, desde folletos hasta banners digitales.",
        web_page: "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para móviles que convierten visitantes en clientes.",
        google_management: "Optimizamos tu perfil de Google My Business y gestionamos campañas de Google Ads para que te encuentren primero en las búsquedas locales.",
        social_media: "Gestionamos tus redes sociales con contenido creativo y estratégico para construir una comunidad fiel y aumentar tu visibilidad.",
        logo_brand: "Desarrollamos logotipos memorables y una identidad de marca coherente que te diferencie de la competencia.",
        corp_emails: "Configuramos correos electrónicos profesionales con tu propio dominio para dar una imagen más seria y confiable a tus clientes.",
        online_ads: "Creamos y gestionamos campañas de publicidad en redes sociales y Google para llegar a tu público objetivo y maximizar el retorno de inversión.",
        translations: "Ofrecemos servicios de traducción profesionales en inglés, español y ruso para que tu mensaje llegue a un público global sin barreras.",
        press_articles: "Redactamos y gestionamos la publicación de artículos de prensa para aumentar la notoriedad y credibilidad de tu marca.",
        online_store: "Construimos tiendas online funcionales y atractivas, integradas con pasarelas de pago seguras para que empieces a vender por internet.",
        signage_design: "Diseñamos todo tipo de cartelería, desde rótulos para tu local hasta vinilos y lonas publicitarias para eventos.",
        smart_cards: "Moderniza tu networking con tarjetas de visita digitales e interactivas que tus clientes pueden guardar con un solo toque.",
        photo_sessions: "Realizamos sesiones fotográficas profesionales de producto, equipo o instalaciones para potenciar la imagen de tu empresa.",
        video_reports: "Producimos vídeos corporativos, promocionales y para redes sociales que cuentan tu historia y conectan con tu audiencia.",
        energy_management: "",
    },
    service_modal_cta: "Consultar por WhatsApp",
    service_modal_whatsapp_text: "Hola, me gustaría recibir más información sobre el servicio de {service}.",
    about_title: "¿Quiénes Somos?",
    about_p1: "Melena Marketing es una empresa de marketing digital especializada en ayudar a pequeñas y medianas empresas a mejorar su presencia en Internet y a atraer a más clientes potenciales. Contamos con un equipo de profesionales altamente cualificados en áreas como <strong>diseño gráfico, diseño web, marketing digital y publicidad online.</strong>",
    about_p2: "Ofrecemos una amplia gama de servicios personalizados para <strong>adaptarnos a las necesidades de cada uno de nuestros clientes.</strong> Desde la creación de una página web profesional hasta la gestión de redes sociales, pasando por el diseño de cartelería y la realización de sesiones fotográficas, trabajamos de la mano con nuestros clientes para ayudarles a mejorar su presencia en Internet y a alcanzar sus objetivos de negocio.",
    about_p3: "Si estás interesado en nuestros servicios y quieres saber cómo podemos ayudar a tu empresa, no dudes en ponerte en contacto con nosotros. <strong>Estaremos encantados de atenderte y ofrecerte una solución a medida.</strong>",
    projects_title: "Algunos de nuestros proyectos deportivos",
    projects_subtitle: "Nos enorgullece colaborar en eventos de primer nivel que fomentan el deporte y posicionan a Marbella como un destino de referencia.",
    projects_list: [
      { 
        title: "SBE Marbella Media Maratón", 
        description: "Un evento icónico que reúne a miles de corredores. Gestionamos la comunicación y el marketing para posicionarlo como una de las medias maratones más importantes de la Costa del Sol.",
        link: "https://www.run-on.es/sbe-marbella-2025-galer%C3%ADa-oficial"
      },
      { 
        title: "Marbella THE ONE", 
        description: "El torneo Pro-Am de pádel y golf más exclusivo. Un evento de lujo que fusiona deporte de élite con networking al más alto nivel, atrayendo a personalidades y grandes marcas.",
        link: "https://www.showtimeexperience.com/the-one"
      },
      { 
        title: "Copa del Rey de Voley Playa 2025", 
        description: "Marbella se convierte en la capital nacional del vóley playa. Un prestigioso torneo que traerá a los mejores jugadores de España a nuestras costas, consolidando la ciudad como destino deportivo.",
        link: "https://www.showtimeexperience.com/eventos/copa-del-rey-y-de-la-reina-de-voley-playa"
      },
      {
        title: "Colaboradores del CB Marbella",
        description: "Apoyamos al principal club de baloncesto de la ciudad. Colaboramos en su comunicación y marketing para fortalecer su conexión con la afición y promover el deporte base en la comunidad.",
        link: "https://www.instagram.com/cbmarbella/"
      },
      {
        title: "The Embassy Basketball Centre",
        description: "Colaboramos con The Embassy, el centro de alto rendimiento de baloncesto en Fuengirola, un referente internacional en la formación de jugadores de élite.",
        link: "https://www.theembassytc.com/"
      }
    ],
    blog_title: "Desde Nuestro Blog",
    blog_subtitle: "Ideas, consejos y estrategias para que tu PYME destaque en el mundo digital.",
    blog_read_more: "Leer más",
    blog_view_all: "Ver todos los artículos",
    blog_posts: [
      { 
        title: '5 Consejos de SEO Local para Tiendas en Málaga', 
        excerpt: 'Atrae a más clientes de tu zona optimizando tu presencia en búsquedas locales. Te mostramos cómo empezar hoy mismo.',
        content: `<p>En el competitivo mercado actual, destacar a nivel local es más importante que nunca. Si tienes una tienda física en Málaga, el SEO local no es una opción, es una necesidad. Aquí te dejamos cinco consejos prácticos para que empieces a atraer más clientes que están buscando exactamente lo que ofreces, justo en tu vecindario.</p><h2>1. Reclama y Optimiza tu Perfil de Google Business</h2><p>Tu Perfil de Google Business (antes Google My Business) es tu escaparate digital en las búsquedas de Google y en Maps. Es gratuito y es la herramienta más potente para el SEO local.</p><ul><li><strong>Completa toda la información:</strong> Asegúrate de que tu nombre, dirección, teléfono (NAP) y horario comercial sean correctos y consistentes en todas partes.</li><li><strong>Elige las categorías adecuadas:</strong> Selecciona las categorías que mejor describan tu negocio.</li><li><strong>Sube fotos de alta calidad:</strong> Muestra tu local, tus productos y tu equipo. Las fotos aumentan la interacción.</li></ul><h2>2. Consigue Reseñas de Clientes</h2><p>Las reseñas son una señal de confianza tanto para los clientes como para Google. Anima a tus clientes satisfechos a dejar una reseña. Responde a todas las reseñas, tanto positivas como negativas, de manera profesional. Esto demuestra que te preocupas por la opinión de tus clientes.</p><h2>3. Optimiza tu Página Web para Búsquedas Locales</h2><p>Tu web debe "hablar" el idioma local. Incluye el nombre de tu ciudad o barrio en lugares estratégicos:</p><ul><li>En las etiquetas de título (Title tags) y meta descripciones.</li><li>En los encabezados (H1, H2).</li><li>En el contenido de tus páginas, como en la página "Sobre Nosotros" o "Contacto".</li></ul><h2>4. Crea Contenido Local Relevante</h2><p>Escribe en un blog sobre eventos locales, noticias de tu barrio o colaboraciones con otros negocios de Málaga. Esto no solo atrae a un público local, sino que también le indica a Google que tu negocio es una parte activa de la comunidad.</p><h2>5. Asegura la Consistencia de tus Citaciones (NAP)</h2><p>NAP son las siglas de Name, Address, Phone (Nombre, Dirección, Teléfono). Es crucial que esta información sea idéntica en todos los directorios online en los que aparezca tu negocio (Páginas Amarillas, Yelp, directorios locales, etc.). La inconsistencia puede confundir a Google y perjudicar tu ranking.</p><p>Implementando estos cinco consejos, darás un gran paso para mejorar tu visibilidad en las búsquedas locales y atraer a más clientes de Málaga a tu puerta.</p>`
      },
      { 
        title: 'Cómo Usar Instagram para tu Restaurante y Llenar Mesas', 
        excerpt: 'Descubre estrategias visuales y de contenido para convertir seguidores en comensales fieles para tu negocio de hostelería.',
        content: `<h2>El Poder de lo Visual en la Gastronomía</h2><p>Instagram es una plataforma eminentemente visual, y pocas industrias se benefician tanto de esto como la restauración. Una foto apetitosa puede ser el desencadenante que necesita un cliente potencial para decidirse a visitar tu local. No se trata solo de publicar fotos de tus platos, sino de contar una historia y crear una atmósfera que invite a la gente a vivir la experiencia.</p><h3>Consejos Prácticos para tu Estrategia en Instagram:</h3><ul><li><strong>Fotografía de Alta Calidad:</strong> Invierte en buenas fotos. La luz natural es tu mejor aliada. No necesitas un equipo profesional carísimo, muchos smartphones modernos hacen fotos increíbles. Céntrate en los detalles, las texturas y los colores de tus platos.</li><li><strong>Muestra el "Detrás de Cámaras":</strong> A la gente le encanta ver el proceso. Muestra a tus chefs en acción, la llegada de productos frescos del mercado, o la preparación de un nuevo cóctel. Esto humaniza tu marca y genera confianza.</li><li><strong>Contenido Generado por el Usuario (UGC):</strong> Anima a tus clientes a que publiquen fotos en tu restaurante y te etiqueten. Comparte sus mejores fotos en tus historias o en tu feed (¡siempre pidiendo permiso!). Es la mejor publicidad que existe.</li><li><strong>Usa las Historias para el Día a Día:</strong> Las historias de Instagram son perfectas para contenido más efímero y casual. Anuncia el plato del día, haz encuestas sobre qué postre prefieren tus seguidores, o muestra el ambiente de tu local en una noche de viernes.</li><li><strong>Colabora con Influencers Locales:</strong> Identifica a foodies o influencers de tu ciudad y invítales a probar tu menú. Una reseña positiva de alguien con una comunidad local fiel puede atraer a muchos nuevos clientes.</li></ul><p>Recuerda que la clave es la consistencia. Publica regularmente, interactúa con tus seguidores y mantén un estilo visual coherente. ¡Pronto verás cómo tu comunidad crece y tus mesas se llenan!</p>`
      },
      { 
        title: 'La Importancia de un Logotipo Profesional para tu PYME', 
        excerpt: 'Tu marca es más que un nombre. Analizamos por qué una identidad visual sólida es una inversión crucial para el éxito.',
        content: `<h2>Tu Logotipo: La Cara de tu Negocio</h2><p>Para una pequeña o mediana empresa (PYME), cada detalle cuenta a la hora de construir una reputación y atraer clientes. A menudo, el logotipo es el primer punto de contacto que un cliente potencial tiene con tu marca. Un diseño amateur puede transmitir falta de profesionalidad, mientras que un logotipo bien diseñado comunica confianza, calidad y seriedad desde el primer vistazo.</p><h3>¿Por qué es una Inversión y no un Gasto?</h3><ul><li><strong>Crea una Primera Impresión memorable:</strong> Tienes solo unos segundos para captar la atención. Un logotipo profesional es memorable y ayuda a que los clientes recuerden tu negocio por encima de la competencia.</li><li><strong>Te Diferencia de la Competencia:</strong> En un mercado saturado, un logotipo único te ayuda a destacar. Refleja la personalidad de tu negocio y lo que te hace especial.</li><li><strong>Fomenta la Lealtad de Marca:</strong> A medida que tu negocio crece, tu logotipo se convierte en un símbolo familiar para tus clientes. La gente se siente atraída por lo que conoce y en lo que confía. Un logotipo consistente en todos tus materiales (web, tarjetas, redes sociales) refuerza esa confianza.</li><li><strong>Comunica Profesionalidad y Confianza:</strong> Un logotipo bien diseñado sugiere que te tomas tu negocio en serio. Esto es especialmente importante para nuevas empresas que necesitan construir su credibilidad desde cero.</li></ul><p>Piensa en las grandes marcas que admiras. Su logotipo es instantáneamente reconocible y evoca emociones y expectativas. Aunque tu PYME no sea una multinacional, el principio es el mismo. Invertir en un logotipo profesional es invertir en el futuro y la percepción de tu marca. Es una pieza fundamental en la construcción de un negocio exitoso y duradero.</p>`
      },
      {
        title: 'Guía Paso a Paso: Cómo Editar Roles en tu Página de Facebook (Versión 2025)',
        excerpt: 'Gestionar los permisos de tu página de Facebook es clave para la seguridad. Aprende a editar roles con nuestra guía 2025, tanto desde Facebook como desde Meta Business Suite.',
        content: `<p>Gestionar quién tiene acceso a tu página de Facebook y qué puede hacer en ella es fundamental para la seguridad y la eficiencia de tu equipo. Con las actualizaciones constantes de la plataforma, el proceso ha cambiado ligeramente, integrándose más con la Meta Business Suite.</p><p>Esta guía actualizada te mostrará, paso a paso, cómo editar los roles y permisos en tu página de Facebook para que puedas delegar tareas sin perder el control.</p><h2>Entendiendo los Nuevos Roles en Facebook</h2><p>Antes de empezar, es importante conocer la nueva estructura de permisos de Facebook, que se aleja de los roles tradicionales (Administrador, Editor, etc.) para ofrecer un control más granular:</p><ul class="list-disc list-inside space-y-2"><li><strong>Acceso a Facebook con control total:</strong> Es el nivel más alto. Equivale al antiguo "Administrador". La persona puede gestionarlo todo, incluyendo la asignación de roles, la eliminación de la página y la gestión de permisos.</li><li><strong>Acceso a Facebook con control parcial:</strong> Permite a los usuarios gestionar tareas específicas como la creación de contenido, la revisión de estadísticas, la gestión de mensajes y comentarios, o la creación de anuncios, pero sin acceso a la configuración crítica de la página.</li></ul><h2>Opción 1: Editar Roles desde la Experiencia de Páginas de Facebook</h2><p>Si gestionas tu página directamente desde la interfaz de Facebook, sigue estos pasos:</p><h3>Paso 1: Accede a la Configuración de tu Página</h3><ol class="list-decimal list-inside space-y-2"><li>Abre Facebook en tu navegador e inicia sesión.</li><li>Haz clic en tu foto de perfil en la esquina superior derecha para cambiar a tu perfil de página.</li><li>Una vez en tu página, haz clic de nuevo en la foto de perfil de la página en la esquina superior derecha.</li><li>En el menú desplegable, selecciona "Configuración y privacidad" y luego haz clic en "Configuración".</li></ol><h3>Paso 2: Ve a "Nueva experiencia para páginas"</h3><ol class="list-decimal list-inside space-y-2"><li>En el menú de configuración de la izquierda, busca y selecciona la opción "Nueva experiencia para páginas".</li></ol><h3>Paso 3: Administra el Acceso</h3><p>Aquí verás una lista de las personas que tienen acceso a tu página.</p><p><strong>Para añadir una nueva persona:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Haz clic en el botón "Añadir" junto a "Personas con acceso a Facebook".</li><li>Busca a la persona por su nombre o correo electrónico.</li><li>Decide si quieres otorgarle "Control total". Si activas esta opción, tendrá los mismos permisos que tú. Si no la activas, tendrá un control parcial que podrás configurar.</li><li>Haz clic en "Otorgar acceso" e introduce tu contraseña para confirmar.</li></ol><p><strong>Para editar o eliminar a una persona existente:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Haz clic en los tres puntos junto al nombre de la persona que deseas modificar.</li><li>Selecciona "Cambiar nivel de acceso" para modificar sus permisos o "Eliminar acceso" para quitarle todos los permisos.</li><li>Sigue las instrucciones y confirma con tu contraseña si es necesario.</li></ol><h2>Opción 2: Editar Roles desde Meta Business Suite</h2><p>Si utilizas Meta Business Suite para gestionar tus activos de Facebook e Instagram, el proceso es más centralizado.</p><h3>Paso 1: Accede a la Configuración del Negocio</h3><ol class="list-decimal list-inside space-y-2"><li>Ve a <a href="https://business.facebook.com/settings" target="_blank" rel="noopener noreferrer">business.facebook.com/settings</a>.</li><li>En el menú lateral izquierdo, haz clic en el icono de engranaje de "Configuración".</li><li>En la siguiente pantalla, dentro de la columna "Configuración del negocio", selecciona "Personas".</li></ol><h3>Paso 2: Gestiona Personas y Activos</h3><p>Verás una lista de todas las personas añadidas a tu cuenta empresarial.</p><p><strong>Para añadir una nueva persona:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Haz clic en el botón azul "Añadir personas".</li><li>Introduce su dirección de correo electrónico profesional.</li><li>Asigna el acceso que deseas (empleado o administrador del negocio).</li><li>En el siguiente paso, podrás asignar acceso a activos específicos. Selecciona tu página de Facebook de la lista.</li><li>En el lado derecho, activa los interruptores correspondientes a las tareas que podrá realizar (Contenido, Mensajes, Anuncios, etc.). Si quieres que tenga control total sobre la página, activa la opción "Gestionar página".</li><li>Haz clic en "Invitar". La persona recibirá una invitación por correo electrónico.</li></ol><p><strong>Para editar los permisos de una persona existente:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Selecciona el nombre de la persona en la lista.</li><li>A la derecha, verás una lista de los activos a los que tiene acceso (páginas, cuentas de Instagram, etc.).</li><li>Haz clic en tu página de Facebook.</li><li>Modifica los permisos activando o desactivando las tareas específicas.</li><li>Para eliminar por completo el acceso a la página, haz clic en el icono de la papelera junto al nombre de la página.</li></ol><p>Mantener los roles de tu página organizados y actualizados es una práctica esencial para proteger tu presencia online y asegurar que tu equipo pueda trabajar de manera fluida y segura. Revisa estos permisos periódicamente, especialmente cuando haya cambios en tu equipo.</p>`
      },
      {
        title: 'Ahorra Tiempo y Dinero: Descubre Nuestro Servicio Gratuito de Gestión de Factura Energética',
        excerpt: '¿Pagas de más en tu factura de la luz? Te explicamos cómo nuestro servicio gratuito analiza tu factura y te ayuda a ahorrar sin coste ni compromiso.',
        content: `<h2>¿Estás seguro de que no pagas de más en tu factura de la luz?</h2><p>Cada mes recibes una factura de electricidad y, seamos sinceros, la mayoría de las veces la pagamos sin revisar la letra pequeña. El problema es que, a menudo, las compañías eléctricas aplican tarifas que no deberían o existen opciones más económicas que no conocemos. Esto se traduce en un gasto innecesario que, a final de año, puede sumar una cantidad considerable.</p><p>En Melena Marketing, en colaboración con el Observatorio Energético (OE), hemos lanzado un servicio diseñado para solucionar este problema de una vez por todas.</p><h2>Un Servicio Gratuito para Optimizar tu Gasto</h2><p>Te ofrecemos un <strong>servicio completamente gratuito</strong> de gestión y análisis de tu factura energética. Nuestro objetivo es simple: asegurarnos de que pagues lo justo y ayudarte a ahorrar tiempo y dinero. Sin costes ocultos ni compromiso.</p><h3>¿Cómo funciona? Es muy sencillo:</h3><ol class="list-decimal list-inside space-y-2"><li><strong>Nos envías tu factura:</strong> Simplemente sube una copia de tu última factura de la luz a través de nuestro formulario seguro.</li><li><strong>La analizamos por ti:</strong> Nuestro equipo de expertos revisará cada detalle para asegurarse de que estás pagando el precio mínimo que te corresponde.</li><li><strong>Te contactamos con mejoras:</strong> Si detectamos cualquier oportunidad de ahorro o mejora, nos pondremos en contacto contigo para gestionar los cambios y garantizar que tus próximas facturas sean más bajas.</li></ol><h2>Toma el Control de tu Factura Hoy Mismo</h2><p>No dejes pasar la oportunidad de reducir tus gastos. Dedica tu tiempo y tu dinero a lo que de verdad importa. Nuestro servicio es transparente, fácil y, lo más importante, gratuito.</p><p>¿Listo para empezar a ahorrar? Haz clic en el siguiente enlace, déjanos tu factura y tu número de teléfono, y nosotros nos encargamos del resto.</p><p class="not-prose text-center mt-8"><a href="/gestion-de-tu-factura-energetica" class="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-500 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Quiero Ahorrar en mi Factura</a></p><p>Si tienes cualquier duda, no dudes en escribirnos a <strong>info@melenamarketing.com</strong>. ¡Estamos aquí para ayudarte!</p>`
      },
    ],
    contact_title: "Hablemos de tu Proyecto",
    contact_subtitle: "Rellena el formulario o contáctanos directamente. Estamos listos para escuchar tus ideas e impulsar tu negocio.",
    contact_info_title: "Información de Contacto",
    contact_form_name: "Nombre",
    contact_form_email: "Email",
    contact_form_message: "Cuéntanos sobre tu proyecto",
    contact_form_submit: "Enviar",
    contact_form_sending: "Enviando...",
    contact_form_terms: "He leído y acepto los <a href=\"/terminos-y-condiciones\" class=\"underline hover:text-blue-700\">Términos y Condiciones</a> y la <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Política de Privacidad</a>.",
    contact_form_validation_error: "Por favor, completa todos los campos obligatorios y acepta los términos.",
    contact_whatsapp: "Contactar por WhatsApp",
    footer_copyright: "Melena Marketing. Todos los derechos reservados.",
    footer_terms: "Términos y Condiciones",
    footer_privacy_policy: "Política de Privacidad",
    cookie_message: "Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.",
    cookie_accept: "Aceptar",
    cookie_learn_more: "Saber más",
    terms_content: `<h2>1. DATOS IDENTIFICATIVOS</h2>
<p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es Melena Marketing (en adelante Melena Marketing), con domicilio a estos efectos en Marbella, Málaga, España. Correo electrónico de contacto: info@melenamarketing.com del sitio web.</p>
<h2>2. USUARIOS</h2>
<p>El acceso y/o uso de este portal de Melena Marketing atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>
<h2>3. USO DEL PORTAL</h2>
<p>melenamarketing.com proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Melena Marketing o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.</p>
<p>El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que Melena Marketing ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para (i) incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público; (ii) difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos; (iii) provocar daños en los sistemas físicos y lógicos de Melena Marketing, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</p>
<h2>4. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
<p>Melena Marketing por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Melena Marketing o bien de sus licenciantes.</p>
<p>Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Melena Marketing.</p>
<h2>5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
<p>Melena Marketing no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
<h2>6. MODIFICACIONES</h2>
<p>Melena Marketing se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
<h2>7. ENLACES</h2>
<p>En el caso de que en melenamarketing.com se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Melena Marketing no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Melena Marketing asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.</p>
<h2>8. DERECHO DE EXCLUSIÓN</h2>
<p>Melena Marketing se reserva el derecho a denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.</p>
<h2>9. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
<p>La relación entre Melena Marketing y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Málaga.</p>`,
    privacy_content: `<h2>1. RESPONSABLE DEL TRATAMIENTO DE SUS DATOS</h2>
<p><strong>Identidad:</strong> Melena Marketing<br><strong>Email:</strong> info@melenamarketing.com<br><strong>Actividad:</strong> Servicios de Marketing Digital</p>
<h2>2. ¿CON QUÉ FINALIDAD TRATAMOS SUS DATOS PERSONALES?</h2>
<p>En Melena Marketing tratamos la información que nos facilitan las personas interesadas con el fin de gestionar las solicitudes de información, consultas y la prestación de los servicios contratados. Las finalidades principales son:</p>
<ul>
  <li><strong>Formulario de Contacto:</strong> Atender y gestionar las consultas o solicitudes de información recibidas a través del formulario de contacto. La base de legitimación es el consentimiento expreso del usuario al marcar la casilla de aceptación y enviar el formulario.</li>
  <li><strong>Formulario de Gestión Energética:</strong> Recoger los datos de contacto y la factura energética del usuario para analizarla y contactarle con el fin de proponerle mejoras y ahorros. La base de legitimación es el consentimiento expreso del usuario. Al solicitar este servicio, el usuario entiende que sus datos podrán ser compartidos con empresas colaboradoras del sector energético con el único fin de realizar el estudio y la gestión solicitada.</li>
</ul>
<p>No se tomarán decisiones automatizadas en base a los datos proporcionados.</p>
<h2>3. ¿POR CUÁNTO TIEMPO CONSERVAREMOS SUS DATOS?</h2>
<p>Los datos personales proporcionados se conservarán mientras se mantenga la relación con el interesado o no se solicite su supresión. Se conservarán durante el tiempo necesario para cumplir con las obligaciones legales.</p>
<h2>4. ¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE SUS DATOS?</h2>
<p>La base legal para el tratamiento de sus datos es el consentimiento que usted nos otorga al marcar la casilla de aceptación de la política de privacidad antes de enviar cualquier formulario. Usted tiene derecho a retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
<h2>5. ¿A QUÉ DESTINATARIOS SE COMUNICARÁN SUS DATOS?</h2>
<p>Los datos no se cederán a terceros, salvo obligación legal. Para el servicio de gestión energética, los datos de contacto y la factura podrán ser compartidos con empresas colaboradoras expertas en el sector energético, con el único objetivo de llevar a cabo el análisis y la propuesta de mejora solicitada.</p>
<p>Utilizamos proveedores de servicios tecnológicos como hosting y plataformas de gestión de correo electrónico (basados en Firebase/Google Cloud) que actúan como encargados del tratamiento y que han suscrito los correspondientes contratos de confidencialidad y tratamiento de datos exigidos por la normativa vigente.</p>
<h2>6. ¿CUÁLES SON SUS DERECHOS CUANDO NOS FACILITA SUS DATOS?</h2>
<p>Cualquier persona tiene derecho a obtener confirmación sobre si en Melena Marketing estamos tratando datos personales que les conciernan, o no.</p>
<p>Las personas interesadas tienen derecho a <strong>acceder</strong> a sus datos personales, así como a solicitar la <strong>rectificación</strong> de los datos inexactos o, en su caso, solicitar su <strong>supresión</strong> cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, los interesados podrán solicitar la <strong>limitación del tratamiento</strong> de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. También podrán <strong>oponerse</strong> al tratamiento de sus datos.</p>
<p>Para ejercer sus derechos, puede enviar un correo electrónico a <strong>info@melenamarketing.com</strong>, indicando el derecho que desea ejercer y adjuntando una copia de su DNI o documento identificativo.</p>
<h2>7. POLÍTICA DE COOKIES</h2>
<h3>¿Qué son las cookies?</h3>
<p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
<h3>¿Qué tipos de cookies utiliza esta página web?</h3>
<ul>
  <li><strong>Cookies técnicas:</strong> Son aquéllas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan. Por ejemplo, la que utilizamos para recordar la preferencia de idioma o el consentimiento de cookies.</li>
  <li><strong>Cookies de análisis:</strong> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos (actualmente no utilizamos cookies de análisis de terceros como Google Analytics, pero nos reservamos el derecho a hacerlo en el futuro).</li>
</ul>
<h3>¿Cómo puedo gestionar o desactivar las cookies?</h3>
<p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. A continuación, le ofrecemos enlaces en los que encontrará información sobre cómo puede activar sus preferencias en los principales navegadores:</p>
<ul>
  <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
  <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Internet Explorer / Edge</a></li>
  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
</ul>`,
    collaboration_title: "¿Quieres trabajar o colaborar con nosotros?",
    collaboration_subtitle: "Rellena este formulario y nos pondremos en contacto contigo.",
    collaboration_cta: "Trabaja con nosotros",
    // Energy Promo Section on Home Page
    energy_promo_title: "Ahorra en tu factura de la luz",
    energy_promo_description: "Ofrecemos un servicio gratuito para analizar tu factura energética y ayudarte a pagar menos. Sin costes ni compromiso. Descubre cuánto puedes ahorrar.",
    energy_promo_cta: "Saber más",
    // Energy Page
    energy_form_title: "Mejoramos tu factura energética",
    energy_form_subtitle1: "¿Quieres empezar a ahorrar en tu factura de la luz hoy mismo?",
    energy_form_subtitle2: "¡Agrega tu factura de electricidad ahora y déjanos hacer el trabajo por ti! GRATIS",
    energy_form_more_info: "Más info",
    energy_form_upload_label: "Sube tu Factura aquí +",
    energy_form_phone: "Teléfono",
    energy_form_terms: "Acepto los términos y condiciones, solo utilizaremos tus datos para contactar contigo para la gestión de tu factura energética. <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Términos y condiciones</a>",
    energy_form_validation_error: "Por favor, completa los campos obligatorios y acepta los términos.",
    energy_page_send_success: "¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.",
    energy_page_send_error: "Hubo un error al enviar el formulario. Inténtalo de nuevo.",
    energy_page_content_title: "Ahorra tiempo y dinero: Descubre nuestro servicio gratuito de gestión de factura energética",
    energy_page_content_p1: "Estás cansado de recibir facturas de electricidad cada mes y no tener tiempo para revisarlas? Si es así, sigue leyendo porque tenemos buenas noticias para ti. Melena Marketing en colaboración con el OE (Observatorio Energético), hemos creado un servicio gratuito de gestión de factura energética que te permitirá ahorrar tiempo y dinero.",
    energy_page_content_p2: "Es posible que no te hayas dado cuenta, pero las compañías eléctricas a menudo aplican tarifas que no deberían. Pero no te preocupes, estamos aquí para ayudarte. Con nuestro servicio, no tendrás que preocuparte por revisar tus facturas y comparar tarifas, nosotros lo haremos por ti.",
    energy_page_content_p3: "Además de ahorrar dinero, también tendrás la tranquilidad de saber que estás pagando lo justo por el servicio que recibes. Y lo mejor de todo, es que nuestro servicio es completamente gratuito. Sí, has leído bien, no tendrás que pagar un solo céntimo por utilizarlo.",
    energy_page_content_how_title: "¿Cómo funciona?",
    energy_page_content_how_p1: "Es muy sencillo. Simplemente déjanos tu factura y tu número de teléfono en el <a href=\"#energy-form-section\">siguiente enlace</a>, y nos encargamos de todo por ti. Revisamos tu factura para asegurarnos de que estás pagando el precio mínimo de electricidad que debes pagar. Además, si hay algo que se pueda mejorar, te llamaremos para gestionarlo y asegurarnos de que ahorres en tus facturas de energía.",
    energy_page_content_how_p2: "No pierdas la oportunidad de ahorrar. Si tienes dudas escríbenos a info@melenamarketing.com y comienza a disfrutar de la tranquilidad de saber que estás pagando lo justo por tu servicio de electricidad. Ahora ya no tendrás que preocuparte por revisar tus facturas cada mes y podrás dedicar tu tiempo a las cosas que realmente importan.",
  },
  en: {
    header_slogan: "Boosting SMEs",
    nav_links: { home: "Home", services: "Services", about: "About Us", blog: "Blog", contact: "Contact" },
    hero_title: "Boosting SMEs",
    hero_subtitle: "In the Digital World",
    hero_description: "We are a digital marketing agency specializing in helping small and medium-sized businesses improve their online presence and attract more potential customers.",
    hero_cta: "Request a Quote",
    services_title: "Our Services",
    services_subtitle: "We create custom quotes for each client.<br/>Don't pay a cent more, only for what you need.",
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
        energy_management: "ENERGY BILL MANAGEMENT",
    },
    services_descriptions: {
        graphic_design: "We create impactful visual identities and marketing materials that communicate the essence of your brand, from brochures to digital banners.",
        web_page: "We design and develop modern, fast, and mobile-optimized websites that convert visitors into customers.",
        google_management: "We optimize your Google My Business profile and manage Google Ads campaigns so you're found first in local searches.",
        social_media: "We manage your social media with creative and strategic content to build a loyal community and increase your visibility.",
        logo_brand: "We develop memorable logos and a coherent brand identity that sets you apart from the competition.",
        corp_emails: "We set up professional email addresses with your own domain to project a more serious and trustworthy image to your clients.",
        online_ads: "We create and manage advertising campaigns on social media and Google to reach your target audience and maximize return on investment.",
        translations: "We offer professional translation services in English, Spanish, and Russian so your message can reach a global audience without barriers.",
        press_articles: "We write and manage the publication of press articles to increase your brand's awareness and credibility.",
        online_store: "We build functional and attractive online stores, integrated with secure payment gateways so you can start selling online.",
        signage_design: "We design all types of signage, from signs for your premises to vinyls and advertising banners for events.",
        smart_cards: "Modernize your networking with digital and interactive business cards that your clients can save with a single tap.",
        photo_sessions: "We conduct professional photo shoots of products, teams, or facilities to enhance your company's image.",
        video_reports: "We produce corporate, promotional, and social media videos that tell your story and connect with your audience.",
        energy_management: "",
    },
    service_modal_cta: "Consult on WhatsApp",
    service_modal_whatsapp_text: "Hello, I would like to receive more information about the {service} service.",
    about_title: "Who We Are",
    about_p1: "Melena Marketing is a digital marketing company specializing in helping small and medium-sized businesses improve their online presence and attract more potential customers. We have a team of highly qualified professionals in areas such as <strong>graphic design, web design, digital marketing, and online advertising.</strong>",
    about_p2: "We offer a wide range of personalized services to <strong>adapt to the needs of each of our clients.</strong> From creating a professional website to managing social media, designing posters, and conducting photo shoots, we work hand-in-hand with our clients to help them improve their online presence and achieve their business goals.",
    about_p3: "If you are interested in our services and want to know how we can help your company, do not hesitate to contact us. <strong>We will be delighted to assist you and offer you a tailor-made solution.</strong>",
    projects_title: "Some of Our Sports Projects",
    projects_subtitle: "We are proud to collaborate on top-level events that promote sport and position Marbella as a benchmark destination.",
    projects_list: [
      { 
        title: "SBE Marbella Half Marathon", 
        description: "An iconic event that brings together thousands of runners. We manage communication and marketing to position it as one of the most important half marathons on the Costa del Sol.",
        link: "https://www.run-on.es/sbe-marbella-2025-galer%C3%ADa-oficial"
      },
      { 
        title: "Marbella THE ONE", 
        description: "The most exclusive padel and golf Pro-Am tournament. A luxury event that merges elite sports with top-level networking, attracting personalities and major brands.",
        link: "https://www.showtimeexperience.com/the-one"
      },
      { 
        title: "2025 King's Cup (Beach Volleyball)", 
        description: "Marbella becomes the national capital of beach volleyball. A prestigious tournament that will bring the best players from Spain to our shores, solidifying the city's status as a premier sports destination.",
        link: "https://www.showtimeexperience.com/eventos/copa-del-rey-y-de-la-reina-de-voley-playa"
      },
      {
        title: "Partners of CB Marbella",
        description: "We support the city's main basketball club. We collaborate on their communication and marketing to strengthen their connection with fans and promote grassroots sports in the community.",
        link: "https://www.instagram.com/cbmarbella/"
      },
      {
        title: "The Embassy Basketball Centre",
        description: "We collaborate with The Embassy, the high-performance basketball center in Fuengirola, an international benchmark in training elite players.",
        link: "https://www.theembassytc.com/"
      }
    ],
    blog_title: "From Our Blog",
    blog_subtitle: "Ideas, tips, and strategies for your SME to stand out in the digital world.",
    blog_read_more: "Read more",
    blog_view_all: "View All Articles",
    blog_posts: [
      { 
        title: '5 Local SEO Tips for Shops in Malaga', 
        excerpt: 'Attract more customers from your area by optimizing your presence in local searches. We show you how to start today.',
        content: `<p>In today's competitive market, standing out locally is more important than ever. If you have a physical store in Malaga, local SEO is not an option; it's a necessity. Here are five practical tips to start attracting more customers who are looking for exactly what you offer, right in your neighborhood.</p><h2>1. Claim and Optimize Your Google Business Profile</h2><p>Your Google Business Profile (formerly Google My Business) is your digital storefront in Google searches and on Maps. It's free and is the most powerful tool for local SEO.</p><ul><li><strong>Complete all information:</strong> Ensure your name, address, phone number (NAP), and business hours are correct and consistent everywhere.</li><li><strong>Choose the right categories:</strong> Select the categories that best describe your business.</li><li><strong>Upload high-quality photos:</strong> Showcase your location, products, and team. Photos increase engagement.</li></ul><h2>2. Get Customer Reviews</h2><p>Reviews are a signal of trust for both customers and Google. Encourage your satisfied customers to leave a review. Respond to all reviews, both positive and negative, professionally. This shows that you care about your customers' opinions.</p><h2>3. Optimize Your Website for Local Searches</h2><p>Your website needs to "speak" the local language. Include the name of your city or neighborhood in strategic places:</p><ul><li>In title tags and meta descriptions.</li><li>In headings (H1, H2).</li><li>In the content of your pages, such as the "About Us" or "Contact" page.</li></ul><h2>4. Create Relevant Local Content</h2><p>Blog about local events, news from your neighborhood, or collaborations with other businesses in Malaga. This not only attracts a local audience but also signals to Google that your business is an active part of the community.</p><h2>5. Ensure Consistency of Your Citations (NAP)</h2><p>NAP stands for Name, Address, Phone. It is crucial that this information is identical across all online directories where your business appears (Yellow Pages, Yelp, local directories, etc.). Inconsistency can confuse Google and hurt your ranking.</p><p>By implementing these five tips, you will take a big step toward improving your visibility in local searches and attracting more customers from Malaga to your door.</p>`
      },
      { 
        title: 'How to Use Instagram for Your Restaurant and Fill Tables', 
        excerpt: 'Discover visual and content strategies to turn followers into loyal diners for your hospitality business.',
        content: `<h2>The Power of Visuals in Gastronomy</h2><p>Instagram is a predominantly visual platform, and few industries benefit from this as much as the restaurant business. An appetizing photo can be the trigger a potential customer needs to decide to visit your establishment. It's not just about posting pictures of your dishes, but about telling a story and creating an atmosphere that invites people to live the experience.</p><h3>Practical Tips for Your Instagram Strategy:</h3><ul><li><strong>High-Quality Photography:</strong> Invest in good photos. Natural light is your best ally. You don't need expensive professional equipment; many modern smartphones take incredible pictures. Focus on the details, textures, and colors of your dishes.</li><li><strong>Show the "Behind the Scenes":</strong> People love to see the process. Show your chefs in action, the arrival of fresh produce from the market, or the preparation of a new cocktail. This humanizes your brand and builds trust.</li><li><strong>User-Generated Content (UGC):</strong> Encourage your customers to post photos at your restaurant and tag you. Share their best photos in your stories or on your feed (always ask for permission!). It's the best advertising there is.</li><li><strong>Use Stories for Daily Content:</strong> Instagram Stories are perfect for more ephemeral and casual content. Announce the dish of the day, conduct polls on which dessert your followers prefer, or show the ambiance of your place on a Friday night.</li><li><strong>Collaborate with Local Influencers:</strong> Identify foodies or influencers in your city and invite them to try your menu. A positive review from someone with a loyal local community can attract many new customers.</li></ul><p>Remember that the key is consistency. Post regularly, interact with your followers, and maintain a coherent visual style. You'll soon see your community grow and your tables fill up!</p>`
      },
      { 
        title: 'The Importance of a Professional Logo for Your SME', 
        excerpt: 'Your brand is more than a name. We analyze why a solid visual identity is a crucial investment for success.',
        content: `<h2>Your Logo: The Face of Your Business</h2><p>For a small or medium-sized enterprise (SME), every detail counts when it comes to building a reputation and attracting customers. Often, the logo is the first point of contact a potential customer has with your brand. An amateurish design can convey a lack of professionalism, while a well-designed logo communicates trust, quality, and seriousness from the first glance.</p><h3>Why is it an Investment, Not an Expense?</h3><ul><li><strong>Creates a Memorable First Impression:</strong> You have only a few seconds to capture attention. A professional logo is memorable and helps customers remember your business over the competition.</li><li><strong>Differentiates You from the Competition:</strong> In a saturated market, a unique logo helps you stand out. It reflects the personality of your business and what makes you special.</li><li><strong>Fosters Brand Loyalty:</strong> As your business grows, your logo becomes a familiar symbol to your customers. People are drawn to what they know and trust. A consistent logo across all your materials (website, business cards, social media) reinforces that trust.</li><li><strong>Communicates Professionalism and Trust:</strong> A well-designed logo suggests that you take your business seriously. This is especially important for new companies that need to build their credibility from scratch.</li></ul><p>Think about the big brands you admire. Their logo is instantly recognizable and evokes emotions and expectations. Although your SME may not be a multinational corporation, the principle is the same. Investing in a professional logo is investing in the future and perception of your brand. It is a fundamental piece in building a successful and lasting business.</p>`
      },
      {
        title: 'Step-by-Step Guide: How to Edit Roles on Your Facebook Page (2025 Version)',
        excerpt: 'Managing your Facebook Page permissions is key for security. Learn how to edit roles with our 2025 guide, using both Facebook and the Meta Business Suite.',
        content: `<p>Managing who has access to your Facebook Page and what they can do is essential for your team's security and efficiency. With the platform's constant updates, the process has changed slightly, becoming more integrated with the Meta Business Suite.</p><p>This updated guide will show you, step-by-step, how to edit roles and permissions on your Facebook Page so you can delegate tasks without losing control.</p><h2>Understanding the New Roles on Facebook</h2><p>Before you begin, it's important to understand Facebook's new permission structure, which moves away from traditional roles (Admin, Editor, etc.) to offer more granular control:</p><ul class="list-disc list-inside space-y-2"><li><strong>Facebook access with full control:</strong> This is the highest level, equivalent to the old "Admin" role. The person can manage everything, including assigning roles, deleting the page, and managing permissions.</li><li><strong>Facebook access with partial control:</strong> This allows users to manage specific tasks like creating content, reviewing insights, managing messages and comments, or creating ads, but without access to critical page settings.</li></ul><h2>Option 1: Edit Roles from the Facebook Page Experience</h2><p>If you manage your page directly from the Facebook interface, follow these steps:</p><h3>Step 1: Access Your Page Settings</h3><ol class="list-decimal list-inside space-y-2"><li>Open Facebook in your browser and log in.</li><li>Click on your profile picture in the top-right corner to switch to your page profile.</li><li>Once on your page, click again on the page's profile picture in the top-right corner.</li><li>In the dropdown menu, select "Settings & privacy" and then click "Settings".</li></ol><h3>Step 2: Go to "New Pages Experience"</h3><ol class="list-decimal list-inside space-y-2"><li>In the left-hand settings menu, find and select the "New Pages Experience" option.</li></ol><h3>Step 3: Manage Access</h3><p>Here you will see a list of people who have access to your page.</p><p><strong>To add a new person:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Click the "Add New" button next to "People with Facebook access".</li><li>Search for the person by name or email.</li><li>Decide if you want to grant them "Full control". If you enable this option, they will have the same permissions as you. If you don't, they will have partial control that you can configure.</li><li>Click "Grant Access" and enter your password to confirm.</li></ol><p><strong>To edit or remove an existing person:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Click the three dots next to the name of the person you want to modify.</li><li>Select "Change access level" to modify their permissions or "Remove access" to take away all permissions.</li><li>Follow the prompts and confirm with your password if necessary.</li></ol><h2>Option 2: Edit Roles from Meta Business Suite</h2><p>If you use Meta Business Suite to manage your Facebook and Instagram assets, the process is more centralized.</p><h3>Step 1: Access Business Settings</h3><ol class="list-decimal list-inside space-y-2"><li>Go to <a href="https://business.facebook.com/settings" target="_blank" rel="noopener noreferrer">business.facebook.com/settings</a>.</li><li>In the left-hand menu, click the "Settings" gear icon.</li><li>On the next screen, within the "Business settings" column, select "People".</li></ol><h3>Step 2: Manage People and Assets</h3><p>You will see a list of all people added to your business account.</p><p><strong>To add a new person:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Click the blue "Add people" button.</li><li>Enter their business email address.</li><li>Assign the access you want (employee or business admin).</li><li>In the next step, you can assign access to specific assets. Select your Facebook Page from the list.</li><li>On the right side, toggle the switches for the tasks they will be able to perform (Content, Messages, Ads, etc.). If you want them to have full control over the page, enable the "Manage Page" option.</li><li>Click "Invite". The person will receive an invitation via email.</li></ol><p><strong>To edit an existing person's permissions:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Select the person's name from the list.</li><li>On the right, you will see a list of the assets they have access to (pages, Instagram accounts, etc.).</li><li>Click on your Facebook Page.</li><li>Modify the permissions by toggling the specific tasks on or off.</li><li>To completely remove access to the page, click the trash can icon next to the page name.</li></ol><p>Keeping your page roles organized and up-to-date is an essential practice to protect your online presence and ensure your team can work smoothly and securely. Review these permissions periodically, especially when there are changes in your team.</p>`
      },
      {
        title: 'Save Time and Money: Discover Our Free Energy Bill Management Service',
        excerpt: 'Are you overpaying on your electricity bill? We explain how our free service analyzes your bill and helps you save with no cost or commitment.',
        content: `<h2>Are You Sure You're Not Overpaying on Your Electricity Bill?</h2><p>Every month you receive an electricity bill and, let's be honest, most of the time we pay it without reading the fine print. The problem is that, often, utility companies apply rates they shouldn't or there are more affordable options we don't know about. This translates into unnecessary expense that can add up to a considerable amount by the end of the year.</p><p>At Melena Marketing, in collaboration with the Energy Observatory (OE), we have launched a service designed to solve this problem once and for all.</p><h2>A Free Service to Optimize Your Spending</h2><p>We offer a <strong>completely free service</strong> for managing and analyzing your energy bill. Our goal is simple: to make sure you pay what's fair and help you save time and money. No hidden costs or commitments.</p><h3>How does it work? It's very simple:</h3><ol class="list-decimal list-inside space-y-2"><li><strong>You send us your bill:</strong> Simply upload a copy of your latest electricity bill through our secure form.</li><li><strong>We analyze it for you:</strong> Our team of experts will review every detail to ensure you're paying the minimum price you should be.</li><li><strong>We contact you with improvements:</strong> If we detect any opportunity for savings or improvement, we will get in touch with you to manage the changes and ensure your next bills are lower.</li></ol><h2>Take Control of Your Bill Today</h2><p>Don't miss the opportunity to reduce your expenses. Spend your time and money on what really matters. Our service is transparent, easy, and, most importantly, free.</p><p>Ready to start saving? Click the link below, leave us your bill and phone number, and we'll take care of the rest.</p><p class="not-prose text-center mt-8"><a href="/gestion-de-tu-factura-energetica" class="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-500 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">I Want to Save on My Bill</a></p><p>If you have any questions, don't hesitate to write to us at <strong>info@melenamarketing.com</strong>. We're here to help!</p>`
      },
    ],
    contact_title: "Let's Talk About Your Project",
    contact_subtitle: "Fill out the form or contact us directly. We are ready to hear your ideas and boost your business.",
    contact_info_title: "Contact Information",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_message: "Tell us about your project",
    contact_form_submit: "Send",
    contact_form_sending: "Sending...",
    contact_form_terms: "I have read and accept the <a href=\"/terminos-y-condiciones\" class=\"underline hover:text-blue-700\">Terms and Conditions</a> and the <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Privacy Policy</a>.",
    contact_form_validation_error: "Please fill in all required fields and accept the terms.",
    contact_whatsapp: "Contact via WhatsApp",
    footer_copyright: "Melena Marketing. All rights reserved.",
    footer_terms: "Terms and Conditions",
    footer_privacy_policy: "Privacy Policy",
    cookie_message: "We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.",
    cookie_accept: "Accept",
    cookie_learn_more: "Learn more",
    terms_content: `<h2>1. IDENTIFICATION DATA</h2>
<p>In compliance with the duty of information set out in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce, the following data is provided: the owner of the web domain is Melena Marketing (hereinafter Melena Marketing), with its address for these purposes in Marbella, Malaga, Spain. Contact email: info@melenamarketing.com of the website.</p>
<h2>2. USERS</h2>
<p>Access and/or use of this Melena Marketing portal attributes the condition of USER, who accepts, from said access and/or use, the General Conditions of Use reflected here. The aforementioned Conditions will be applicable regardless of the General Contracting Conditions that may be mandatory.</p>
<h2>3. USE OF THE PORTAL</h2>
<p>melenamarketing.com provides access to a multitude of information, services, programs, or data (hereinafter, "the content") on the Internet belonging to Melena Marketing or its licensors to which the USER may have access. The USER assumes responsibility for the use of the portal. This responsibility extends to the registration that may be necessary to access certain services or content.</p>
<p>The USER agrees to make appropriate use of the content and services that Melena Marketing offers through its portal and, by way of example but not limitation, not to use them to (i) engage in illicit, illegal or contrary to good faith and public order activities; (ii) disseminate content or propaganda of a racist, xenophobic, pornographic-illegal nature, in apology of terrorism or that violates human rights; (iii) cause damage to the physical and logical systems of Melena Marketing, its suppliers or third parties, introduce or spread computer viruses or any other physical or logical systems that are likely to cause the aforementioned damage.</p>
<h2>4. INTELLECTUAL AND INDUSTRIAL PROPERTY</h2>
<p>Melena Marketing, by itself or as an assignee, is the owner of all intellectual and industrial property rights of its website, as well as the elements contained therein (by way of example, images, sound, audio, video, software or texts; trademarks or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access and use, etc.), owned by Melena Marketing or its licensors.</p>
<p>All rights reserved. By virtue of the provisions of articles 8 and 32.1, second paragraph, of the Intellectual Property Law, the reproduction, distribution and public communication, including its method of making available, of all or part of the contents of this website, for commercial purposes, on any support and by any technical means, without the authorization of Melena Marketing, are expressly prohibited.</p>
<h2>5. EXCLUSION OF GUARANTEES AND LIABILITY</h2>
<p>Melena Marketing is not responsible, in any case, for damages of any kind that may cause, by way of example: errors or omissions in the content, lack of availability of the portal or the transmission of viruses or malicious or harmful programs in the content, despite having adopted all the necessary technological measures to avoid it.</p>
<h2>6. MODIFICATIONS</h2>
<p>Melena Marketing reserves the right to make the modifications it deems appropriate to its portal without prior notice, being able to change, delete or add both the content and services provided through it and the way in which they are presented or located on its portal.</p>
<h2>7. LINKS</h2>
<p>In the event that melenamarketing.com contains links or hyperlinks to other Internet sites, Melena Marketing will not exercise any type of control over said sites and content. In no case will Melena Marketing assume any responsibility for the contents of any link belonging to a third-party website, nor will it guarantee the technical availability, quality, reliability, accuracy, breadth, veracity, validity and constitutionality of any material or information contained in any of said hyperlinks or other Internet sites.</p>
<h2>8. RIGHT OF EXCLUSION</h2>
<p>Melena Marketing reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, at its own request or that of a third party, to those users who violate these General Conditions of Use.</p>
<h2>9. APPLICABLE LEGISLATION AND JURISDICTION</h2>
<p>The relationship between Melena Marketing and the USER will be governed by current Spanish regulations and any controversy will be submitted to the Courts and tribunals of the city of Malaga.</p>`,
    privacy_content: `<h2>1. DATA CONTROLLER</h2>
<p><strong>Identity:</strong> Melena Marketing<br><strong>Email:</strong> info@melenamarketing.com<br><strong>Activity:</strong> Digital Marketing Services</p>
<h2>2. FOR WHAT PURPOSE DO WE PROCESS YOUR PERSONAL DATA?</h2>
<p>At Melena Marketing, we process the information provided by interested parties to manage information requests, inquiries, and the provision of contracted services. The main purposes are:</p>
<ul>
  <li><strong>Contact Form:</strong> To address and manage inquiries or information requests received through the contact form. The basis for legitimacy is the user's express consent by checking the acceptance box and submitting the form.</li>
  <li><strong>Energy Management Form:</strong> To collect the user's contact details and energy bill to analyze it and contact them to propose improvements and savings. The basis for legitimacy is the user's express consent. By requesting this service, the user understands that their data may be shared with collaborating companies in the energy sector for the sole purpose of carrying out the requested study and management.</li>
</ul>
<p>No automated decisions will be made based on the data provided.</p>
<h2>3. HOW LONG WILL WE KEEP YOUR DATA?</h2>
<p>The personal data provided will be kept as long as the relationship with the interested party is maintained or its deletion is not requested. They will be kept for the time necessary to comply with legal obligations.</p>
<h2>4. WHAT IS THE LEGITIMACY FOR THE PROCESSING OF YOUR DATA?</h2>
<p>The legal basis for processing your data is the consent you give us by checking the privacy policy acceptance box before submitting any form. You have the right to withdraw your consent at any time without affecting the legality of the processing based on the consent prior to its withdrawal.</p>
<h2>5. TO WHICH RECIPIENTS WILL YOUR DATA BE COMMUNICATED?</h2>
<p>The data will not be transferred to third parties, except for legal obligations. For the energy management service, contact details and the bill may be shared with expert collaborating companies in the energy sector, with the sole objective of carrying out the analysis and improvement proposal requested.</p>
<p>We use technology service providers such as hosting and email management platforms (based on Firebase/Google Cloud) that act as data processors and have signed the corresponding confidentiality and data processing contracts required by current regulations.</p>
<h2>6. WHAT ARE YOUR RIGHTS WHEN YOU PROVIDE US WITH YOUR DATA?</h2>
<p>Anyone has the right to obtain confirmation as to whether or not Melena Marketing is processing personal data concerning them.</p>
<p>Interested parties have the right to <strong>access</strong> their personal data, as well as to request the <strong>rectification</strong> of inaccurate data or, where appropriate, request its <strong>deletion</strong> when, among other reasons, the data is no longer necessary for the purposes for which it was collected. In certain circumstances, interested parties may request the <strong>limitation of the processing</strong> of their data, in which case we will only keep them for the exercise or defense of claims. They may also <strong>object</strong> to the processing of their data.</p>
<p>To exercise your rights, you can send an email to <strong>info@melenamarketing.com</strong>, indicating the right you wish to exercise and attaching a copy of your ID or identification document.</p>
<h2>7. COOKIE POLICY</h2>
<h3>What are cookies?</h3>
<p>A cookie is a file that is downloaded to your computer when you access certain web pages. Cookies allow a web page, among other things, to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information they contain and the way you use your equipment, they can be used to recognize the user.</p>
<h3>What types of cookies does this website use?</h3>
<ul>
  <li><strong>Technical cookies:</strong> These are those that allow the user to navigate through a web page and use the different options or services that exist on it. For example, the one we use to remember language preference or cookie consent.</li>
  <li><strong>Analysis cookies:</strong> These are those that, whether processed by us or by third parties, allow us to quantify the number of users and thus carry out the measurement and statistical analysis of the use made by users of the service offered. For this, your browsing on our website is analyzed in order to improve the range of products or services that we offer (we do not currently use third-party analysis cookies such as Google Analytics, but we reserve the right to do so in the future).</li>
</ul>
<h3>How can I manage or disable cookies?</h3>
<p>You can allow, block or delete the cookies installed on your computer by configuring the browser options installed on your computer. Below, we provide links where you will find information on how you can activate your preferences in the main browsers:</p>
<ul>
  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
  <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
  <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Internet Explorer / Edge</a></li>
  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
</ul>`,
    collaboration_title: "Want to work or collaborate with us?",
    collaboration_subtitle: "Fill out this form and we will get in touch with you.",
    collaboration_cta: "Work with us",
    // Energy Promo Section on Home Page
    energy_promo_title: "Save on Your Electricity Bill",
    energy_promo_description: "We offer a free service to analyze your energy bill and help you pay less. No costs, no commitment. Find out how much you can save.",
    energy_promo_cta: "Learn More",
    // Energy Page
    energy_form_title: "We improve your energy bill",
    energy_form_subtitle1: "Do you want to start saving on your electricity bill today?",
    energy_form_subtitle2: "Upload your electricity bill now and let us do the work for you! FREE",
    energy_form_more_info: "More info",
    energy_form_upload_label: "Upload your bill here +",
    energy_form_phone: "Phone",
    energy_form_terms: "I accept the terms and conditions; we will only use your data to contact you for the management of your energy bill. <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Terms and conditions</a>",
    energy_form_validation_error: "Please fill in the required fields and accept the terms.",
    energy_page_send_success: "Form submitted successfully! We will contact you soon.",
    energy_page_send_error: "There was an error sending the form. Please try again.",
    energy_page_content_title: "Save time and money: Discover our free energy bill management service",
    energy_page_content_p1: "Are you tired of receiving electricity bills every month and not having time to review them? If so, keep reading because we have good news for you. Melena Marketing, in collaboration with OE (Observatorio Energético), has created a free energy bill management service that will allow you to save time and money.",
    energy_page_content_p2: "You may not have realized it, but electricity companies often include incorrect or unjustified charges. But don't worry, we're here to help. With our service, you won't have to worry about reviewing your bills and comparing rates; we'll do it for you.",
    energy_page_content_p3: "In addition to saving money, you'll also have the peace of mind of knowing you're paying the right amount for the service you receive. And best of all, our service is completely free. Yes, you read that right, you won't have to pay a single cent to use it.",
    energy_page_content_how_title: "How does it work?",
    energy_page_content_how_p1: "It's very simple. Just leave us your bill and your phone number in the <a href=\"#energy-form-section\">form above</a>, and we'll take care of everything for you. We review your bill to make sure you are paying the minimum price for electricity that you should be paying. Furthermore, if there's anything that can be improved, we'll call you to manage it and ensure you save on your energy bills.",
    energy_page_content_how_p2: "Don't miss the opportunity to save. If you have any questions, write to us at info@melenamarketing.com and start enjoying the peace of mind of knowing you're paying the right price for your electricity service. Now you will no longer have to worry about reviewing your bills every month and can dedicate your time to the things that really matter.",
  },
  ru: {
    header_slogan: "Продвижение МСП",
    nav_links: { home: "Главная", services: "Услуги", about: "О нас", blog: "Блог", contact: "Контакты" },
    hero_title: "Продвижение МСП",
    hero_subtitle: "В цифровом мире",
    hero_description: "Мы — агентство цифрового маркетинга, специализирующееся на помощи малым и средним предприятиям в улучшении их онлайн-присутствия и привлечении большего числа потенциальных клиентов.",
    hero_cta: "Запросить расчет",
    services_title: "Наши услуги",
    services_subtitle: "Мы составляем индивидуальные сметы для каждого клиента.<br/>Не переплачивайте, платите только за то, что вам нужно.",
    services: {
        graphic_design: "ГРАФИЧЕСКИЙ ДИЗАЙН",
        web_page: "ВЕБ-САЙТ",
        google_management: "УПРАВЛЕНИЕ GOOGLE",
        social_media: "СОЦИАЛЬНЫЕ СЕТИ",
        logo_brand: "ЛОГОТИП И БРЕНД",
        corp_emails: "КОРПОРАТИВНЫЕ EMAIL",
        online_ads: "ОНЛАЙН-РЕКЛАМА",
        translations: "ПЕРЕВОДЫ: АНГЛИЙСКИЙ, ИСПАНСКИЙ, РУССКИЙ",
        press_articles: "СТАТЬИ В ПРЕССЕ",
        online_store: "ИНТЕРНЕТ-МАГАЗИН",
        signage_design: "ДИЗАЙН ВЫВЕСОК",
        smart_cards: "УМНЫЕ ВИЗИТКИ",
        photo_sessions: "ФОТОСЕССИИ",
        video_reports: "ВИДЕОРЕПОРТАЖИ",
        energy_management: "УПРАВЛЕНИЕ СЧЕТАМИ ЗА ЭНЕРГИЮ",
    },
    services_descriptions: {
        graphic_design: "Мы создаем впечатляющие визуальные идентичности и маркетинговые материалы, которые передают суть вашего бренда, от брошюр до цифровых баннеров.",
        web_page: "Мы проектируем и разрабатываем современные, быстрые и оптимизированные для мобильных устройств веб-сайты, которые превращают посетителей в клиентов.",
        google_management: "Мы оптимизируем ваш профиль Google My Business и управляем кампаниями Google Ads, чтобы вас находили первыми в локальном поиске.",
        social_media: "Мы управляем вашими социальными сетями с помощью креативного и стратегического контента, чтобы создать лояльное сообщество и повысить вашу узнаваемость.",
        logo_brand: "Мы разрабатываем запоминающиеся логотипы и последовательную идентичность бренда, которая выделит вас среди конкурентов.",
        corp_emails: "Мы настраиваем профессиональные адреса электронной почты с вашим собственным доменом, чтобы создать более серьезный и надежный имидж у ваших клиентов.",
        online_ads: "Мы создаем и управляем рекламными кампаниями в социальных сетях и Google, чтобы достичь вашей целевой аудитории и максимизировать возврат инвестиций.",
        translations: "Мы предлагаем профессиональные услуги перевода на английский, испанский и русский языки, чтобы ваше сообщение достигало глобальной аудитории без барьеров.",
        press_articles: "Мы пишем и управляем публикацией статей в прессе для повышения узнаваемости и авторитета вашего бренда.",
        online_store: "Мы создаем функциональные и привлекательные интернет-магазины, интегрированные с безопасными платежными шлюзами, чтобы вы могли начать продавать онлайн.",
        signage_design: "Мы разрабатываем все виды вывесок, от вывесок для вашего заведения до виниловых наклеек и рекламных баннеров для мероприятий.",
        smart_cards: "Модернизируйте свой нетворкинг с помощью цифровых и интерактивных визитных карточек, которые ваши клиенты могут сохранить одним касанием.",
        photo_sessions: "Мы проводим профессиональные фотосессии продуктов, команды или помещений для улучшения имиджа вашей компании.",
        video_reports: "Мы производим корпоративные, рекламные и видео для социальных сетей, которые рассказывают вашу историю и находят отклик у вашей аудитории.",
        energy_management: "",
    },
    service_modal_cta: "Связаться по WhatsApp",
    service_modal_whatsapp_text: "Здравствуйте, я хотел бы получить больше информации об услуге {service}.",
    about_title: "Кто мы",
    about_p1: "Melena Marketing — это компания цифрового маркетинга, специализирующаяся на помощи малым и средним предприятиям в улучшении их онлайн-присутствия и привлечении большего числа потенциальных клиентов. У нас есть команда высококвалифицированных профессионалов в таких областях, как <strong>графический дизайн, веб-дизайн, цифровой маркетинг и онлайн-реклама.</strong>",
    about_p2: "Мы предлагаем широкий спектр персонализированных услуг, чтобы <strong>адаптироваться к потребностям каждого из наших клиентов.</strong> От создания профессионального веб-сайта до управления социальными сетями, разработки плакатов и проведения фотосессий — мы работаем рука об руку с нашими клиентами, чтобы помочь им улучшить свое онлайн-присутствие и достичь своих бизнес-целей.",
    about_p3: "Если вы заинтересованы в наших услугах и хотите узнать, как мы можем помочь вашей компании, не стесняйтесь обращаться к нам. <strong>Мы будем рады помочь вам и предложить индивидуальное решение.</strong>",
    projects_title: "Некоторые из наших спортивных проектов",
    projects_subtitle: "Мы гордимся сотрудничеством в проведении мероприятий высшего уровня, которые продвигают спорт и позиционируют Марбелью как эталонное направление.",
    projects_list: [
      { 
        title: "SBE Полумарафон Марбельи", 
        description: "Знаковое событие, собирающее тысячи бегунов. Мы управляем коммуникациями и маркетингом, чтобы позиционировать его как один из самых важных полумарафонов на Коста-дель-Соль.",
        link: "https://www.run-on.es/sbe-marbella-2025-galer%C3%ADa-oficial"
      },
      { 
        title: "Marbella THE ONE", 
        description: "Самый эксклюзивный турнир Pro-Am по паделу и гольфу. Роскошное мероприятие, сочетающее элитный спорт с нетворкингом на высшем уровне, привлекающее знаменитостей и крупные бренды.",
        link: "https://www.showtimeexperience.com/the-one"
      },
      { 
        title: "Кубок Испании по пляжному волейболу 2025", 
        description: "Марбелья становится национальной столицей пляжного волейбола. Престижный турнир, который соберет лучших игроков Испании, укрепляя город как первоклассное спортивное направление.",
        link: "https://www.showtimeexperience.com/eventos/copa-del-rey-y-de-la-reina-de-voley-playa"
      },
      {
        title: "Партнеры КБ Марбелья",
        description: "Мы поддерживаем главный баскетбольный клуб города. Мы сотрудничаем в их коммуникациях и маркетинге, чтобы укрепить связь с болельщиками и продвигать массовый спорт.",
        link: "https://www.instagram.com/cbmarbella/"
      },
      {
        title: "Баскетбольный центр The Embassy",
        description: "Мы сотрудничаем с The Embassy, центром высокоэффективной подготовки по баскетболу в Фуэнхироле, международным эталоном в обучении элитных игроков.",
        link: "https://www.theembassytc.com/"
      }
    ],
    blog_title: "Из нашего блога",
    blog_subtitle: "Идеи, советы и стратегии, чтобы ваше МСП выделялось в цифровом мире.",
    blog_read_more: "Читать далее",
    blog_view_all: "Посмотреть все статьи",
    blog_posts: [
      { 
        title: '5 советов по локальному SEO для магазинов в Малаге', 
        excerpt: 'Привлекайте больше клиентов из вашего района, оптимизируя ваше присутствие в локальном поиске. Мы покажем, как начать уже сегодня.',
        content: `<p>На сегодняшнем конкурентном рынке выделиться на местном уровне важнее, чем когда-либо. Если у вас есть физический магазин в Малаге, локальное SEO — это не опция, а необходимость. Вот пять практических советов, чтобы начать привлекать больше клиентов, которые ищут именно то, что вы предлагаете, прямо в вашем районе.</p><h2>1. Заявите права и оптимизируйте свой профиль в Google Business</h2><p>Ваш профиль в Google Business (ранее Google My Business) — это ваша цифровая витрина в поиске Google и на Картах. Это бесплатно и является самым мощным инструментом для локального SEO.</p><ul><li><strong>Заполните всю информацию:</strong> Убедитесь, что ваше название, адрес, номер телефона (NAP) и часы работы верны и последовательны везде.</li><li><strong>Выберите правильные категории:</strong> Выберите категории, которые лучше всего описывают ваш бизнес.</li><li><strong>Загрузите высококачественные фотографии:</strong> Покажите ваше место, ваши товары и вашу команду. Фотографии увеличивают вовлеченность.</li></ul><h2>2. Получайте отзывы клиентов</h2><p>Отзывы являются сигналом доверия как для клиентов, так и для Google. Поощряйте своих довольных клиентов оставлять отзывы. Отвечайте на все отзывы, как положительные, так и отрицательные, профессионально. Это показывает, что вы заботитесь о мнении своих клиентов.</p><h2>3. Оптимизируйте свой веб-сайт для локального поиска</h2><p>Ваш сайт должен «говорить» на местном языке. Включите название вашего города или района в стратегически важных местах:</p><ul><li>В тегах заголовков (Title tags) и мета-описаниях.</li><li>В заголовках (H1, H2).</li><li>В содержании ваших страниц, например, на странице «О нас» или «Контакты».</li></ul><h2>4. Создавайте релевантный местный контент</h2><p>Пишите в блоге о местных событиях, новостях вашего района или сотрудничестве с другими бизнесами в Малаге. Это не только привлекает местную аудиторию, но и сигнализирует Google, что ваш бизнес является активной частью сообщества.</p><h2>5. Обеспечьте согласованность ваших цитирований (NAP)</h2><p>NAP — это аббревиатура от Name, Address, Phone (Название, Адрес, Телефон). Крайне важно, чтобы эта информация была идентичной во всех онлайн-каталогах, где появляется ваш бизнес (Желтые страницы, Yelp, местные каталоги и т.д.). Несоответствие может сбить с толку Google и повредить вашему рейтингу.</p><p>Применив эти пять советов, вы сделаете большой шаг к улучшению своей видимости в локальном поиске и привлечению большего числа клиентов из Малаги к вашим дверям.</p>`
      },
      { 
        title: 'Как использовать Instagram для вашего ресторана и заполнить столы', 
        excerpt: 'Откройте для себя визуальные и контентные стратегии, чтобы превратить подписчиков в постоянных посетителей вашего заведения.',
        content: `<h2>Сила визуального в гастрономии</h2><p>Instagram — это преимущественно визуальная платформа, и немногие отрасли извлекают из этого столько пользы, сколько ресторанный бизнес. Аппетитная фотография может стать тем толчком, который нужен потенциальному клиенту, чтобы решиться посетить ваше заведение. Речь идет не только о публикации фотографий ваших блюд, но и о том, чтобы рассказать историю и создать атмосферу, которая приглашает людей пережить этот опыт.</p><h3>Практические советы для вашей стратегии в Instagram:</h3><ul><li><strong>Высококачественная фотография:</strong> Инвестируйте в хорошие фотографии. Естественный свет — ваш лучший союзник. Вам не нужно дорогое профессиональное оборудование; многие современные смартфоны делают невероятные снимки. Сосредоточьтесь на деталях, текстурах и цветах ваших блюд.</li><li><strong>Покажите «закулисье»:</strong> Людям нравится видеть процесс. Покажите своих поваров в действии, прибытие свежих продуктов с рынка или приготовление нового коктейля. Это очеловечивает ваш бренд и вызывает доверие.</li><li><strong>Пользовательский контент (UGC):</strong> Поощряйте своих клиентов публиковать фотографии в вашем ресторане и отмечать вас. Делитесь их лучшими фотографиями в своих историях или в ленте (всегда спрашивая разрешения!). Это лучшая реклама, которая только может быть.</li><li><strong>Используйте истории для повседневного контента:</strong> Истории в Instagram идеально подходят для более эфемерного и непринужденного контента. Анонсируйте блюдо дня, проводите опросы о том, какой десерт предпочитают ваши подписчики, или показывайте атмосферу вашего заведения в пятничный вечер.</li><li><strong>Сотрудничайте с местными инфлюенсерами:</strong> Найдите фуд-блогеров или инфлюенсеров в вашем городе и пригласите их попробовать ваше меню. Положительный отзыв от кого-то с верной местной аудиторией может привлечь много новых клиентов.</li></ul><p>Помните, что ключ к успеху — это последовательность. Публикуйте регулярно, взаимодействуйте со своими подписчиками и поддерживайте единый визуальный стиль. Вскоре вы увидите, как растет ваше сообщество и заполняются ваши столы!</p>`
      },
      { 
        title: 'Важность профессионального логотипа для вашего МСП', 
        excerpt: 'Ваш бренд — это больше, чем просто название. Мы анализируем, почему сильная визуальная идентичность — это ключевая инвестиция в успех.',
        content: `<h2>Ваш логотип: лицо вашего бизнеса</h2><p>Для малого или среднего предприятия (МСП) каждая деталь имеет значение при построении репутации и привлечении клиентов. Часто логотип является первой точкой контакта потенциального клиента с вашим брендом. Любительский дизайн может передавать непрофессионализм, в то время как хорошо разработанный логотип с первого взгляда сообщает о доверии, качестве и серьезности.</p><h3>Почему это инвестиция, а не расход?</h3><ul><li><strong>Создает запоминающееся первое впечатление:</strong> У вас есть всего несколько секунд, чтобы привлечь внимание. Профессиональный логотип запоминается и помогает клиентам помнить ваш бизнес среди конкурентов.</li><li><strong>Отличает вас от конкурентов:</strong> На насыщенном рынке уникальный логотип помогает вам выделиться. Он отражает индивидуальность вашего бизнеса и то, что делает вас особенным.</li><li><strong>Способствует лояльности к бренду:</strong> По мере роста вашего бизнеса ваш логотип становится знакомым символом для ваших клиентов. Людей привлекает то, что они знают и чему доверяют. Последовательный логотип на всех ваших материалах (веб-сайт, визитки, социальные сети) укрепляет это доверие.</li><li><strong>Сообщает о профессионализме и доверии:</strong> Хорошо разработанный логотип предполагает, что вы серьезно относитесь к своему бизнесу. Это особенно важно для новых компаний, которым необходимо с нуля создавать свой авторитет.</li></ul><p>Подумайте о крупных брендах, которыми вы восхищаетесь. Их логотип мгновенно узнаваем и вызывает эмоции и ожидания. Хотя ваше МСП, возможно, не является многонациональной корпорацией, принцип тот же. Инвестирование в профессиональный логотип — это инвестирование в будущее и восприятие вашего бренда. Это фундаментальная часть построения успешного и долговечного бизнеса.</p>`
      },
      {
        title: 'Пошаговое руководство: Как редактировать роли на вашей странице Facebook (версия 2025 года)',
        excerpt: 'Управление разрешениями на странице Facebook — ключ к безопасности. Узнайте, как редактировать роли с нашим руководством 2025 года, используя как Facebook, так и Meta Business Suite.',
        content: `<p>Управление тем, кто имеет доступ к вашей странице Facebook и что они могут делать, является основой безопасности и эффективности вашей команды. С постоянными обновлениями платформы процесс немного изменился, став более интегрированным с Meta Business Suite.</p><p>Это обновленное руководство покажет вам, шаг за шагом, как редактировать роли и разрешения на вашей странице Facebook, чтобы вы могли делегировать задачи, не теряя контроля.</p><h2>Понимание новых ролей в Facebook</h2><p>Прежде чем начать, важно понять новую структуру разрешений Facebook, которая отходит от традиционных ролей (администратор, редактор и т.д.) и предлагает более детальный контроль:</p><ul class="list-disc list-inside space-y-2"><li><strong>Доступ к Facebook с полным контролем:</strong> Это самый высокий уровень, эквивалентный старой роли «Администратор». Человек может управлять всем, включая назначение ролей, удаление страницы и управление разрешениями.</li><li><strong>Доступ к Facebook с частичным контролем:</strong> Позволяет пользователям управлять конкретными задачами, такими как создание контента, просмотр статистики, управление сообщениями и комментариями или создание рекламы, но без доступа к критически важным настройкам страницы.</li></ul><h2>Вариант 1: Редактирование ролей через интерфейс страниц Facebook</h2><p>Если вы управляете своей страницей непосредственно из интерфейса Facebook, выполните следующие действия:</p><h3>Шаг 1: Доступ к настройкам вашей страницы</h3><ol class="list-decimal list-inside space-y-2"><li>Откройте Facebook в браузере и войдите в систему.</li><li>Нажмите на фото своего профиля в правом верхнем углу, чтобы переключиться на профиль вашей страницы.</li><li>Находясь на своей странице, снова нажмите на фото профиля страницы в правом верхнем углу.</li><li>В выпадающем меню выберите «Настройки и конфиденциальность», а затем нажмите «Настройки».</li></ol><h3>Шаг 2: Перейдите в «Новый интерфейс для страниц»</h3><ol class="list-decimal list-inside space-y-2"><li>В меню настроек слева найдите и выберите опцию «Новый интерфейс для страниц».</li></ol><h3>Шаг 3: Управление доступом</h3><p>Здесь вы увидите список людей, имеющих доступ к вашей странице.</p><p><strong>Чтобы добавить нового человека:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Нажмите кнопку «Добавить» рядом с «Люди с доступом к Facebook».</li><li>Найдите человека по имени или адресу электронной почты.</li><li>Решите, хотите ли вы предоставить ему «Полный контроль». Если вы включите эту опцию, у него будут те же разрешения, что и у вас. Если нет, у него будет частичный контроль, который вы сможете настроить.</li><li>Нажмите «Предоставить доступ» и введите свой пароль для подтверждения.</li></ol><p><strong>Чтобы отредактировать или удалить существующего человека:</strong></p<ol class="list-decimal list-inside space-y-2"><li>Нажмите на три точки рядом с именем человека, которого вы хотите изменить.</li><li>Выберите «Изменить уровень доступа», чтобы изменить его разрешения, или «Удалить доступ», чтобы отозвать все разрешения.</li><li>Следуйте инструкциям и при необходимости подтвердите своим паролем.</li></ol><h2>Вариант 2: Редактирование ролей из Meta Business Suite</h2><p>Если вы используете Meta Business Suite для управления своими активами в Facebook и Instagram, процесс более централизован.</p><h3>Шаг 1: Доступ к настройкам компании</h3><ol class="list-decimal list-inside space-y-2"><li>Перейдите по адресу <a href="https://business.facebook.com/settings" target="_blank" rel="noopener noreferrer">business.facebook.com/settings</a>.</li><li>В меню слева нажмите на значок шестеренки «Настройки».</li><li>На следующем экране в столбце «Настройки компании» выберите «Люди».</li></ol><h3>Шаг 2: Управление людьми и активами</h3><p>Вы увидите список всех людей, добавленных в ваш бизнес-аккаунт.</p><p><strong>Чтобы добавить нового человека:</strong></p><ol class="list-decimal list-inside space-y-2"><li>Нажмите синюю кнопку «Добавить людей».</li><li>Введите их рабочий адрес электронной почты.</li><li>Назначьте желаемый доступ (сотрудник или администратор компании).</li><li>На следующем шаге вы сможете назначить доступ к конкретным активам. Выберите свою страницу Facebook из списка.</li><li>Справа активируйте переключатели для задач, которые он сможет выполнять (Контент, Сообщения, Реклама и т.д.). Если вы хотите, чтобы у него был полный контроль над страницей, активируйте опцию «Управление страницей».</li><li>Нажмите «Пригласить». Человек получит приглашение по электронной почте.</li></ol><p><strong>Чтобы отредактировать разрешения существующего человека:</strong></p<ol class="list-decimal list-inside space-y-2"><li>Выберите имя человека из списка.</li><li>Справа вы увидите список активов, к которым у него есть доступ (страницы, аккаунты Instagram и т.д.).</li><li>Нажмите на свою страницу Facebook.</li><li>Измените разрешения, включая или отключая определенные задачи.</li><li>Чтобы полностью удалить доступ к странице, нажмите на значок корзины рядом с названием страницы.</li></ol><p>Поддержание порядка и актуальности ролей на вашей странице — это важная практика для защиты вашего онлайн-присутствия и обеспечения бесперебойной и безопасной работы вашей команды. Периодически пересматривайте эти разрешения, особенно при изменениях в вашей команде.</p>`
      },
      {
        title: 'Экономьте время и деньги: откройте для себя нашу бесплатную услугу по управлению счетами за электроэнергию',
        excerpt: 'Вы переплачиваете за электроэнергию? Мы объясняем, как наша бесплатная услуга анализирует ваши счета и помогает экономить без затрат и обязательств.',
        content: `<h2>Вы уверены, что не переплачиваете за электроэнергию?</h2><p>Каждый месяц вы получаете счет за электричество, и, будем честны, в большинстве случаев мы оплачиваем его, не вчитываясь в мелкий шрифт. Проблема в том, что часто энергетические компании применяют тарифы, которые не должны, или существуют более экономичные варианты, о которых мы не знаем. Это приводит к ненужным расходам, которые к концу года могут составить значительную сумму.</p><p>В Melena Marketing в сотрудничестве с Энергетической обсерваторией (OE) мы запустили услугу, предназначенную для решения этой проблемы раз и навсегда.</p><h2>Бесплатная услуга для оптимизации ваших расходов</h2><p>Мы предлагаем <strong>полностью бесплатную услугу</strong> по управлению и анализу ваших счетов за электроэнергию. Наша цель проста: убедиться, что вы платите справедливую цену, и помочь вам сэкономить время и деньги. Без скрытых затрат и обязательств.</p><h3>Как это работает? Это очень просто:</h3><ol class="list-decimal list-inside space-y-2"><li><strong>Вы присылаете нам свой счет:</strong> Просто загрузите копию вашего последнего счета за электроэнергию через нашу безопасную форму.</li><li><strong>Мы анализируем его за вас:</strong> Наша команда экспертов проверит каждую деталь, чтобы убедиться, что вы платите минимально возможную цену.</li><li><strong>Мы связываемся с вами с предложениями по улучшению:</strong> Если мы обнаружим возможность для экономии или улучшения, мы свяжемся с вами, чтобы внести изменения и гарантировать, что ваши следующие счета будут ниже.</li></ol><h2>Возьмите контроль над своими счетами уже сегодня</h2><p>Не упускайте возможность сократить свои расходы. Посвятите свое время и деньги тому, что действительно важно. Наша услуга прозрачна, проста и, самое главное, бесплатна.</p><p>Готовы начать экономить? Нажмите на ссылку ниже, оставьте нам свой счет и номер телефона, а мы позаботимся обо всем остальном.</p><p class="not-prose text-center mt-8"><a href="/gestion-de-tu-factura-energetica" class="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-500 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Я хочу сэкономить на счетах</a></p><p>Если у вас есть какие-либо вопросы, не стесняйтесь писать нам по адресу <strong>info@melenamarketing.com</strong>. Мы здесь, чтобы помочь!</p>`
      },
    ],
    contact_title: "Давайте обсудим ваш проект",
    contact_subtitle: "Заполните форму или свяжитесь с нами напрямую. Мы готовы выслушать ваши идеи и помочь вашему бизнесу.",
    contact_info_title: "Контактная информация",
    contact_form_name: "Имя",
    contact_form_email: "Email",
    contact_form_message: "Расскажите о своем проекте",
    contact_form_submit: "Отправить",
    contact_form_sending: "Отправка...",
    contact_form_terms: "Я прочитал и принимаю <a href=\"/terminos-y-condiciones\" class=\"underline hover:text-blue-700\">Условия и положения</a> и <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Политику конфиденциальности</a>.",
    contact_form_validation_error: "Пожалуйста, заполните все обязательные поля и примите условия.",
    contact_whatsapp: "Связаться по WhatsApp",
    footer_copyright: "Melena Marketing. Все права защищены.",
    footer_terms: "Условия и положения",
    footer_privacy_policy: "Политика конфиденциальности",
    cookie_message: "Мы используем файлы cookie для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь на использование нами файлов cookie.",
    cookie_accept: "Принять",
    cookie_learn_more: "Узнать больше",
    terms_content: `<h2>1. ИДЕНТИФИКАЦИОННЫЕ ДАННЫЕ</h2>
<p>В соответствии с обязанностью предоставления информации, изложенной в статье 10 Закона 34/2002 от 11 июля об услугах информационного общества и электронной торговле, предоставляются следующие данные: владельцем веб-домена является Melena Marketing (далее Melena Marketing) с юридическим адресом в Марбелье, Малага, Испания. Контактный email: info@melenamarketing.com.</p>
<h2>2. ПОЛЬЗОВАТЕЛИ</h2>
<p>Доступ и/или использование этого портала Melena Marketing наделяет статусом ПОЛЬЗОВАТЕЛЯ, который с момента такого доступа и/или использования принимает Общие условия использования, изложенные здесь. Указанные Условия будут применяться независимо от Общих условий заключения договоров, которые могут быть обязательными.</p>
<h2>3. ИСПОЛЬЗОВАНИЕ ПОРТАЛА</h2>
<p>melenamarketing.com предоставляет доступ к множеству информации, услуг, программ или данных (далее «контент») в Интернете, принадлежащих Melena Marketing или ее лицензиарам, к которым ПОЛЬЗОВАТЕЛЬ может иметь доступ. ПОЛЬЗОВАТЕЛЬ принимает на себя ответственность за использование портала. Эта ответственность распространяется на регистрацию, которая может потребоваться для доступа к определенным услугам или контенту.</p>
<p>ПОЛЬЗОВАТЕЛЬ обязуется надлежащим образом использовать контент и услуги, которые Melena Marketing предлагает через свой портал, и, в качестве примера, но не ограничиваясь этим, не использовать их для (i) совершения незаконных, нелегальных или противоречащих добросовестности и общественному порядку действий; (ii) распространения контента или пропаганды расистского, ксенофобского, порнографически-незаконного характера, в поддержку терроризма или нарушающего права человека; (iii) причинения вреда физическим и логическим системам Melena Marketing, ее поставщиков или третьих лиц, внедрения или распространения компьютерных вирусов или любых других физических или логических систем, способных причинить вышеупомянутый вред.</p>
<h2>4. ИНТЕЛЛЕКТУАЛЬНАЯ И ПРОМЫШЛЕННАЯ СОБСТВЕННОСТЬ</h2>
<p>Melena Marketing, самостоятельно или в качестве цессионария, является владельцем всех прав на интеллектуальную и промышленную собственность своего веб-сайта, а также элементов, содержащихся на нем (включая, но не ограничиваясь, изображения, звук, аудио, видео, программное обеспечение или тексты; товарные знаки или логотипы, цветовые сочетания, структуру и дизайн, выбор используемых материалов, компьютерные программы, необходимые для его работы, доступа и использования и т.д.), принадлежащих Melena Marketing или ее лицензиарам.</p>
<p>Все права защищены. В соответствии с положениями статей 8 и 32.1, второго абзаца, Закона об интеллектуальной собственности, воспроизведение, распространение и публичное сообщение, включая способ предоставления доступа, всего или части содержимого этого веб-сайта в коммерческих целях, на любом носителе и любыми техническими средствами, без разрешения Melena Marketing, категорически запрещены.</p>
<h2>5. ИСКЛЮЧЕНИЕ ГАРАНТИЙ И ОТВЕТСТВЕННОСТИ</h2>
<p>Melena Marketing ни в коем случае не несет ответственности за ущерб любого рода, который может быть причинен, в качестве примера: ошибки или упущения в контенте, отсутствие доступности портала или передача вирусов или вредоносных программ в контенте, несмотря на принятие всех необходимых технологических мер для его предотвращения.</p>
<h2>6. ИЗМЕНЕНИЯ</h2>
<p>Melena Marketing оставляет за собой право вносить без предварительного уведомления любые изменения, которые сочтет необходимыми, в свой портал, имея возможность изменять, удалять или добавлять как контент и услуги, предоставляемые через него, так и способ их представления или размещения на портале.</p>
<h2>7. ССЫЛКИ</h2>
<p>В случае, если на melenamarketing.com содержатся ссылки или гиперссылки на другие интернет-сайты, Melena Marketing не будет осуществлять никакого контроля над такими сайтами и контентом. Ни в коем случае Melena Marketing не будет нести никакой ответственности за содержание какой-либо ссылки, принадлежащей стороннему веб-сайту, а также не будет гарантировать техническую доступность, качество, надежность, точность, широту, достоверность, действительность и конституционность любого материала или информации, содержащейся на любом из указанных гиперссылок или других интернет-сайтов.</p>
<h2>8. ПРАВО НА ОТКАЗ В ДОСТУПЕ</h2>
<p>Melena Marketing оставляет за собой право отказывать в доступе или отзывать доступ к порталу и/или предлагаемым услугам без предварительного уведомления, по собственной инициативе или по требованию третьей стороны, тем пользователям, которые нарушают настоящие Общие условия использования.</p>
<h2>9. ПРИМЕНИМОЕ ЗАКОНОДАТЕЛЬСТВО И ЮРИСДИКЦИЯ</h2>
<p>Отношения между Melena Marketing и ПОЛЬЗОВАТЕЛЕМ будут регулироваться действующим испанским законодательством, и любой спор будет передан на рассмотрение в суды города Малага.</p>`,
    privacy_content: `<h2>1. КОНТРОЛЕР ДАННЫХ</h2>
<p><strong>Наименование:</strong> Melena Marketing<br><strong>Email:</strong> info@melenamarketing.com<br><strong>Деятельность:</strong> Услуги цифрового маркетинга</p>
<h2>2. С КАКОЙ ЦЕЛЬЮ МЫ ОБРАБАТЫВАЕМ ВАШИ ПЕРСОНАЛЬНЫЕ ДАННЫЕ?</h2>
<p>В Melena Marketing мы обрабатываем информацию, предоставленную заинтересованными лицами, для управления запросами информации, консультациями и предоставлением заказанных услуг. Основные цели:</p>
<ul>
  <li><strong>Контактная форма:</strong> Для ответа и управления запросами или информационными запросами, полученными через контактную форму. Основанием для законности является явное согласие пользователя путем установки флажка в поле согласия и отправки формы.</li>
  <li><strong>Форма управления энергопотреблением:</strong> Для сбора контактных данных пользователя и счета за электроэнергию для его анализа и связи с пользователем с целью предложения улучшений и экономии. Основанием для законности является явное согласие пользователя. Запрашивая эту услугу, пользователь понимает, что его данные могут быть переданы сотрудничающим компаниям в энергетическом секторе с единственной целью проведения запрошенного исследования и управления.</li>
</ul>
<p>Автоматизированные решения на основе предоставленных данных приниматься не будут.</p>
<h2>3. КАК ДОЛГО МЫ БУДЕМ ХРАНИТЬ ВАШИ ДАННЫЕ?</h2>
<p>Предоставленные персональные данные будут храниться до тех пор, пока поддерживаются отношения с заинтересованным лицом или не будет запрошено их удаление. Они будут храниться в течение времени, необходимого для выполнения юридических обязательств.</p>
<h2>4. КАКОВА ЗАКОННОСТЬ ОБРАБОТКИ ВАШИХ ДАННЫХ?</h2>
<p>Правовой основой для обработки ваших данных является согласие, которое вы даете нам, установив флажок в поле согласия с политикой конфиденциальности перед отправкой любой формы. Вы имеете право отозвать свое согласие в любое время, что не повлияет на законность обработки, основанной на согласии до его отзыва.</p>
<h2>5. КАКИМ ПОЛУЧАТЕЛЯМ БУДУТ ПЕРЕДАНЫ ВАШИ ДАННЫЕ?</h2>
<p>Данные не будут передаваться третьим лицам, за исключением юридических обязательств. Для услуги управления энергопотреблением контактные данные и счет могут быть переданы экспертным сотрудничающим компаниям в энергетическом секторе с единственной целью проведения анализа и предложения по улучшению.</p>
<p>Мы используем поставщиков технологических услуг, таких как хостинг и платформы управления электронной почтой (на базе Firebase/Google Cloud), которые выступают в качестве обработчиков данных и подписали соответствующие договоры о конфиденциальности и обработке данных, требуемые действующим законодательством.</p>
<h2>6. КАКОВЫ ВАШИ ПРАВА, КОГДА ВЫ ПРЕДОСТАВЛЯЕТЕ НАМ СВОИ ДАННЫЕ?</h2>
<p>Любое лицо имеет право получить подтверждение того, обрабатывает ли Melena Marketing персональные данные, касающиеся его.</p>
<p>Заинтересованные лица имеют право на <strong>доступ</strong> к своим персональным данным, а также на запрос <strong>исправления</strong> неточных данных или, в соответствующих случаях, на запрос их <strong>удаления</strong>, когда, среди прочего, данные больше не нужны для целей, для которых они были собраны. В определенных обстоятельствах заинтересованные лица могут запросить <strong>ограничение обработки</strong> своих данных, в этом случае мы будем хранить их только для осуществления или защиты претензий. Они также могут <strong>возражать</strong> против обработки своих данных.</p>
<p>Для осуществления своих прав вы можете отправить электронное письмо по адресу <strong>info@melenamarketing.com</strong>, указав право, которое вы хотите осуществить, и приложив копию вашего удостоверения личности или идентификационного документа.</p>
<h2>7. ПОЛИТИКА ИСПОЛЬЗОВАНИЯ ФАЙЛОВ COOKIE</h2>
<h3>Что такое файлы cookie?</h3>
<p>Файл cookie — это файл, который загружается на ваш компьютер при доступе к определенным веб-страницам. Файлы cookie позволяют веб-странице, среди прочего, хранить и извлекать информацию о привычках просмотра пользователя или его оборудования и, в зависимости от содержащейся в них информации и способа использования вашего оборудования, могут использоваться для распознавания пользователя.</p>
<h3>Какие типы файлов cookie использует этот веб-сайт?</h3>
<ul>
  <li><strong>Технические файлы cookie:</strong> Это те, которые позволяют пользователю перемещаться по веб-странице и использовать различные опции или услуги, которые на ней существуют. Например, тот, который мы используем для запоминания языковых предпочтений или согласия на использование файлов cookie.</li>
  <li><strong>Аналитические файлы cookie:</strong> Это те, которые, обрабатываемые нами или третьими лицами, позволяют нам количественно определять количество пользователей и, таким образом, проводить измерение и статистический анализ использования пользователями предлагаемой услуги. Для этого анализируется ваше поведение на нашем веб-сайте с целью улучшения ассортимента предлагаемых нами продуктов или услуг (в настоящее время мы не используем сторонние аналитические файлы cookie, такие как Google Analytics, но оставляем за собой право делать это в будущем).</li>
</ul>
<h3>Как я могу управлять или отключать файлы cookie?</h3>
<p>Вы можете разрешать, блокировать или удалять файлы cookie, установленные на вашем компьютере, настроив параметры браузера, установленного на вашем компьютере. Ниже мы предоставляем ссылки, по которым вы найдете информацию о том, как вы можете активировать свои предпочтения в основных браузерах:</p>
<ul>
  <li><a href="https://support.google.com/chrome/answer/95647?hl=ru" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
  <li><a href="https://support.mozilla.org/ru/kb/vklyuchenie-i-otklyuchenie-kukov-ispolzuemyh-veb-s" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
  <li><a href="https://support.microsoft.com/ru-ru/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Internet Explorer / Edge</a></li>
  <li><a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
</ul>`,
    collaboration_title: "Хотите работать или сотрудничать с нами?",
    collaboration_subtitle: "Заполните эту форму, и мы свяжемся с вами.",
    collaboration_cta: "Работать с нами",
    // Energy Promo Section on Home Page
    energy_promo_title: "Экономьте на счетах за электроэнергию",
    energy_promo_description: "Мы предлагаем бесплатную услугу по анализу ваших счетов за электроэнергию, чтобы помочь вам платить меньше. Без затрат, без обязательств. Узнайте, сколько вы можете сэкономить.",
    energy_promo_cta: "Узнать больше",
    // Energy Page
    energy_form_title: "Мы улучшаем ваши счета за электроэнергию",
    energy_form_subtitle1: "Хотите начать экономить на счетах за электроэнергию уже сегодня?",
    energy_form_subtitle2: "Загрузите свой счет за электроэнергию сейчас и позвольте нам сделать всю работу за вас! БЕСПЛАТНО",
    energy_form_more_info: "Подробнее",
    energy_form_upload_label: "Загрузите ваш счет здесь +",
    energy_form_phone: "Телефон",
    energy_form_terms: "Я принимаю условия и положения; мы будем использовать ваши данные только для связи с вами по вопросам управления вашим счетом за электроэнергию. <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Условия и положения</a>",
    energy_form_validation_error: "Пожалуйста, заполните обязательные поля и примите условия.",
    energy_page_send_success: "Форма успешно отправлена! Мы скоро с вами свяжемся.",
    energy_page_send_error: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
    energy_page_content_title: "Экономьте время и деньги: откройте для себя нашу бесплатную услугу по управлению счетами за электроэнергию",
    energy_page_content_p1: "Вы устали получать счета за электричество каждый месяц и не иметь времени на их проверку? Если да, продолжайте читать, потому что у нас для вас хорошие новости. Melena Marketing в сотрудничестве с OE (Observatorio Energético) создали бесплатную услугу по управлению счетами за электроэнергию, которая позволит вам сэкономить время и деньги.",
    energy_page_content_p2: "Возможно, вы не замечали, но электроэнергетические компании часто выставляют некорректные или необоснованные счета. Но не волнуйтесь, мы здесь, чтобы помочь. С нашей услугой вам не придется беспокоиться о проверке счетов и сравнении тарифов; мы сделаем это за вас.",
    energy_page_content_p3: "Помимо экономии денег, вы также будете спокойны, зная, что платите справедливую цену за получаемые услуги. И самое лучшее, наша услуга абсолютно бесплатна. Да, вы не ослышались, вам не придется платить ни копейки за ее использование.",
    energy_page_content_how_title: "Как это работает?",
    energy_page_content_how_p1: "Это очень просто. Просто оставьте нам свой счет и номер телефона в <a href=\"#energy-form-section\">форме выше</a>, и мы обо всем позаботимся. Мы проверим ваш счет, чтобы убедиться, что вы платите минимальную цену за электроэнергию. Кроме того, если что-то можно улучшить, мы позвоним вам, чтобыจัดการเรื่องนี้ и确保您在能源账单上节省开支.",
    energy_page_content_how_p2: "Не упустите возможность сэкономить. Если у вас есть вопросы, напишите нам по адресу info@melenamarketing.com и начните наслаждаться спокойствием, зная, что вы платите справедливую цену за услуги электроснабжения. Теперь вам больше не придется беспокоиться о проверке счетов каждый месяц и вы сможете посвятить свое время действительно важным вещам.",
  },
};
