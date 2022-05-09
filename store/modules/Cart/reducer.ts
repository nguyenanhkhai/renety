import { getAllCart, increment, decrement, remove } from "./action";
import { createSlice } from "@reduxjs/toolkit";
import { CartItemProps } from "components/CartItem/CartItem";

export type CartState = {
  //data
  cart: CartItemProps[];

  // loading
  getCartIsLoading: boolean;
  a2cIsLoading: boolean;
  increasedIsLoading: boolean;
  decreasedIsLoading: boolean;
  removeItemIsLoading: boolean;
  // error
  getCartError: any;
  a2cError: any;
  increasedError: any;
  decreasedError: any;
  removeItemError: any;
};

const initialState: CartState = {
  cart: [],
  // loading
  getCartIsLoading: false,
  a2cIsLoading: false,
  increasedIsLoading: false,
  decreasedIsLoading: false,
  removeItemIsLoading: false,
  // error
  getCartError: null,
  a2cError: null,
  increasedError: null,
  decreasedError: null,
  removeItemError: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL CART
      .addCase(getAllCart.pending, (state) => {
        state.getCartIsLoading = true;
        state.getCartError = null;
      })
      .addCase(getAllCart.fulfilled, (state, { payload }) => {
        state.getCartIsLoading = false;
        state.cart = payload;
        state.getCartError = null;
      })
      .addCase(getAllCart.rejected, (state, { payload }) => {
        state.getCartIsLoading = false;
        state.getCartError = payload;
      })
      // increament
      .addCase(increment.pending, (state) => {
        state.increasedIsLoading = true;
        state.increasedError = null;
      })
      .addCase(increment.fulfilled, (state, { payload }) => {
        state.increasedIsLoading = false;
        state.cart.map((item) => {
          if (item.id == payload) {
            item.quantity = item.quantity + 1;
          }
        });
        state.increasedError = null;
      })
      .addCase(increment.rejected, (state, { payload }) => {
        state.increasedIsLoading = false;
        state.increasedError = payload;
      })
      //decrement
      .addCase(decrement.pending, (state) => {
        state.decreasedIsLoading = true;
        state.decreasedError = null;
      })
      .addCase(decrement.fulfilled, (state, { payload }) => {
        state.decreasedIsLoading = false;
        state.cart.map((item) => {
          if (item.id == payload && item.quantity > 1) {
            item.quantity = item.quantity - 1;
          }
        });
        state.decreasedError = null;
      })
      .addCase(decrement.rejected, (state, { payload }) => {
        state.decreasedIsLoading = false;
        state.decreasedError = payload;
      })
      // remove local
      .addCase(remove.pending, (state) => {
        state.removeItemIsLoading = true;
        state.removeItemError = null;
      })
      .addCase(remove.fulfilled, (state, { payload }) => {
        state.removeItemIsLoading = false;
        state.cart = state.cart.filter((item) => item.id != payload);
        state.removeItemError = null;
      })
      .addCase(remove.rejected, (state, { payload }) => {
        state.removeItemIsLoading = false;
        state.removeItemError = payload;
      });
  },
});

export default CartSlice.reducer;
