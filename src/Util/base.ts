// const { Builder } = require('selenium-webdriver');

import {Builder, Key} from 'selenium-webdriver';

export async function setDriver(){
  let driver = new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize();
  await driver.get('https://uat-hope.frt.vn/');
  return driver;
}

export function numToKey(num: any){
  switch(num){
    case '0': return Key.NUMPAD0;
    case '1': return Key.NUMPAD1;
    case '2': return Key.NUMPAD2;
    case '3': return Key.NUMPAD3;
    case '4': return Key.NUMPAD4;
    case '5': return Key.NUMPAD5;
    case '6': return Key.NUMPAD6;
    case '7': return Key.NUMPAD7;
    case '8': return Key.NUMPAD8;
    case '9': return Key.NUMPAD9;
  }
}

export async function slowlyInput(driver: any, delayTime: any, number: any){
  let strNumber = String(number);
  for(let item of strNumber){
    sleep(delayTime);

    await driver.actions()
    .keyDown(numToKey(item))
    .perform();
  }
}

export function sleep(miliseconds: any) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}