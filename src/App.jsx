import React from "react";
import { Router } from "@reach/router";

import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Router>
          <Shop path="/" />
          <Cart path="/cart" />
        </Router>
      </div>
    </div>
  );
}

export default App;
