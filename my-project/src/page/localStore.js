export const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

export const saveCartToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToLS = (id) => {
  cart = getStoredCart();
  cart.push(id);
  saveCartToLS(cart);
};
