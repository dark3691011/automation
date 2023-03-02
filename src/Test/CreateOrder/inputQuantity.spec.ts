
import { expect } from 'chai';
import 'selenium-webdriver';
import { By } from 'selenium-webdriver';
import * as LoginFunc from '../../Func/Login/login.Func';
import * as clickStoreFunc from '../../Func/CreateOrder/clickStore';
import * as searchProFunc from '../../Func/CreateOrder/searchProduct';
import * as BaseFunc from '../../Util/base';

describe('Test input quantity', function() {
  let driver: any;

  beforeEach(async function(){
    driver = await BaseFunc.setDriver();
    await LoginFunc.login(driver);
    await LoginFunc.chooseShop(driver);
    await clickStoreFunc.clickStore(driver);
    await clickStoreFunc.chooseEmployee(driver, 3);
    const items = await searchProFunc.searchProduct(driver,'vita');
    await searchProFunc.chooseFirstProduct(driver, items);
  })

  afterEach(async function(){
    await driver.close();
  })

  it('Input quantity', async function() {
    let check = await searchProFunc.inputQuantity(driver, 999999999);
    expect(check).to.eq(true);
  });
});
