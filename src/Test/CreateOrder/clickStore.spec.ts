
import { expect } from 'chai';
import 'selenium-webdriver';
import { By } from 'selenium-webdriver';
import * as LoginFunc from '../../Func/Login/login.Func';
import * as clickStoreFunc from '../../Func/CreateOrder/clickStore';
import * as BaseFunc from '../../Util/base';

describe('Test click store', function() {
  let driver: any;

  beforeEach(async function(){
    driver = await BaseFunc.setDriver();
    await LoginFunc.login(driver);
    await LoginFunc.chooseShop(driver);
  })

  afterEach(async function(){
    await driver.close();
  })

  it('Click store', async function() {
    await clickStoreFunc.clickStore(driver);
    await clickStoreFunc.chooseEmployee(driver, 3);
    let searchBox = await driver.findElements(By.id('search-product-input_1'));
    expect(searchBox.length).to.gt(0);
  });
});
