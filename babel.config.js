module.exports = function(api) {
  api.cache(!api.env("production"));

  return {
    sourceType: 'unambiguous',
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "entry",
          exclude: ["transform-typeof-symbol"],
        },
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "lodash",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-json-strings",
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        }
      ],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions"
    ],
    comments: true,
  };
};
