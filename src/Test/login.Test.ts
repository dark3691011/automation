
import 'selenium-webdriver';
import {expect} from 'chai';
import * as LoginFunc from '../Func/login.Func';
import * as BaseFunc from '../Util/base';
import { By } from 'selenium-webdriver';


 
describe('Test danger box', function() {
  let driver: any;

  beforeEach(async function(){
    driver = await BaseFunc.setDriver();
  })

  afterEach(async function(){
    await driver.close();
  })

  it('Login', async function() {
    await LoginFunc.login(driver);
    let currentName = await driver.findElement(By.id('user-fullname')).getText();
    expect(currentName).to.contains(LoginFunc.insideCodeLogin);
  });
});
