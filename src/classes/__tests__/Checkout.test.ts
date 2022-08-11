import Checkout from '../Checkout';

describe('Checkout class', () => {
  let checkout: Checkout;

  beforeEach(() => (checkout = new Checkout()));

  it('Should match default state', () => {
    expect(checkout).toMatchSnapshot();
  });

  it('Should add 3 items', () => {
    checkout.scan('TSHIRT').scan('MUG').scan('CAP');

    expect(checkout.totalItems).toBe(3);
  });

  it('Should add items and discounts', () => {
    checkout.scan('TSHIRT', 3).scan('MUG', 4).scan('CAP');

    expect(checkout).toMatchSnapshot();
  });

  it('Should return 0 on total and totalWithoutDiscounts', () => {
    expect(checkout.totalWithoutDiscounts()).toBe(0);
    expect(checkout.total()).toBe(0);
  });

  it('Should return correct total and totalWithoutDiscounts', () => {
    checkout
      .scan('TSHIRT', +3)
      .scan('MUG', +4)
      .scan('CAP');

    expect(checkout.totalWithoutDiscounts()).toBe(90);
    expect(checkout.total()).toBe(77);
  });

  it('Should set specific amount of product', () => {
    checkout.scan('TSHIRT', 3).scan('MUG', 4).scan('CAP', 5);
    expect(checkout.totalItems).toBe(12);

    checkout
      .setProductAmount('TSHIRT', 5)
      .setProductAmount('MUG', 120)
      .setProductAmount('CAP', 0);

    expect(checkout).toMatchSnapshot();
  });

  it('Should clear state', () => {
    checkout
      .scan('TSHIRT', +3)
      .scan('MUG', +4)
      .scan('CAP');
    expect(checkout.totalItems).not.toBe(0);

    checkout.pay();

    expect(checkout.totalItems).toBe(0);
    expect(checkout.cartItems.length).toBe(0);
    expect(checkout.discounts.length).toBe(0);
  });
});
