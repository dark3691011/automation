
const { By, Builder } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const should = require('chai').should();
const ltCapabilities = require('../capabilities');


 
describe('Test danger box 2', function() {
  let driver;

  const USERNAME = ltCapabilities.capability['LT:Options'].username;
  const KEY = ltCapabilities.capability['LT:Options'].accessKey;
  const HOST = 'hub.lambdatest.com/wd/hub';
  const gridUrl = "https://" + USERNAME + ':' + KEY + '@' + HOST;

  beforeEach(function(){
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(ltCapabilities.capability)
      .build();
  })

  afterEach(function(){
    driver.close();
  });

  it('test case should work', async function() {
    // var driver = new Builder().forBrowser('chrome').
    // build();

    await driver.get('https://ci-hope.frt.vn/');

    let maInside = await driver.findElement(webdriver.By.id('mat-input-3'));
    let password = await driver.findElement(webdriver.By.id('mat-input-4'));
    let btnLogin = await driver.findElement(webdriver.By.id('kt_login_signin_submit'));
    // maInside.sendKeys("05895");
    await maInside.sendKeys("058");
    await password.sendKeys("123");

    let code = await maInside.getAttribute('value').then((value) =>{
      return value;
    });

    await btnLogin.click();
    
    let danger = await driver.findElement(webdriver.By.css('div.alert-danger')).getText((value) => {
      return value;
    });
    code.should.equal("cccccccc");
    
  });
});

