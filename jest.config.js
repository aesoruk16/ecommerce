module.exports = {
    testMatch: ["<rootDir>/src/test/**/*.test.js"],
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
        'axios': 'axios/dist/node/axios.cjs'
    },
  };
  