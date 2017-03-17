import { protractor, browser, element, by } from 'protractor';
import { defineSupportCode } from 'cucumber';
import { MonthPageObject } from '../pages/monthPageObject';
import { HomePageObject } from '../pages/homePageObject';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    var monthPage = new MonthPageObject();
    var homePage = new HomePageObject();
    var email;

    Given(/^I am on rb-shoe-store.herokuapp.com$/, () => {
        browser.get('https://rb-shoe-store.herokuapp.com/');
        return expect(homePage.emailInput.isDisplayed()).to.be.true;
    });

    When(/^I provide a valid email address$/, (num) => {
        email = 'abc@wqert.com';
        homePage.emailInput.sendKeys(email);
        homePage.submitbutton.click();

    });

    Then(/^I should see "a success message"$/, () => {
        return expect(homePage.emailSuccessMsg.isDisplayed()).to.be.true;
    });

    Then(/^And submitted email address$/, () => {
        homePage.emailSuccessMsg.getText().then(function (text) {
            return expect(text).have.keys([email]);
        });
    });
})