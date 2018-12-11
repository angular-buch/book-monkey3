import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {/*BS*/
    pipe = new IsbnPipe(); /*BE*/
  });

  it('should ignore empty values values', () => {/*BS*/
    expect(pipe.transform('')).toBe(null); /*BE*/
  });

  it('should ignore values of null', () => {/*BS*/
    expect(pipe.transform(null)).toBe(null); /*BE*/
  });

  it('should format an ISBN with a dash', () => {/*BS*/
    expect(pipe.transform('9783864903571')).toBe('978-3864903571'); /*BE*/
  });
});
