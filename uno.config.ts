import {
  defineConfig,
  presetUno,
  transformerDirectives,
  presetAttributify,
  transformerCompileClass,
  transformerVariantGroup,
  presetTypography,
} from "unocss";

import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  shortcuts: [
    { btn: "rounded-1.5 bg-gray-800 text-white w-50 hover:bg-gray-900" },
    [
      /^btn-(.*)$/,
      ([, c]) => `rounded-1.5 bg-gray-800 text-white w-${c} hover:bg-gray-900`,
    ],
    {
      link: "block mt-4 lg:(inline-block mt-0) text-gray-200 transition-all-500 hover:(font-bold text-4.5 color-yellow-500)",
    },
    {
      "github-link": "i-carbon-logo-github w-1.5em h-1.5em hover:(text-yellow w-1.7em h-1.7em transition-duration-1.5s)",
    },
    {
      "page-link": "i-material-symbols-open-in-new-rounded w-1.5em h-1.5em hover:(text-yellow w-1.7em h-1.7em transition-duration-1.5s)",
    },
  ],
  transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()],
  presets: [
    presetUno({
      dark: "media",
    }),
    presetIcons({
      // scale: 2,
      cdn: "https://esm.sh/",
      prefix: "i-",
      // extraProperties: {
      //   display: "inline-block",
      //   "vertical-align": "middle",
      // },
    }),
    presetAttributify(),
    presetTypography(),
  ],
  preflights: [
    {
      layer: "main",
      getCSS: async () => (await fetch("public/styles/index.css")).text(),
    },
  ],
});
