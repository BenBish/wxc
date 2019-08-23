import React, { useContext } from "react";

import ShopContext from "../../context/ShopContext";

const ItemCard = props => {
  const { item } = props;

  const formatPrice = number => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD"
    }).format(number);
  };

  const { itemsInCart, setItemsInCart } = useContext(ShopContext);

  const addToCart = () => {
    const addedItem = {
      qty: 1,
      name: item.name,
      description: item.description,
      price: item.audPrice
    };

    let itemAdded = false;
    const newItems = itemsInCart.map(item => {
      if (item.name !== addedItem.name) return item;
      itemAdded = true;
      return { ...addedItem, qty: item.qty + 1 };
    });

    if (itemAdded) {
      setItemsInCart([...newItems]);
    } else {
      setItemsInCart([...newItems, addedItem]);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      {item.stockOnHand > 0 && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="badge badge-success">In Stock</span>
          </li>
          <li className="list-group-item">{formatPrice(item.audPrice)}</li>
        </ul>
      )}
      <div className="card-body">
        {!item.stockOnHand && (
          <button className="btn btn-danger" disabled={true}>
            Out of stock
          </button>
        )}
        {item.stockOnHand > 0 && (
          <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
