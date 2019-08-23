import React, { useContext } from "react";

import ItemCard from "../../components/ItemCard/ItemCard";

import ShopContext from "../../context/ShopContext";

const Shop = () => {
  const { items } = useContext(ShopContext);

  return (
    <div>
      <h1 className="lead mt-3 mb-3">Shop</h1>
      <div className="row">
        {items &&
          items.map((item, index) => {
            return (
              <div className="col-12 mb-4 col-md-4 mb-md-5" key={index}>
                <ItemCard item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
