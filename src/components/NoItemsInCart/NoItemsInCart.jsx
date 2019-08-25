import React from "react";
import { Link } from "@reach/router";

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;
