"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputQuantity = exports.chooseFirstProduct = exports.searchProduct = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const base_1 = require("../../Util/base");
const defaultKeyword = 'vita';
const searchProduct = (driver, keyword = defaultKeyword) => __awaiter(void 0, void 0, void 0, function* () {
    (0, base_1.sleep)(1000);
    yield driver.findElement(selenium_webdriver_1.By.id('search-product-input_1')).sendKeys('');
    yield driver.findElement(selenium_webdriver_1.By.id('search-product-input_1')).sendKeys(keyword);
    (0, base_1.sleep)(2000);
    let items = yield driver.findElements(selenium_webdriver_1.By.xpath('(//div[contains(@class,"ant-select-item ant-select-item-option")])'));
    return items;
});
exports.searchProduct = searchProduct;
const chooseFirstProduct = (driver, items) => __awaiter(void 0, void 0, void 0, function* () {
    let checkStocking = false;
    for (let item of items) {
        let id = yield item.getAttribute('id');
        let quantity = yield driver.findElement(selenium_webdriver_1.By.xpath(`//div[@id='${id}'] //div[contains(text(),'có sẵn')] //span`)).getText();
        quantity = Number(quantity.replace(',', ''));
        if (quantity > 0) {
            yield item.click();
            checkStocking = true;
            break;
        }
    }
    (0, base_1.sleep)(1000);
    return checkStocking;
});
exports.chooseFirstProduct = chooseFirstProduct;
const inputQuantity = (driver, quantity, index = 1) => __awaiter(void 0, void 0, void 0, function* () {
    //check input quantity
    const itemQuantity = yield driver.findElement(selenium_webdriver_1.By.xpath(`(//input[contains(@id, 'focus-input-number_1')])[${index}]`));
    const stocking = yield driver.findElement(selenium_webdriver_1.By.xpath(`(//span[contains(text(),'Tồn')] //following::span[1])[${index}]`));
    yield itemQuantity.click();
    yield (0, base_1.slowlyInput)(driver, 500, quantity);
    console.log(yield stocking.getText());
    console.log(yield itemQuantity.getText());
    let quantityStocking = Number((yield stocking.getText()).replace(',', ''));
    let quantityInput = Number((yield itemQuantity.getAttribute('value')).replace(',', ''));
    return quantityStocking >= quantityInput ? true : false;
});
exports.inputQuantity = inputQuantity;
