import { randomBetween } from './random-between.function';

describe('randomBetween', () => {
  it(`returns a random number between two values`, () => {
    expect(randomBetween(1, 10)).toBeWithin(1, 11);
  });

  it(`returns a random number including the lower one`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    expect(randomBetween(1, 10)).toEqual(1);
  });

  it(`returns a random number including the bigger one`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    expect(randomBetween(1, 10)).toEqual(10);
  });

  it(`returns a random number swaping values`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    expect(randomBetween(10, 1)).toEqual(10);
    expect(randomBetween(1, 10)).toEqual(10);
  });

  it(`returns a random number rounding down the lower value if decimal`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    expect(randomBetween(1.1, 1.1)).toEqual(1);
  });

  it(`returns a random number rounding up the bigger value if decimal`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
    expect(randomBetween(1.1, 1.1)).toEqual(2);
  });

  it(`returns a random number with a lower value of MIN_SAFE_INTEGER if original is lower`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    expect(randomBetween(Number.NEGATIVE_INFINITY, 1)).toEqual(Number.MIN_SAFE_INTEGER);
  });

  it(`returns a random number with a bigger value of MAX_SAFE_INTEGER if original is bigger`, () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9999999999999999);
    expect(randomBetween(1, Number.POSITIVE_INFINITY)).toEqual(Number.MAX_SAFE_INTEGER);
  });

  it(`throws if any value is NaN`, () => {
    const error = new TypeError();
    expect(() => randomBetween(NaN, 1)).toThrowError(error);
    expect(() => randomBetween(1, NaN)).toThrowError(error);
  });
});
