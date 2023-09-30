import { stringToObject } from './string-to-object.function';

describe('stringToObject', () => {
  const config = { properties: ';', values: ':' };
  const obj = { a: '0', b: '0' };

  it(`returns the string as object`, () => {
    const value = 'a=0,b=0';
    expect(stringToObject(value)).toEqual(obj);
  });

  it(`returns empty object if invalid separators`, () => {
    const value = 'a:0;b:0';
    expect(stringToObject(value)).toEqual({});
  });

  it(`returns empty object if empty string`, () => {
    expect(stringToObject('')).toEqual({});
    expect(stringToObject('   ')).toEqual({});
  });

  it(`returns the string as object with custom config`, () => {
    const value = 'a:0;b:0';
    expect(stringToObject(value, config)).toEqual(obj);
  });

  it(`returns the string as object avoiding extra spaces`, () => {
    const value = 'a = 0 , b = 0';
    expect(stringToObject(value)).toEqual(obj);
  });

  it(`returns the string with multiple property separators`, () => {
    const value = 'a=0 , , , b=0';
    expect(stringToObject(value)).toEqual(obj);
  });

  it(`returns the string with multiple value separators`, () => {
    const value = 'a=0,b=0 = 0';
    expect(stringToObject(value)).toEqual({ a: '0', b: '0 = 0' });
  });

  it(`returns the string mixing separators`, () => {
    const value = 'a=0, b:0';
    expect(stringToObject(value)).toEqual({ a: '0' });
  });
});
