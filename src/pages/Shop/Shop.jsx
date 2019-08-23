import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const Shop = () => {
  const { items } = useContext(ShopContext);

  return (
    <div>
      <h1>Shop</h1>
      {items && <h2>items loaded</h2>}
    </div>
  );
};

export default Shop;
