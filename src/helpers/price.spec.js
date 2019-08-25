import { formatPrice, totalPrice } from "./price";

describe('formatPrice function', () => {
  it('should format the price with currency when dealing with dollars and cents', () => {

    const price = "9.9"
    const result = formatPrice(price);

    expect(result).toEqual("$9.90")
  })

  it('should format the price with currency when dealing with cents', () => {

    const price = ".63"
    const result = formatPrice(price);

    expect(result).toEqual("$0.63")
  })
})

describe('totalPrice function', () => {
  it('should return the total price of all the line items', () => {

    const items = [
      {
        qty: 5,
        name: "Honeydew",
        description: "Yellow skinned melon with white or green flesh.",
        price: 2.3
      },
      {
        qty: 17,
        name: "Kiwi Fruit",
        description:
          "Oval shaped fruit, tapering at one end, with thin, brown, furry skin and gold-coloured flesh. Imported from New Zealand.",
        price: 0.98
      }
    ]
    const result = totalPrice(items);

    expect(result).toEqual("$28.16")
  })
})