/** @jsx jsx */
import { Fragment, useContext } from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "@reach/router";

import ShopContext from "../../context/ShopContext";
import { formatPrice, totalPrice } from "../../helpers/price";

const Cart = () => {
  const { itemsInCart, setItemsInCart } = useContext(ShopContext);

  const removeFromCart = e => {
    const itemToBeRemoved = e.target.dataset.id;

    const newItems = itemsInCart.filter(item => {
      return item.name !== itemToBeRemoved;
    });

    setItemsInCart([...newItems]);
  };

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
              <th scope="col">Qty</th>
              <th
                scope="col"
                css={css`
                  @media (max-width: 575px) {
                    width: 50%;
                  }
                `}
              >
                Name
              </th>
              <th scope="col" className="d-none d-sm-table-cell">
                Description
              </th>
              <th scope="col">Unit Price</th>
              <th scope="col" className="d-none d-sm-table-cell">
                Line Total
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {itemsInCart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.qty}</td>
                  <td>{item.name}</td>
                  <td className="d-none d-sm-table-cell">{item.description}</td>
                  <td>{formatPrice(item.price)}</td>
                  <td className="d-none d-sm-table-cell">
                    {formatPrice(item.price * item.qty)}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={removeFromCart}
                    >
                      <span aria-hidden="true" data-id={item.name}>
                        &times;
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th className="d-none d-sm-table-cell"></th>
              <th className="d-none d-sm-table-cell"></th>
              <th className="text-right">TOTAL</th>
              <th>{totalPrice(itemsInCart)}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      )}
    </Fragment>
  );
};

export default Cart;
