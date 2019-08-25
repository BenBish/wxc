/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";

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
      <div
        className="card-body"
        css={css`
          @media (min-width: 768px) {
            min-height: 175px;
          }
        `}
      >
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {item.stockOnHand >= 10 && (
            <span className="badge badge-success">In Stock</span>
          )}
          {item.stockOnHand > 0 && item.stockOnHand < 10 && (
            <span className="badge badge-warning">Low Stock</span>
          )}
          {item.stockOnHand === 0 && (
            <span className="badge badge-danger">Out of Stock</span>
          )}
        </li>
        <li className="list-group-item">{formatPrice(item.audPrice)}</li>
      </ul>
      <div className="card-body">
        <button
          className="btn btn-primary"
          onClick={addToCart}
          disabled={item.stockOnHand > 0 ? false : true}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
