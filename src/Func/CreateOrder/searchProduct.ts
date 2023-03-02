import { By } from 'selenium-webdriver';
import { sleep } from '../../Util/base';

export const searchProduct = async (driver:any, keyword: string = 'vitat' ) =>{
  sleep(1000);
  await driver.findElement(By.id('search-product-input_1')).sendKeys('');
  await driver.findElement(By.id('search-product-input_1')).sendKeys(keyword);
  sleep(2000);
  let items = await driver.findElements(By.xpath('(//div[contains(@class,"ant-select-item ant-select-item-option")])'));
  return items;
}