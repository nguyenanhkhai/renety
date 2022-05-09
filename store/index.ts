import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CartReducer from "./modules/Cart/reducer";

const rootReducer = {
  cart: CartReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
