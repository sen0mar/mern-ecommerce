import { createSlice } from "@reduxjs/toolkit";

// If there's something already in local storage, parse it (in local storage it's stores as a string),
// Else, set the initial state to an object with an empty array.
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
