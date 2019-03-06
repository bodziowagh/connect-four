module.exports = {
    "roots": [
        "<rootDir>/src",
        "<rootDir>/tests"
    ],
    "testMatch": [
        "<rootDir>/tests/**/*.spec.ts"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "transform": {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    }
}
