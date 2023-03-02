
import { expect } from 'chai';
import 'selenium-webdriver';
import { By } from 'selenium-webdriver';
import * as LoginFunc from '../../Func/Login/login.Func';
import * as BaseFunc from '../../Util/base';


 
describe('Test Login', function() {
  let driver: any;

  beforeEach(async function(){
    driver = await BaseFunc.setDriver();
    await LoginFunc.login(driver);
  })

  afterEach(async function(){
    await driver.close();
  })

  it('Login', async function() {
    let currentName = await driver.findElement(By.id('user-fullname')).getText();
    expect(currentName).to.contains(LoginFunc.insideCodeLogin);
  });

  it('Choose shop', async function() {
    await LoginFunc.chooseShop(driver);
    let currentShopName = await driver.findElement(By.id('shop-info')).getText();
    expect(currentShopName).to.contains(LoginFunc.shopCode);
  })
});
