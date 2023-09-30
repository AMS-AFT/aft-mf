/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValueOrFn } from './value-or-fn.type';

/**
 * Solves for a value that can be a value or a function that returns the value.
 * @template T The value type.
 * @template Args The arguments type. Defaults to `any`.
 * @param value The value or function to solve.
 * @param args The arguments needed to resolve the function.
 * @returns The value or the result of executing the function with the args.
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
export function valueOrFn<T, Args = any>(value: ValueOrFn<T, Args>, ...args: Args[]): T {
  return value instanceof Function ? value(...args) : value;
}
