import { protractor, browser, element, by } from 'protractor';
import { defineSupportCode } from 'cucumber';
import { MonthPageObject } from '../pages/monthPageObject';
import { HomePageObject } from '../pages/homePageObject';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
var EC = protractor.ExpectedConditions;

defineSupportCode(function ({Given, When, Then}) {
    var monthPage = new MonthPageObject();
    var homePage = new HomePageObject();

    Given(/^I am on rb-shoe-store.herokuapp.com$/, () => {
        browser.wait(EC.elementToBeClickable(homePage.submitbutton));
        return expect(browser.getTitle()).to.eventually.equal('Shoe Store: Welcome to the Shoe Store');
        
    });

    When(/^I click on (\d+)$/, (num) => {
          return homePage.selectMonth(num);
             });

    Then(/^I should see "Shoe Description"$/, () => {
        return expect(monthPage.shoeDescription.count()).is.greaterThan(0);
    });

})