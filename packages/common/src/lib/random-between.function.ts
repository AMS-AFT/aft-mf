/**
 * Gets a random integer between two values, both included.
 *
 * The lower value is rounded down and the bigger one rounded up if they are decimals.
 * @param value1 The first value.
 * @param value2 The second value.
 * @returns A random integer between the two values, with MIN_SAFE_INTEGER and MAX_SAFE_INTEGER as limits.
 * @throws TypeError if any value is NaN.
 * @see Number.MIN_SAFE_INTEGER
 * @see Number.MAX_SAFE_INTEGER
 * @publicApi
 * @example
 * ```ts
 * randomBetween(200, 300); // 242
 * randomBetween(300, 200); // 231
 * randomBetween(200.1, 299.1); // 200 - 300
 * randomBetween(NEGATIVE_INFINITY, POSITIVE_INFINITY); // MIN_SAFE_INTEGER - MAX_SAFE_INTEGER
 * randomBetween(NaN, 300); // throws TypeError
 * ```
 */
export function randomBetween(value1: number, value2: number): number {
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    throw new TypeError();
  }

  let min = value2 < value1 ? Math.floor(value2) : Math.floor(value1);
  let max = value2 < value1 ? Math.ceil(value1) : Math.ceil(value2);

  if (min < Number.MIN_SAFE_INTEGER) {
    min = Number.MIN_SAFE_INTEGER;
  }

  if (max > Number.MAX_SAFE_INTEGER) {
    max = Number.MAX_SAFE_INTEGER;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
