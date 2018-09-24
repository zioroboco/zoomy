module.exports = {
  testMatch: ["<rootDir>/src/**/*.spec.{ts,tsx}"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "\\@zoomy/(.*)": "<rootDir>/../$1/src"
  },
  moduleFileExtensions: ["json", "js", "ts", "jsx", "tsx"]
}
