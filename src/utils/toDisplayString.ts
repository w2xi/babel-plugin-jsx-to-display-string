// Utility functions for type checking
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const isArray = Array.isArray
export const isMap = (val: unknown): val is Map<any, any> => val instanceof Map
export const isSet = (val: unknown): val is Set<any> => val instanceof Set
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'
export const objectToString = Object.prototype.toString
export const isPlainObject = (val: unknown): val is object => objectToString.call(val) === '[object Object]'

// Simple isRef check - not Vue-specific
export const isRef = (val: any): val is { value: unknown } => {
  return !!(val && val.__v_isRef === true)
}

/**
 * For converting JSX interpolation values to displayed strings.
 * @public
 */
export const toDisplayString = (val: unknown): string => {
  return isString(val)
    ? val
    : val == null
      ? ''
      : isArray(val) ||
          (isObject(val) &&
            (val.toString === objectToString || !isFunction(val.toString)))
        ? isRef(val)
          ? toDisplayString(val.value)
          : JSON.stringify(val, replacer, 2)
        : String(val)
}

const replacer = (_key: string, val: unknown): any => {
  if (isRef(val)) {
    return replacer(_key, val.value)
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val], i) => {
          entries[stringifySymbol(key, i) + ' =>'] = val
          return entries
        },
        {} as Record<string, any>,
      ),
    }
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map(v => stringifySymbol(v)),
    }
  } else if (isSymbol(val)) {
    return stringifySymbol(val)
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    // native elements
    return String(val)
  }
  return val
}

const stringifySymbol = (v: unknown, i: number | string = ''): any =>
  isSymbol(v) ? `Symbol(${(v as any).description ?? i})` : v 