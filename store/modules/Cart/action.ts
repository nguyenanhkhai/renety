import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItemProps } from "components/CartItem/CartItem";
import { CART_SAMPLE } from "data/data";
import { __ApiPreviewProps } from "next/dist/server/api-utils";
import { deplay } from "utils/deplay";

const CART_MODULE = "cart";

const CART_ACTIONS = {
  GET_ALL_CART: CART_MODULE + "/getAllCart",
  INCREMENT_QUANTITIES: CART_MODULE + "/incrementQuantities",
  DECREMENT_QUANTITIES: CART_MODULE + "/decrementQuantities",
  REMOVE_ITEM: CART_MODULE + "/removeItem",
  
};

export const getAllCart = createAsyncThunk<CartItemProps[], number>(
  CART_ACTIONS.GET_ALL_CART,
  async (_, thunkApi) => {
    try {
      const FAKE_DATA: CartItemProps[] = CART_SAMPLE;
      const data = await deplay(FAKE_DATA, 1000);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const increment = createAsyncThunk<number, number>(
  CART_ACTIONS.INCREMENT_QUANTITIES,
  async (item_ids, thunkApi) => {
    try {
      return item_ids;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const decrement = createAsyncThunk<number, number>(
  CART_ACTIONS.DECREMENT_QUANTITIES,
  async (item_ids, thunkApi) => {
    try {
      return item_ids;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const remove = createAsyncThunk<number, number>(
  CART_ACTIONS.REMOVE_ITEM,
  async (item_ids, thunkApi) => {
    try {
      return item_ids;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// Update cart to database if user is existing.
