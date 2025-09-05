module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off", // Next.js ogarnia import Reacta automatycznie
  },
};
