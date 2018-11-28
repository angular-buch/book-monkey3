import { browser, element, by } from 'protractor';

export class <TEX>\bfs</TEX>BookDetailsPage<TEX>\bfe</TEX> {

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}

export class <TEX>\bfs</TEX>BookListPage<TEX>\bfe</TEX> {

  navigateTo() {
    browser.get('/books');<TEX>\bfs</TEX>
    return this;<TEX>\bfe</TEX>
  }

  getBookItems() {
    return element.all(by.css('.bm-book-list-item'));
  }

  clickOnFirstBook() {
    this.getBookItems().first().click();
    return new BookDetailsPage();
  }
}
