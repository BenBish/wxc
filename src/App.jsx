import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

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
        return response.json();
      })
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <div className="app">
      <ShopContext.Provider value={{ items, itemsInCart, setItemsInCart }}>
        <Header />
        <div className="container pr-md-0 pl-md-0">
          <Router>
            <Shop path="/" />
            <Cart path="/cart" />
          </Router>
        </div>
      </ShopContext.Provider>
    </div>
  );
};

export default App;