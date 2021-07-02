module.exports = {
    extends: ["stylelint-config-recommended"],
    plugins: ["stylelint-less"],
    rules: {
        "at-rule-no-unknown": null,
        "less/color-no-invalid-hex": true,
        "less/no-duplicate-variables": true
    }
};