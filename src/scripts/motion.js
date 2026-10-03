const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

// reveal on scroll
const items = document.querySelectorAll(".rv");
if (still || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
    { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
  );
  items.forEach((el) => io.observe(el));
}

// hero name: letters light up and lift as the pointer gets close
const h1 = document.querySelector(".hero h1");
if (h1 && !still && matchMedia("(hover:hover) and (pointer:fine)").matches) {
  const lines = h1.querySelectorAll(".ln");
  h1.setAttribute("aria-label", [...lines].map((l) => l.textContent).join(" "));
  lines.forEach((l) => l.setAttribute("aria-hidden", "true"));
  const split = (node) => {
    for (const n of [...node.childNodes]) {
      if (n.nodeType === 3) {
        n.replaceWith(...[...n.data].map((c) => Object.assign(document.createElement("span"), { className: "ch", textContent: c })));
      } else split(n);
    }
  };
  lines.forEach(split);
  const chars = [...h1.querySelectorAll(".ch")];
  let pt = null, raf = 0;
  const radius = () => Math.max(120, h1.getBoundingClientRect().width * 0.14);
  const paint = () => {
    raf = 0;
    const r = radius();
    for (const c of chars) {
      const b = c.getBoundingClientRect();
      const d = pt ? Math.hypot(pt.x - (b.left + b.width / 2), pt.y - (b.top + b.height / 2)) : r;
      c.style.setProperty("--p", Math.max(0, 1 - d / r).toFixed(2));
    }
  };
  const queue = () => { if (!raf) raf = requestAnimationFrame(paint); };
  addEventListener("pointermove", (e) => { pt = { x: e.clientX, y: e.clientY }; queue(); }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => { pt = null; queue(); });
}

// Perno: latest version from GitHub releases (build-time value is the fallback)
const ver = document.querySelector("[data-perno-version]");
if (ver) {
  const key = "perno-ver";
  const paint = (v) => { if (v) ver.textContent = "v" + v; };
  try {
    const c = JSON.parse(sessionStorage.getItem(key) || "null");
    if (c && Date.now() - c.t < 36e5) paint(c.v);
    else throw 0;
  } catch {
    fetch("https://api.github.com/repos/fuffafederico/perno-releases/releases/latest")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d || !d.tag_name) return;
        const v = d.tag_name.replace(/^v/i, "");
        paint(v);
        try { sessionStorage.setItem(key, JSON.stringify({ v, t: Date.now() })); } catch {}
      })
      .catch(() => {});
  }
}

// theme toggle: the initial theme is set by the inline script in <head>
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const dark = matchMedia("(prefers-color-scheme: dark)");
const stored = () => { try { const t = localStorage.getItem("theme"); return t === "light" || t === "dark" ? t : null; } catch { return null; } };
const setTheme = (t) => {
  root.dataset.theme = t;
  if (themeMeta) themeMeta.content = t === "dark" ? "#111110" : "#f3f1ec";
  if (toggle) {
    const next = t === "dark" ? toggle.dataset.toLight : toggle.dataset.toDark;
    toggle.setAttribute("aria-label", next);
    toggle.title = next;
  }
};
setTheme(root.dataset.theme === "dark" ? "dark" : "light");
toggle?.addEventListener("click", () => {
  const t = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(t);
  try { localStorage.setItem("theme", t); } catch {}
});
// follow the OS setting until the visitor picks a theme
dark.addEventListener("change", (e) => { if (!stored()) setTheme(e.matches ? "dark" : "light"); });
