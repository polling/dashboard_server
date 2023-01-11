module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: ["@babel/plugin-syntax-import-assertions"],
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/extensions": ["error", { js: "ignorePackages" }],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": ["error", { allow: ["_id", "_doc"] }],
  },
};
