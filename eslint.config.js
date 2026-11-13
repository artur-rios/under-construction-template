// ESLint's configuration (`npm run lint`): the recommended JavaScript rules over the page's own scripts, which run in
// the browser, with jQuery's `$` from the script tag of index.html. The build's output is not linted.
import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist/"] },
  js.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, $: "readonly" },
    },
  },
];
