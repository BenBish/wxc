import React, { useContext } from "react";
import { Link } from "@reach/router";

import ShopContext from "../../context/ShopContext";

const Header = () => {
  const { itemsInCart } = useContext(ShopContext);

  const numberOfItemsInCart = array => {
    let count = 0;
    array.forEach(item => {
      count = count + item.qty;
    });
    return count;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" title="home">
          WXC
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/cart" className="btn btn-primary">
                Cart{" "}
                <span className="badge badge-light">
                  {numberOfItemsInCart(itemsInCart)}
                </span>
                <span className="sr-only">items</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
