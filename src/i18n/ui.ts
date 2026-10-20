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
    nav: { work: "Work", perno: "Perno", reviews: "Reviews", about: "About", contact: "Contact" },
    menu: "Menu",
    menuClose: "Close",
    langLabel: "Language",

    title: "Federico Fuffa · Web developer in Matelica, Marche",
    description: "Federico Fuffa, web developer in Matelica, Marche. Fast, accessible websites and software for small businesses and professionals. Selected work: Plinto Labs and Diiamoond.",
    ogAlt: "Federico Fuffa, web and software",
    jobTitle: "Web and software developer",
    personDescription: "Web and software developer.",
    knowsAbout: ["Web development", "Technical SEO", "Web performance", "Responsive design"],

    heroTags: ["Web", "Software", "Digital"],
    heroSub: "Freelance web developer. Fast, polished, optimized websites for businesses and professionals.",
    cta: { work: "See my projects", contact: "Let's work together" },
    country: "Matelica, Marche, Italy",

    plinto: {
      aria: "Plinto Labs, digital studio. Visit plintolabs.it",
      kicker: "Digital studio",
      role: "Digital consultant for:",
      line: "Websites, software and systems for businesses and professionals.",
      go: "Visit Plinto Labs",
    },

    projects: {
      label: "Projects",
      lighthouse: { label: "Lighthouse", aria: "Lighthouse scores: performance 100, accessibility 100, best practices 100, SEO 100" },
      perno: {
        label: "Product",
        kind: "Visual identity, releases and distribution",
        eyebrow: ["Personal project", "Windows software"],
        desc: "<em>Perno</em> is a modular personal hub for Windows, designed to bring everyday tools and workflows into <em>one cohesive experience</em>.",
        sub: "I take care of its visual identity, web presence and release operations, managing its online information and distribution across GitHub and the Microsoft Store.",
        alt: "Perno logo",
        aria: "Get Perno from the Microsoft Store",
        cta: "Get it from the Microsoft Store",
        more: "Learn more about Perno",
        metaLabel: "Project details",
        meta: [
          { k: "Role", v: "Product & Digital Operations" },
          { k: "Focus", v: "Visual Identity, Web & Distribution" },
          { k: "Platform", v: "Windows" },
          { k: "Channels", v: "GitHub Releases, Microsoft Store" },
        ] as { k: string; v: string }[],
        respTitle: "Responsibilities",
        respLede: "The three areas I look after personally.",
        groups: [
          { t: "Visual Identity & Web Presence", s: "Identity, website & communication.", p: "I take care of Perno's visual identity and web presence, maintaining a consistent presentation across its website, product information and digital communication." },
          { t: "Releases & Distribution", s: "Publishing, assets & store submissions.", p: "I manage public releases on GitHub, oversee release assets and distribution materials, and handle publication-related activities through Microsoft Store and Partner Center." },
          { t: "Product Operations", s: "Information, documentation & upkeep.", p: "I maintain project information and supporting documentation, keep release-related content up to date, and coordinate the operational tasks needed to keep Perno's online presence and distribution channels current.", l: ["Checking that published packages match the declared version", "Following submission status and publishing updates", "Keeping GitHub and Store versions aligned, so users from every channel get the right package"] },
        ] as { t: string; s: string; p: string; l?: string[] }[],
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

    reviews: {
      label: "Reviews on Trustpilot",
      source: "on Trustpilot",
      avgOf: "average of {n} reviews",
      profile: "See the Trustpilot profile",
      one: "1 review",
      many: "{n} reviews",
      avgAria: "Average rating {avg} out of 5, from {n} reviews",
      starsAria: "{n} out of 5 stars",
      listAria: "Client reviews",
      slideAria: "Review {i} of {n}",
      prev: "Previous review",
      next: "Next review",
      goTo: "Go to review {i}",
      more: "Read the full review",
      less: "Show less",
      read: "Read on Trustpilot",
      all: "See all reviews on Trustpilot",
      leave: "Leave a review",
      anon: "Professional client",
    },

    about: {
      label: "About",
      text: "I <em>build</em> websites and software, from design to hosting.",
      more: "I work with <em>small businesses</em> and <em>professionals</em>: fast, accessible websites and software, plus hosting, domains and DNS handled for you, so you have one person to talk to from the first sketch to the live site.",
      skills: {
        label: "Skills",
        groups: [
          { t: "Front-end / Web", hi: true, l: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Astro", "Responsive Web Design", "UI/UX"] },
          { t: "Back-end & data", l: ["Node.js", "Nodemailer (SMTP)", "PHPMailer", "Form validation", "Rate limiting", "MySQL", "PHP"] },
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
      cv: { href: "/Federico_Fuffa_CV_EN_no-phone.pdf", label: "Download CV", meta: "PDF · EN", aria: "Download my CV, PDF in English" },
    },

    footer: { copy: "© 2026 Federico Fuffa.", rights: "All rights reserved.", role: "Digital consultant for:", top: "Back to top ↑", privacy: "Privacy Policy", cookies: "Cookie Policy", settings: "Cookie settings" },
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
    nav: { work: "Progetti", perno: "Perno", reviews: "Recensioni", about: "Chi sono", contact: "Contatti" },
    menu: "Menu",
    menuClose: "Chiudi",
    langLabel: "Lingua",

    title: "Federico Fuffa · Sviluppatore web a Matelica, Marche",
    description: "Federico Fuffa, sviluppatore web a Matelica, nelle Marche. Siti veloci e accessibili e software per piccole attività e professionisti. Progetti selezionati: Plinto Labs e Diiamoond.",
    ogAlt: "Federico Fuffa, web e software",
    jobTitle: "Sviluppatore web e software",
    personDescription: "Sviluppatore web e software.",
    knowsAbout: ["Sviluppo web", "SEO tecnica", "Prestazioni web", "Design responsive"],

    heroTags: ["Web", "Software", "Digitale"],
    heroSub: "Sviluppatore web freelance. Siti veloci, curati e ottimizzati per aziende e professionisti.",
    cta: { work: "Scopri i miei progetti", contact: "Lavoriamo insieme" },
    country: "Matelica, Marche, Italia",

    plinto: {
      aria: "Plinto Labs, studio digitale. Visita plintolabs.it",
      kicker: "Studio digitale",
      role: "Consulente digitale per:",
      line: "Siti web, software e sistemi per aziende e professionisti.",
      go: "Visita Plinto Labs",
    },

    projects: {
      label: "Progetti",
      lighthouse: { label: "Lighthouse", aria: "Punteggi Lighthouse: prestazioni 100, accessibilità 100, buone pratiche 100, SEO 100" },
      perno: {
        label: "Prodotto",
        kind: "Identità visiva, release e distribuzione",
        eyebrow: ["Progetto personale", "Software per Windows"],
        desc: "<em>Perno</em> è un hub personale modulare per Windows, pensato per riunire strumenti e flussi di lavoro quotidiani in <em>un'unica esperienza coerente</em>.",
        sub: "Mi occupo della sua identità visiva, della presenza web e delle operazioni di release, curandone le informazioni online e la distribuzione su GitHub e Microsoft Store.",
        alt: "Logo di Perno",
        aria: "Scarica Perno dal Microsoft Store",
        cta: "Scaricala dal Microsoft Store",
        more: "Scopri di più su Perno",
        metaLabel: "Dettagli del progetto",
        meta: [
          { k: "Ruolo", v: "Product & Digital Operations" },
          { k: "Focus", v: "Identità visiva, web e distribuzione" },
          { k: "Piattaforma", v: "Windows" },
          { k: "Canali", v: "GitHub Releases, Microsoft Store" },
        ] as { k: string; v: string }[],
        respTitle: "Responsabilità",
        respLede: "Le tre aree di cui mi occupo personalmente.",
        groups: [
          { t: "Identità visiva e presenza web", s: "Identità, sito e comunicazione.", p: "Mi occupo dell'identità visiva e della presenza web di Perno, mantenendo una presentazione coerente tra sito, informazioni di prodotto e comunicazione digitale." },
          { t: "Release e distribuzione", s: "Pubblicazione, file e Store.", p: "Gestisco le release pubbliche su GitHub, seguo i file di release e i materiali di distribuzione e curo le attività di pubblicazione tramite Microsoft Store e Partner Center." },
          { t: "Product Operations", s: "Informazioni, documentazione e manutenzione.", p: "Mantengo le informazioni di progetto e la documentazione di supporto, tengo aggiornati i contenuti legati alle release e coordino le attività operative necessarie a mantenere aggiornati la presenza online e i canali di distribuzione di Perno.", l: ["Verifica che i pacchetti pubblicati corrispondano alla versione dichiarata", "Controllo dello stato delle submission e pubblicazione degli aggiornamenti", "Allineamento tra versioni GitHub e Store, perché chi arriva da canali diversi riceva il pacchetto giusto"] },
        ] as { t: string; s: string; p: string; l?: string[] }[],
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

    reviews: {
      label: "Recensioni su Trustpilot",
      source: "su Trustpilot",
      avgOf: "media di {n} recensioni",
      profile: "Vedi il profilo Trustpilot",
      one: "1 recensione",
      many: "{n} recensioni",
      avgAria: "Valutazione media {avg} su 5, da {n} recensioni",
      starsAria: "{n} stelle su 5",
      listAria: "Recensioni dei clienti",
      slideAria: "Recensione {i} di {n}",
      prev: "Recensione precedente",
      next: "Recensione successiva",
      goTo: "Vai alla recensione {i}",
      more: "Leggi tutta la recensione",
      less: "Mostra meno",
      read: "Leggi su Trustpilot",
      all: "Vedi tutte le recensioni su Trustpilot",
      leave: "Lascia una recensione",
      anon: "Cliente professionale",
    },

    about: {
      label: "Chi sono",
      text: "<em>Realizzo</em> siti web e software, dal design all'hosting.",
      more: "Lavoro con <em>piccole attività</em> e <em>professionisti</em>: siti veloci e accessibili e software, più hosting, domini e DNS gestiti per te, così hai un unico referente dalla prima bozza al sito online.",
      skills: {
        label: "Competenze",
        groups: [
          { t: "Frontend / Web", hi: true, l: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Astro", "Responsive Web Design", "UI/UX"] },
          { t: "Backend e dati", l: ["Node.js", "Nodemailer (SMTP)", "PHPMailer", "Validazione form", "Rate limiting", "MySQL", "PHP"] },
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
      cv: { href: "/Federico_Fuffa_CV_IT_no-phone.pdf", label: "Scarica CV", meta: "PDF · IT", aria: "Scarica il mio CV, PDF in italiano" },
    },

    footer: { copy: "© 2026 Federico Fuffa.", rights: "Tutti i diritti riservati.", role: "Consulente digitale per:", top: "Torna su ↑", privacy: "Privacy Policy", cookies: "Cookie Policy", settings: "Impostazioni cookie" },
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
