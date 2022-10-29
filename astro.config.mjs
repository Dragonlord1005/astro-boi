import { defineConfig } from "astro/config";

// https://astro.build/config
import UnoCSS from "@unocss/astro";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS(), compress({
    css: false
  })],
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
  adapter: netlify()
});