/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Matches a function that returns a value.
 * @template T The return type.
 * @template Args The arguments type. Defaults to `any`.
 * @param args The arguments needed to resolve the function.
 * @returns The result of executing the function with the args.
 * @publicApi
 */
export type AnyFunction<T, Args = any> = (...args: Args[]) => T;
