// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'ryandegruyter1',
    'browserstack.key': 'MHDuSpLiEwcHTXp3vDb7',
    'browserName': 'chrome'
  }
};
