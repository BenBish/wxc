/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";

import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NoMatch from "./pages/NoMatch/NoMatch";

import ShopContext from "./context/ShopContext";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [items, setItems] = useState();
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://wooliesxfechallenge.azurewebsites.net/api/v1/resources/products"
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          navigate(`/error`);
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .then(data => {
        data.forEach((item, index) => {
          return (item.id = index + 1);
        });
        setItems(data);
      })
      .catch(error => {
        console.error(error);
        navigate(`/error`);
      });
  }, []);

  return (
    <div className="app">
      <ShopContext.Provider value={{ items, itemsInCart, setItemsInCart }}>
        <Header />
        <div
          className="container"
          css={css`
            @media (min-width: 576px) {
              padding-left: 0;
              padding-right: 0;
            }
            @media (min-width: 1024px) {
              padding-left: 15px;
              padding-right: 15px;
            }
          `}
        >
          <Router>
            <Shop path="/" />
            <Cart path="/cart" />
            <NoMatch default />
          </Router>
        </div>
      </ShopContext.Provider>
    </div>
  );
};

export default App;
