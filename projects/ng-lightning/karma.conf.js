// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const isTravis = process.env.TRAVIS;

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      reports: ['text-summary', 'html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: isTravis ? ['dots'] : ['progress', 'kjhtml'],
    port: isTravis ? 9876 : 23011,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [isTravis ? 'Firefox' : 'Chrome'],
    singleRun: false,

    files: [
      // fixtures
      { pattern: 'test/fixtures/**', watched: false, included: false, served: true },
    ],
    proxies: {
      // Avoid 404 warnings for images during testing
      '/assets/icons/utility-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/mypath/utility-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/mypath/standard-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/mypath/custom-sprite/svg/symbols.svg': '/base/test/fixtures/fake',
      '/image1.jpg': '/base/test/fixtures/fake',
    },
  });
};
