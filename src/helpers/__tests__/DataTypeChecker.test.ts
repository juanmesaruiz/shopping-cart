import DataTypeChecker from '../DataTypeChecker';

describe('DataTypeChecker', () => {
  describe('DataTypeChecker.isArray', () => {
    it('Should return true for array', () => {
      const value: any[] = [];
      const actual = DataTypeChecker.isArray(value);
      expect(actual).toBe(true);
    });

    it('Should return false for object', () => {
      const value = {};
      const actual = DataTypeChecker.isArray(value);
      expect(actual).toBe(false);
    });

    it('Should return false for object', () => {
      const value = {};
      const actual = DataTypeChecker.isArray(value);
      expect(actual).toBe(false);
    });
  });

  describe('DataTypeChecker.isArrayOfStrings', () => {
    it('Should return true for array of strings', () => {
      const value = ['item1', 'item2'];
      const actual = DataTypeChecker.isArrayOfStrings(value);
      expect(actual).toBe(true);
    });

    it('Should return false for array of numbers', () => {
      const value = [1, 2];
      const actual = DataTypeChecker.isArrayOfStrings(value);
      expect(actual).toBe(false);
    });

    it('Should return false for object', () => {
      const value = {};
      const actual = DataTypeChecker.isArrayOfStrings(value);
      expect(actual).toBe(false);
    });
  });

  describe('DataTypeChecker.isNumber', () => {
    it('Should return true for number', () => {
      const value = 1;
      const actual = DataTypeChecker.isNumber(value);
      expect(actual).toBe(true);
    });

    it('Should return false for string', () => {
      const value = 'value';
      const actual = DataTypeChecker.isNumber(value);
      expect(actual).toBe(false);
    });

    it('Should return false for undefined', () => {
      const value: any = undefined;
      const actual = DataTypeChecker.isNumber(value);
      expect(actual).toBe(false);
    });
  });

  describe('DataTypeChecker.isString', () => {
    it('Should return true for string', () => {
      const value = 'value';
      const actual = DataTypeChecker.isString(value);
      expect(actual).toBe(true);
    });

    it('Should return false for number', () => {
      const value = 1;
      const actual = DataTypeChecker.isString(value);
      expect(actual).toBe(false);
    });

    it('Should return false for object', () => {
      const value = {};
      const actual = DataTypeChecker.isString(value);
      expect(actual).toBe(false);
    });
  });
});
