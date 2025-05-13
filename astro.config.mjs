// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), vue()],
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "redirect"
    },
    fallback: {
      pl: 'en'
    },
  }
});
