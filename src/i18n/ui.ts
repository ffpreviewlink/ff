export type Lang = "en" | "it";
export const langs: Lang[] = ["en", "it"];
export const defaultLang: Lang = "en";

/** Home page path for each language (trailingSlash is "always"). */
export const home: Record<Lang, string> = { en: "/", it: "/it/" };

export const locale: Record<Lang, string> = { en: "en_US", it: "it_IT" };

// Strings marked "html" are trusted constants rendered with set:html (they contain <em>).
export const ui = {
  en: {
    skip: "Skip to content",
    brandLabel: "Federico Fuffa, home",
    navLabel: "Main",
    nav: { work: "Work", about: "About", contact: "Contact" },
    langLabel: "Language",
    theme: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },

    title: "Federico Fuffa · Web & software",
    description: "Federico Fuffa. Web and software. Computer Science student at the University of Camerino. Selected work: Plinto Labs, Perno and Diiamoond.",
    ogAlt: "Federico Fuffa, web and software",
    jobTitle: "Web and software developer",
    personDescription: "Computer Science student at the University of Camerino. Web and software.",
    knowsAbout: ["Web development", "Technical SEO", "Web performance", "Responsive design"],

    heroTags: ["Web", "Software", "Digital"],
    heroSub: "Web and software developer. Fast, polished, optimized websites for businesses and professionals.",
    cta: { work: "See my projects", contact: "Let's work together" },
    country: "Italy",

    plinto: {
      aria: "Plinto Labs, digital studio. Visit plintolabs.it",
      kicker: "Digital studio",
      role: "Occasional self-employed worker at:",
      line: "Websites, software and systems for businesses and professionals.",
      go: "Visit Plinto Labs",
    },

    projects: {
      label: "Projects",
      perno: {
        kind: "Windows app",
        desc: "A <em>modular personal hub</em>: a digital home whose rooms you install and remove <em>as you like</em>.",
        aria: "Get Perno from the Microsoft Store",
        cta: "Get it from the Microsoft Store",
      },
      diiamoond: {
        kind: "Website",
        desc: "Portfolio for a Dublin music producer: <em>multi-platinum</em>, <em>multi-gold</em>, and a credit on a <em>Netflix film</em>.",
        aria: "Visit diiamoond.live",
        cta: "Visit diiamoond.live",
      },
      nicastro: {
        kind: "Website",
        desc: "Site for an <em>optometry and vision therapy</em> studio: clear content, <em>accessible</em> design, built for its patients.",
        status: "In progress",
      },
    },

    about: {
      label: "About",
      text: "I'm 19, a Computer Science student at the University of Camerino. I build websites and software.",
    },

    skills: {
      label: "Skills",
      // [name, highlight] — 1 = bold, 2 = dot only
      groups: [
        { t: "Web", l: [["HTML5 / CSS3", 1], ["JavaScript", 1], ["Astro", 1], ["Responsive Design", 1]] },
        { t: "Backend & Data", l: [["SQL", 1], ["PHP", 2], ["SMTP Configuration", 2], ["Form Validation", 2], ["Rate Limiting", 2]] },
        { t: "Design & Optimization", l: [["Technical SEO", 1], ["Web Performance", 1]] },
        { t: "Tools & Infrastructure", l: [["Git", 1], ["npm", 1], ["Linux / WSL", 1], ["FTP / Hosting / Deploy", 1], ["DNS Configuration", 1]] },
      ] as { t: string; l: [string, number][] }[],
    },

    contact: {
      label: "Contact",
      cv: "Download CV",
      cvAria: "Download my CV, PDF in Italian",
      cvMeta: "PDF · IT",
    },

    footer: { copy: "© 2026 Federico Fuffa.", rights: "All rights reserved.", role: "Occasional self-employed worker at:", top: "Back to top ↑" },
  },

  it: {
    skip: "Vai al contenuto",
    brandLabel: "Federico Fuffa, home",
    navLabel: "Principale",
    nav: { work: "Progetti", about: "Chi sono", contact: "Contatti" },
    langLabel: "Lingua",
    theme: { toDark: "Passa al tema scuro", toLight: "Passa al tema chiaro" },

    title: "Federico Fuffa · Web e software",
    description: "Federico Fuffa. Web e software. Studente di Informatica all'Università di Camerino. Progetti selezionati: Plinto Labs, Perno e Diiamoond.",
    ogAlt: "Federico Fuffa, web e software",
    jobTitle: "Sviluppatore web e software",
    personDescription: "Studente di Informatica all'Università di Camerino. Web e software.",
    knowsAbout: ["Sviluppo web", "SEO tecnica", "Prestazioni web", "Design responsive"],

    heroTags: ["Web", "Software", "Digitale"],
    heroSub: "Sviluppatore web e software. Siti veloci, curati e ottimizzati per aziende e professionisti.",
    cta: { work: "Scopri i miei progetti", contact: "Lavoriamo insieme" },
    country: "Italia",

    plinto: {
      aria: "Plinto Labs, studio digitale. Visita plintolabs.it",
      kicker: "Studio digitale",
      role: "Lavoratore autonomo occasionale presso:",
      line: "Siti web, software e sistemi per aziende e professionisti.",
      go: "Visita Plinto Labs",
    },

    projects: {
      label: "Progetti",
      perno: {
        kind: "App per Windows",
        desc: "Un <em>hub personale modulare</em>: una casa digitale di cui installi e rimuovi le stanze <em>come vuoi</em>.",
        aria: "Scarica Perno dal Microsoft Store",
        cta: "Scaricala dal Microsoft Store",
      },
      diiamoond: {
        kind: "Sito web",
        desc: "Portfolio per un producer musicale di Dublino: <em>multi-platino</em>, <em>multi-oro</em> e un credito in un <em>film Netflix</em>.",
        aria: "Visita diiamoond.live",
        cta: "Visita diiamoond.live",
      },
      nicastro: {
        kind: "Sito web",
        desc: "Sito per uno studio di <em>optometria e rieducazione visiva</em>: contenuti chiari, design <em>accessibile</em>, pensato per i suoi pazienti.",
        status: "In corso",
      },
    },

    about: {
      label: "Chi sono",
      text: "Ho 19 anni e studio Informatica all'Università di Camerino. Realizzo siti web e software.",
    },

    skills: {
      label: "Competenze",
      groups: [
        { t: "Web", l: [["HTML5 / CSS3", 1], ["JavaScript", 1], ["Astro", 1], ["Design responsive", 1]] },
        { t: "Backend e dati", l: [["SQL", 1], ["PHP", 2], ["Configurazione SMTP", 2], ["Validazione form", 2], ["Rate limiting", 2]] },
        { t: "Design e ottimizzazione", l: [["SEO tecnica", 1], ["Prestazioni web", 1]] },
        { t: "Strumenti e infrastruttura", l: [["Git", 1], ["npm", 1], ["Linux / WSL", 1], ["FTP / Hosting / Deploy", 1], ["Configurazione DNS", 1]] },
      ] as { t: string; l: [string, number][] }[],
    },

    contact: {
      label: "Contatti",
      cv: "Scarica CV",
      cvAria: "Scarica il mio CV, PDF in italiano",
      cvMeta: "PDF · IT",
    },

    footer: { copy: "© 2026 Federico Fuffa.", rights: "Tutti i diritti riservati.", role: "Lavoratore autonomo occasionale presso:", top: "Torna su ↑" },
  },
} as const;
