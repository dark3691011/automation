import { By } from 'selenium-webdriver';
import { sleep, slowlyInput } from '../../Util/base';

const defaultKeyword = 'vita';

export const searchProduct = async (driver:any, keyword: string = defaultKeyword ) =>{
  sleep(1000);
  await driver.findElement(By.id('search-product-input_1')).sendKeys('');
  await driver.findElement(By.id('search-product-input_1')).sendKeys(keyword);
  sleep(2000);
  let items = await driver.findElements(By.xpath('(//div[contains(@class,"ant-select-item ant-select-item-option")])'));
  return items;
}

export const chooseFirstProduct = async (driver: any, items: Array<any>) =>{
  let checkStocking = false;
  for(let item of items){
    let id = await item.getAttribute('id');
    let quantity = await driver.findElement(By.xpath(`//div[@id='${id}'] //div[contains(text(),'có sẵn')] //span`)).getText();
    quantity = Number(quantity.replace(',',''));
    if(quantity > 0){
      await item.click();
      checkStocking = true;
      break;
    }
  }

  sleep(1000);
  return checkStocking;
}

export const inputQuantity = async (driver: any, quantity: number, index: number = 1) =>{
  //check input quantity
  const itemQuantity = await driver.findElement(By.xpath(`(//input[contains(@id, 'focus-input-number_1')])[${index}]`));
  const stocking = await driver.findElement(By.xpath(`(//span[contains(text(),'Tồn')] //following::span[1])[${index}]`));

  await itemQuantity.click();
  await slowlyInput(driver, 500, quantity);

  console.log(await stocking.getText())
  console.log(await itemQuantity.getText())

  let quantityStocking = Number((await stocking.getText()).replace(',',''));
  let quantityInput = Number((await itemQuantity.getAttribute('value')).replace(',',''));

  return quantityStocking >= quantityInput ? true : false; 
}