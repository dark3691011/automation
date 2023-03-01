
const { By, Builder } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const should = require('chai').should();


 
describe('Test danger box', function() {
  let driver;
  let insideCodeLogin = "05895";

  beforeEach(async function(){
    //driver
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://uat-hope.frt.vn/');

    //login
    sleep(200);
    await driver.findElement(webdriver.By.id('mat-input-3')).sendKeys(insideCodeLogin);
    await driver.findElement(webdriver.By.id('mat-input-4')).sendKeys("123");
    await driver.findElement(webdriver.By.id('kt_login_signin_submit')).click();
    sleep(10000)
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
    
    //click store
    await driver.findElement(webdriver.By.css('a[href="/sell"]')).click();
    sleep(1000);
    await driver.findElement(webdriver.By.id('cmb-employee')).click();
    sleep(100);
    await driver.findElement(webdriver.By.xpath("(//div[@class='ant-select-item-option-content'])[3]")).click();

    //search and add product
    let search_Product = async () =>{
      let keyword = "vitat";
      sleep(1000);
      await driver.findElement(webdriver.By.id('search-product-input_1')).sendKeys('');
      await driver.findElement(webdriver.By.id('search-product-input_1')).sendKeys(keyword);
      sleep(2000);
      let items = await driver.findElements(webdriver.By.xpath('(//div[contains(@class,"ant-select-item ant-select-item-option")])'));
      items.length.should.gt(0);
      return items;
    }
    let items = await search_Product();
    let itemLength = items.length;
    let checkStocking = false;
    for(let i = 0; i< itemLength; i++){
      let id = await items[i].getAttribute('id');
      let quantity = await driver.findElement(webdriver.By.xpath(`//div[@id='${id}'] //div[contains(text(),'có sẵn')] //span`)).getText();
      quantity = Number(quantity.replace(',',''));
      if(quantity > 0){
        await items[i].click();
        items = await search_Product();
        checkStocking = true;
      }
    }
    checkStocking.should.eq(true);
    
    //check input quantity
    const arrItemQuantity = await driver.findElements(webdriver.By.xpath("//input[contains(@id, 'focus-input-number_1')]"));
    const arrStocking = await driver.findElements(webdriver.By.xpath("//span[contains(text(),'Tồn')] //following::span[1]"));
    for(let i =0; i < arrItemQuantity.length; i++){
      let stockingQuantity = Number(await arrStocking[i].getText());
      await arrItemQuantity[i].click();
      await slowlyInput(driver, 500, 9999);
      let quantity = Number(await arrItemQuantity[i].getText());
      quantity.should.lte(stockingQuantity);
    }

  });
});

async function slowlyInput(driver, delayTime, number){
  let strNumber = String(number);
  for(let item of strNumber){
    sleep(delayTime);

    await driver.actions()
    .keyDown(numToKey(item))
    .perform();
  }
}

function numToKey(num){
  switch(num){
    case '0': return webdriver.Key.NUMPAD0;
    case '1': return webdriver.Key.NUMPAD1;
    case '2': return webdriver.Key.NUMPAD2;
    case '3': return webdriver.Key.NUMPAD3;
    case '4': return webdriver.Key.NUMPAD4;
    case '5': return webdriver.Key.NUMPAD5;
    case '6': return webdriver.Key.NUMPAD6;
    case '7': return webdriver.Key.NUMPAD7;
    case '8': return webdriver.Key.NUMPAD8;
    case '9': return webdriver.Key.NUMPAD9;
  }
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}

