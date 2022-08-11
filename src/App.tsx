import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Checkout from './classes/Checkout';

import GlobalStyles from './GlobalStyles';
import CheckoutComponent from './pages/Checkout/Checkout';
import store from './store';

const checkout = new Checkout();

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <CheckoutComponent checkout={checkout} />
    </BrowserRouter>
  </Provider>
);

export default App;
