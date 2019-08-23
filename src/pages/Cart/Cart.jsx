import React, { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import ShopContext from "../../context/ShopContext";
import { formatPrice, totalPrice } from "../../helpers/price";

const Cart = () => {
  const { itemsInCart } = useContext(ShopContext);

  return (
    <Fragment>
      <h1 className="lead mt-3 mb-3">Cart</h1>

      {itemsInCart.length === 0 && (
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Your cart is empty</h5>
            <p className="card-text">
              Go back to the homepage and add some products to the cart
            </p>
            <Link to="/" className="btn btn-primary" title="home">
              Home
            </Link>
          </div>
        </div>
      )}
      {itemsInCart.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Quantity</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {itemsInCart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.qty}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{formatPrice(item.price)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3" className="text-right">
                TOTAL
              </th>
              <th>{totalPrice(itemsInCart)}</th>
            </tr>
          </tfoot>
        </table>
      )}
    </Fragment>
  );
};

export default Cart;
