import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginJs from "@eslint/js"
import pluginSecurity from "eslint-plugin-security"

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  {languageOptions: {
    globals: globals.node
  }},
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
]);
