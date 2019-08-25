import { addItemsToStock } from './logic';

describe('addItemsToStock function', () => {
  it('should add 1 or more items to item stock level', () => {

    const itemId = 3;
    const itemCatalog = [
      {
        "audPrice": 2.3,
        "description": "Yellow skinned melon with white or green flesh.",
        "id": 1,
        "name": "Honeydew",
        "stockOnHand": 30
      },
      {
        "audPrice": 0.98,
        "description": "Oval shaped fruit, tapering at one end, with thin, brown, furry skin and gold-coloured flesh. Imported from New Zealand.",
        "id": 2,
        "name": "Kiwi Fruit",
        "stockOnHand": 200
      },
      {
        "audPrice": 2.3,
        "description": "Yellow skinned melon with white or green flesh.",
        "id": 3,
        "name": "Honeydew",
        "stockOnHand": 0
      }
    ];
    const itemsInCart = [
      {
        "id": 3,
        "qty": 3,
        "name": "Honeydew",
        "description": "Yellow skinned melon with white or green flesh.",
        "price": 2.3
      }
    ];

    const result = addItemsToStock(itemId, itemCatalog, itemsInCart);
    expect(result).toHaveLength(3);
    expect(result[2]).toEqual(
      expect.objectContaining({
        stockOnHand: 3
      })
    );

  })
})