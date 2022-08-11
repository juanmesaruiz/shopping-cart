import DataTypeChecker from '../helpers/DataTypeChecker';

class Discount {
  [key: string]: string | number | Array<string>;
  _code: string = '';
  _discount: number = 0;
  _items: Array<string> = [];
  _name: string = '';
  _quantity: number = 0;

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
      throw new Error('Discount.code must be an instance of String');
    }
  }

  /**
   * @returns {Number}
   */
  get discount() {
    return this._discount;
  }

  /**
   * @param value {Number}
   */
  set discount(value: number) {
    if (DataTypeChecker.isNumber(value)) {
      this._discount = value;
    } else {
      throw new Error('Discount.discount must be an instance of Number');
    }
  }

  /**
   * @returns {Array<String>}
   */
  get items() {
    return this._items;
  }

  /**
   * @param value {Array<String>}
   */
  set items(value: Array<string>) {
    if (DataTypeChecker.isArrayOfStrings(value)) {
      this._items = value;
    } else {
      throw new Error('Discount.items must be an array of String');
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
      throw new Error('Discount.name must be an instance of String');
    }
  }

  /**
   * @returns {Number}
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * @param value {Number}
   */
  set quantity(value: number) {
    if (DataTypeChecker.isNumber(value)) {
      this._quantity = value;
    } else {
      throw new Error('Discount.quantity must be an instance of Number');
    }
  }
}

export default Discount;
