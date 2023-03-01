
const { By, Builder } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const should = require('chai').should();


 
describe('Test danger box', function() {
  let driver;
  let insideCodeLogin = "05895";

  beforeEach(async function(){
    driver = new Builder().forBrowser('chrome').
    build();

    await driver.manage().window().maximize();
    await driver.get('https://uat-hope.frt.vn/');

    //login
    sleep(200);
    await driver.findElement(webdriver.By.id('mat-input-3')).sendKeys(insideCodeLogin);
    await driver.findElement(webdriver.By.id('mat-input-4')).sendKeys("123");
    await driver.findElement(webdriver.By.id('kt_login_signin_submit')).click();
    sleep(8000)
  })

  afterEach(async function(){
    await driver.close();
  })

  it('Test choose item', async function() {
    //choose shop
    await driver.findElement(webdriver.By.id('onesignal-slidedown-cancel-button')).click();
    await driver.findElement(webdriver.By.id('shopCode')).sendKeys("90810");
    await driver.findElement(webdriver.By.css('div.ant-select-item-option-content')).click();
    await driver.findElement(webdriver.By.css('button[form="chooseForm"]')).click();
    
    //create order
    // let elm = await driver.findElement(webdriver.By.xpath('//div[@class="ant-menu-submenu-title"]'));
    // driver.actions({bridge: true})
    // .move({x: 0, y: 0, origin: elm})
    // .perform();

    //create order
    await driver.findElement(webdriver.By.css('a[href="/sell"]')).click();
    sleep(5000);
    await driver.findElement(webdriver.By.id('cmb-employee')).click();
    sleep(100);
    await driver.findElement(webdriver.By.xpath("(//div[@class='ant-select-item-option-content'])[3]")).click();


    await driver.findElement(webdriver.By.css('a[href="/sell"]')).click();
    let abc = await driver.findElement(webdriver.By.id('search-product-input_1'));
    await abc.click();
    await driver.actions()
     .keyDown(webdriver.Key.NUMPAD5)
     .keyDown(webdriver.Key.NUMPAD4)
     .keyDown(webdriver.Key.NUMPAD6)
     .perform();

  });
});

function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}

