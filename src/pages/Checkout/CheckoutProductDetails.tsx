import React, { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import type Checkout from '../../classes/Checkout';
import { setCartItems } from '../../reducers/cartItems';

import { QUERY_PARAM_PRODUCT_DETAIL } from '../../config/constants';
import {
  findProduct,
  getProduct,
  getProductCatalog,
} from '../../helpers/productsHelper';
import { useAppDispatch } from '../../reduxHooks';

const CheckoutProductDetails = ({ checkout }: { checkout: Checkout }) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const productDetailCode = searchParams.get(QUERY_PARAM_PRODUCT_DETAIL);

  const removeCodeFromSearchParams = useCallback(
    () => setSearchParams({}),
    [setSearchParams]
  );

  const handlePressedKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        removeCodeFromSearchParams();
      }
    },
    [removeCodeFromSearchParams]
  );

  useEffect(() => {
    if (productDetailCode) {
      document.addEventListener('keyup', handlePressedKey);
    } else {
      document.removeEventListener('keyup', handlePressedKey);
    }
  }, [productDetailCode, handlePressedKey]);

  if (productDetailCode) {
    const product = getProduct(getProductCatalog(), productDetailCode);
    const {
      code,
      description,
      imgAlt,
      imgDetailSrc,
      name,
      price,
      productCode,
      stock,
    } = product;

    const cartItem = findProduct(checkout.cartItems, code);
    const productAmount = cartItem ? cartItem.amount : 0;
    const isDisabledAddToCart = productAmount >= stock;

    const handleAddToCart = () => {
      const amount = +1;
      checkout.scan(code, amount);
      dispatch(setCartItems(amount));
    };

    return (
      <CheckoutProductDetailsContainer>
        <figure className="productDetails-image">
          <img src={imgDetailSrc} alt={imgAlt} />
        </figure>
        <aside className="productDetails-product-details">
          <div className="productDetails-close">
            <button onClick={removeCodeFromSearchParams}>X</button>
          </div>
          <div className="productDetails-name">
            <span>{name}</span>
            <span>{price} €</span>
          </div>
          <div className="productDetails-description">{description}</div>
          <div className="productDetails-ref">Product code {productCode}</div>
          <button
            onClick={handleAddToCart}
            disabled={isDisabledAddToCart}
            className="productDetails-button"
          >
            Add to cart
          </button>
          {isDisabledAddToCart && (
            <span className="no-stock">
              Sorry, there are no more units available
            </span>
          )}
        </aside>
      </CheckoutProductDetailsContainer>
    );
  }

  return null;
};

const CheckoutProductDetailsContainer = styled.div`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;

  .productDetails-image {
    align-self: center;
    text-align: center;
    width: 826px;

    img {
      max-height: 648px;
      vertical-align: middle;
    }
  }

  .productDetails-product-details {
    width: calc(100% - 826px);
    padding: 30px 20px;

    .productDetails-close {
      font-size: 20px;
      text-align: right;

      button {
        background: none;
        cursor: pointer;
      }
    }

    .productDetails-name {
      border-bottom: 1px solid #a6a7b3;
      display: flex;
      font-size: 20px;
      font-weight: bold;
      justify-content: space-between;
      margin-top: 50px;
      padding-bottom: 15px;
    }

    .productDetails-description {
      border-bottom: 1px solid #a6a7b3;
      color: #717285;
      font-size: 16px;
      height: 250px;
      line-height: 1.5;
      padding: 30px 0;
    }

    .productDetails-ref {
      color: #a6a7b3;
      font-size: 14px;
      padding: 30px 0;
    }

    .productDetails-button {
      margin-top: 24px;
      padding-top: 16px;
      padding-bottom: 16px;
      width: 100%;
      border-radius: 4px;
      background: #7350ff;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      line-height: 14px;
      cursor: pointer;

      &:disabled {
        background: #a6a7b3;
        cursor: not-allowed;
      }
    }
  }
`;

export default CheckoutProductDetails;
