import configureStore from 'redux-mock-store';

import state from './mockState';

const mockStore = configureStore();

const store = mockStore(state);

export default store;
