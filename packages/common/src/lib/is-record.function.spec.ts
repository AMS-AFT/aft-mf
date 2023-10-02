import { isRecord } from './is-record.function';

describe('isRecord', () => {
  it(`returns true if is record`, () => {
    expect(isRecord({ a: 0 })).toBeTrue();
  });

  it(`returns false if is empty object`, () => {
    expect(isRecord({})).toBeFalse();
  });

  it(`returns false if is nullish`, () => {
    expect(isRecord(null)).toBeFalse();
    expect(isRecord(undefined)).toBeFalse();
  });

  it(`returns false if is not an object`, () => {
    expect(isRecord(0)).toBeFalse();
    expect(isRecord('')).toBeFalse();
    expect(isRecord(true)).toBeFalse();
  });
});
