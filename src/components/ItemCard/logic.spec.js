import { addItem, removeItemFromStock } from './logic';

describe('addItem function', () => {
  it('should update qty of existing item when adding item already in cart', () => {

    const items = [
      {
        qty: 1,
        name: "Honeydew",
        description: "Yellow skinned melon with white or green flesh.",
        price: 2.3
      },
      {
        qty: 2,
        name: "Kiwi Fruit",
        description:
          "Oval shaped fruit, tapering at one end, with thin, brown, furry skin and gold-coloured flesh. Imported from New Zealand.",
        price: 0.98
      }
    ];
    const newItem = {
      qty: 1,
      name: "Honeydew",
      description: "Yellow skinned melon with white or green flesh.",
      price: 2.3
    };

    const result = addItem(newItem, items);
    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toEqual(
      expect.objectContaining({
        qty: 2
      })
    );

  })
})

describe('removeItemsFromStock function', () => {
  it('should remove 1 item from item stock level', () => {

    const item = {
      "name": "Honeydew",
      "description": "Yellow skinned melon with white or green flesh.",
      "audPrice": 2.3,
      "stockOnHand": 3,
      "id": 3
    }

    const itemCatalog = [
      {
        "name": "Honeydew",
        "description": "Yellow skinned melon with white or green flesh.",
        "audPrice": 2.3,
        "stockOnHand": 30,
        "id": 1
      },
      {
        "name": "Kiwi Fruit",
        "description": "Oval shaped fruit, tapering at one end, with thin, brown, furry skin and gold-coloured flesh. Imported from New Zealand.",
        "audPrice": 0.98,
        "stockOnHand": 200,
        "id": 2
      },
      {
        "name": "Honeydew",
        "description": "Yellow skinned melon with white or green flesh.",
        "audPrice": 2.3,
        "stockOnHand": 3,
        "id": 3
      }
    ]

    const result = removeItemFromStock(item, itemCatalog);
    expect(result).toHaveLength(3);
    expect(result[2]).toEqual(
      expect.objectContaining({
        stockOnHand: 2
      })
    );

  })
})