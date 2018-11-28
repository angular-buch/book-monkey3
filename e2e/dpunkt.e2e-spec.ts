import { <TEX>\bfs</TEX>browser, element, by<TEX>\bfe</TEX> } from 'protractor';

describe('dpunkt.verlag', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => <TEX>\bfs</TEX>browser.ignoreSynchronization = true<TEX>\bfe</TEX>);

  it('should just call it Angular', () => {
    <TEX>\bfs</TEX>browser<TEX>\bfe</TEX>.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = <TEX>\bfs</TEX>element<TEX>\bfe</TEX>(<TEX>\bfs</TEX>by<TEX>\bfe</TEX>.tagName('h3'));
    expect(heading.getText()).toEqual('Angular');
  });

  afterAll(() => <TEX>\bfs</TEX>browser.ignoreSynchronization = false<TEX>\bfe</TEX>);
});

