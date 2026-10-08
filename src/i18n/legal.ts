import type { Lang } from "./ui";

export type Section = { h: string; html: string };
export type Doc = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  updated: string;
  intro: string;
  sections: Section[];
};

// Strings are trusted constants rendered with set:html.
const mail = '<a class="ul" href="mailto:info@federicofuffa.it">info@federicofuffa.it</a>';
const CK = "G-E0BFBVL026".replace("G-", "");

export const legalDocs: Record<"privacy" | "cookie", Record<Lang, Doc>> = {
  privacy: {
    it: {
      title: "Privacy Policy · Federico Fuffa",
      description: "Informativa sul trattamento dei dati personali degli utenti del sito federicofuffa.it, ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679.",
      kicker: "Informativa privacy",
      h1: "Privacy Policy",
      updated: "Ultimo aggiornamento: 5 ottobre 2026",
      intro: "Questa informativa descrive come vengono trattati i dati personali di chi visita <strong>federicofuffa.it</strong>, ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (“GDPR”) e del D.Lgs. 196/2003 (“Codice Privacy”). Il sito è un sito personale e non offre registrazione, account, form, acquisti o commenti.",
      sections: [
        {
          h: "Titolare del trattamento",
          html: `<p>Il titolare del trattamento è <strong>Federico Fuffa</strong>, persona fisica, titolare del sito federicofuffa.it. Contatto: ${mail}.</p>
<p>Nel footer e nella home del sito compare il riferimento a <a class="ul" href="https://www.plintolabs.it/" target="_blank" rel="noopener">Plinto Labs</a>, studio con cui il titolare collabora come consulente digitale. Plinto Labs non è titolare né contitolare dei trattamenti descritti in questa pagina e non riceve dati attraverso il sito: il collegamento è un semplice link esterno.</p>`,
        },
        {
          h: "Tipologie di dati trattati",
          html: `<h3>Dati di navigazione</h3>
<p>Quando visiti il sito, il fornitore di hosting e la tua connessione tecnica comportano necessariamente il trattamento di dati come indirizzo IP, data e ora della richiesta, pagina richiesta, user agent e referrer. Il sito non contiene codice che li registri o li riutilizzi: sono gestiti dall'infrastruttura di hosting (vedi “Destinatari”).</p>
<p>Il sito, inoltre, mostra la versione più recente dell'app Perno interrogando direttamente dal tuo browser l'API pubblica di GitHub (<code>api.github.com</code>). In questa richiesta GitHub riceve il tuo indirizzo IP e i dati tecnici del browser. La risposta è conservata nel browser per circa un'ora (vedi Cookie Policy) e la richiesta non viene ripetuta nel frattempo.</p>
<h3>Dati forniti volontariamente dall'utente</h3>
<p>Il sito non ha form di contatto. Se scrivi a ${mail}, il titolare tratta l'indirizzo email, il contenuto del messaggio e ogni altro dato che scegli di comunicare, al solo scopo di risponderti.</p>
<h3>Dati raccolti tramite strumenti di misurazione (solo con consenso)</h3>
<p>Se accetti i cookie di misurazione, Google Analytics 4 raccoglie in forma aggregata e pseudonima informazioni sull'uso del sito: pagine visitate, eventi di interazione, tipo di dispositivo e browser, lingua, provenienza e posizione approssimativa, oltre a identificatori memorizzati nei cookie. Se rifiuti, o finché non scegli, Google Analytics non viene caricato.</p>
<h3>Download del CV</h3>
<p>Il pulsante “Scarica CV” scarica un file PDF statico dal sito. Il sito non registra né trasmette dati per questa azione. Se hai acconsentito a Google Analytics, l'interazione può essere misurata in base alla configurazione dello strumento.</p>`,
        },
        {
          h: "Finalità del trattamento",
          html: `<ul>
<li>consentire la consultazione del sito, la sua sicurezza e il suo corretto funzionamento (inclusa la visualizzazione della versione di Perno);</li>
<li>rispondere alle comunicazioni inviate via email;</li>
<li>solo con il tuo consenso: misurare in forma statistica l'uso del sito per migliorarlo.</li>
</ul>
<p>I dati non sono usati per profilazione, marketing o decisioni automatizzate, e non sono venduti.</p>`,
        },
        {
          h: "Base giuridica",
          html: `<ul>
<li><strong>Navigazione e funzionamento del sito, versione di Perno</strong>: legittimo interesse del titolare a erogare e mettere in sicurezza il sito (art. 6, par. 1, lett. f GDPR).</li>
<li><strong>Comunicazioni via email</strong>: esecuzione di misure precontrattuali adottate su tua richiesta, quando chiedi informazioni su una collaborazione (art. 6, par. 1, lett. b), oppure legittimo interesse a rispondere alle richieste ricevute (lett. f).</li>
<li><strong>Google Analytics</strong>: consenso (art. 6, par. 1, lett. a GDPR e art. 122 del Codice Privacy), che puoi rifiutare o revocare in ogni momento senza conseguenze sulla navigazione.</li>
</ul>`,
        },
        {
          h: "Modalità del trattamento",
          html: `<p>Il trattamento avviene con strumenti informatici, con misure tecniche adeguate. Il sito è servito via HTTPS e non richiede la creazione di un account. Il conferimento dei dati di contatto è facoltativo: senza di essi non potrò però rispondere alla tua richiesta.</p>`,
        },
        {
          h: "Conservazione dei dati",
          html: `<ul>
<li><strong>Email</strong>: per il tempo necessario a dare seguito alla richiesta e a gestire l'eventuale conseguente rapporto, salvo obblighi di legge.</li>
<li><strong>Google Analytics</strong>: i cookie hanno la durata indicata nella Cookie Policy; i dati sugli eventi sono conservati nell'account Analytics del titolare per il periodo impostato dal titolare, non superiore a 14 mesi.</li>
<li><strong>Scelta sui cookie</strong>: conservata nel tuo browser per 180 giorni.</li>
<li><strong>Dati di navigazione e log</strong>: conservati dal fornitore di hosting secondo le proprie politiche; il titolare non li tiene.</li>
</ul>`,
        },
        {
          h: "Destinatari dei dati",
          html: `<p>I dati possono essere trattati dai seguenti soggetti, che agiscono come fornitori o responsabili del trattamento:</p>
<ul>
<li><strong>GitHub</strong> (GitHub, Inc., gruppo Microsoft): hosting del sito tramite GitHub Pages e API pubblica usata per la versione di Perno.</li>
<li><strong>Google</strong> (Google Ireland Limited, per gli utenti nello Spazio economico europeo): Google Analytics, solo con consenso.</li>
<li>il fornitore del servizio di posta elettronica del dominio federicofuffa.it, per la ricezione delle email.</li>
</ul>
<p>I dati non sono diffusi. Possono essere comunicati ad autorità pubbliche solo se richiesto dalla legge.</p>`,
        },
        {
          h: "Servizi di terze parti",
          html: `<ul>
<li><strong>GitHub Pages / GitHub API</strong>: hosting e lettura della versione di Perno (<a class="ul" href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">informativa di GitHub</a>).</li>
<li><strong>Google Analytics 4</strong>: misurazione statistica, solo con consenso (<a class="ul" href="https://policies.google.com/privacy" target="_blank" rel="noopener">informativa di Google</a>).</li>
</ul>
<p>Il sito <strong>non</strong> usa font o librerie caricati da CDN esterni, mappe, video incorporati, pulsanti social, pixel pubblicitari, né altri strumenti di tracciamento. I font sono ospitati sul sito stesso.</p>
<p>Il sito contiene link verso <a class="ul" href="https://www.linkedin.com/in/federico-fuffa-741a19331/" target="_blank" rel="noopener">LinkedIn</a>, il Microsoft Store, <a class="ul" href="https://www.plintolabs.it/" target="_blank" rel="noopener">Plinto Labs</a> e <a class="ul" href="https://diiamoond.live/" target="_blank" rel="noopener">Diiamoond</a>. Sono semplici collegamenti: i dati vengono trattati da quei siti, con le loro informative, solo se scegli di aprirli.</p>`,
        },
        {
          h: "Trasferimenti di dati verso Paesi terzi",
          html: `<p>GitHub e Google possono trattare dati negli Stati Uniti. Tali trasferimenti si fondano sulla decisione di adeguatezza della Commissione europea del 10 luglio 2023 sul EU-US Data Privacy Framework, per i soggetti certificati, e/o su clausole contrattuali standard. Per saperne di più: <a class="ul" href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en" target="_blank" rel="noopener">Commissione europea</a>.</p>`,
        },
        {
          h: "Cookie e strumenti di tracciamento",
          html: `<p>Il sito usa <strong>strumenti tecnici</strong> (cache della versione di Perno, memorizzazione della tua scelta sui cookie) che non richiedono consenso, e <strong>Google Analytics</strong>, che viene attivato solo dopo il tuo consenso. Il dettaglio è nella <a class="ul" href="/it/cookie-policy/">Cookie Policy</a>. Puoi cambiare la scelta in ogni momento da “Impostazioni cookie” nel footer.</p>`,
        },
        {
          h: "Diritti dell'interessato",
          html: `<p>Hai diritto di ottenere dal titolare, nei casi previsti dal GDPR: accesso ai tuoi dati (art. 15), rettifica (art. 16), cancellazione (art. 17), limitazione (art. 18), portabilità (art. 20), opposizione al trattamento fondato sul legittimo interesse (art. 21) e revoca del consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento già avvenuto (art. 7).</p>
<p>Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (<a class="ul" href="https://www.garanteprivacy.it" target="_blank" rel="noopener">garanteprivacy.it</a>) o all'autorità di controllo del tuo Paese di residenza.</p>`,
        },
        {
          h: "Come esercitare i propri diritti",
          html: `<p>Scrivi a ${mail}. Risponderò senza ingiustificato ritardo e comunque entro un mese dalla richiesta, salvo proroga prevista dalla legge. Per tutelare i tuoi dati posso chiederti di verificare la tua identità.</p>
<p>Per i dati trattati da GitHub o Google puoi rivolgerti anche direttamente a questi soggetti.</p>`,
        },
        {
          h: "Aggiornamenti della Privacy Policy",
          html: `<p>Questa informativa può essere aggiornata in caso di modifiche al sito o alla normativa. La data in cima alla pagina indica l'ultima revisione. Le versioni precedenti non sono archiviate.</p>`,
        },
      ],
    },
    en: {
      title: "Privacy Policy · Federico Fuffa",
      description: "How personal data of visitors to federicofuffa.it is processed, under Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR).",
      kicker: "Privacy notice",
      h1: "Privacy Policy",
      updated: "Last updated: 5 October 2026",
      intro: "This notice explains how personal data of visitors to <strong>federicofuffa.it</strong> is processed, under Articles 13 and 14 of Regulation (EU) 2016/679 (“GDPR”) and Italian Legislative Decree 196/2003. This is a personal website: there is no sign-up, account, form, shop or comment section.",
      sections: [
        {
          h: "Data controller",
          html: `<p>The data controller is <strong>Federico Fuffa</strong>, an individual and the owner of federicofuffa.it. Contact: ${mail}.</p>
<p>The footer and the home page mention <a class="ul" href="https://www.plintolabs.it/" target="_blank" rel="noopener">Plinto Labs</a>, a studio with which the controller collaborates as a digital consultant. Plinto Labs is neither controller nor joint controller of the processing described here and receives no data through this site: the mention is a plain external link.</p>`,
        },
        {
          h: "Types of data processed",
          html: `<h3>Browsing data</h3>
<p>When you visit the site, the hosting provider and your technical connection necessarily involve processing data such as IP address, request date and time, requested page, user agent and referrer. The site contains no code that records or reuses them: they are handled by the hosting infrastructure (see “Recipients”).</p>
<p>The site also shows the latest version of the Perno app by querying GitHub's public API (<code>api.github.com</code>) directly from your browser. In that request GitHub receives your IP address and browser technical data. The response is kept in your browser for about an hour (see the Cookie Policy) and the request is not repeated in the meantime.</p>
<h3>Data you provide voluntarily</h3>
<p>The site has no contact form. If you write to ${mail}, the controller processes your email address, the content of your message and anything else you choose to share, only to reply to you.</p>
<h3>Data collected through measurement tools (with consent only)</h3>
<p>If you accept measurement cookies, Google Analytics 4 collects aggregated, pseudonymous information about how the site is used: pages viewed, interaction events, device and browser type, language, referral source and approximate location, plus identifiers stored in cookies. If you decline, or until you choose, Google Analytics is not loaded.</p>
<h3>CV download</h3>
<p>The “Download CV” button downloads a static PDF file from the site. The site does not record or transmit data for this action. If you have consented to Google Analytics, the interaction may be measured depending on the tool's configuration.</p>`,
        },
        {
          h: "Purposes",
          html: `<ul>
<li>to let you browse the site and keep it secure and working properly (including displaying the Perno version);</li>
<li>to reply to messages sent by email;</li>
<li>only with your consent: to measure site usage statistically in order to improve it.</li>
</ul>
<p>Data is not used for profiling, marketing or automated decisions, and is not sold.</p>`,
        },
        {
          h: "Legal basis",
          html: `<ul>
<li><strong>Browsing and site operation, Perno version</strong>: the controller's legitimate interest in providing and securing the site (Art. 6(1)(f) GDPR).</li>
<li><strong>Email communications</strong>: steps taken at your request prior to entering into a contract, when you ask about a collaboration (Art. 6(1)(b)), or the legitimate interest in answering requests received (point (f)).</li>
<li><strong>Google Analytics</strong>: consent (Art. 6(1)(a) GDPR and Art. 122 of the Italian Privacy Code), which you can decline or withdraw at any time without any effect on browsing.</li>
</ul>`,
        },
        {
          h: "How data is processed",
          html: `<p>Processing is carried out with electronic tools and appropriate technical measures. The site is served over HTTPS and does not require an account. Providing contact details is optional, but without them I cannot reply to your request.</p>`,
        },
        {
          h: "Retention",
          html: `<ul>
<li><strong>Email</strong>: for as long as needed to follow up on your request and manage any resulting relationship, unless the law requires otherwise.</li>
<li><strong>Google Analytics</strong>: cookies last as stated in the Cookie Policy; event data is kept in the controller's Analytics account for the period set by the controller, no longer than 14 months.</li>
<li><strong>Your cookie choice</strong>: kept in your browser for 180 days.</li>
<li><strong>Browsing data and logs</strong>: kept by the hosting provider under its own policies; the controller does not keep them.</li>
</ul>`,
        },
        {
          h: "Recipients",
          html: `<p>Data may be processed by the following providers, acting as processors or service providers:</p>
<ul>
<li><strong>GitHub</strong> (GitHub, Inc., Microsoft group): site hosting via GitHub Pages and the public API used for the Perno version.</li>
<li><strong>Google</strong> (Google Ireland Limited, for users in the European Economic Area): Google Analytics, with consent only.</li>
<li>the email service provider of the federicofuffa.it domain, for receiving emails.</li>
</ul>
<p>Data is not disseminated. It may be disclosed to public authorities only where required by law.</p>`,
        },
        {
          h: "Third-party services",
          html: `<ul>
<li><strong>GitHub Pages / GitHub API</strong>: hosting and reading the Perno version (<a class="ul" href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub privacy statement</a>).</li>
<li><strong>Google Analytics 4</strong>: statistical measurement, with consent only (<a class="ul" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google privacy policy</a>).</li>
</ul>
<p>The site does <strong>not</strong> use fonts or libraries loaded from external CDNs, maps, embedded videos, social buttons, advertising pixels or any other tracking tools. Fonts are hosted on the site itself.</p>
<p>The site links to <a class="ul" href="https://www.linkedin.com/in/federico-fuffa-741a19331/" target="_blank" rel="noopener">LinkedIn</a>, the Microsoft Store, <a class="ul" href="https://www.plintolabs.it/" target="_blank" rel="noopener">Plinto Labs</a> and <a class="ul" href="https://diiamoond.live/" target="_blank" rel="noopener">Diiamoond</a>. These are plain links: those sites process data under their own notices only if you choose to open them.</p>`,
        },
        {
          h: "Transfers to third countries",
          html: `<p>GitHub and Google may process data in the United States. Such transfers rely on the European Commission's adequacy decision of 10 July 2023 on the EU-US Data Privacy Framework for certified organisations, and/or on standard contractual clauses. More information: <a class="ul" href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en" target="_blank" rel="noopener">European Commission</a>.</p>`,
        },
        {
          h: "Cookies and tracking tools",
          html: `<p>The site uses <strong>technical tools</strong> (Perno version cache, storing your cookie choice) that do not require consent, and <strong>Google Analytics</strong>, which is activated only after you consent. Details are in the <a class="ul" href="/cookie-policy/">Cookie Policy</a>. You can change your choice at any time from “Cookie settings” in the footer.</p>`,
        },
        {
          h: "Your rights",
          html: `<p>Under the GDPR you may obtain from the controller: access to your data (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), portability (Art. 20), objection to processing based on legitimate interest (Art. 21) and withdrawal of consent at any time, without affecting the lawfulness of processing already carried out (Art. 7).</p>
<p>You also have the right to lodge a complaint with the Italian data protection authority (<a class="ul" href="https://www.garanteprivacy.it" target="_blank" rel="noopener">garanteprivacy.it</a>) or with the supervisory authority of your country of residence.</p>`,
        },
        {
          h: "How to exercise your rights",
          html: `<p>Write to ${mail}. I will reply without undue delay and in any case within one month of the request, unless the law allows an extension. To protect your data I may ask you to verify your identity.</p>
<p>For data processed by GitHub or Google you can also contact them directly.</p>`,
        },
        {
          h: "Updates to this notice",
          html: `<p>This notice may be updated if the site or the law changes. The date at the top shows the latest revision. Earlier versions are not archived.</p>`,
        },
      ],
    },
  },
  cookie: {
    it: {
      title: "Cookie Policy · Federico Fuffa",
      description: "Quali cookie e strumenti di memorizzazione usa federicofuffa.it, per quali finalità e per quanto tempo.",
      kicker: "Informativa cookie",
      h1: "Cookie Policy",
      updated: "Ultimo aggiornamento: 5 ottobre 2026",
      intro: "Questa pagina integra la <a class=\"ul\" href=\"/it/privacy-policy/\">Privacy Policy</a> e descrive i cookie e gli strumenti analoghi usati da <strong>federicofuffa.it</strong>, ai sensi dell'art. 122 del D.Lgs. 196/2003 e delle Linee guida cookie e altri strumenti di tracciamento del Garante per la protezione dei dati personali del 10 giugno 2021.",
      sections: [
        {
          h: "In breve",
          html: `<p>Il sito usa un solo strumento che richiede consenso: <strong>Google Analytics 4</strong>, caricato solo se premi “Accetta”. Prima della tua scelta, e se rifiuti, non viene caricato nessuno script di Google e non vengono impostati cookie di misurazione. Non sono usati cookie di marketing o profilazione.</p>`,
        },
        {
          h: "Cookie che richiedono consenso",
          html: `<p>Impostati da Google Analytics 4 (Google Ireland Limited / Google LLC) sul dominio federicofuffa.it, solo dopo il consenso. Finalità: misurare in forma statistica come viene usato il sito (analytics). Sono cookie di prima parte nel dominio, ma generati dallo script di terza parte.</p>
<div class="tbl"><table>
<thead><tr><th>Nome</th><th>Finalità</th><th>Durata</th><th>Tipo</th></tr></thead>
<tbody>
<tr><td data-label="Nome"><code>_ga</code></td><td data-label="Finalità">Distingue gli utenti in modo pseudonimo per le statistiche</td><td data-label="Durata">Fino a 2 anni</td><td data-label="Tipo">Analitico, con consenso</td></tr>
<tr><td data-label="Nome"><code>_ga_${CK}</code></td><td data-label="Finalità">Mantiene lo stato della sessione di misurazione</td><td data-label="Durata">Fino a 2 anni</td><td data-label="Tipo">Analitico, con consenso</td></tr>
</tbody></table></div>
<p>Le durate sono quelle predefinite documentate da Google. Google può trattare i dati negli Stati Uniti: vedi la Privacy Policy, sezione “Trasferimenti di dati verso Paesi terzi”. Informativa di Google: <a class="ul" href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">policies.google.com</a>. Puoi anche impedire la misurazione con il <a class="ul" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">componente aggiuntivo di opt-out</a>.</p>`,
        },
        {
          h: "Strumenti tecnici (senza consenso)",
          html: `<p>Memorizzati nel browser (non sono cookie HTTP) e usati solo per far funzionare il sito. Non vengono inviati a nessun server e non servono a tracciarti.</p>
<div class="tbl"><table>
<thead><tr><th>Nome</th><th>Finalità</th><th>Durata</th><th>Tipo</th></tr></thead>
<tbody>
<tr><td data-label="Nome"><code>perno-ver</code> (sessionStorage)</td><td data-label="Finalità">Tiene in cache per un'ora la versione di Perno letta da GitHub, per non ripetere la richiesta</td><td data-label="Durata">Sessione del browser (validità 1 ora)</td><td data-label="Tipo">Tecnico</td></tr>
<tr><td data-label="Nome"><code>cookie-consent</code> (localStorage)</td><td data-label="Finalità">Ricorda la tua scelta sui cookie</td><td data-label="Durata">180 giorni</td><td data-label="Tipo">Tecnico</td></tr>
</tbody></table></div>`,
        },
        {
          h: "Altri strumenti",
          html: `<p>Il sito non usa font, script, video o mappe di terze parti che impostino cookie, né pulsanti social, né pixel pubblicitari. I link a LinkedIn, Microsoft Store, Plinto Labs e Diiamoond portano a siti esterni con proprie politiche, che si applicano solo se li apri.</p>`,
        },
        {
          h: "Come gestire o cambiare la scelta",
          html: `<p>Puoi accettare o rifiutare Google Analytics dal banner e cambiare idea in qualsiasi momento con “Impostazioni cookie” nel footer: se rifiuti dopo aver accettato, i cookie di misurazione vengono eliminati. La scelta è ripresentata dopo 180 giorni. Puoi anche cancellare o bloccare i cookie dalle impostazioni del tuo browser.</p>`,
        },
        {
          h: "Titolare e contatti",
          html: `<p>Titolare del trattamento: Federico Fuffa, ${mail}. Per i tuoi diritti vedi la <a class="ul" href="/it/privacy-policy/">Privacy Policy</a>.</p>`,
        },
      ],
    },
    en: {
      title: "Cookie Policy · Federico Fuffa",
      description: "Which cookies and storage tools federicofuffa.it uses, for what purpose and for how long.",
      kicker: "Cookie notice",
      h1: "Cookie Policy",
      updated: "Last updated: 5 October 2026",
      intro: "This page complements the <a class=\"ul\" href=\"/privacy-policy/\">Privacy Policy</a> and describes the cookies and similar tools used by <strong>federicofuffa.it</strong>, under Art. 122 of Italian Legislative Decree 196/2003 and the Italian data protection authority's Guidelines on cookies and other tracking tools of 10 June 2021.",
      sections: [
        {
          h: "In short",
          html: `<p>The site uses a single tool that requires consent: <strong>Google Analytics 4</strong>, loaded only if you press “Accept”. Before you choose, and if you decline, no Google script is loaded and no measurement cookies are set. No marketing or profiling cookies are used.</p>`,
        },
        {
          h: "Cookies that require consent",
          html: `<p>Set by Google Analytics 4 (Google Ireland Limited / Google LLC) on the federicofuffa.it domain, only after consent. Purpose: to measure site usage statistically (analytics). They are first-party cookies on the domain, generated by the third-party script.</p>
<div class="tbl"><table>
<thead><tr><th>Name</th><th>Purpose</th><th>Duration</th><th>Type</th></tr></thead>
<tbody>
<tr><td data-label="Name"><code>_ga</code></td><td data-label="Purpose">Tells users apart, pseudonymously, for statistics</td><td data-label="Duration">Up to 2 years</td><td data-label="Type">Analytics, with consent</td></tr>
<tr><td data-label="Name"><code>_ga_${CK}</code></td><td data-label="Purpose">Keeps the state of the measurement session</td><td data-label="Duration">Up to 2 years</td><td data-label="Type">Analytics, with consent</td></tr>
</tbody></table></div>
<p>Durations are the defaults documented by Google. Google may process data in the United States: see the Privacy Policy, “Transfers to third countries”. Google's notice: <a class="ul" href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">policies.google.com</a>. You can also block measurement with the <a class="ul" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">opt-out browser add-on</a>.</p>`,
        },
        {
          h: "Technical tools (no consent needed)",
          html: `<p>Stored in your browser (they are not HTTP cookies) and used only to make the site work. They are not sent to any server and are not used to track you.</p>
<div class="tbl"><table>
<thead><tr><th>Name</th><th>Purpose</th><th>Duration</th><th>Type</th></tr></thead>
<tbody>
<tr><td data-label="Name"><code>perno-ver</code> (sessionStorage)</td><td data-label="Purpose">Caches for one hour the Perno version read from GitHub, to avoid repeating the request</td><td data-label="Duration">Browser session (valid 1 hour)</td><td data-label="Type">Technical</td></tr>
<tr><td data-label="Name"><code>cookie-consent</code> (localStorage)</td><td data-label="Purpose">Remembers your cookie choice</td><td data-label="Duration">180 days</td><td data-label="Type">Technical</td></tr>
</tbody></table></div>`,
        },
        {
          h: "Other tools",
          html: `<p>The site does not use third-party fonts, scripts, videos or maps that set cookies, nor social buttons or advertising pixels. Links to LinkedIn, the Microsoft Store, Plinto Labs and Diiamoond lead to external sites with their own policies, which apply only if you open them.</p>`,
        },
        {
          h: "How to manage or change your choice",
          html: `<p>You can accept or decline Google Analytics from the banner and change your mind at any time with “Cookie settings” in the footer: if you decline after accepting, the measurement cookies are deleted. The choice is shown again after 180 days. You can also delete or block cookies in your browser settings.</p>`,
        },
        {
          h: "Controller and contact",
          html: `<p>Data controller: Federico Fuffa, ${mail}. For your rights see the <a class="ul" href="/privacy-policy/">Privacy Policy</a>.</p>`,
        },
      ],
    },
  },
};
