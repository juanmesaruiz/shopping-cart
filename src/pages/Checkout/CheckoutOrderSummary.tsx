import React, { useCallback } from 'react';
import styled from 'styled-components';

import type Checkout from '../../classes/Checkout';
import { setCartItems } from '../../reducers/cartItems';

import { useAppDispatch } from '../../reduxHooks';

const CheckoutOrderSummary = ({ checkout }: { checkout: Checkout }) => {
  const dispatch = useAppDispatch();
  const handlePayButton = useCallback(() => {
    checkout.pay();
    dispatch(setCartItems(0));
  }, [checkout, dispatch]);

  const discounts = checkout.discounts;

  return (
    <CheckoutOrderSummaryContainer>
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">
            {checkout.totalItems} Items
          </span>
          <span className="summary-items-price">
            {checkout.totalWithoutDiscounts()}
            <span className="currency">€</span>
          </span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          {discounts.length ? (
            discounts.map(discount => (
              <li key={discount.name}>
                <span>{discount.name}</span>
                <span>-{discount.discount}€</span>
              </li>
            ))
          ) : (
            <li>
              <span className="summary-discounts-no-discounts">
                Add products to find some discount for you!
              </span>
            </li>
          )}
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">{checkout.total()}€</span>
          </li>
        </ul>
        <button
          onClick={handlePayButton}
          disabled={checkout.totalItems <= 0}
          type="submit"
        >
          Checkout
        </button>
      </div>
    </CheckoutOrderSummaryContainer>
  );
};

const CheckoutOrderSummaryContainer = styled.aside`
  display: flex;
  flex-flow: column wrap;
  padding: 40px 32px;
  width: 312px;
  background-color: #f3f3f3;
  color: #212240;

  > * {
    width: 100%;
  }

  .summary-items-price {
    font-size: 16px;
    font-weight: bold;
  }

  input {
    margin: 8px auto;
    color: #a6a7b3;
    text-indent: 16px;
    text-transform: uppercase;
  }

  input::placeholder {
    color: #a6a7b3;
    text-transform: lowercase;
  }

  ul li {
    display: flex;
    justify-content: space-between;
  }

  ul li > *:nth-child(2) {
    font-weight: bold;
  }

  ul li + li {
    margin-top: 20px;
  }

  .summary-total {
    align-self: flex-end;
    margin-top: auto;
    padding-top: 16px;
    padding-bottom: 0;
    border-top: 1px solid rgba(33, 34, 64, 0.16);
    color: #212240;
  }

  .summary-total-cost {
    flex-basis: 100%;
    text-transform: uppercase;
  }

  .summary-total-price {
    font-weight: bold;
  }

  button[type='submit'] {
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

  .summary-discounts-no-discounts {
    color: #a6a7b3;
    font-size: 12px;
  }

  .wrapper {
    padding: 32px 0;
  }

  .wrapper-half {
    padding: 24px 0;
  }
`;

export default CheckoutOrderSummary;
