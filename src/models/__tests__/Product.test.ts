// @ts-nocheck
import Product from '../Product';
import DataTypeChecker from '../../helpers/DataTypeChecker';

describe('Product', () => {
  const instance = new Product();

  describe('Product.code as String', () => {
    it('Should return true if code is string', () => {
      instance.code = 'code';
      expect(DataTypeChecker.isString(instance.code)).toEqual(true);
    });

    it('Should return error if code is not string', () => {
      const code = 123;
      const badFn = () => {
        instance.code = code;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Product.code must be an instance of String');
    });
  });

  describe('Product.description as String', () => {
    it('Should return true if description is string', () => {
      instance.description = 'description';
      expect(DataTypeChecker.isString(instance.description)).toEqual(true);
    });

    it('Should return error if description is not string', () => {
      const description = 123;
      const badFn = () => {
        instance.description = description;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow(
        'Product.description must be an instance of String'
      );
    });
  });

  describe('Product.imgAlt as String', () => {
    it('Should return true if imgAlt is string', () => {
      instance.imgAlt = 'imgAlt';
      expect(DataTypeChecker.isString(instance.imgAlt)).toEqual(true);
    });

    it('Should return error if imgAlt is not string', () => {
      const imgAlt = 123;
      const badFn = () => {
        instance.imgAlt = imgAlt;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Product.imgAlt must be an instance of String');
    });
  });

  describe('Product.imgCatalogSrc as String', () => {
    it('Should return true if imgCatalogSrc is string', () => {
      instance.imgCatalogSrc = 'imgCatalogSrc';
      expect(DataTypeChecker.isString(instance.imgCatalogSrc)).toEqual(true);
    });

    it('Should return error if imgCatalogSrc is not string', () => {
      const imgCatalogSrc = 123;
      const badFn = () => {
        instance.imgCatalogSrc = imgCatalogSrc;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow(
        'Product.imgCatalogSrc must be an instance of String'
      );
    });
  });

  describe('Product.imgDetailSrc as String', () => {
    it('Should return true if imgDetailSrc is string', () => {
      instance.imgDetailSrc = 'imgDetailSrc';
      expect(DataTypeChecker.isString(instance.imgDetailSrc)).toEqual(true);
    });

    it('Should return error if imgDetailSrc is not string', () => {
      const imgDetailSrc = 123;
      const badFn = () => {
        instance.imgDetailSrc = imgDetailSrc;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow(
        'Product.imgDetailSrc must be an instance of String'
      );
    });
  });

  describe('Product.name as String', () => {
    it('Should return true if name is string', () => {
      instance.name = 'name';
      expect(DataTypeChecker.isString(instance.name)).toEqual(true);
    });

    it('Should return error if name is not string', () => {
      const name = 123;
      const badFn = () => {
        instance.name = name;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Product.name must be an instance of String');
    });
  });

  describe('Product.price as Number', () => {
    it('Should return true if price is number', () => {
      instance.price = 123;
      expect(DataTypeChecker.isNumber(instance.price)).toEqual(true);
    });

    it('Should return error if price is not string', () => {
      const price = 'price';
      const badFn = () => {
        instance.price = price;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Product.price must be an instance of Number');
    });
  });

  describe('Product.productCode as String', () => {
    it('Should return true if productCode is string', () => {
      instance.productCode = 'productCode';
      expect(DataTypeChecker.isString(instance.productCode)).toEqual(true);
    });

    it('Should return error if productCode is not string', () => {
      const productCode = 123;
      const badFn = () => {
        instance.productCode = productCode;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow(
        'Product.productCode must be an instance of String'
      );
    });
  });

  describe('Product.stock as Number', () => {
    it('Should return true if stock is number', () => {
      instance.stock = 123;
      expect(DataTypeChecker.isNumber(instance.stock)).toEqual(true);
    });

    it('Should return error if stock is not string', () => {
      const stock = 'stock';
      const badFn = () => {
        instance.stock = stock;
      };
      expect(badFn).toThrow(Error);
      expect(badFn).toThrow('Product.stock must be an instance of Number');
    });
  });
});
