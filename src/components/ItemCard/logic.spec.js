import { addItem } from './logic';

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