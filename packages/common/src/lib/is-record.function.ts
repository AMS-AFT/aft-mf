/**
 * Type guard to check that value is a Record.
 * @template T The record values type.
 * @param value The value to check.
 * @returns True if is a Record. False otherwise.
 * @publicApi
 * @example
 * ```ts
 * isRecord({a:0}); // true
 * isRecord({}); // false
 * isRecord(0); // false
 * ```
 */
export function isRecord<T = unknown>(value: unknown): value is Record<PropertyKey, T> {
  return typeof value === 'object' && value !== null && Object.keys(value).length > 0;
}
