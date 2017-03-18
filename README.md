##ShoeStore tests using Cucumber Guide   
This project demonstrates the basic protractor-cucumber-typescript framework project setup.

###To Get Started

####Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

####Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
   npm install 
```
OR if yarn is installed
```
   yarn 
```

* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

####Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.

```
npm run webdriver-update
``` 
That should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-start
```
That should start your selenium server!

```
    npm test
```
* It launches the Chrome Browser and run the scripts

####Features
####Email Feature
```
Feature: email submission for reminder 
  As a user of Shoe store
  I want to be able to submit my email in order to be reminded of upcoming shoe releases 

  @emailScenario
  Scenario: user should be able to access email input field and able to submit a valid email address  
    Given I am on home page
    When I provide a valid email address
    And click "Submit"
    Then I should see "a success message"
    And submitted email address
```
####Month Feature
```
Feature: Monthly shoe release
  As a user of Shoe store
  I want to be able to visit a link for each month and see the shoes being released
  
@MonthScenario
  Scenario Outline: Month should display a shoe list with it's image and pricing 
    Given I am on rb-shoe-store.herokuapp.com
    When I click on <month>
    Then I should see "Shoe Description"
    And I should see "shoe image"
    And I should also see "Shoe Price"

    Examples:
      | month | 
      |     1 | 
      |     2 |
      |     3 | 
      |     4 | 
      |     5 | 
      |     6 | 
      |     7 | 
      |     8 | 
      |     9 | 
      |     10| 
      |     11| 
      |     12|
```

####Step Definitions
####email.ts
```
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

    Given(/^I am on home page$/, () => {
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
```
####monthPage.ts
```
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
```

####HTML Reports
Currently this project has been integrated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter), which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.

##Reference 
Used https://github.com/igniteram/protractor-cucumber-typescript for a reference. 