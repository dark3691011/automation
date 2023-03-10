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
exports.chooseShop = exports.login = exports.shopCode = exports.insideCodeLogin = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const base_1 = require("../../Util/base");
exports.insideCodeLogin = "05895";
exports.shopCode = "90810";
function login(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, base_1.sleep)(200);
        yield driver.findElement(selenium_webdriver_1.By.id('mat-input-3')).sendKeys(exports.insideCodeLogin);
        yield driver.findElement(selenium_webdriver_1.By.id('mat-input-4')).sendKeys("123");
        yield driver.findElement(selenium_webdriver_1.By.id('kt_login_signin_submit')).click();
        (0, base_1.sleep)(10000);
    });
}
exports.login = login;
function chooseShop(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        //choose shop
        yield driver.findElement(selenium_webdriver_1.By.id('onesignal-slidedown-cancel-button')).click();
        yield driver.findElement(selenium_webdriver_1.By.id('shopCode')).sendKeys(exports.shopCode);
        yield driver.findElement(selenium_webdriver_1.By.css('div.ant-select-item-option-content')).click();
        yield driver.findElement(selenium_webdriver_1.By.css('button[form="chooseForm"]')).click();
    });
}
exports.chooseShop = chooseShop;
