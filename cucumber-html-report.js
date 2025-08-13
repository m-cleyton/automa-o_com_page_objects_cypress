const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/results/cucumber-json/",
  reportPath: "cypress/results/html-multi-report/",
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: "Local test machine.",
    platform: { name: "Windows", version: "11" },
  },
});
