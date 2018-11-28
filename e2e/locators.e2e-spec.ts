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

  it('should select <TEX>\bfs</TEX>by tag<TEX>\bfe</TEX>', () => {
    expect(element(by.css('<TEX>\bfs</TEX>h1<TEX>\bfe</TEX>')).getText()).toBe('Heading');
    expect(element(by.tagName(<TEX>\bfs</TEX>'h1<TEX>\bfe</TEX>')).getText()).toBe('Heading');
  });

  it('should select <TEX>\bfs</TEX>by css class<TEX>\bfe</TEX>', () => {
    expect(element(by.css('<TEX>\bfs</TEX>.myClass<TEX>\bfe</TEX>')).getText()).toBe('Heading');
    expect(element(by.className('<TEX>\bfs</TEX>myClass<TEX>\bfe</TEX>')).getText()).toBe('Heading');
  });

  it('should select <TEX>\bfs</TEX>by id<TEX>\bfe</TEX>', () => {
    expect(element(by.css('<TEX>\bfs</TEX>\#myId<TEX>\bfe</TEX>')).getText()).toBe('Heading');
    expect(element(by.id('<TEX>\bfs</TEX>myId<TEX>\bfe</TEX>')).getText()).toBe('Heading');
  });

  it('should select via various other ways', () => {
    expect(element(by.cssContainingText('h1', 'Another Heading')).getText()).toBe('Another Heading with child');
    expect(element(by.css('h1 span')).getText()).toBe('with child');
  });

  it('should select via the <TEX>\bfs</TEX>\$-shorthand<TEX>\bfe</TEX>', () => {
    // is the same as element(by.css('\#myId'));
    expect(<TEX>\bfs</TEX>\$<TEX>\bfe</TEX>('<TEX>\bfs</TEX>\#myId<TEX>\bfe</TEX>').getText()).toBe('Heading');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});

