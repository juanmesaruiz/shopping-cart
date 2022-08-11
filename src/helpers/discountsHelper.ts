import Discount from '../models/Discount';
import type Product from '../models/Product';

import discountsData from '../data/discountsData.json';

const DISCOUNT_TYPES = {
  BULK: 'bulk',
  MULTIPACK: 'multipack',
};

const newDiscountFromData = (item: {
  [key: string]: string | number | Array<string>;
}): Discount => {
  const keys = Object.keys(item);
  const discount = new Discount();

  keys.forEach(key => {
    discount[key] = item[key];
  });

  return discount;
};

const transformDataToDiscount = (): Array<Discount> => {
  const discountsDataToArray = Object.values(discountsData);

  return discountsDataToArray.map(item => newDiscountFromData(item));
};

const getDiscountPerProduct = ({
  product,
  productAmount,
  currentDiscounts,
}: {
  product: Product;
  productAmount: number;
  currentDiscounts: Array<{
    discount: number;
    name: string;
  }>;
}): Array<{
  discount: number;
  name: string;
}> => {
  const discounts = transformDataToDiscount();
  let discountPerProduct = [...currentDiscounts];
  discounts.forEach(({ code, name, items, quantity, discount }) => {
    const applies = items.filter(
      productCodeToApplyDiscount => productCodeToApplyDiscount === product.code
    );

    if (applies.length) {
      const { price } = product;

      discountPerProduct = discountPerProduct.filter(
        currentDiscount => currentDiscount.name !== name
      );

      switch (code) {
        case DISCOUNT_TYPES.BULK: {
          if (productAmount >= quantity) {
            const discountPerUnit = (Number(discount) / 100) * Number(price);

            discountPerProduct.push({
              name,
              discount: discountPerUnit * productAmount,
            });
          }
          break;
        }

        case DISCOUNT_TYPES.MULTIPACK:
        default: {
          if (productAmount >= quantity) {
            const freeItems = Math.floor(productAmount / Number(quantity));

            discountPerProduct.push({
              name,
              discount: freeItems * price,
            });
            break;
          }
        }
      }
    }
  });

  return discountPerProduct;
};

export { getDiscountPerProduct };
