import reducer, { setCartItems } from '../cartItems';

describe('cartItems', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ amount: 0 });
  });

  it('Should replace with a number', () => {
    expect(reducer(undefined, setCartItems(5))).toEqual({ amount: 5 });
  });
});
