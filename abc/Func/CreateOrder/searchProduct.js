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
exports.searchProduct = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const base_1 = require("../../Util/base");
const searchProduct = (driver, keyword = 'vitat') => __awaiter(void 0, void 0, void 0, function* () {
    (0, base_1.sleep)(1000);
    yield driver.findElement(selenium_webdriver_1.By.id('search-product-input_1')).sendKeys('');
    yield driver.findElement(selenium_webdriver_1.By.id('search-product-input_1')).sendKeys(keyword);
    (0, base_1.sleep)(2000);
    let items = yield driver.findElements(selenium_webdriver_1.By.xpath('(//div[contains(@class,"ant-select-item ant-select-item-option")])'));
    return items;
});
exports.searchProduct = searchProduct;
