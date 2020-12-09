module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react",  'plugin:@typescript-eslint/recommended'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    camelcase: "off",
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "jsx-a11y/label-has-associated-control": [ 2, {
      "controlComponents": ["UserScore"],
    }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
      }
    ],
    "react/require-default-props": "off",
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
