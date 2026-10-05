import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://federicofuffa.it",
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", it: "it" } },
    }),
  ],
});
