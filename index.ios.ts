import {expect, assert} from 'chai';
import {Builder, By, until} from 'selenium-webdriver';
import ojwd from '@oracle/oraclejet-webdriver';
import {ojButton} from '@oracle/oraclejet-webdriver/elements';

describe('Test Mobile', function() {
    let opts = {
        host: 'localhost',
        port: 4723,
        desiredCapabilities: {
            platformName: "iOS",
            platformVersion: "12.1",
            deviceName: "Kun Niu’s iPhone",
            app: "/Users/kclucas/Downloads/FixItFast.ipa",
            automationName: "Appium",
            browserName: '',
            autoWebview: true,
            udid: "a79a648b43fd62053f03483486a7ea81f48ba2c3",
            showXcodeLog: true
        }
    };
    const driver = new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(opts.desiredCapabilities).build();

    beforeEach(async function() {
        this.timeout(60000);
        await driver.wait(driver.executeScript("typeof window['oj'] === 'object'"), 60000, "failed to get busy context");
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('example', async function() {
        this.timeout(60000);
      //let contexts = await driver.contexts();
      var source = await driver.getPageSource();
      //console.log(source);
      const skipButton = await driver.wait(driver.findElement(By.id("ui-id-4")));
      await skipButton.click();
      await driver.sleep(1000);
      await driver.wait(driver.executeScript("typeof window['oj'] === 'object'"), 15000, "failed to get busy context");
      //source = await driver.getPageSource();
      //console.log(source);
      const signInButton = await driver.wait(driver.findElement(By.id("signInBtn")));
      await signInButton.click();
      await driver.sleep(3000);
    });
});