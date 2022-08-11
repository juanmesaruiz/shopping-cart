import { findProduct, getProduct, getProductCatalog } from '../productsHelper';

describe('productsHelper', () => {
  describe('getProductCatalog', () => {
    it('Should match', () => {
      expect(getProductCatalog()).toMatchSnapshot();
    });
  });

  describe('getProduct', () => {
    it('Should get a Product', () => {
      expect(getProduct(getProductCatalog(), 'TSHIRT')).toMatchSnapshot();
    });
  });

  describe('findProduct', () => {
    it('Should find a product', () => {
      const productData = [
        { code: 'TSHIRT', amount: 1 },
        { code: 'MUG', amount: 2 },
      ];
      expect(findProduct(productData, 'MUG')).toBe(productData[1]);
    });
  });
});
