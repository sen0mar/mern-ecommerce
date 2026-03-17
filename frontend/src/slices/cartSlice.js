import { createSlice } from "@reduxjs/toolkit";

// If there's something already in local storage, parse it (in local storage it's stores as a string),
// Else, set the initial state to an object with an empty array.
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Check if id from the action item matches an id from cartItems
      const existItem = state.cartItems.find((x) => x._id === item._id);

      // If the item already exists in the cart, update the quantity.
      // Else, make a copy of the array and add the new item
      if (existItem) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === existItem._id ? item : i,
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // Calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
      );

      // Calculate shipping price (If order is over $100 then free, else $10 shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // Calculate tax price (15%)
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2));

      // Calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      // Save the whole state as json in local storage (as "cart")
      localStorage.setItems("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
