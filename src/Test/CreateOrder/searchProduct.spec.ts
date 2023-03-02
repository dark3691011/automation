
import 'selenium-webdriver';
import {expect} from 'chai';
import * as LoginFunc from '../../Func/Login/login.Func';
import * as clickStoreFunc from '../../Func/CreateOrder/clickStore';
import * as searchProFunc from '../../Func/CreateOrder/searchProduct';
import * as BaseFunc from '../../Util/base';
import { By } from 'selenium-webdriver';


 
describe('Test search product', function() {
  let driver: any;

  beforeEach(async function(){
    driver = await BaseFunc.setDriver();
    await LoginFunc.login(driver);
    await LoginFunc.chooseShop(driver);
    await clickStoreFunc.clickStore(driver);
    await clickStoreFunc.chooseEmployee(driver, 3);
  })

  afterEach(async function(){
    await driver.close();
  })

  it('Search product', async function() {
    let items = await searchProFunc.searchProduct(driver,'vita');
    expect(items.length).to.gt(0);
  });
});
