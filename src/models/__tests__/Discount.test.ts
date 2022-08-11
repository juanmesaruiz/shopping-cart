// @ts-nocheck
import Discount from '../Discount';
import DataTypeChecker from '../../helpers/DataTypeChecker';

describe('Discount', () => {
  const instance = new Discount();

  describe('Discount.code as String', () => {
    it('Should return true if code is String', () => {
      instance.code = 'code';
      expect(DataTypeChecker.isString(instance.code)).toEqual(true);
    });

    it('Should return error if code is not String', () => {
      const code = 123;
      const badFn = () => {
        instance.code = code;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Discount.code must be an instance of String');
    });
  });

  describe('Discount.discount as Number', () => {
    it('Should return true if discount is number', () => {
      instance.discount = 123;
      expect(DataTypeChecker.isNumber(instance.discount)).toEqual(true);
    });

    it('Should return error if discount is not String', () => {
      const discount = 'discount';
      const badFn = () => {
        instance.discount = discount;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Discount.discount must be an instance of Number');
    });
  });

  describe('Discount.items as array of String', () => {
    it('Should return true if items is array of String', () => {
      instance.items = ['items'];
      expect(DataTypeChecker.isArrayOfStrings(instance.items)).toEqual(true);
    });

    it('Should return error if items is not array of String', () => {
      const items = [123];
      const badFn = () => {
        instance.items = items;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Discount.items must be an array of String');
    });
  });

  describe('Discount.name as String', () => {
    it('Should return true if name is String', () => {
      instance.name = 'name';
      expect(DataTypeChecker.isString(instance.name)).toEqual(true);
    });

    it('Should return error if name is not String', () => {
      const name = 123;
      const badFn = () => {
        instance.name = name;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Discount.name must be an instance of String');
    });
  });

  describe('Discount.quantity as Number', () => {
    it('Should return true if quantity is number', () => {
      instance.quantity = 123;
      expect(DataTypeChecker.isNumber(instance.quantity)).toEqual(true);
    });

    it('Should return error if quantity is not String', () => {
      const quantity = 'quantity';
      const badFn = () => {
        instance.quantity = quantity;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Discount.quantity must be an instance of Number');
    });
  });
});
