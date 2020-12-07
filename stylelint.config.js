module.exports = {
  extends: [
    'stylelint-config-recommended'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "extends",
        "tailwind"
      ]
    }],
    "block-no-empty": null,
    // "unit-whitelist": ["em", "rem", "s"]
  }
}
