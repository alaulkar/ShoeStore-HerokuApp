import { protractor, browser, element, by } from 'protractor';
var EC = protractor.ExpectedConditions;
export class HomePageObject {
    public monthlist = element(by.className('nav navbar-nav')).all(by.tagName('a'));
    public emailInput = element(by.id('remind_email_input'));
    public submitbutton = element(by.id('remind_email_submit'));
    public brandDrpdwn = element(by.id('brand'));
    public searchButton = element(by.id('search_button'));
    public emailSuccessMsg = element(by.className('flash flash_success'));
    public emailValidateMsg = element(by.className('flash alert_danger'));

    selectDropdownByNumber(element, index, milliseconds) {
        element.all(by.tagName('option'))
            .then(function (options) {
                options[index].click();
            });
        if (typeof milliseconds !== 'undefined') {
            browser.sleep(milliseconds);
        }
    }

    clickWhenClickable(element) {
        return browser.wait(function () {
            return element.click().then(
                function () {
                    return true;
                },
                function () {
                    // console.log('not clickable');
                    return false;
                });
        });
    };

    selectMonth(num) {
        this.clickWhenClickable(this.monthlist.get(num - 1));

    }
}
