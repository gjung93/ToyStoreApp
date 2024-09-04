import { createSlice } from "@reduxjs/toolkit";
import { data } from "../products/items";

const productSlice = createSlice({
  name: "product",
  initialState: {
    //initial state is defined with product that is in data from the file items.
    //cart will initially be empty
    //total will also be 0
    product: data,
    cart: [],
    total: 0,
  },
  reducers: {
    //addToCart will find the specific product through action.payload. It will also check if the item is already in state.cart.
    //If the item already exists in cart, then 1 will be added to the quantity and the total will also update
    //Tf the item is not in cart, then it will push the item to cart. Quantity and total price will also be updated.
    addToCart: (state, action) => {
      console.log(action);
      const addItem = state.product.find((item) => item.id === action.payload);
      const existingItem = state.cart.find(
        (item) => action.payload === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.total = state.total + existingItem.price;
      } else {
        addItem.quantity = 1;
        state.total = state.total + addItem.price;
        state.cart.push(addItem);
      }
    },

    //removeFromCart will find the item and its index through action.payload, item is used to update the state.total to remove the price
    //index will be used to splice the item from cart
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      const index = state.cart.indexOf((item) => item.id === action.payload.id);
      state.total = state.total - item.price * item.quantity;
      state.cart.splice(index, 1);
    },

    //addQuantity will find the item through action.payload, and quantity will be added and state.total will also be updated
    addQuantity: (state, action) => {
      const addItem = state.cart.find((item) => item.id === action.payload);
      addItem.quantity += 1;
      state.total = state.total + addItem.price;
    },

    //removeQuantity will find the item through action.payload.
    //If the quantity of the item is 1, then it will change to 0 and state.total will remove the price of the item.
    //It will also remove the item from cart through splice after looking for the index
    //If not, only 1 quantity will be removed and price removed
    removeQuantity: (state, action) => {
      const removeItem = state.cart.find((item) => item.id === action.payload);
      if (removeItem.quantity === 1) {
        removeItem.quantity = 0;
        state.total = state.total - removeItem.price;
        const index = state.cart.indexOf((item) => item.id === action.payload);
        state.cart.splice(index, 1);
      } else {
        removeItem.quantity -= 1;
        state.total = state.total - removeItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, removeQuantity } =
  productSlice.actions;

export default productSlice.reducer;
