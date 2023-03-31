module.exports = {
  // ...
  extends: [
    // ...
    // See how to make it work with other files
    "eslint:recommended",
    // "eslint-config-javascript",
    "plugin:astro/recommended",
  ],
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      "files": ["*.ts"],
      "parser": "@typescript-eslint/parser",
    }
    // ...
  ],
};
