module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
};
