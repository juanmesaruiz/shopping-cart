import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Checkout from '../../../classes/Checkout';
import type Product from '../../../models/Product';

import CheckoutProductDetails from '../CheckoutProductDetails';
import { getProduct, getProductCatalog } from '../../../helpers/productsHelper';
import mockStore from '../../../store/storeTestHelpers/mockStore';

describe('CheckoutProductDetails', () => {
  const checkout = new Checkout();
  const product = getProduct(getProductCatalog(), 'TSHIRT');

  const defaultProps = {
    checkout,
    product,
  };
  const getComponent = (
    props: { checkout: Checkout; product: Product } = defaultProps
  ) => (
    <Provider store={mockStore}>
      <MemoryRouter initialEntries={['?code=TSHIRT']}>
        <CheckoutProductDetails {...props} />
      </MemoryRouter>
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

    const addToCartButton = screen.getByText('Add to cart');
    fireEvent.click(addToCartButton);

    expect(checkout.totalItems).toBe(4);
  });

  it('Should render no more stock', () => {
    checkout.scan('TSHIRT', 96);
    setup();

    const noStock = screen.getByText(
      'Sorry, there are no more units available'
    );
    expect(noStock).toBeDefined();
  });

  it('Should delete queryParams on click on X and return null', () => {
    const { container } = setup();
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);

    expect(container).toMatchInlineSnapshot('<div />');
  });

  it('Should delete queryParams on press ESC and return null', () => {
    const { container } = setup();
    fireEvent.keyUp(document.body, { key: 'Escape', code: 27 });

    expect(container).toMatchInlineSnapshot('<div />');
  });
});
