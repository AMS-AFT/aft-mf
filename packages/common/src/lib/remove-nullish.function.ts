import { isRecord } from './is-record.function';

/**
 * Deep removes nullish properties from an object.
 * @template Obj The original object type.
 * @param obj The object from which delete nullish properties.
 * @returns A deep clone of the object without the nullish properties.
 * @publicApi
 * @example
 * ```ts
 * removeNullish({ a: null, b: undefined, c: 0 }); // {c:0}
 * removeNullish({ a: { a: null, b: 0 } }); // {a:{b:0}}
 * ```
 */
export function removeNullish<Obj extends Record<string, unknown>>(obj: Obj): Obj {
  return Object.keys(obj).reduce((newObj: Partial<Obj>, key: keyof Obj) => {
    const value: Obj[keyof Obj] = obj[key];

    if (value != null) {
      newObj[key] = isRecord(value) ? removeNullish(value) : value;
    }

    return newObj;
  }, {}) as Obj;
}
