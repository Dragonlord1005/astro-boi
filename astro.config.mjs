import { defineConfig } from "astro/config";

// https://astro.build/config
import UnoCSS from "@unocss/astro";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS(),
    compress(),
    robotsTxt(),
    sitemap(),
    partytown(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
  ],
  srcDir: "./src",
  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules", "**/.git", "**/.trunk/**"],
      },
    },
    build: {
      cssCodeSplit: true,
      minify: "terser",
    },
  },
  site: "https://astroi-boi.netlify.app",
  output: "static",
  experimental: {
    contentCollections: true,
  },
});
