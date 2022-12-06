import { defineConfig } from "astro/config";

// https://astro.build/config
import UnoCSS from "@unocss/astro";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import react from "@astrojs/react";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS(), compress(), react(), robotsTxt(), sitemap(), partytown()],
  srcDir: "./src",
  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules", "**/.git", "**/.trunk/**"]
      }
    }
  },
  site: "https://astroi-boi.netlify.app",
  output: "static",
  markdown: {
    syntaxHighlight: "prism"
  }
});