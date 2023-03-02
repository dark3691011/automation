import { By } from 'selenium-webdriver';
import { sleep } from '../../Util/base';

export const insideCodeLogin = "05895";
export const shopCode = "90810";

export async function login(driver: any){
  sleep(200);
  await driver.findElement(By.id('mat-input-3')).sendKeys(insideCodeLogin);
  await driver.findElement(By.id('mat-input-4')).sendKeys("123");
  await driver.findElement(By.id('kt_login_signin_submit')).click();
  sleep(10000);
}

export async function chooseShop(driver: any){
  //choose shop
  await driver.findElement(By.id('onesignal-slidedown-cancel-button')).click();
  await driver.findElement(By.id('shopCode')).sendKeys(shopCode);
  await driver.findElement(By.css('div.ant-select-item-option-content')).click();
  await driver.findElement(By.css('button[form="chooseForm"]')).click();
}