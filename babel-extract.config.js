process.env.NODE_ENV = "test";
module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "i18next-extract",
      {
        keyAsDefaultValue: ["en-US"],
        useI18nextDefaultValue: ["en-US"],
        // discardOldKeys: true,
        defaultNS: "common",
        outputPath: "locales/{{locale}}/{{ns}}.json",
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
        compatibilityJSON: "v4",
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
};
