// ===============================
// SISTEMA DE TRADUCCIÓN COMPLETO
// ===============================

// Diccionario con todas las traducciones de TODAS las páginas
const translations = {
  es: {
    // NAV
    "nav-logo": "MiWeb",
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-courses": "Cursos",
    "nav-contact": "Contacto",
    "lang-btn": "🌐 Idioma",

    // INDEX
    "title-index": "Inicio",
    "hero-title": "Bienvenido a MiWeb",
    "hero-subtitle": "Descubre cómo la inteligencia artificial puede ayudarte a emprender y aprender de forma creativa.",
    "hero-button": "Ver Cursos",
    "testimonios-title": "Historias de éxito",
    "test-1": "\"Los cursos de Marcos me ayudaron a lanzar mi proyecto con IA.\"",
    "test-1-name": "- Ana López",
    "test-2": "\"Explicaciones claras y prácticas, muy recomendados.\"",
    "test-2-name": "- Juan Pérez",
    "test-3": "\"Gracias a este programa aprendí a aplicar IA en mi negocio.\"",
    "test-3-name": "- Laura García",
    "footer-text": "© 2025 MiWeb - Todos los derechos reservados",

    // CURSOS
    "title-courses": "Cursos",
    "courses-title": "Cursos de Emprendimiento con IA",

    "course-1-title": "Introducción al Emprendimiento con IA",
    "course-1-price": "💰 Precio: 1 €",
    "course-1-duration": "⏳ Duración: 2 horas",
    "course-1-desc": "📌 Ofrece: Conceptos básicos de cómo usar IA para validar ideas de negocio.",

    "course-2-title": "Emprendimiento Digital con IA aplicada",
    "course-2-price": "💰 Precio: 50 €",
    "course-2-duration": "⏳ Duración: 4 semanas",
    "course-2-desc": "📌 Ofrece: Herramientas prácticas de IA para marketing, análisis de clientes y creación de modelos de negocio.",

    "course-3-title": "Programa Profesional de IA y Startups",
    "course-3-price": "💰 Precio: 200 €",
    "course-3-duration": "⏳ Duración: 3 meses",
    "course-3-desc": "📌 Ofrece: Formación completa: diseño de proyectos, automatización con IA, escalado de negocios y mentoría personalizada.",

    // CONTACTO
    "title-contact": "Contacto",
    "contact-title": "Contacto",
    "contact-desc": "Si quieres más información o colaborar conmigo, rellena el formulario y te responderé lo antes posible.",
    "contact-address-title": "📍 Dirección",
    "contact-address": "Elche, España",
    "contact-email-title": "📧 Correo",
    "contact-email": "marcos@example.com",
    "contact-phone-title": "📱 Teléfono",
    "contact-phone": "+34 600 000 000",

    "form-name-label": "Nombre",
    "form-email-label": "Correo electrónico",
    "form-msg-label": "Mensaje",
    "form-submit": "Enviar",

    // ABOUT
    "title-about": "Sobre mí",
    "about-title": "Quién soy",
    "about-name": "Marcos Martínez",
    "about-desc": "Soy estudiante apasionado por la tecnología, los idiomas y la creatividad digital. Me gusta construir proyectos web y aprender nuevas herramientas.",
    "skill-1": "🌐 Desarrollo web (HTML, CSS, JavaScript)",
    "skill-2": "🧠 Inteligencia Artificial aplicada",
    "skill-3": "📚 Idiomas: Español, Inglés, Francés, Valenciano",
    "skill-4": "🎨 Creatividad digital y diseño"
  },

  // ===============================
  // INGLÉS
  // ===============================
  en: {
    "nav-logo": "MyWeb",
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-courses": "Courses",
    "nav-contact": "Contact",
    "lang-btn": "🌐 Language",

    "title-index": "Home",
    "hero-title": "Welcome to MyWeb",
    "hero-subtitle": "Discover how artificial intelligence can help you learn and create in a creative way.",
    "hero-button": "View Courses",
    "testimonios-title": "Success Stories",
    "test-1": "\"Marcos' courses helped me launch my AI project.\"",
    "test-1-name": "- Ana Lopez",
    "test-2": "\"Clear and practical explanations, highly recommended.\"",
    "test-2-name": "- John Perez",
    "test-3": "\"Thanks to this program I learned to apply AI in my business.\"",
    "test-3-name": "- Laura Garcia",
    "footer-text": "© 2025 MyWeb - All rights reserved",

    "title-courses": "Courses",
    "courses-title": "AI Entrepreneurship Courses",

    "course-1-title": "Introduction to AI Entrepreneurship",
    "course-1-price": "💰 Price: 1 €",
    "course-1-duration": "⏳ Duration: 2 hours",
    "course-1-desc": "📌 Includes: Basic concepts on how to use AI to validate business ideas.",

    "course-2-title": "Digital Entrepreneurship with Applied AI",
    "course-2-price": "💰 Price: 50 €",
    "course-2-duration": "⏳ Duration: 4 weeks",
    "course-2-desc": "📌 Includes: Practical AI tools for marketing, customer analysis and business model creation.",

    "course-3-title": "Professional AI & Startup Program",
    "course-3-price": "💰 Price: 200 €",
    "course-3-duration": "⏳ Duration: 3 months",
    "course-3-desc": "📌 Includes: Full training: project design, AI automation, business scaling and personalized mentoring.",

    "title-contact": "Contact",
    "contact-title": "Contact",
    "contact-desc": "If you want more information or want to collaborate with me, fill out the form and I will reply as soon as possible.",
    "contact-address-title": "📍 Address",
    "contact-address": "Elche, Spain",
    "contact-email-title": "📧 Email",
    "contact-email": "marcos@example.com",
    "contact-phone-title": "📱 Phone",
    "contact-phone": "+34 600 000 000",

    "form-name-label": "Name",
    "form-email-label": "Email",
    "form-msg-label": "Message",
    "form-submit": "Send",

    "title-about": "About Me",
    "about-title": "Who I Am",
    "about-name": "Marcos Martinez",
    "about-desc": "I am a student passionate about technology, languages and digital creativity. I enjoy building web projects and learning new tools.",
    "skill-1": "🌐 Web development (HTML, CSS, JavaScript)",
    "skill-2": "🧠 Applied Artificial Intelligence",
    "skill-3": "📚 Languages: Spanish, English, French, Valencian",
    "skill-4": "🎨 Digital creativity and design"
  },

  // ===============================
  // FRANCÉS
  // ===============================
  fr: {
    "nav-logo": "MonSite",
    "nav-home": "Accueil",
    "nav-about": "À propos",
    "nav-courses": "Cours",
    "nav-contact": "Contact",
    "lang-btn": "🌐 Langue",

    "title-index": "Accueil",
    "hero-title": "Bienvenue sur MonSite",
    "hero-subtitle": "Découvrez comment l'intelligence artificielle peut vous aider à apprendre et créer de manière créative.",
    "hero-button": "Voir les cours",
    "testimonios-title": "Histoires de réussite",
    "test-1": "\"Les cours de Marcos m'ont aidée à lancer mon projet avec l'IA.\"",
    "test-1-name": "- Ana Lopez",
    "test-2": "\"Explications claires et pratiques, très recommandées.\"",
    "test-2-name": "- Jean Perez",
    "test-3": "\"Grâce à ce programme, j'ai appris à appliquer l'IA dans mon entreprise.\"",
    "test-3-name": "- Laura Garcia",
    "footer-text": "© 2025 MonSite - Tous droits réservés",

    "title-courses": "Cours",
    "courses-title": "Cours d'entrepreneuriat avec IA",

    "course-1-title": "Introduction à l'entrepreneuriat avec IA",
    "course-1-price": "💰 Prix : 1 €",
    "course-1-duration": "⏳ Durée : 2 heures",
    "course-1-desc": "📌 Comprend : Concepts de base sur l'utilisation de l'IA pour valider des idées d'entreprise.",

    "course-2-title": "Entrepreneuriat digital avec IA appliquée",
    "course-2-price": "💰 Prix : 50 €",
    "course-2-duration": "⏳ Durée : 4 semaines",
    "course-2-desc": "📌 Comprend : Outils pratiques d'IA pour le marketing, l'analyse client et la création de modèles commerciaux.",

    "course-3-title": "Programme professionnel IA & Startups",
    "course-3-price": "💰 Prix : 200 €",
    "course-3-duration": "⏳ Durée : 3 mois",
    "course-3-desc": "📌 Comprend : Formation complète : conception de projets, automatisation IA, croissance d'entreprise et mentorat personnalisé.",

    "title-contact": "Contact",
    "contact-title": "Contact",
    "contact-desc": "Pour plus d'informations ou pour collaborer avec moi, remplissez le formulaire et je vous répondrai dès que possible.",
    "contact-address-title": "📍 Adresse",
    "contact-address": "Elche, Espagne",
    "contact-email-title": "📧 Email",
    "contact-email": "marcos@example.com",
    "contact-phone-title": "📱 Téléphone",
    "contact-phone": "+34 600 000 000",

    "form-name-label": "Nom",
    "form-email-label": "Email",
    "form-msg-label": "Message",
    "form-submit": "Envoyer",

    "title-about": "À propos",
    "about-title": "Qui je suis",
    "about-name": "Marcos Martinez",
    "about-desc": "Je suis un étudiant passionné par la technologie, les langues et la créativité digitale. J'aime créer des projets web et apprendre de nouveaux outils.",
    "skill-1": "🌐 Développement web (HTML, CSS, JavaScript)",
    "skill-2": "🧠 Intelligence Artificielle appliquée",
    "skill-3": "📚 Langues : Espagnol, Anglais, Français, Valencien",
    "skill-4": "🎨 Créativité digitale et design"
  },

  // ===============================
  // ALEMÁN
  // ===============================
  de: {
    "nav-logo": "MeineWebseite",
    "nav-home": "Startseite",
    "nav-about": "Über mich",
    "nav-courses": "Kurse",
    "nav-contact": "Kontakt",
    "lang-btn": "🌐 Sprache",

    "title-index": "Startseite",
    "hero-title": "Willkommen bei MeineWebseite",
    "hero-subtitle": "Entdecken Sie, wie künstliche Intelligenz Ihnen helfen kann, kreativ zu lernen und zu schaffen.",
    "hero-button": "Kurse ansehen",
    "testimonios-title": "Erfolgsgeschichten",
    "test-1": "\"Marcos' Kurse halfen mir, mein KI-Projekt zu starten.\"",
    "test-1-name": "- Ana Lopez",
    "test-2": "\"Klare und praktische Erklärungen, sehr empfehlenswert.\"",
    "test-2-name": "- Johann Perez",
    "test-3": "\"Dank dieses Programms lernte ich, KI in meinem Unternehmen anzuwenden.\"",
    "test-3-name": "- Laura Garcia",
    "footer-text": "© 2025 MeineWebseite - Alle Rechte vorbehalten",

    "title-courses": "Kurse",
    "courses-title": "KI-Unternehmertumskurse",

    "course-1-title": "Einführung in KI-Unternehmertum",
    "course-1-price": "💰 Preis: 1 €",
    "course-1-duration": "⏳ Dauer: 2 Stunden",
    "course-1-desc": "📌 Enthält: Grundkonzepte zur Nutzung von KI zur Validierung von Geschäftsideen.",

    "course-2-title": "Digitales Unternehmertum mit angewandter KI",
    "course-2-price": "💰 Preis: 50 €",
    "course-2-duration": "⏳ Dauer: 4 Wochen",
    "course-2-desc": "📌 Enthält: Praktische KI-Tools für Marketing, Kundenanalyse und Geschäftsmodellentwicklung.",

    "course-3-title": "Professionelles KI- & Startup-Programm",
    "course-3-price": "💰 Preis: 200 €",
    "course-3-duration": "⏳ Dauer: 3 Monate",
    "course-3-desc": "📌 Enthält: Vollständige Ausbildung: Projektgestaltung, KI-Automatisierung, Geschäftsskalierung und persönliche Mentoring.",

    "title-contact": "Kontakt",
    "contact-title": "Kontakt",
    "contact-desc": "Wenn Sie weitere Informationen wünschen oder mit mir zusammenarbeiten möchten, füllen Sie das Formular aus und ich antworte so schnell wie möglich.",
    "contact-address-title": "📍 Adresse",
    "contact-address": "Elche, Spanien",
    "contact-email-title": "📧 E-Mail",
    "contact-email": "marcos@example.com",
    "contact-phone-title": "📱 Telefon",
    "contact-phone": "+34 600 000 000",

    "form-name-label": "Name",
    "form-email-label": "E-Mail",
    "form-msg-label": "Nachricht",
    "form-submit": "Senden",

    "title-about": "Über mich",
    "about-title": "Wer ich bin",
    "about-name": "Marcos Martinez",
    "about-desc": "Ich bin ein Student, der sich für Technologie, Sprachen und digitale Kreativität begeistert. Ich erstelle gerne Webprojekte und lerne neue Tools.",
    "skill-1": "🌐 Webentwicklung (HTML, CSS, JavaScript)",
    "skill-2": "🧠 Angewandte künstliche Intelligenz",
    "skill-3": "📚 Sprachen: Spanisch, Englisch, Französisch, Valencianisch",
    "skill-4": "🎨 Digitale Kreativität und Design"
  },

  // ===============================
  // CHINO
  // ===============================
  zh: {
    "nav-logo": "我的网站",
    "nav-home": "首页",
    "nav-about": "关于我",
    "nav-courses": "课程",
    "nav-contact": "联系",
    "lang-btn": "🌐 语言",

    "title-index": "首页",
    "hero-title": "欢迎来到我的网站",
    "hero-subtitle": "了解人工智能如何帮助你以创造性的方式学习和创业。",
    "hero-button": "查看课程",
    "testimonios-title": "成功案例",
    "test-1": "“Marcos 的课程帮助我启动了我的 AI 项目。”",
    "test-1-name": "- Ana Lopez",
    "test-2": "“讲解清晰实用，非常推荐。”",
    "test-2-name": "- John Perez",
    "test-3": "“多亏了这个课程，我学会了如何在业务中应用 AI。”",
    "test-3-name": "- Laura Garcia",
    "footer-text": "© 2025 我的网站 - 版权所有",

    "title-courses": "课程",
    "courses-title": "人工智能创业课程",

    "course-1-title": "人工智能创业入门",
    "course-1-price": "💰 价格：1 €",
    "course-1-duration": "⏳ 时长：2 小时",
    "course-1-desc": "📌 内容：使用 AI 验证商业想法的基础概念。",

    "course-2-title": "应用人工智能的数字创业",
    "course-2-price": "💰 价格：50 €",
    "course-2-duration": "⏳ 时长：4 周",
    "course-2-desc": "📌 内容：AI 在营销、客户分析和商业模式创建中的实用工具。",

    "course-3-title": "人工智能与创业专业课程",
    "course-3-price": "💰 价格：200 €",
    "course-3-duration": "⏳ 时长：3 个月",
    "course-3-desc": "📌 内容：完整培训：项目设计、AI 自动化、业务扩展和个性化指导。",

    "title-contact": "联系",
    "contact-title": "联系",
    "contact-desc": "如果你想了解更多信息或与我合作，请填写表格，我会尽快回复你。",
    "contact-address-title": "📍 地址",
    "contact-address": "西班牙埃尔切",
    "contact-email-title": "📧 邮箱",
    "contact-email": "marcos@example.com",
    "contact-phone-title": "📱 电话",
    "contact-phone": "+34 600 000 000",

    "form-name-label": "姓名",
    "form-email-label": "电子邮件",
    "form-msg-label": "留言",
    "form-submit": "发送",

    "title-about": "关于我",
    "about-title": "我是谁",
    "about-name": "Marcos Martinez",
    "about-desc": "我是一名热爱科技、语言和数字创意的
