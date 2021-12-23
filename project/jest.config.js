module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["**/*.ts"],
  coverageThreshold: {
    global: {
      functions: -1,
    },
    "*l.ts": {
      statements: 51,
    },
    "a.ts": {
      functions: 100,
    },
  },
};
