import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import Checkout from '../../../classes/Checkout';

import CheckoutOrderSummary from '../CheckoutOrderSummary';
import mockStore from '../../../store/storeTestHelpers/mockStore';

describe('CheckoutOrderSummary', () => {
  const checkout = new Checkout();

  const defaultProps = {
    checkout,
  };
  const getComponent = (props: { checkout: Checkout } = defaultProps) => (
    <Provider store={mockStore}>
      <CheckoutOrderSummary {...props} />
    </Provider>
  );

  const setup = () => render(getComponent());

  beforeEach(() => {
    checkout.scan('TSHIRT', 3).scan('MUG', 4).scan('CAP');
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should clear checkout state on checkout button click', () => {
    setup();
    const checkoutButton = screen.getByText('Checkout');
    fireEvent.click(checkoutButton);

    expect(checkout.totalItems).toBe(0);
  });
});
