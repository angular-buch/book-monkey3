import { /*BS*/browser, element, by/*BE*/ } from 'protractor';

describe('dpunkt.verlag', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => /*BS*/browser.ignoreSynchronization = true/*BE*/);

  it('should just call it Angular', () => {
    /*BS*/browser/*BE*/.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = /*BS*/element/*BE*/(/*BS*/by/*BE*/.tagName('h3'));
    expect(heading.getText()).toEqual('Angular');
  });

  afterAll(() => /*BS*/browser.ignoreSynchronization = false/*BE*/);
});

