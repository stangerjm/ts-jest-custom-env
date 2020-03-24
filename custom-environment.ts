const PuppeteerEnvironment = require('jest-environment-puppeteer');

let resolve;
const snapshotTaken = new Promise((res) => {
  resolve = res;
});

class CustomEnvironment extends PuppeteerEnvironment {
  handleTestEvent(event, state): void {
    if (event.name === 'test_fn_failure') {
      // take a snapshot
      resolve();
    } else {
      resolve();
    }
  }
}

module.exports = CustomEnvironment;
