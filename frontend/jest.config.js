const { collectMeta } = require("next/dist/build/utils");
const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "babel",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
};

module.exports = createJestConfig(config);
