import { browser, element, by } from 'protractor';

export class WhiteboardReduxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ellzap-root h1')).getText();
  }
}
