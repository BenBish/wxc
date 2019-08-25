import React, { Fragment, useContext } from "react";

import ItemCard from "../../components/ItemCard/ItemCard";

import ShopContext from "../../context/ShopContext";

const Shop = () => {
  const { items } = useContext(ShopContext);

  return (
    <Fragment>
      <h1 className="lead mt-3 mb-3">Shop</h1>
      <div className="row">
        {items &&
          items.map((item, index) => {
            return (
              <div
                className="col-12 mb-4 col-md-6 mb-md-5 col-lg-4"
                key={index}
              >
                <ItemCard item={item} />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Shop;
