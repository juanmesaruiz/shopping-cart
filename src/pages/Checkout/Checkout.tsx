import React from 'react';
import styled from 'styled-components';

import type TypeCheckout from '../../classes/Checkout';

import CheckoutOrderSummary from './CheckoutOrderSummary';
import CheckoutProductDetails from './CheckoutProductDetails';
import CheckoutProductList from './CheckoutProductList';
import { useAppSelector } from '../../reduxHooks';

const Checkout = ({ checkout }: { checkout: TypeCheckout }) => {
  useAppSelector(state => state.cartItems.amount);

  return (
    <CheckoutContainer>
      <CheckoutProductList checkout={checkout} />
      <CheckoutOrderSummary checkout={checkout} />
      <CheckoutProductDetails checkout={checkout} />
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.main`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  height: calc(100% - 64px);
  left: 50%;
  max-height: 648px;
  max-width: 1088px;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 64px);
`;

export default Checkout;
