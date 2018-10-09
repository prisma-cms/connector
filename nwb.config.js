module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    "presets": [
      "env",
      "es2015",
      "react",
    ],
    "plugins": [
      "transform-runtime",
      "transform-class-properties"
    ]
  }
}
