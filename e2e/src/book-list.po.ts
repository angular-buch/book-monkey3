import { browser, element, by } from 'protractor';

export class /*BS*/BookDetailsPage/*BE*/ {

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}

export class /*BS*/BookListPage/*BE*/ {

  navigateTo() {
    browser.get('/books');/*BS*/
    return this;/*BE*/
  }

  getBookItems() {
    return element.all(by.css('.bm-book-list-item'));
  }

  clickOnFirstBook() {
    this.getBookItems().first().click();
    return new BookDetailsPage();
  }
}
