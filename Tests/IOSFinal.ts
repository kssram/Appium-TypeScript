import {expect, assert} from 'chai';
import {Builder, By, until} from 'selenium-webdriver';
import NavigationMenu from '../pages/BasePage';
import {webdriver} from '../pages/BasePage';
// import ojwd from '@oracle/oraclejet-webdriver';
// import {ojButton} from '@oracle/oraclejet-webdriver/elements';

import * as data from 'config'

describe('Verify the Action Buttons in Manage Persons Page', function() {
    let loginPage;
    let navMenu: NavigationMenu = new NavigationMenu();
      // navMenu.openURL();
      // loginPage = navMenu.openURL();
      const driver2 = webdriver;

    // const driver = new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(data.get('desiredCapabilities')).build();
    
    beforeEach(async function() {
        this.timeout(60000);
        // c
        // await driver.wait(driver.executeScript("typeof window['oj'] === 'object'"), 60000, "failed to get busy context");
          
    });
    // const navMenu: NavigationMenu = new NavigationMenu();
      // navMenu.openURL();
      // loginPage = navMenu.openURL();
      // const driver2 = navMenu.openURL();
    
      afterEach(async function() {
        await driver2.quit();
    });

    it('example', async function() {
        this.timeout(60000);
     
        await driver2.get("http://slc05jef.us.oracle.com:8086/applcore-jet-test/vp/myTeam/managePersonUP");
        await driver2.sleep(40000);

        const popOver = await driver2.wait(driver2.findElement(By.xpath("//oj-button[contains(@id,'UPovrbtn')]")));
        await popOver.click();
   

        const cancelButton = await driver2.wait(driver2.findElement(By.xpath("//oj-option[contains(@id,'UPacttmp1')]")));
        await cancelButton.click();
   
    });
});