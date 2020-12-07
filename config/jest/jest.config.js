module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    rootDir: '../../',
    transform: {
      '\\.(ts|tsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],   // looks for your test
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.ts'
    ],
    // moduleNameMapper: {
    //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__test__/mock/fileMock.ts",
    //   "\\.(css|less)$": "<rootDir>/src/__test__/mock/styleMock.ts"
    // }
  };