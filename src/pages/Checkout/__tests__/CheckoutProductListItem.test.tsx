import React from 'react';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';

import Checkout from '../../../classes/Checkout';
import type Product from '../../../models/Product';

import CheckoutProductListItem from '../CheckoutProductListItem';
import { getProduct, getProductCatalog } from '../../../helpers/productsHelper';
import mockStore from '../../../store/storeTestHelpers/mockStore';

describe('CheckoutProductListItem', () => {
  let history = createBrowserHistory();

  let checkout = new Checkout();
  const product = getProduct(getProductCatalog(), 'TSHIRT');

  const defaultProps = {
    checkout,
    product,
  };
  const getComponent = (
    props: { checkout: Checkout; product: Product } = defaultProps
  ) => (
    <Provider store={mockStore}>
      <HistoryRouter history={history}>
        <CheckoutProductListItem {...props} />
      </HistoryRouter>
    </Provider>
  );

  const setup = () => render(getComponent());

  beforeEach(() => {
    checkout.setProductAmount('TSHIRT', 3);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should add new item on checkout', () => {
    setup();

    const addToCartButton = screen.getByText('+');
    fireEvent.click(addToCartButton);

    expect(checkout.totalItems).toBe(4);
  });

  it('Should remove item on checkout', () => {
    setup();

    const addToCartButton = screen.getByText('-');
    fireEvent.click(addToCartButton);

    expect(checkout.totalItems).toBe(2);
  });

  it('Should set specific amount of product', () => {
    setup();

    const input = screen.getByLabelText('input-amount');

    fireEvent.change(input, { target: { value: 13 } });
    expect(checkout.totalItems).toBe(13);

    fireEvent.change(input, { target: { value: 150 } });
    expect(checkout.totalItems).toBe(99);

    fireEvent.change(input, { target: { value: '' } });
    expect(checkout.totalItems).toBe(0);
  });

  it('Should render no more stock', () => {
    checkout.scan('TSHIRT', 96);
    setup();

    const noStock = screen.getByText(
      'Sorry, there are no more units available'
    );
    expect(noStock).toBeDefined();
  });

  it('Should modify searchParams on click on name', () => {
    setup();

    const productName = screen.getByText('T-Shirt');
    fireEvent.click(productName);
    expect(history.location.search).toBe('?code=TSHIRT');
  });
});
