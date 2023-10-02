import {
  DAY_AS_MILLISECOND,
  HOUR_AS_MILLISECOND,
  MINUTE_AS_MILLISECOND,
  SECOND_AS_MILLISECOND,
  WEEK_AS_MILLISECOND
} from './time-conversion.constant';

describe('time-conversion', () => {
  it(`SECOND_AS_MILLISECOND is 1_000`, () => {
    expect(SECOND_AS_MILLISECOND).toEqual(1_000);
  });

  it(`MINUTE_AS_MILLISECOND is 60_000`, () => {
    expect(MINUTE_AS_MILLISECOND).toEqual(60_000);
  });

  it(`HOUR_AS_MILLISECOND is 3_600_000`, () => {
    expect(HOUR_AS_MILLISECOND).toEqual(3_600_000);
  });

  it(`DAY_AS_MILLISECOND is 86_400_000`, () => {
    expect(DAY_AS_MILLISECOND).toEqual(86_400_000);
  });

  it(`WEEK_AS_MILLISECOND is 604_800_000`, () => {
    expect(WEEK_AS_MILLISECOND).toEqual(604_800_000);
  });
});
