/* eslint-disable max-len */


import {
  defineConfig,
  presetUno,
  transformerDirectives,
  presetAttributify,
  transformerCompileClass,
  transformerVariantGroup,
  presetTypography,
  presetWebFonts,
} from "unocss";

import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  shortcuts: [
    {
      btn: "rounded-1.5 bg-gray-800 text-white w-50 hover:bg-gray-900",
      // "github-link": "i-carbon-logo-github w-1.5em h-1.5em hover:(text-yellow w-1.7em h-1.7em transition-duration-1.5s) mr-3",
      // "site-link": "i-material-symbols-open-in-new-rounded w-1.5em h-1.5em hover:(text-yellow w-1.7em h-1.7em transition-duration-1.5s)",
      "nav-link":
        "block mt-4 font-['InterVariable'] lg:(inline-block mt-0) text-gray-200 transition-all-500 transition-duration-.75s hover:(font-bold text-4.5 color-yellow-500) no-underline",
      "brand-bg": "light:bg-gray-7 dark:bg-gray-8",
      title:
        "text-center font-['InterVariable',sans-serif] font-bold text-2rem",
    },
    [
      /^btn-(.*)$/,
      ([, c]) => `rounded-1.5 bg-gray-800 text-white w-${c} hover:bg-gray-900`,
    ],
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
    transformerVariantGroup(),
  ],
  presets: [
    presetUno({
      dark: "media",
    }),
    presetIcons({
      // scale: 2,
      // ! For some reason, esm is causing astro to crash
      cdn: "https://esm.sh/",
      prefix: "i-",
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: 'Roboto'
      },
    }),
  ],
  // content: {
  //   pipeline: {
  //     exclude: [/node_modules/, /src\/content/],
  //   }
  // }
});
