export const formatPrice = number => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD"
  }).format(number);
};

export const totalPrice = items => {
  let total = 0;
  items.forEach(item => {
    total = total + item.price * item.qty;
  });
  return formatPrice(total);
};