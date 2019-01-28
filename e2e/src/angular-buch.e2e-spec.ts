import { /*BS*/browser, element, by/*BE*/ } from 'protractor';

describe('Angular Buch', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => /*BS*/browser.waitForAngularEnabled(false)/*BE*/);

  it('should be called Angular', () => {
    /*BS*/browser/*BE*/.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = /*BS*/element/*BE*/(/*BS*/by.tagName('h1')/*BE*/);
    expect(heading.getText()).toEqual('Angular');
  });

  afterAll(() => /*BS*/browser.waitForAngularEnabled(true)/*BE*/);
});

