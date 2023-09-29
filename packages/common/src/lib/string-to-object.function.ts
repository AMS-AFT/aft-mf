/**
 * The `stringToObject` configuration object.
 * @publicApi
 */
export interface StringToObjectConfig {
  /**
   * The string used to separate properties.
   *
   * Defaults to `','`.
   */
  prop: string;

  /**
   * The string used to separate the key from the value.
   *
   * Defaults to `'='`.
   */
  val: string;
}

/**
 * Converts a key value pairs string to object.
 * @param value The key value pairs string to convert.
 * @param config The configuration object. Defaults to `{ prop: ',', val: '=' }`.
 * @returns The key value pairs string as object or empty object if invalid config.
 * @publicApi
 * @example
 * ```ts
 * stringToObject('a=0, b=0'); // { a:'0', b:'0' }
 * stringToObject('a:0; b:0'); // {}
 * stringToObject('a:0; b:0', { prop: ';', val: ':' }); // { a:'0', b:'0' }
 * stringToObject('a=0 , , , b=0'); // { a:'0', b:'0' }
 * stringToObject('a=0, b=0 = 0'); // { a:'0', b:'0 = 0' }
 * stringToObject('a=0, b:0'); // { a:'0' }
 * ```
 */
export function stringToObject(
  value: string,
  config: StringToObjectConfig = { prop: ',', val: '=' }
): Record<string, string> {
  const props: string[] = value
    .split(config.prop)
    .map((property: string): string => property.trim())
    .filter((value: string): boolean => value.length > 0);

  return props.reduce((obj: Record<string, string>, prop: string) => {
    const kv = prop.split(config.val);
    const key = kv.shift() as string;

    if (kv.length > 0) {
      obj[key.trim()] = kv.join(config.val).trim();
    }

    return obj;
  }, {});
}
