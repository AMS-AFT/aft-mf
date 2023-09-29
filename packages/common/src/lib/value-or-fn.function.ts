/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Matches a value or a function that returns the value.
 * @template T The expected value type.
 * @publicApi
 */
export type ValueOrFn<T> = T | ((...args: any[]) => T);

/**
 * Solves for a value that can be a value or a function that returns the value.
 * @template T The expected value type.
 * @param value The value or function to solve.
 * @param args The arguments needed to resolve the function.
 * @returns The value or the result of executing the function.
 * @publicApi
 * @example
 * ```ts
 * valueOrFn(null); // null
 * valueOrFn(undefined); // undefined
 * valueOrFn(1); // 1
 * valueOrFn(() => 1); // 1
 * valueOrFn((a, b) => a + b, 1, 1); // 2
 * ```
 */
export function valueOrFn<T>(value: ValueOrFn<T>, ...args: any[]): T {
  return value instanceof Function ? value(...args) : value;
}
