import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItem {
  id: string;
  quantity: number;
}

interface cartCalculation {
  total: number;
  tax: number;
  grandTotal: number;
}

interface cartState {
  cart: cartItem[];
  cartCalculation: cartCalculation;
  cartLoading: boolean;
}

const initialState: cartState = {
  cart: [],
  cartCalculation: {
    total: 0,
    tax: 0,
    grandTotal: 0,
  },
  cartLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartCalculation: (state, action) => {
      const total = action.payload.reduce(
        (total: number, current: any) =>
          total +
          current.quantity *
            (current.discount ? current.discountPrice : current.price),
        0,
      );

      const tax = total * 0.03;
      const grandTotal = total + tax;
      state.cartCalculation = { total, tax, grandTotal };
    },
    setCart: (state) => {
      const cart = localStorage.getItem("cart");

      if (cart) state.cart = JSON.parse(cart);
      state.cartLoading = false;
    },
    addCart: (state, action: PayloadAction<{ id: string; method: string }>) => {
      if (action.payload.method === "short") {
        state.cart.push({ id: action.payload.id, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const itemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (itemIndex !== -1) {
          state.cart[itemIndex].quantity += 1;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
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
      } else {
        const itemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (itemIndex !== -1) {
          state.cart[itemIndex].quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { getCartCalculation, setCart, addCart, removeCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
