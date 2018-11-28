import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {/*BS*/
    pipe = new IsbnPipe();/*BE*/
  });

  it('should ignore unknown values', () => {/*BS*/
    expect(pipe.transform('XXX')).toBe(null);/*BE*/
  });

  it('should not change the format of ISBN-10', () => {/*BS*/
    expect(pipe.transform('3864903572')).toBe('3864903572');/*BE*/
  });

  it('should format ISBN-13 with a dash', () => {/*BS*/
    expect(pipe.transform('9783864903571')).toBe('978-3864903571');/*BE*/
  });
});
