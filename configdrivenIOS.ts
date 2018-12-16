import {expect, assert} from 'chai';
import {Builder, By, until} from 'selenium-webdriver';
// import * as Mobilebase from 'page/ManageUP-Page.js';
// import ojwd from '@oracle/oraclejet-webdriver';
// import {ojButton} from '@oracle/oraclejet-webdriver/elements';
// import config from 'config';
// import * as config from 'config/default.json';

// import colorsJson from 'config/default.json';
// console.log(colorsJson.desiredCapabilities);

// const presenceLocators = require('default.json');
// import a from 'default.json';
import * as data from 'config'
// const word = data.
// const word = data.name;

// const data= require("config/default.json"); 

//... and then use it as regular object.
// console.log(data);

// let opts2 = data;

var options2 = data;
console.log("console log is printed below :");
console.log(data.get('desiredCapabilities'));

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
    const driver = new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(data.get('desiredCapabilities')).build();

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
      await driver.sleep(40000);

      const popOver = await driver.wait(driver.findElement(By.xpath("//oj-button[contains(@id,'UPovrbtn')]")));
      await popOver.click();
    //   await driver.sleep(10000);

      const cancelButton = await driver.wait(driver.findElement(By.xpath("//oj-option[contains(@id,'UPacttmp1')]")));
      await cancelButton.click();
    //   await driver.sleep(5000);
    });
});