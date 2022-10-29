import { defineConfig } from "astro/config";

// https://astro.build/config
import UnoCSS from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS()],
  srcDir: "./src",
  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules", "**/.git", "**/.trunk/**"],
      },
    },
  },
  site: "https://astroi-boi.netlify.app",
});
