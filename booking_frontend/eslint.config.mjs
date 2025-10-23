import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: true,
        window: true,
        test: true,
        expect: true,
      },
    },
    plugins: { react: pluginReact },
    settings: { react: { version: "detect" } },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "React|App" }],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
    },
  },
  // Disable any rules that might conflict with Prettier formatting
  eslintConfigPrettier,
];
