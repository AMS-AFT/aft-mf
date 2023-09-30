/**
 * Configuration object to define the strings used to separate properties and the keys from their value.
 * @see {@link stringToObject}
 * @publicApi
 */
export interface StringToObjectSeparators {
  /**
   * The string used to separate properties.
   *
   * Defaults to `','`.
   */
  properties: string;

  /**
   * The string used to separate the keys from their value.
   *
   * Defaults to `'='`.
   */
  values: string;
}

/**
 * Converts a key value pairs string to object.
 * @param keyValueStr The key value pairs string to convert.
 * @param separators Configuration object to define the strings used to separate properties and the keys from their
 * value. Defaults to `{ properties: ',', values: '=' }`.
 * @returns The key value pairs string as object or empty object if invalid separators.
 * @publicApi
 * @example
 * ```ts
 * const separators = { properties: ';', values: ':' };
 * stringToObject(''); // {}
 * stringToObject('a=0, b=0'); // { a:'0', b:'0' }
 * stringToObject('a:0; b:0'); // {}
 * stringToObject('a:0; b:0', separators); // { a:'0', b:'0' }
 * stringToObject('a=0 , , , b=0'); // { a:'0', b:'0' }
 * stringToObject('a=0, b=0 = 0'); // { a:'0', b:'0 = 0' }
 * stringToObject('a=0, b:0'); // { a:'0' }
 * ```
 */
export function stringToObject(
  keyValueStr: string,
  separators: StringToObjectSeparators = { properties: ',', values: '=' }
): Record<string, string> {
  const props: string[] = keyValueStr
    .split(separators.properties)
    .map((property: string): string => property.trim())
    .filter((value: string): boolean => value.length > 0);

  return props.reduce((obj: Record<string, string>, prop: string) => {
    const kv = prop.split(separators.values);
    const key = kv.shift() as string;

    if (kv.length > 0) {
      obj[key.trim()] = kv.join(separators.values).trim();
    }

    return obj;
  }, {});
}
