import {sleep} from '../Util/base';
import {By} from 'selenium-webdriver';

export const insideCodeLogin = "05895";

export async function login(driver: any){
  sleep(200);
  await driver.findElement(By.id('mat-input-3')).sendKeys(insideCodeLogin);
  await driver.findElement(By.id('mat-input-4')).sendKeys("123");
  await driver.findElement(By.id('kt_login_signin_submit')).click();
  sleep(10000);
}