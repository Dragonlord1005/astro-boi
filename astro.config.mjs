import { defineConfig } from 'astro/config';

// https://astro.build/config
import UnoCSS from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS()]
});