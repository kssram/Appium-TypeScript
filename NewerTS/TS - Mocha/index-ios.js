"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
describe('Test Mobile', function () {
    let opts = {
        "host": "0.0.0.0",
        "protocol": "http",
        "port": "4723",
        "path": "",
        "desiredCapabilities": {
            "platformName": "iOS",
            "platformVersion": "12.1",
            "deviceName": "iPad Air 2",
            "automationName": "XCUITest",
            "browserName": "safari"
        }
    };
});
const driver = new selenium_webdriver_1.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(opts.desiredCapabilities).build();
beforeEach(async function () {
    this.timeout(60000);
    await driver.wait(driver.executeScript("typeof window['oj'] === 'object'"), 60000, "failed to get busy context");
});
afterEach(async function () {
    await driver.quit();
});
it('example', async function () {
    this.timeout(60000);
    //let contexts = await driver.contexts();
    var source = await driver.getPageSource();
    //console.log(source);
    const skipButton = await driver.wait(driver.findElement(selenium_webdriver_1.By.id("ui-id-4")));
    await skipButton.click();
    await driver.sleep(1000);
    await driver.wait(driver.executeScript("typeof window['oj'] === 'object'"), 15000, "failed to get busy context");
    //source = await driver.getPageSource();
    //console.log(source);
    const signInButton = await driver.wait(driver.findElement(selenium_webdriver_1.By.id("signInBtn")));
    await signInButton.click();
    await driver.sleep(3000);
});
;
