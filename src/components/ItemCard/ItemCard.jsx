import React, { useContext } from "react";

import ShopContext from "../../context/ShopContext";
import { formatPrice } from "../../helpers/price";
import { addItem, removeItemFromStock } from "./logic";

const ItemCard = props => {
  const { item } = props;

  const { items, setItems, itemsInCart, setItemsInCart } = useContext(
    ShopContext
  );

  const addToCart = () => {
    const addedItem = {
      id: item.id,
      qty: 1,
      name: item.name,
      description: item.description,
      price: item.audPrice
    };

    const newItemsInCart = addItem(addedItem, itemsInCart);
    if (newItemsInCart.updated) {
      setItemsInCart([...newItemsInCart.items]);
    } else {
      setItemsInCart([...newItemsInCart.items, addedItem]);
    }

    const updatedStockItems = removeItemFromStock(item, items);
    setItems([...updatedStockItems]);
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
