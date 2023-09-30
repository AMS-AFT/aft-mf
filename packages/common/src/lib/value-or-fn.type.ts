/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyFunction } from './any-function.type';

/**
 * Matches a value or a function that returns the value.
 * @template T The value type.
 * @template Args The arguments type. Defaults to `any`.
 * @publicApi
 */
export type ValueOrFn<T, Args = any> = T | AnyFunction<T, Args>;
