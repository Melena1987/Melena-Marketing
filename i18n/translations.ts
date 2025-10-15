
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
    blog_posts: Omit<BlogPost, 'imageUrl' | 'link'>[];
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
    blog_posts: [
      { title: '5 Consejos de SEO Local para Tiendas en Málaga', excerpt: 'Atrae a más clientes de tu zona optimizando tu presencia en búsquedas locales. Te mostramos cómo empezar hoy mismo.' },
      { title: 'Cómo Usar Instagram para tu Restaurante y Llenar Mesas', excerpt: 'Descubre estrategias visuales y de contenido para convertir seguidores en comensales fieles para tu negocio de hostelería.' },
      { title: 'La Importancia de un Logotipo Profesional para tu PYME', excerpt: 'Tu marca es más que un nombre. Analizamos por qué una identidad visual sólida es una inversión crucial para el éxito.' },
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
    terms_content: `...`, // Content omitted for brevity
    privacy_content: `...`, // Content omitted for brevity
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
    energy_page_content_p1: "¿Estás cansado de recibir facturas de electricidad cada mes y no tener tiempo para revisarlas? Si es así, sigue leyendo porque tenemos buenas noticias para ti. Melena Marketing en colaboración con el OE (Observatorio Energético), hemos creado un servicio gratuito de gestión de factura energética que te permitirá ahorrar tiempo y dinero.",
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
    blog_posts: [
      { title: '5 Local SEO Tips for Shops in Malaga', excerpt: 'Attract more customers from your area by optimizing your presence in local searches. We show you how to start today.' },
      { title: 'How to Use Instagram for Your Restaurant and Fill Tables', excerpt: 'Discover visual and content strategies to turn followers into loyal diners for your hospitality business.' },
      { title: 'The Importance of a Professional Logo for Your SME', excerpt: 'Your brand is more than a name. We analyze why a solid visual identity is a crucial investment for success.' },
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
    terms_content: `...`, // Content omitted for brevity
    privacy_content: `...`, // Content omitted for brevity
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
    blog_posts: [
      { title: '5 советов по локальному SEO для магазинов в Малаге', excerpt: 'Привлекайте больше клиентов из вашего района, оптимизируя ваше присутствие в локальном поиске. Мы покажем, как начать уже сегодня.' },
      { title: 'Как использовать Instagram для вашего ресторана и заполнить столы', excerpt: 'Откройте для себя визуальные и контентные стратегии, чтобы превратить подписчиков в постоянных посетителей вашего заведения.' },
      { title: 'Важность профессионального логотипа для вашего МСП', excerpt: 'Ваш бренд — это больше, чем просто название. Мы анализируем, почему сильная визуальная идентичность — это ключевая инвестиция в успех.' },
    ],
    contact_title: "Давайте обсудим ваш проект",
    contact_subtitle: "Заполните форму или свяжитесь с нами напрямую. Мы готовы выслушать ваши идеи и дать толчок вашему бизнесу.",
    contact_info_title: "Контактная информация",
    contact_form_name: "Имя",
    contact_form_email: "Email",
    contact_form_message: "Расскажите нам о вашем проекте",
    contact_form_submit: "Отправить",
    contact_form_sending: "Отправка...",
    contact_form_terms: "Я прочитал(а) и принимаю <a href=\"/terminos-y-condiciones\" class=\"underline hover:text-blue-700\">Условия и положения</a> и <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Политику конфиденциальности</a>.",
    contact_form_validation_error: "Пожалуйста, заполните все обязательные поля и примите условия.",
    contact_whatsapp: "Связаться по WhatsApp",
    footer_copyright: "Melena Marketing. Все права защищены.",
    footer_terms: "Условия и положения",
    footer_privacy_policy: "Политика конфиденциальности",
    cookie_message: "Мы используем файлы cookie для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь на использование нами файлов cookie.",
    cookie_accept: "Принять",
    cookie_learn_more: "Узнать больше",
    terms_content: `...`, // Content omitted for brevity
    privacy_content: `...`, // Content omitted for brevity
    collaboration_title: "Хотите работать или сотрудничать с нами?",
    collaboration_subtitle: "Заполните эту форму, и мы свяжемся с вами.",
    collaboration_cta: "Работать с нами",
    // Energy Promo Section on Home Page
    energy_promo_title: "Экономьте на счетах за электричество",
    energy_promo_description: "Мы предлагаем бесплатную услугу по анализу ваших счетов за электроэнергию, чтобы помочь вам платить меньше. Без затрат и обязательств. Узнайте, сколько вы можете сэкономить.",
    energy_promo_cta: "Узнать больше",
    // Energy Page
    energy_form_title: "Мы улучшаем ваш счет за электроэнергию",
    energy_form_subtitle1: "Хотите начать экономить на счетах за электричество уже сегодня?",
    energy_form_subtitle2: "Загрузите ваш счёт сейчас и позвольте нам сделать работу за вас! БЕСПЛАТНО",
    energy_form_more_info: "Подробнее",
    energy_form_upload_label: "Загрузите ваш счет сюда +",
    energy_form_phone: "Телефон",
    energy_form_terms: "Я принимаю условия и положения; мы будем использовать ваши данные только для связи с вами по вопросам управления вашим счетом за электроэнергию. <a href=\"/terminos-y-condiciones#privacy-policy\" class=\"underline hover:text-blue-700\">Условия и положения</a>",
    energy_form_validation_error: "Пожалуйста, заполните обязательные поля и примите условия.",
    energy_page_send_success: "Форма успешно отправлена! Мы скоро с вами свяжемся.",
    energy_page_send_error: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
    energy_page_content_title: "Экономьте время и деньги: откройте для себя нашу бесплатную услугу по управлению счетами за электроэнергию",
    energy_page_content_p1: "Вы устали получать счета за электроэнергию каждый месяц и не находить времени на их проверку? Если да, продолжайте читать, потому что у нас для вас хорошие новости. Melena Marketing в сотрудничестве с OE (Observatorio Energético) создала бесплатную услугу по управлению счетами за электроэнергию, которая позволит вам сэкономить время и деньги.",
    energy_page_content_p2: "Возможно, вы этого не замечали, но электроэнергетические компании часто применяют тарифы, которые не должны. Но не волнуйтесь, мы здесь, чтобы помочь. С нашей услугой вам не придется беспокоиться о проверке счетов и сравнении тарифов, мы сделаем это за вас.",
    energy_page_content_p3: "Помимо экономии денег, вы также будете спокойны, зная, что платите справедливую цену за получаемые услуги. И самое главное, наша услуга абсолютно бесплатна. Да, вы правильно прочитали, вам не придется платить ни цента за ее использование.",
    energy_page_content_how_title: "Как это работает?",
    energy_page_content_how_p1: "Это очень просто. Просто загрузите ваш счёт и оставьте номер телефона в <a href=\"#energy-form-section\">форме выше</a>, и мы обо всем позаботимся. Мы проверим ваш счет, чтобы убедиться, что вы платите минимально возможную цену за электроэнергию. Кроме того, если что-то можно улучшить, мы позвоним вам, чтобы уладить это и убедиться, что вы экономите на счетах за электроэнергию.",
    energy_page_content_how_p2: "Не упускайте возможность сэкономить. Если у вас есть вопросы, напишите нам по адресу info@melenamarketing.com и начните наслаждаться спокойствием, зная, что вы платите справедливую цену за услуги электроснабжения. Теперь вам больше не придется беспокоиться о проверке счетов каждый месяц, и вы сможете посвятить свое время действительно важным вещам.",
  },
};
