import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800" },
    // { 'btn': 'p-2 rounded-md bg-gray-100 hover:bg-gray-200' },
    { btn: "rounded-1.5 bg-gray-800 text-white w-50 hover:bg-gray-900" },
    [
      /^btn-(.*)$/,
      ([, c]) => `rounded-1.5 bg-gray-800 text-white w-${c} hover:bg-gray-900`,
    ],
  ],
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
