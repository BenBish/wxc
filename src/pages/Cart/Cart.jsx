import React, { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import ShopContext from "../../context/ShopContext";

import CartContents from "../../components/CartContents/CartContents";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {
  const { itemsInCart, setItemsInCart } = useContext(ShopContext);

  const removeFromCart = e => {
    const itemToBeRemoved = e.target.dataset.id;

    const newItems = itemsInCart.filter(item => {
      return item.name !== itemToBeRemoved;
    });

    setItemsInCart([...newItems]);
  };

  const checkout = () => {};

  return (
    <Fragment>
      <h1 className="lead mt-3 mb-3">Cart</h1>

      {itemsInCart.length === 0 && <EmptyCart />}
      {itemsInCart.length > 0 && (
        <Fragment>
          <CartContents items={itemsInCart} remove={removeFromCart} />
          <div className="d-flex justify-content-between">
            <Link to="/" className="btn btn-primary" title="home">
              Continue Shopping
            </Link>
            <button type="button" className="btn btn-success">
              Checkout
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
