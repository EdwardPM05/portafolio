function imgs(prefix, count, altBase, ext = "png") {
  return Array.from({ length: count }, (_, i) => ({
    src: `images/projects/${prefix}${i + 1}.${ext}`,
    alt: `${altBase} - Vista ${i + 1}`,
  }));
}

// `category` separa lo que una empresa real usa hoy en producción de las
// herramientas y proyectos personales/de práctica — ver PRODUCT.md.
export const projects = [
  {
    category: "produccion",
    title: "ERP - GESTOR PARA TIENDAS GOYO",
    description:
      "Software ERP de gestión comercial a medida para SERVIREPUESTOS GOYO. Centraliza el control de inventario automatizado, flujo de caja, ciclo de ventas, créditos y administración de proveedores en un sistema unificado de alta disponibilidad.",
    tech: ["React", "Node.js", "Firebase"],
    images: imgs("erp", 10, "ERP Goyo"),
    links: [{ icon: "external", label: "Demo", href: "https://gestor-moto-rep.vercel.app/auth", variant: "demo" }],
  },
  {
    category: "produccion",
    title: "APP IPTV - SIMATV",
    description:
      "Aplicación de IPTV Streaming para Smart TVs con cabecera de televisión (Headend) propia. Implementa ingesta y procesamiento de señales satelitales en vivo (nacional e internacional) optimizadas para servidores Linux, con sistema de autenticación y acceso premium, DESARROLLADO PARA EMPRESA DE TELECOMUNICACIONES SIMA.",
    tech: ["Kotlin", "Exoplayer", "IPTV / Live TV", "HLS / DASH", "Linux server"],
    images: imgs("simatv", 4, "SIMATV"),
    links: [],
    privateNote: "Proyecto privado para cliente — uso interno, sin demo pública.",
  },
  {
    category: "produccion",
    title: "NOVA SMART - SITIO WEB CORPORATIVO",
    description:
      "Sitio web corporativo oficial de Nova Smart (Distribuidor Autorizado Claro), con catálogo de más de 37 planes de Fibra Óptica FTTH/HFC, galería de equipo, formulario de contacto comercial y bolsa de trabajo con postulación.",
    tech: ["Astro", "TypeScript", "CSS3"],
    images: imgs("novasmart", 6, "Nova Smart Web"),
    links: [],
    privateNote: "Proyecto privado para cliente — uso interno, sin demo pública.",
  },
  {
    category: "produccion",
    title: "NOVA SMART - APP MÓVIL EMPRESARIAL",
    description:
      "Aplicación móvil empresarial para gestión de operaciones de telecomunicaciones: ventas, instalaciones, almacén, auditorías con firma digital y PDF, asistencia con cámara y usuarios con permisos por rol y área.",
    tech: ["Expo / React Native", "TypeScript", "Supabase"],
    images: imgs("novasmartapp", 16, "Nova Smart App", "jpg"),
    mobileView: true,
    links: [],
    privateNote: "Proyecto privado para cliente — uso interno, sin demo pública.",
  },
  {
    category: "produccion",
    title: "BANDEJA WHATSAPP - NOVA SMART",
    description:
      "Panel completo para gestionar el WhatsApp Business de Nova Smart: dashboard con métricas de conversaciones y mensajes, bandeja de chat en tiempo real (texto, imágenes, audio, documentos) y un editor de plantillas para actualizar los mensajes del bot sin tocar código, conectado a Edge Functions de Supabase.",
    tech: ["React", "Vite", "Supabase Edge Functions"],
    images: imgs("bandejawsp", 5, "Bandeja WhatsApp"),
    links: [],
    privateNote: "Proyecto privado para cliente — uso interno, sin demo pública.",
  },
  {
    category: "produccion",
    title: "AUTOMATIZACIÓN DE WHATSAPP - NOVA SMART",
    description:
      "Bot de automatización para WhatsApp Business de Nova Smart, con backend en Python y TypeScript y persistencia en Supabase, para agilizar la atención y el flujo de mensajes de la empresa.",
    tech: ["Python", "TypeScript", "Supabase"],
    images: imgs("wspautomation", 6, "Automatización WhatsApp"),
    links: [],
    privateNote: "Proyecto privado para cliente — uso interno, sin demo pública.",
  },
  {
    category: "personal",
    title: "GRACIAS-EDWARD - GIT CLI AUTOMATION",
    description:
      "Herramienta de interfaz de línea de comandos (CLI) multiplataforma que automatiza de extremo a extremo el flujo de trabajo en Git y GitHub. Centraliza la inicialización de repositorios, gestión de commits interactivos, detección de dependencias y despliegues rápidos en un solo comando.",
    tech: ["Node.js", "npm", "Git & GitHub"],
    images: imgs("gracias", 6, "Gracias-Edward"),
    links: [
      { icon: "npm", label: "npm package", href: "https://www.npmjs.com/package/gracias-edward", variant: "demo" },
      { icon: "github", label: "Código", href: "https://github.com/EdwardPM05/gracias-edward", variant: "code" },
    ],
  },
  {
    category: "personal",
    title: "CONTROLPORTS",
    description:
      "CLI multiplataforma para Windows que lista, busca e inspecciona procesos ocupando puertos, y permite terminarlos por puerto o PID directamente desde la terminal, con menú interactivo incluido.",
    tech: ["Node.js", "CLI", "npm"],
    images: imgs("controlports", 3, "ControlPorts"),
    links: [
      { icon: "npm", label: "npm package", href: "https://www.npmjs.com/package/controlports", variant: "demo" },
      { icon: "github", label: "Código", href: "https://github.com/EdwardPM05/ControlPorts", variant: "code" },
    ],
  },
  {
    category: "personal",
    title: "FASTDATA",
    description:
      "Extensión de Chrome que rellena formularios web con datos ficticios realistas para 10 países de Latinoamérica y España/Portugal (nombres, documentos, teléfonos, bancos), con detección inteligente de campos y soporte para React/Vue.",
    tech: ["JavaScript", "Chrome Extension", "Manifest V3"],
    images: imgs("fastdata", 4, "FastData"),
    links: [{ icon: "github", label: "Código", href: "https://github.com/EdwardPM05/FastData", variant: "code" }],
  },
  {
    category: "personal",
    title: "L'ELIXIR - CATÁLOGO VIRTUAL",
    description:
      "Catálogo virtual publicitario para la venta de perfumes, construido con Astro para una carga rápida y una experiencia de navegación ligera orientada a conversión.",
    tech: ["Astro", "JavaScript", "CSS3"],
    images: imgs("elixir", 9, "L'Elixir"),
    links: [],
  },
  {
    category: "personal",
    title: "WHATSAPP LINE EXTRACTOR",
    description:
      'Extensión de Chrome que detecta automáticamente las fotos abiertas en WhatsApp Web, aplica OCR con Tesseract.js para leer el campo "Línea" y copia el número extraído al portapapeles, con historial de las últimas 100 lecturas. Desarrollada para agilizar una tarea operativa diaria.',
    tech: ["JavaScript", "Tesseract.js (OCR)", "Chrome Extension"],
    images: imgs("wspline", 4, "WhatsApp Line Extractor"),
    links: [],
  },
  {
    category: "personal",
    title: "CONSULTA PERÚ - EXTRACTOR DNI/RUC",
    description:
      "Extractor de datos por DNI/RUC vía API de Factiliza, con caché propio en Firestore para evitar llamadas repetidas, búsqueda por nombre sobre registros cacheados, historial y estadísticas de uso. Ideal para integrarse en páginas de ventas que necesitan autocompletar datos del cliente.",
    tech: ["JavaScript", "Vercel Serverless", "Firebase Firestore"],
    images: imgs("consultaperu", 3, "Consulta Perú"),
    links: [],
  },
  {
    category: "personal",
    title: "RESCUEMAL",
    description:
      "Solución móvil diseñada para transformar la realidad de los animales en situación de abandono. Alineada con los Objetivos de Desarrollo Sostenible",
    tech: ["Kotlin", "Java", "Firebase"],
    images: imgs("res", 11, "RescueMal", "jpeg"),
    mobileView: true,
    links: [{ icon: "github", label: "Código", href: "https://github.com/EdwardPM05/rescate-animal", variant: "code" }],
  },
  {
    category: "personal",
    title: "SISTEMA DE GESTIÓN VETERINARIA",
    description: "Sistema completo para gestión de clínica veterinaria con registro de pacientes, control de citas e historiales médicos.",
    tech: ["C#", "SQL Server", ".NET"],
    images: imgs("vet", 4, "Sistema Veterinaria"),
    links: [{ icon: "github", label: "Código", href: "https://github.com/EdwardPM05/Sistema-Veterinario", variant: "code" }],
  },
  {
    category: "personal",
    title: "SITIO WEB VETERINARIA",
    description:
      "Página web informativa para clínica de mascotas con secciones de servicios, contacto y presentación del equipo profesional.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: imgs("page", 6, "Web Veterinaria"),
    links: [
      { icon: "external", label: "Demo", href: "https://vet-page-one.vercel.app/", variant: "demo" },
      { icon: "github", label: "Código", href: "https://github.com/EdwardPM05/Vet-page", variant: "code" },
    ],
  },
  {
    category: "personal",
    title: "FORMBLASTER",
    description: "Herramienta web para el envío y gestión masiva de respuestas/mensajes, construida con Next.js y desplegada en Vercel.",
    tech: ["Next.js", "React", "TypeScript"],
    images: imgs("formblaster", 10, "FormBlaster"),
    links: [{ icon: "external", label: "Demo", href: "https://masificador-de-respuestas.vercel.app", variant: "demo" }],
  },
];
