import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  presetAttributify,
  transformerCompileClass,
} from "unocss";

export default defineConfig({
  shortcuts: [
    { btn: "rounded-1.5 bg-gray-800 text-white w-50 hover:bg-gray-900" },
    [
      /^btn-(.*)$/,
      ([, c]) => `rounded-1.5 bg-gray-800 text-white w-${c} hover:bg-gray-900`,
    ],
    { link: "block mt-4 lg:inline-block lg:mt-0 text-gray-200 transition-all-500 hover:font-bold hover:color-yellow-500"}
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
  ],
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetIcons({
      scale: 2,
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetAttributify(),
  ],
  preflights: [
    {
      layer: 'main',
      getCSS: async () => (await fetch('src/styles/main.css')).text(),
    },
  ],
});
