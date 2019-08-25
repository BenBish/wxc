import React, { Fragment, useContext, useState } from "react";
import { Link, navigate } from "@reach/router";

import { totalPrice } from "../../helpers/price";
import ShopContext from "../../context/ShopContext";

import CartContents from "../../components/CartContents/CartContents";
import NoItemsInCart from "../../components/NoItemsInCart/NoItemsInCart";
import CheckoutComplete from "../../components/CheckoutComplete/CheckoutComplete";
import Spinner from "../../components/Spinner/Spinner";

import { addItemsToStock } from "./logic";

const Cart = () => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const { items, setItems, itemsInCart, setItemsInCart } = useContext(
    ShopContext
  );

  const removeFromCart = e => {
    const itemId = parseInt(e.target.dataset.id);

    const updatedStockItems = addItemsToStock(itemId, items, itemsInCart);
    setItems([...updatedStockItems]);

    const newItemsRemoved = itemsInCart.filter(item => {
      return item.id !== itemId;
    });
    setItemsInCart([...newItemsRemoved]);
  };

  const checkout = () => {
    const data = {
      total: totalPrice(itemsInCart),
      items: itemsInCart
    };

    setIsCheckingOut(true);
    fetch(
      "https://wooliesxfechallenge.azurewebsites.net/api/v1/resources/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(response => {
        if (response.ok) {
          setIsCheckingOut(false);
          setIsCheckoutComplete(true);
          setItemsInCart([]);
        } else {
          navigate(`/error`);
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .catch(error => {
        console.error(error);
        navigate(`/error`);
      });
  };

  return (
    <Fragment>
      <h1 className="lead mt-3 mb-3">Cart</h1>
      {!isCheckingOut && !isCheckoutComplete && itemsInCart.length < 1 && (
        <NoItemsInCart />
      )}
      {!isCheckingOut && !isCheckoutComplete && itemsInCart.length > 0 && (
        <Fragment>
          <CartContents items={itemsInCart} remove={removeFromCart} />
          <div className="d-flex justify-content-between">
            <Link to="/" className="btn btn-primary" title="home">
              Continue Shopping
            </Link>
            <button
              type="button"
              className="btn btn-success"
              onClick={checkout}
            >
              Checkout
            </button>
          </div>
        </Fragment>
      )}
      {isCheckingOut && !isCheckoutComplete && <Spinner />}
      {!isCheckingOut && isCheckoutComplete && <CheckoutComplete />}
    </Fragment>
  );
};

export default Cart;
