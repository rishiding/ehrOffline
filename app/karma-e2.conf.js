module.exports = function(config) {
  config.set({
    frameworks: ['ng-scenario'],

    files: [
      'scripts/test-e2e/e2eSpec.js'
    ],

    urlRoot: '/__karma/',

    autoWatch: true,

    proxies: {
      '/': 'http://localhost:8000'
    },

    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

    reporters: ['dots'],

    plugins: [
      'karma-ng-scenario',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  });
};
