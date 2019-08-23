import React from "react";
import { Router } from "@reach/router";

import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="container">
      <Router>
        <Shop path="/" />
        <Cart path="/cart" />
      </Router>
    </div>
  );
}

export default App;
