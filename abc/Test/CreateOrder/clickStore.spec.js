"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chai_1 = require("chai");
require("selenium-webdriver");
const selenium_webdriver_1 = require("selenium-webdriver");
const LoginFunc = __importStar(require("../../Func/Login/login.Func"));
const clickStoreFunc = __importStar(require("../../Func/CreateOrder/clickStore"));
const BaseFunc = __importStar(require("../../Util/base"));
describe('Test click store', function () {
    let driver;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver = yield BaseFunc.setDriver();
            yield LoginFunc.login(driver);
            yield LoginFunc.chooseShop(driver);
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.close();
        });
    });
    it('Click store', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield clickStoreFunc.clickStore(driver);
            yield clickStoreFunc.chooseEmployee(driver, 3);
            let searchBox = yield driver.findElements(selenium_webdriver_1.By.id('search-product-input_1'));
            (0, chai_1.expect)(searchBox.length).to.gt(0);
        });
    });
});
