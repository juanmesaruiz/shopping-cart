import DataTypeChecker from '../helpers/DataTypeChecker';

class Product {
  [key: string]: string | number;
  _code: string = null;
  _description: string = null;
  _imgAlt: string = null;
  _imgCatalogSrc: string = null;
  _imgDetailSrc: string = null;
  _name: string = null;
  _price: number = null;
  _productCode: string = null;
  _stock: number = null;

  /**
   * @returns {String}
   */
  get code() {
    return this._code;
  }

  /**
   * @param value {String}
   */
  set code(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._code = value;
    } else {
      throw new Error('Product.code must be an instance of String');
    }
  }

  /**
   * @returns {String}
   */
  get description() {
    return this._description;
  }

  /**
   * @param value {String}
   */
  set description(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._description = value;
    } else {
      throw new Error('Product.description must be an instance of String');
    }
  }

  /**
   * @returns {String}
   */
  get imgAlt() {
    return this._imgAlt;
  }

  /**
   * @param value {String}
   */
  set imgAlt(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._imgAlt = value;
    } else {
      throw new Error('Product.imgAlt must be an instance of String');
    }
  }

  /**
   * @returns {String}
   */
  get imgCatalogSrc() {
    return this._imgCatalogSrc;
  }

  /**
   * @param value {String}
   */
  set imgCatalogSrc(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._imgCatalogSrc = value;
    } else {
      throw new Error('Product.imgCatalogSrc must be an instance of String');
    }
  }

  /**
   * @returns {String}
   */
  get imgDetailSrc() {
    return this._imgDetailSrc;
  }

  /**
   * @param value {String}
   */
  set imgDetailSrc(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._imgDetailSrc = value;
    } else {
      throw new Error('Product.imgDetailSrc must be an instance of String');
    }
  }

  /**
   * @returns {String}
   */
  get name() {
    return this._name;
  }

  /**
   * @param value {String}
   */
  set name(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._name = value;
    } else {
      throw new Error('Product.name must be an instance of String');
    }
  }

  /**
   * @returns {Number}
   */
  get price() {
    return this._price;
  }

  /**
   * @param value {Number}
   */
  set price(value: number) {
    if (DataTypeChecker.isNumber(value)) {
      this._price = value;
    } else {
      throw new Error('Product.price must be an instance of Number');
    }
  }

  /**
   * @returns {String}
   */
  get productCode() {
    return this._productCode;
  }

  /**
   * @param value {String}
   */
  set productCode(value: string) {
    if (DataTypeChecker.isString(value)) {
      this._productCode = value;
    } else {
      throw new Error('Product.productCode must be an instance of String');
    }
  }

  /**
   * @returns {Number}
   */
  get stock() {
    return this._stock;
  }

  /**
   * @param value {Number}
   */
  set stock(value: number) {
    if (DataTypeChecker.isNumber(value)) {
      this._stock = value;
    } else {
      throw new Error('Product.stock must be an instance of Number');
    }
  }
}

export default Product;
