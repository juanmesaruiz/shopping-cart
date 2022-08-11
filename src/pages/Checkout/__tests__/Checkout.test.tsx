import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import Checkout from '../Checkout';
import CheckoutClass from '../../../classes/Checkout';
import { MockComponent } from '../../../helpers/testHelpers';
import mockStore from '../../../store/storeTestHelpers/mockStore';

jest.mock(
  '../CheckoutOrderSummary',
  () => (props: object) => MockComponent('CheckoutOrderSummary', props)
);

jest.mock(
  '../CheckoutProductDetails',
  () => (props: object) => MockComponent('CheckoutProductDetails', props)
);
jest.mock(
  '../CheckoutProductList',
  () => (props: object) => MockComponent('CheckoutProductList', props)
);

describe('Checkout', () => {
  const checkout = new CheckoutClass();

  const defaultProps = {
    checkout,
  };
  const getComponent = (props: { checkout: CheckoutClass } = defaultProps) => (
    <Provider store={mockStore}>
      <Checkout {...props} />
    </Provider>
  );

  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
