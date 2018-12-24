import { browser, element, by, $ } from 'protractor';

const html = `
  <h1 id="myId" class="myClass">Heading</h1>
  <h1 class="anotherClass">Another Heading
    <span>with child</span>
  </h1>`;

describe('protractor locators', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get('data:text/html,' + encodeURIComponent(html));
  });

  it('should select /*BS*/by tag/*BE*/', () => {
    expect(element(by.css(/*BS*/'h1'/*BE*/)).getText()).toBe('Heading');
    expect(element(by.tagName(/*BS*/'h1'/*BE*/)).getText()).toBe('Heading');
  });

  it('should select /*BS*/by css class/*BE*/', () => {
    expect(element(by.css(/*BS*/'.myClass'/*BE*/)).getText()).toBe('Heading');
    expect(element(by.className(/*BS*/'myClass'/*BE*/)).getText()).toBe('Heading');
  });

  it('should select /*BS*/by id/*BE*/', () => {
    expect(element(by.css(/*BS*/'\#myId'/*BE*/)).getText()).toBe('Heading');
    expect(element(by.id(/*BS*/'myId'/*BE*/)).getText()).toBe('Heading');
  });

  it('should select via various other ways', () => {
    expect(element(by.cssContainingText('h1', 'Another Heading')).getText()).toBe('Another Heading with child');
    expect(element(by.css('h1 span')).getText()).toBe('with child');
  });

  it('should select via the /*BS*/\$-shorthand/*BE*/', () => {
    // is the same as element(by.css('\#myId'));
    expect(/*BS*/\$/*BE*/(/*BS*/'\#myId'/*BE*/).getText()).toBe('Heading');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});

