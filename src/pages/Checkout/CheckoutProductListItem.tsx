import React, { ChangeEvent, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import type Checkout from '../../classes/Checkout';
import type Product from '../../models/Product';
import { setCartItems } from '../../reducers/cartItems';

import { QUERY_PARAM_PRODUCT_DETAIL } from '../../config/constants';
import { findProduct } from '../../helpers/productsHelper';
import { useAppDispatch } from '../../reduxHooks';

const CheckoutProductListItem = ({
  checkout,
  product: { code, imgAlt, imgCatalogSrc, name, price, productCode, stock },
}: {
  checkout: Checkout;
  product: Product;
}) => {
  const [, setSearchParams] = useSearchParams();
  const cartItem = findProduct(checkout.cartItems, code);
  const productAmount = cartItem ? cartItem.amount : 0;

  const dispatch = useAppDispatch();

  const handleAmountClick = useCallback(
    (amount: number) => {
      checkout.scan(code, amount);
      dispatch(setCartItems(checkout.totalItems));
    },
    [checkout, code, dispatch]
  );

  const handleNameClick = useCallback(
    () => setSearchParams({ [QUERY_PARAM_PRODUCT_DETAIL]: code }),
    [code, setSearchParams]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newItemStock = parseInt(event.target.value);

      if (newItemStock !== productAmount) {
        checkout.setProductAmount(code, newItemStock ? newItemStock : 0);
        dispatch(setCartItems(checkout.totalItems));
      }
    },
    [checkout, code, dispatch, productAmount]
  );

  return (
    <li className="product row">
      <div className="col-product">
        <figure className="product-image">
          <img src={imgCatalogSrc} alt={imgAlt} />
          <div className="product-description">
            <h1 onClick={handleNameClick}>{name}</h1>
            <p className="product-code">Product code {productCode}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button
          disabled={stock === 0 || productAmount === 0}
          className="count"
          onClick={() => handleAmountClick(-1)}
        >
          -
        </button>
        <input
          aria-label="input-amount"
          disabled={stock <= 0}
          type="number"
          className="product-quantity"
          onChange={handleInputChange}
          value={productAmount.toString()}
          min={0}
          max={stock}
        />
        <button
          disabled={productAmount >= stock}
          className="count"
          onClick={() => handleAmountClick(+1)}
        >
          +
        </button>
        {productAmount >= stock && (
          <span className="no-stock">
            Sorry, there are no more units available
          </span>
        )}
      </div>
      <div className="col-price">
        <span className="product-price">{price}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">{productAmount * price}</span>
        <span className="product-currency currency">€</span>
      </div>
    </li>
  );
};

export default CheckoutProductListItem;
