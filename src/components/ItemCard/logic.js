export const addItem = (newItem, itemsInCart) => {
  const newItems = {
    items: [],
    updated: false
  };
  newItems.items = itemsInCart.map(item => {
    if (item.name !== newItem.name) return item;
    newItems.updated = true;
    return { ...newItem, qty: item.qty + 1 };
  });
  return newItems;
}