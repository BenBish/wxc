import React from "react";
import { Link } from "@reach/router";

const Header = () => {
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
                Cart <span className="badge badge-light">4</span>
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
