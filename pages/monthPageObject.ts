import { protractor, browser, element, by } from 'protractor';
var EC = protractor.ExpectedConditions;
export class MonthPageObject {

public heading = element(by.tagName('h2'));
public shoeList = element(by.id('shoe_list')).all(by.tagName('li'));
public shoeDescription = element.all(by.className("shoe_result_value shoe_description"));
public shoePrices = element.all(by.className("shoe_result_value shoe_price"));
public shoeImage = element.all(by.className('shoe_image')).all(by.tagName('img'));
public releaseMonths = element.all(by.className('shoe_result_value shoe_release_month')).all(by.tagName('a'));

}