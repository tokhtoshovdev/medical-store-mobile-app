import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import { authApi } from "../features/auth/authApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
