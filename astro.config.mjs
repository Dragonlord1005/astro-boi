import { defineConfig, passthroughImageService } from "astro/config";
import UnoCSS from "@unocss/astro";

import compress from "astro-compress";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
// TODO: Switch from serverless to static until we actually need serverless
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: false,
    // injectReset: "modern-css-reset",
    injectEntry: process.env["NODE_ENV"] === "development",
    mode: "dist-chunk"
  }), compress(), robotsTxt(), sitemap(),
  // partytown(), Remove for now due to unknown issue
  mdx(), svelte()],
  srcDir: "./src",
  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules", "**/.git", "**/.trunk/**"]
      }
    },
    build: {
      cssCodeSplit: true,
      minify: "terser"
    }
  },
  site: "https://astroi-boi.netlify.app",
  output: "hybrid",
  adapter: vercel({
    analytics: true
  }),
  image: {
    service: passthroughImageService()
  }
});