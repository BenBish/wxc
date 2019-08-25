export const addItem = (newItem, itemsInCart) => {
  const newItems = {
    items: [],
    updated: false
  };
  newItems.items = itemsInCart.map(item => {
    if (item.id !== newItem.id) return item;
    newItems.updated = true;
    return { ...newItem, qty: item.qty + 1 };
  });
  return newItems;
}