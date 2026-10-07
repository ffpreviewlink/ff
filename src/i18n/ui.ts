export type Lang = "en" | "it";
export const langs: Lang[] = ["en", "it"];
export const defaultLang: Lang = "en";

/** Home page path for each language (trailingSlash is "always"). */
export const home: Record<Lang, string> = { en: "/", it: "/it/" };

/** Legal pages path for each language. */
export const legal: Record<"privacy" | "cookie", Record<Lang, string>> = {
  privacy: { en: "/privacy-policy/", it: "/it/privacy-policy/" },
  cookie: { en: "/cookie-policy/", it: "/it/cookie-policy/" },
};

export const locale: Record<Lang, string> = { en: "en_US", it: "it_IT" };

// Strings marked "html" are trusted constants rendered with set:html (they contain <em>).
export const ui = {
  en: {
    skip: "Skip to content",
    brandLabel: "Federico Fuffa, home",
    navLabel: "Main",
    nav: { work: "Work", about: "About", contact: "Contact" },
    langLabel: "Language",

    title: "Federico Fuffa · Web developer in Matelica, Marche",
    description: "Federico Fuffa, web developer in Matelica, Marche. Fast, accessible websites and software for small businesses and professionals. Selected work: Plinto Labs, Perno and Diiamoond.",
    ogAlt: "Federico Fuffa, web and software",
    jobTitle: "Web and software developer",
    personDescription: "Computer Science student at the University of Camerino. Web and software.",
    knowsAbout: ["Web development", "Technical SEO", "Web performance", "Responsive design"],

    heroTags: ["Web", "Software", "Digital"],
    heroSub: "Web and software developer. Fast, polished, optimized websites for businesses and professionals.",
    cta: { work: "See my projects", contact: "Let's work together" },
    country: "Matelica, Marche, Italy",

    plinto: {
      aria: "Plinto Labs, digital studio. Visit plintolabs.it",
      kicker: "Digital studio",
      role: "Occasional self-employed worker at:",
      line: "Websites, software and systems for businesses and professionals.",
      go: "Visit Plinto Labs",
    },

    projects: {
      label: "Projects",
      lighthouse: { label: "Lighthouse", aria: "Lighthouse scores: performance 100, accessibility 100, best practices 100, SEO 100" },
      perno: {
        kind: "Windows app",
        desc: "A <em>modular personal hub</em>: a digital home whose rooms you install and remove <em>as you like</em>.",
        alt: "Perno logo",
        aria: "Get Perno from the Microsoft Store",
        cta: "Get it from the Microsoft Store",
        more: "Learn more about Perno",
      },
      diiamoond: {
        kind: "Website",
        desc: "Portfolio for a <em>Dublin</em> music producer: <em>multi-platinum</em>, <em>multi-gold</em>, and a credit on a <em>Netflix film</em>.",
        alt: "Diiamoond logo",
        aria: "Visit diiamoond.live",
        cta: "Visit diiamoond.live",
      },
      nicastro: {
        kind: "Website",
        desc: "Website for an <em>optometry and vision therapy</em> studio: clear content, <em>accessible</em> design, built for its patients.",
        status: "In progress",
      },
      boarelli: {
        kind: "Website",
        desc: "Website for a <em>Swiss</em> company offering <em>solutions for industrial automation</em>.",
        alt: "Boarelli Automazioni logo",
        aria: "Visit boarelliautomazioni.ch",
        cta: "Visit boarelliautomazioni.ch",
      },
    },

    about: {
      label: "About",
      text: "I'm a Computer Science student at the University of Camerino. I <em>build</em> websites and software.",
      more: "I work with <em>small businesses</em> and <em>professionals</em>: fast, accessible websites and software, plus hosting, domains and DNS handled for you, so you have one person to talk to from the first sketch to the live site.",
      skills: {
        label: "Skills",
        groups: [
          { t: "Front-end / Web", hi: true, l: ["HTML5", "CSS3", "JavaScript", "Astro", "Responsive Web Design", "UI/UX"] },
          { t: "Back-end & data", l: ["Node.js", "Nodemailer (SMTP)", "Form validation", "Rate limiting", "MySQL", "PHP"] },
          { t: "Infrastructure & deployment", hi: true, l: ["Git", "GitHub", "GitHub Pages", "Linux (Debian, WSL)", "npm", "DNS", "DNS configuration", "Cloudflare (Tunnel)", "Production build", "Hosting / FTP"] },
          { t: "SEO & performance", hi: true, l: ["Meta tags", "Heading structure (H1)", "Minification and optimization", "Google Search Console", "Analytics", "Accessibility", "Technical SEO", "Web performance"] },
        ] as { t: string; l: string[]; hi?: boolean }[],
      },
    },

    skills: {
      label: "What you get",
      items: [
        { t: "A fast site, on every device", d: "Lightweight pages that open in a blink on phone, tablet and computer, and are easy for everyone to use.", tags: ["Fast", "Responsive", "Accessible"] },
        { t: "Ready to be found on Google", d: "I build the site so that search engines understand who you are, what you do and where: careful titles, meta tags and indexing.", tags: ["Technical SEO"] },
        { t: "Enquiries that reach you, spam excluded", d: "Whoever writes to you from the site lands straight in your inbox, and unwanted messages are blocked.", tags: ["Contact form", "Anti-spam"] },
        { t: "Hosting, domain and DNS: handled", d: "I set up and manage everything, from the first sketch to the live site, so you have a single point of contact.", tags: ["One point of contact"] },
      ] as { t: string; d: string; tags: string[] }[],
    },

    contact: {
      label: "Contact",
      cv: { href: "/Federico_Fuffa_CV_EN.pdf", label: "Download CV", meta: "PDF · EN", aria: "Download my CV, PDF in English" },
    },

    footer: { copy: "© 2026 Federico Fuffa.", rights: "All rights reserved.", role: "Occasional self-employed worker at:", top: "Back to top ↑", privacy: "Privacy Policy", cookies: "Cookie Policy", settings: "Cookie settings" },
    cookie: {
      label: "Cookie notice",
      title: "Cookies",
      text: "With your consent I use Google Analytics to measure how the site is used, in aggregate. Nothing is loaded until you choose, and you can change your mind at any time.",
      accept: "Accept",
      reject: "Reject",
      more: "Cookie Policy",
    },
  },

  it: {
    skip: "Vai al contenuto",
    brandLabel: "Federico Fuffa, home",
    navLabel: "Principale",
    nav: { work: "Progetti", about: "Chi sono", contact: "Contatti" },
    langLabel: "Lingua",

    title: "Federico Fuffa · Sviluppatore web a Matelica, Marche",
    description: "Federico Fuffa, sviluppatore web a Matelica, nelle Marche. Siti veloci e accessibili e software per piccole attività e professionisti. Progetti selezionati: Plinto Labs, Perno e Diiamoond.",
    ogAlt: "Federico Fuffa, web e software",
    jobTitle: "Sviluppatore web e software",
    personDescription: "Studente di Informatica all'Università di Camerino. Web e software.",
    knowsAbout: ["Sviluppo web", "SEO tecnica", "Prestazioni web", "Design responsive"],

    heroTags: ["Web", "Software", "Digitale"],
    heroSub: "Sviluppatore web e software. Siti veloci, curati e ottimizzati per aziende e professionisti.",
    cta: { work: "Scopri i miei progetti", contact: "Lavoriamo insieme" },
    country: "Matelica, Marche, Italia",

    plinto: {
      aria: "Plinto Labs, studio digitale. Visita plintolabs.it",
      kicker: "Studio digitale",
      role: "Lavoratore autonomo occasionale presso:",
      line: "Siti web, software e sistemi per aziende e professionisti.",
      go: "Visita Plinto Labs",
    },

    projects: {
      label: "Progetti",
      lighthouse: { label: "Lighthouse", aria: "Punteggi Lighthouse: prestazioni 100, accessibilità 100, buone pratiche 100, SEO 100" },
      perno: {
        kind: "App per Windows",
        desc: "Un <em>hub personale modulare</em>: una casa digitale di cui installi e rimuovi le stanze <em>come vuoi</em>.",
        alt: "Logo di Perno",
        aria: "Scarica Perno dal Microsoft Store",
        cta: "Scaricala dal Microsoft Store",
        more: "Scopri di più su Perno",
      },
      diiamoond: {
        kind: "Sito web",
        desc: "Portfolio per un producer musicale di <em>Dublino</em>: <em>multi-platino</em>, <em>multi-oro</em> e un credito in un <em>film Netflix</em>.",
        alt: "Logo di Diiamoond",
        aria: "Visita diiamoond.live",
        cta: "Visita diiamoond.live",
      },
      nicastro: {
        kind: "Sito web",
        desc: "Sito per uno studio di <em>optometria e rieducazione visiva</em>: contenuti chiari, design <em>accessibile</em>, pensato per i suoi pazienti.",
        status: "In corso",
      },
      boarelli: {
        kind: "Sito web",
        desc: "Sito per un'azienda <em>svizzera</em> che realizza <em>soluzioni per l'automazione industriale</em>.",
        alt: "Logo di Boarelli Automazioni",
        aria: "Visita boarelliautomazioni.ch",
        cta: "Visita boarelliautomazioni.ch",
      },
    },

    about: {
      label: "Chi sono",
      text: "Studio Informatica all'Università di Camerino. <em>Realizzo</em> siti web e software.",
      more: "Lavoro con <em>piccole attività</em> e <em>professionisti</em>: siti veloci e accessibili e software, più hosting, domini e DNS gestiti per te, così hai un unico referente dalla prima bozza al sito online.",
      skills: {
        label: "Competenze",
        groups: [
          { t: "Frontend / Web", hi: true, l: ["HTML5", "CSS3", "JavaScript", "Astro", "Responsive Web Design", "UI/UX"] },
          { t: "Backend e dati", l: ["Node.js", "Nodemailer (SMTP)", "Validazione form", "Rate limiting", "MySQL", "PHP"] },
          { t: "Infrastruttura e deploy", hi: true, l: ["Git", "GitHub", "GitHub Pages", "Linux (Debian, WSL)", "npm", "DNS", "Configurazione DNS", "Cloudflare (Tunnel)", "Build di produzione", "Hosting / FTP"] },
          { t: "SEO e prestazioni", hi: true, l: ["Meta tag", "Struttura heading (H1)", "Minificazione e ottimizzazione", "Google Search Console", "Analytics", "Accessibilità", "SEO tecnica", "Prestazioni web"] },
        ] as { t: string; l: string[]; hi?: boolean }[],
      },
    },

    skills: {
      label: "Cosa ottieni",
      items: [
        { t: "Un sito veloce, su ogni dispositivo", d: "Pagine leggere che si aprono in un attimo da telefono, tablet e computer, facili da usare per tutti.", tags: ["Veloce", "Responsive", "Accessibile"] },
        { t: "Pronto per essere trovato su Google", d: "Costruisco il sito perché i motori di ricerca capiscano chi sei, cosa fai e dove: titoli curati, meta tag e indicizzazione.", tags: ["SEO tecnica"] },
        { t: "Richieste di contatto che arrivano, spam escluso", d: "Chi ti scrive dal sito finisce direttamente nella tua casella email, e i messaggi indesiderati vengono bloccati.", tags: ["Form di contatto", "Anti-spam"] },
        { t: "Hosting, dominio e DNS: ci penso io", d: "Configuro e gestisco tutto io, dalla prima bozza al sito online, così hai un solo referente.", tags: ["Un unico referente"] },
      ] as { t: string; d: string; tags: string[] }[],
    },

    contact: {
      label: "Contatti",
      cv: { href: "/Federico_Fuffa_CV_IT.pdf", label: "Scarica CV", meta: "PDF · IT", aria: "Scarica il mio CV, PDF in italiano" },
    },

    footer: { copy: "© 2026 Federico Fuffa.", rights: "Tutti i diritti riservati.", role: "Lavoratore autonomo occasionale presso:", top: "Torna su ↑", privacy: "Privacy Policy", cookies: "Cookie Policy", settings: "Impostazioni cookie" },
    cookie: {
      label: "Informativa cookie",
      title: "Cookie",
      text: "Con il tuo consenso uso Google Analytics per misurare, in forma aggregata, come viene usato il sito. Nulla viene caricato finché non scegli, e puoi cambiare idea in qualsiasi momento.",
      accept: "Accetta",
      reject: "Rifiuta",
      more: "Cookie Policy",
    },
  },
} as const;
