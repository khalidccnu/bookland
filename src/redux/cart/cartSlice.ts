import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: string;
  quantity: number;
}

interface cartState {
  cart: cartItem[];
}

const initialState: cartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state) => {
      const cart = localStorage.getItem("cart");

      if (cart) state.cart = JSON.parse(cart);
    },
    addCart: (state, action: PayloadAction<{ id: string; method: string }>) => {
      if (action.payload.method === "short") {
        state.cart.push({ id: action.payload.id, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeCart: (
      state,
      action: PayloadAction<{ id: string; method: string }>,
    ) => {
      if (action.payload.method === "short") {
        const itemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (itemIndex !== -1) {
          state.cart.splice(itemIndex, 1);
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
  },
});

export const { setCart, addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
