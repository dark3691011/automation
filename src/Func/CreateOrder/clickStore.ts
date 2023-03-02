import {  sleep } from '../../Util/base';
import { By } from 'selenium-webdriver';

export const clickStore = async (driver:any ) =>{
  //click store
  await driver.findElement(By.css('a[href="/sell"]')).click();
  sleep(1000);
}

export const chooseEmployee = async (driver:any, employee: number = 3 ) =>{
  //1 Ke toan hoan my
  //2 Thu ngan hoan my
  //3 Duoc si Hope
  await driver.findElement(By.id('cmb-employee')).click();
  sleep(150);
  await driver.findElement(By.xpath(`(//div[@class='ant-select-item-option-content'])[${employee}]`)).click();
}