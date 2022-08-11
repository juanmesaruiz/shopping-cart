import { getProduct, getProductCatalog } from '../productsHelper';
import { getDiscountPerProduct } from '../discountsHelper';

describe('discountsHelper', () => {
  describe('getDiscountPerProduct', () => {
    it('it should return bulk discount', () => {
      const product = getProduct(getProductCatalog(), 'TSHIRT');
      const productAmount = 3;
      const currentDiscounts: Array<{ discount: number; name: string }> = [];

      const discountPerProduct = getDiscountPerProduct({
        product,
        productAmount,
        currentDiscounts,
      });

      expect(discountPerProduct.length).toBe(1);
      expect(discountPerProduct[0].discount).toBe(3);
      expect(discountPerProduct[0].name).toBe('x3 Shirt offer');
    });

    it('it should return multipack discount', () => {
      const product = getProduct(getProductCatalog(), 'MUG');
      const productAmount = 2;
      const currentDiscounts: Array<{ discount: number; name: string }> = [];

      const discountPerProduct = getDiscountPerProduct({
        product,
        productAmount,
        currentDiscounts,
      });

      expect(discountPerProduct.length).toBe(1);
      expect(discountPerProduct[0].discount).toBe(5);
      expect(discountPerProduct[0].name).toBe('2x1 Mug offer');
    });

    it('it should return empty discount for bulk', () => {
      const product = getProduct(getProductCatalog(), 'TSHIRT');
      const productAmount = 2;
      const currentDiscounts: Array<{ discount: number; name: string }> = [
        {
          discount: 3,
          name: 'x3 Shirt offer',
        },
      ];

      const discountPerProduct = getDiscountPerProduct({
        product,
        productAmount,
        currentDiscounts,
      });

      expect(discountPerProduct.length).toBe(0);
    });

    it('it should return empty discount for multipack', () => {
      const product = getProduct(getProductCatalog(), 'MUG');
      const productAmount = 1;
      const currentDiscounts: Array<{ discount: number; name: string }> = [
        {
          discount: 5,
          name: '2x1 Mug offer',
        },
      ];

      const discountPerProduct = getDiscountPerProduct({
        product,
        productAmount,
        currentDiscounts,
      });

      expect(discountPerProduct.length).toBe(0);
    });

    it('it should add multipack discount to an existing discounts array', () => {
      const product = getProduct(getProductCatalog(), 'MUG');
      const productAmount = 2;
      const currentDiscounts: Array<{ discount: number; name: string }> = [
        {
          discount: 3,
          name: 'x3 Shirt offer',
        },
      ];

      const discountPerProduct = getDiscountPerProduct({
        product,
        productAmount,
        currentDiscounts,
      });

      expect(discountPerProduct.length).toBe(2);
    });
  });
});
