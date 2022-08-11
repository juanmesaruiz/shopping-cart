import React from 'react';
import styled from 'styled-components';

import type Checkout from '../../classes/Checkout';

import CheckoutProductListItem from './CheckoutProductListItem';
import { getProductCatalog } from '../../helpers/productsHelper';

const CheckoutProductList = ({ checkout }: { checkout: Checkout }) => {
  const products = getProductCatalog();

  return (
    <CheckoutProductListContainer>
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list">
        {products.map(product => (
          <CheckoutProductListItem
            checkout={checkout}
            key={product.code}
            product={product}
          />
        ))}
      </ul>
    </CheckoutProductListContainer>
  );
};

const CheckoutProductListContainer = styled.section`
  flex: 1;
  padding: 40px 32px 40px 56px;

  .tableHead {
    padding: 32px 0;
  }

  [class*='col-'] {
    display: flex;
    align-items: center;
  }

  [class*='col-']:nth-child(n + 2) {
    justify-content: center;
  }

  .col-product {
    width: 45%;
  }

  .col-quantity {
    flex-flow: row wrap;
    width: 20%;
  }

  .col-price {
    width: 20%;
  }

  .col-total {
    width: 15%;
  }

  input {
    width: 100%;
    height: 48px;
    border-radius: 4px;
  }

  button.count {
    padding: 0 8px;
    height: 40px;
    border: none;
    background: transparent;
    color: #7350ff;
    font-weight: bold;
    cursor: pointer;
  }

  button.count:disabled {
    color: #a6a7b3;
    cursor: not-allowed;
  }

  .products-list {
    position: relative;
    width: 100%;
  }

  .product-image {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
  }

  .product-image img {
    margin-right: 16px;
    width: 72px;
    height: 72px;
    border: 1px solid #cacad1;
    border-radius: 4px;
  }

  .product-code {
    border-radius: 4px;
    color: #a6a7b3;
    letter-spacing: 0.13px;
    font-weight: 400;
  }

  .product-quantity {
    width: 40px;
    height: 40px;
    border: 2px solid #dbdbe0;
    border-radius: 4px;
    text-align: center;
  }

  .product-price {
    color: #000000;
    font-size: 16px;
  }

  .product .clear {
    border: none;
    background: transparent;
  }

  .product .clear span {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
  }

  .product .clear span:before,
  .product .clear span:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 2px;
    display: block;
    width: 12px;
    height: 2px;
    border-radius: 8px;
    background-color: #a6a7b3;
    transform: rotate(-45deg);
    transform-origin: center center;
  }

  .product .clear span:before {
    transform: rotate(45deg);
  }

  .product h1 {
    color: #7350ff;
    cursor: pointer;
  }

  .row {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .row + .row {
    margin-top: 32px;
  }
`;

export default CheckoutProductList;
