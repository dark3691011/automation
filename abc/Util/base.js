"use strict";
// const { Builder } = require('selenium-webdriver');
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
exports.sleep = exports.slowlyInput = exports.numToKey = exports.setDriver = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
function setDriver() {
    return __awaiter(this, void 0, void 0, function* () {
        let driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        yield driver.manage().window().maximize();
        yield driver.get('https://uat-hope.frt.vn/');
        return driver;
    });
}
exports.setDriver = setDriver;
function numToKey(num) {
    switch (num) {
        case '0': return selenium_webdriver_1.Key.NUMPAD0;
        case '1': return selenium_webdriver_1.Key.NUMPAD1;
        case '2': return selenium_webdriver_1.Key.NUMPAD2;
        case '3': return selenium_webdriver_1.Key.NUMPAD3;
        case '4': return selenium_webdriver_1.Key.NUMPAD4;
        case '5': return selenium_webdriver_1.Key.NUMPAD5;
        case '6': return selenium_webdriver_1.Key.NUMPAD6;
        case '7': return selenium_webdriver_1.Key.NUMPAD7;
        case '8': return selenium_webdriver_1.Key.NUMPAD8;
        case '9': return selenium_webdriver_1.Key.NUMPAD9;
    }
}
exports.numToKey = numToKey;
function slowlyInput(driver, delayTime, number) {
    return __awaiter(this, void 0, void 0, function* () {
        let strNumber = String(number);
        for (let item of strNumber) {
            sleep(delayTime);
            yield driver.actions()
                .keyDown(numToKey(item))
                .perform();
        }
    });
}
exports.slowlyInput = slowlyInput;
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
exports.sleep = sleep;
