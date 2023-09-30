/**
 * Gets a random integer between two values, both included.
 *
 * Will swap values if `min` is bigger than `max`.
 * The lower value will be rounded down if it's decimal, with a minimum of `MIN_SAFE_INTEGER`.
 * The bigger value will be rounded up if it's decimal, with a maximum of `MAX_SAFE_INTEGER`.
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random integer between the two values.
 * @throws `TypeError` if any value is `NaN`.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER | MIN_SAFE_INTEGER }
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER | MAX_SAFE_INTEGER }
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError | TypeError }
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN | NaN }
 * @publicApi
 * @example
 * ```ts
 * randomBetween(200, 300); // 242
 * randomBetween(300, 200); // 231
 * randomBetween(200.1, 299.1);
 * // random from 200 to 300, both included
 * randomBetween(NEGATIVE_INFINITY, POSITIVE_INFINITY);
 * // random from MIN_SAFE_INTEGER to MAX_SAFE_INTEGER, both included
 * randomBetween(NaN, 300); // throws TypeError
 * ```
 */
export function randomBetween(min: number, max: number): number {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new TypeError();
  }

  let realMin = max < min ? Math.floor(max) : Math.floor(min);
  let realMax = max < min ? Math.ceil(min) : Math.ceil(max);

  if (realMin < Number.MIN_SAFE_INTEGER) {
    realMin = Number.MIN_SAFE_INTEGER;
  }

  if (realMax > Number.MAX_SAFE_INTEGER) {
    realMax = Number.MAX_SAFE_INTEGER;
  }

  return Math.floor(Math.random() * (realMax - realMin + 1)) + realMin;
}
