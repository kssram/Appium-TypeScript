import {expect, assert} from 'chai';
import {Builder, By, until} from 'selenium-webdriver';
import ojwd from '@oracle/oraclejet-webdriver';
import {ojButton} from '@oracle/oraclejet-webdriver/elements';

describe('Verify the Action Buttons in Manage Persons Page', function() {
    let opts = {
        "host": "0.0.0.0",
        "protocol": "http",
        "port": "4723",
        "path": "",
  "desiredCapabilities": {
    "platformName": "iOS",
    "platformVersion": "12.1",
    "deviceName": "iPhone XR",
    "automationName": "XCUITest",
    "browserName": "safari"

  }
    };
    const driver = new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(opts.desiredCapabilities).build();

    beforeEach(async function() {
        this.timeout(60000);
        // await driver.wait(driver.executeScript("typeof window['oj'] === 'object'"), 60000, "failed to get busy context");
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('example', async function() {
        this.timeout(60000);
      //let contexts = await driver.contexts();
    //   var source = await driver.getPageSource();
      //console.log(source);
      await driver.get("http://slc05jef.us.oracle.com:8086/applcore-jet-test/vp/myTeam/managePersonUP");
      await driver.sleep(20000);

      const popOver = await driver.wait(driver.findElement(By.xpath("//oj-button[contains(@id,'UPovrbtn')]")));
      await popOver.click();
    //   await driver.sleep(10000);

      const cancelButton = await driver.wait(driver.findElement(By.xpath("//oj-option[contains(@id,'UPacttmp1')]")));
      await cancelButton.click();
    //   await driver.sleep(5000);
    });
});