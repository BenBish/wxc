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

export const removeItemFromStock = (item, itemCatalog) => {
  const stockItem = {
    id: item.id,
    name: item.name,
    description: item.description,
    audPrice: item.audPrice
  };
  const newItems = itemCatalog.map(item => {
    if (item.id !== stockItem.id) return item;
    return { ...stockItem, stockOnHand: item.stockOnHand - 1 };
  });
  return newItems;
};