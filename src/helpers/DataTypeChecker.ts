class DataTypeChecker {
  static isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
  }

  static isArrayOfStrings(value: unknown): value is Array<string> {
    let response = false;
    if (DataTypeChecker.isArray(value)) {
      response = value.every(item => DataTypeChecker.isString(item));
    }
    return response;
  }

  static isString(value: unknown): value is string {
    return typeof value === 'string' || value instanceof String;
  }

  static isNumber(value: unknown): value is number {
    return typeof value === 'number' && isFinite(value);
  }
}

export default DataTypeChecker;
