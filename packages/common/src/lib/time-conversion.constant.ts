/**
 * Number of milliseconds in a second: 1_000.
 * @publicApi
 */
export const SECOND_AS_MILLISECOND = 1_000;

/**
 * Number of milliseconds in a minute: 60_000.
 * @publicApi
 */
export const MINUTE_AS_MILLISECOND = 60 * SECOND_AS_MILLISECOND;

/**
 * Number of milliseconds in an hour: 3_600_000.
 * @publicApi
 */
export const HOUR_AS_MILLISECOND = 60 * MINUTE_AS_MILLISECOND;

/**
 * Number of milliseconds in a day: 86_400_000.
 * @publicApi
 */
export const DAY_AS_MILLISECOND = 24 * HOUR_AS_MILLISECOND;

/**
 * Number of milliseconds in a week: 604_800_000.
 * @publicApi
 */
export const WEEK_AS_MILLISECOND = 7 * DAY_AS_MILLISECOND;
