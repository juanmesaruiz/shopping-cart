# Shopping cart
*TypeScript + ReactJs + Redux*

*Author: Juan Mesa <juanmesaruiz@gmail.com>*

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://juanmesaruiz.github.io/shopping-cart/)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://htmlpreview.github.io/?https://github.com/juanmesaruiz/shopping-cart/blob/master/coverage/lcov-report/index.html)
[![GitHub version](https://img.shields.io/badge/version-1.0.0-cornflowerblue.svg)](https://github.com/juanmesaruiz/shopping-cart/blob/master/package.json)
[![GitHub demo](https://img.shields.io/badge/demo-available-blue.svg)](https://juanmesaruiz.github.io/shopping-cart/)
[![GitHub license](https://img.shields.io/badge/license-MIT-purple.svg)](https://github.com/juanmesaruiz/shopping-cart/blob/master/LICENSE.md)

**Item catalog:**
```
Code         | Name                |     Stock     |  Price
------------------------------------------------------------
TSHIRT       | T-Shirt             |        99     |  20.00€
MUG          | Coffee Mug          |        99     |   5.00€
CAP          | Cap                 |        99     |  10.00€
WATER        | Water               |         0     |   0.50€
```

We allow the users the possibility of having some **discounts** applied when combining the products in the following ways:

- 2-for-1 promotions: (for `MUG` items). Buy two of them, get one free. (e.g: pay 10€ for 4 mugs)
- Bulk discounts: (for `TSHIRT` items). Buying 3 or more of this product, the price per unit is reduced by 5%. (e.g: if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€)

**Functionalities:**
- **Product details:** When clicking on a certain name product, a modal should show up with the details of the said item. User can add there product to cart by clicking on the *Add to cart* button. This modal can be closed clicking on *X* button or pressing *ESC* key.
- **Stock:** every product has stock, if the product is out of stock or the user has added a quantity equal to the available stock of the product, it wil be not possible to add more quantity of this product and a message will appear to the screen informing the user about this, also the buttons of add product become disabled.
- **Add to cart from product list:** User can add to cart using + or - on product list or typing the desired amount of product in the input. If user types a number bigger than stock, the selected value must be the max stock of the product.
- **Pay:** When user added at least 1 item to chart, *Checkout* button becomes enabled and he/she can click on it to pay and clear the chart state. On click on it, checkout state must be restored.


**Scripts:**

Before use any of this scripts you should run **yarn install** to install all the required dependencies to run the project.
-  **start** : Starts the server.
-  **test** : Run all tests.
- **build** : Builds a package ready to be deployed.
