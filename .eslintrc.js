module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-so-spreading": ["off"],
    "no-shadow": "off",
  },
};
