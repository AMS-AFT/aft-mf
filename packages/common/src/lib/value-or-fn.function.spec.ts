import { valueOrFn } from './value-or-fn.function';

describe('valueOrFn', () => {
  it(`returns null`, () => {
    expect(valueOrFn(null)).toBeNull();
  });

  it(`returns undefined`, () => {
    expect(valueOrFn(undefined)).toBeUndefined();
  });

  it(`returns value`, () => {
    expect(valueOrFn(1)).toEqual(1);
  });

  it(`returns value from function`, () => {
    const value = () => 1;
    expect(valueOrFn(value)).toEqual(1);
  });

  it(`returns value from function with args`, () => {
    const value = (a: any, b: any) => Number(a) + Number(b);
    expect(valueOrFn(value, 1, '1')).toEqual(2);
  });

  it(`returns value from function`, () => {
    type Num = { num: number };
    const value = (args: Num) => args.num;
    expect(valueOrFn(value, { num: 1 })).toEqual(1);
  });
});
