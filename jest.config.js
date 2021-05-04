module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/./$1',
    '^@/(.*)$': '<rootDir>/./$1',
    '^vue$': 'vue/dist/vue.common.js',
  }, 
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    // might need to add file pre-processor configs here
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".*\\.(js)$": "babel-jest"
  }, 
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
};