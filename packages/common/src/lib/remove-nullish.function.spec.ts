import { removeNullish } from './remove-nullish.function';

describe('removeNullish', () => {
  it(`removes null properties`, () => {
    const obj = { a: null, b: 0 };
    expect(Object.keys(obj)).toEqual(['a', 'b']);
    expect(Object.keys(removeNullish(obj))).toEqual(['b']);
  });

  it(`removes undefined properties`, () => {
    const obj = { a: undefined, b: 0 };
    expect(Object.keys(obj)).toEqual(['a', 'b']);
    expect(Object.keys(removeNullish(obj))).toEqual(['b']);
  });

  it(`removes nested nullish values`, () => {
    const obj = { a: { a: null, b: { a: null, b: 0 } } };
    expect(Object.keys(obj.a)).toEqual(['a', 'b']);
    expect(Object.keys(removeNullish(obj).a)).toEqual(['b']);
    expect(Object.keys(removeNullish(obj).a.b)).toEqual(['b']);
  });

  it(`respect other falsy values`, () => {
    const obj = { a: undefined, b: null, c: 0, d: false, e: NaN, f: '' };
    expect(Object.keys(obj)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    expect(Object.keys(removeNullish(obj))).toEqual(['c', 'd', 'e', 'f']);
  });
});
