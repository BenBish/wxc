import React from "react";
import { Link } from "@reach/router";

const CheckoutComplete = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Success, thanks for shopping with WXC</h5>
        <p className="card-text">Your drone will deliver at 6.20pm today!</p>
        <Link to="/" className="btn btn-primary" title="home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutComplete;
