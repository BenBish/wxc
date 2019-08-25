export const addItemsToStock = (itemId, itemCatalog, itemsInCart) => {
  let stockItemToRestore = itemsInCart.filter(item => {
    return item.id === itemId;
  });
  const stockItem = {
    id: stockItemToRestore[0].id,
    name: stockItemToRestore[0].name,
    description: stockItemToRestore[0].description,
    audPrice: stockItemToRestore[0].price
  };
  const newItems = itemCatalog.map(item => {
    if (item.id !== stockItemToRestore[0].id) return item;
    return {
      ...stockItem,
      stockOnHand: item.stockOnHand + stockItemToRestore[0].qty
    };
  });
  return newItems;
};