import React from 'react';
import { render } from '@testing-library/react';

import CheckoutProductList from '../CheckoutProductList';
import Checkout from '../../../classes/Checkout';
import { MockComponent } from '../../../helpers/testHelpers';

jest.mock(
  '../CheckoutProductListItem',
  () => (props: object) => MockComponent('CheckoutProductListItem', props)
);

describe('CheckoutProductList', () => {
  const checkout = new Checkout();

  const defaultProps = {
    checkout,
  };
  const getComponent = (props: { checkout: Checkout } = defaultProps) => (
    <CheckoutProductList {...props} />
  );

  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
