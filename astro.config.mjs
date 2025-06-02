// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://erykmiszczuk.github.io",
  base: '/',
  integrations: [mdx(), sitemap()],
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "redirect",
    },
    fallback: {
      pl: "en",
    },
  },
});
