import { Testimonial, BlogPost } from '../types';

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
    testimonials_title: string;
    testimonials_subtitle: string;
    testimonials: Testimonial[];
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
  };
}

export const translations: Translations = {
  es: {
    header_slogan: "Impulsando Pymes",
    nav_links: { home: "Inicio", services: "Servicios", about: "Sobre Nosotros", blog: "Blog", contact: "Contacto" },
    hero_title: "Impulsamos el Crecimiento de tu Pyme",
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
    testimonials_title: "Lo que Dicen Nuestros Clientes",
    testimonials_subtitle: "La confianza y los resultados son la base de nuestra relación con cada PYME.",
    testimonials: [
      { quote: "Melena Marketing transformó nuestra presencia online. Su enfoque en PYMES es justo lo que necesitábamos. ¡Los resultados hablan por sí solos!", author: "Ana García", company: "CEO de Tienda Local" },
      { quote: "El equipo es increíblemente profesional y cercano. Entendieron nuestras necesidades desde el primer día y nos guiaron en cada paso del proceso.", author: "Carlos Pérez", company: "Fundador de Café del Sol" },
      { quote: "Gracias a su gestión de redes sociales y publicidad, hemos visto un aumento significativo en nuestras ventas. Totalmente recomendados.", author: "Lucía Fernández", company: "Gerente de Boutique Chic" }
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
  },
  en: {
    header_slogan: "Boosting SMEs",
    nav_links: { home: "Home", services: "Services", about: "About Us", blog: "Blog", contact: "Contact" },
    hero_title: "We Boost the Growth of Your SME",
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
    testimonials_title: "What Our Clients Say",
    testimonials_subtitle: "Trust and results are the foundation of our relationship with every SME.",
    testimonials: [
      { quote: "Melena Marketing transformed our online presence. Their focus on SMEs was exactly what we needed. The results speak for themselves!", author: "Ana García", company: "CEO of Local Store" },
      { quote: "The team is incredibly professional and approachable. They understood our needs from day one and guided us through every step of the process.", author: "Carlos Pérez", company: "Founder of Café del Sol" },
      { quote: "Thanks to their social media and advertising management, we've seen a significant increase in our sales. Highly recommended.", author: "Lucía Fernández", company: "Manager of Boutique Chic" }
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
  },
  ru: {
    header_slogan: "Продвижение МСП",
    nav_links: { home: "Главная", services: "Услуги", about: "О нас", blog: "Блог", contact: "Контакты" },
    hero_title: "Мы способствуем росту вашего МСП",
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
    testimonials_title: "Что говорят наши клиенты",
    testimonials_subtitle: "Доверие и результаты — основа наших отношений с каждым МСП.",
    testimonials: [
      { quote: "Melena Marketing преобразили наше онлайн-присутствие. Их фокус на МСП — это именно то, что нам было нужно. Результаты говорят сами за себя!", author: "Анна Гарсия", company: "Ген. директор 'Местный магазин'" },
      { quote: "Команда невероятно профессиональна и отзывчива. Они поняли наши потребности с первого дня и направляли нас на каждом этапе процесса.", author: "Карлос Перес", company: "Основатель 'Кафе дель Соль'" },
      { quote: "Благодаря их управлению социальными сетями и рекламой, мы увидели значительный рост продаж. Настоятельно рекомендуем.", author: "Люсия Фернандес", company: "Менеджер 'Бутик Шик'" }
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
  },
};
