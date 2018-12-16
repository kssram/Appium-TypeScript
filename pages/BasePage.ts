// const locators = require('../selectors/basePage.json');
import {expect, assert} from 'chai';
import {Builder, By, until} from 'selenium-webdriver';
import * as data from 'config';


const driver =  new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(data.get('desiredCapabilities')).build();
export var webdriver = driver;

// let driver;

//  let driver = new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(data.get('desiredCapabilities')).build();
export default class BasePage {
   


    openURL() {
    // openURL(async function() {

      
        // webdriver.get("http://slc05jef.us.oracle.com:8086/applcore-jet-test/vp/myTeam/managePersonUP");
        // webdriver.sleep(40000);
    //   return driver;
        
    }





}
