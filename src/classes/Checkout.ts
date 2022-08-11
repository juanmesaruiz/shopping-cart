import { getDiscountPerProduct } from '../helpers/discountsHelper';
import {
  findProduct,
  getProduct,
  getProductCatalog,
} from '../helpers/productsHelper';

class Checkout {
  cartItems: Array<{ code: string; amount: number }> = [];
  discounts: Array<{ discount: number; name: string }> = [];
  totalItems: number = 0;

  private setDiscounts(productCode: string, totalAmount: number) {
    const currentProduct = getProduct(getProductCatalog(), productCode);

    this.discounts = getDiscountPerProduct({
      product: currentProduct,
      productAmount: totalAmount,
      currentDiscounts: this.discounts,
    });
  }

  scan(code: string, amount = +1): this {
    const currentCartItem = findProduct(this.cartItems, code);
    let totalAmount = 0;

    if (currentCartItem) {
      totalAmount = Number(currentCartItem.amount) + amount;
      currentCartItem.amount = totalAmount;
    } else if (amount > 0) {
      totalAmount = amount;
      this.cartItems = [...this.cartItems, { code, amount }];
    }

    this.setDiscounts(code, totalAmount);

    this.totalItems = this.totalItems + amount;

    return this;
  }

  setProductAmount(code: string, totalAmount: number): this {
    const productData = getProduct(getProductCatalog(), code);
    const currentCartItem = findProduct(this.cartItems, code);

    const newTotalAmount =
      totalAmount > productData.stock ? productData.stock : totalAmount;
    let newItemAmountOnCart = newTotalAmount;

    if (currentCartItem) {
      newItemAmountOnCart = newTotalAmount - currentCartItem.amount;
      currentCartItem.amount = newTotalAmount;
    } else if (newTotalAmount > 0) {
      this.cartItems = [...this.cartItems, { code, amount: newTotalAmount }];
    }

    this.totalItems = this.totalItems + newItemAmountOnCart;

    this.setDiscounts(code, totalAmount);

    return this;
  }

  totalWithoutDiscounts(): number {
    const initialAmount = 0;

    if (this.cartItems.length) {
      return this.cartItems.reduce((totalAmount, { code, amount }) => {
        const currentProduct = getProduct(getProductCatalog(), code);

        return totalAmount + amount * currentProduct?.price;
      }, initialAmount);
    }

    return initialAmount;
  }

  total(): number {
    const totalWithoutDiscounts = this.totalWithoutDiscounts();
    const discounts = Object.values(this.discounts).reduce(
      (totalAmount, { discount }) => totalAmount + discount,
      0
    );

    return totalWithoutDiscounts - discounts;
  }

  pay(): this {
    this.cartItems = [];
    this.discounts = [];
    this.totalItems = 0;

    return this;
  }
}

export default Checkout;
