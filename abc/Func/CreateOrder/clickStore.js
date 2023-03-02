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
exports.chooseEmployee = exports.clickStore = void 0;
const base_1 = require("../../Util/base");
const selenium_webdriver_1 = require("selenium-webdriver");
const clickStore = (driver) => __awaiter(void 0, void 0, void 0, function* () {
    //click store
    yield driver.findElement(selenium_webdriver_1.By.css('a[href="/sell"]')).click();
    (0, base_1.sleep)(1000);
});
exports.clickStore = clickStore;
const chooseEmployee = (driver, employee = 3) => __awaiter(void 0, void 0, void 0, function* () {
    //1 Ke toan hoan my
    //2 Thu ngan hoan my
    //3 Duoc si Hope
    yield driver.findElement(selenium_webdriver_1.By.id('cmb-employee')).click();
    (0, base_1.sleep)(150);
    yield driver.findElement(selenium_webdriver_1.By.xpath(`(//div[@class='ant-select-item-option-content'])[${employee}]`)).click();
});
exports.chooseEmployee = chooseEmployee;
