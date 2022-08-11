import Product from '../models/Product';

import productsData from '../data/productsData.json';

const newProductFromData = (item: {
  [key: string]: string | number;
}): Product => {
  const keys = Object.keys(item);
  const product = new Product();

  keys.forEach((key: any) => {
    product[key] = item[key];
  });

  return product;
};

const transformDataToProduct = () => {
  const productsDataToArray = Object.values(productsData);

  return productsDataToArray.map(item => newProductFromData(item));
};

export const getProductCatalog = () => transformDataToProduct();

export const getProduct = (
  productData: Array<Product>,
  code: string
): Product => productData.find(item => item.code === code);

type ProductDataProduct = { code: string; amount: number };
export const findProduct = (
  productData: Array<ProductDataProduct>,
  code: string
): ProductDataProduct => productData.find(item => item.code === code);
