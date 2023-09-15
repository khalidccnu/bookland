import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCart } from "@/redux/cart/cartThunks";

interface cartItem {
  id: string;
  quantity: number;
}

interface Book {
  _id: string;
  title: string;
  isbn13: string;
  quantity: number;
  price: number;
  discountPrice: number;
  image: {
    path: string;
  };
  discount: boolean;
}

interface cartCalculation {
  total: number;
  tax: number;
  grandTotal: number;
}

interface cartState {
  cart: cartItem[];
  cartBooks: Book[];
  cartCalculation: cartCalculation;
  cartBooksLoading: boolean;
}

const initialState: cartState = {
  cart: [],
  cartBooks: [],
  cartCalculation: {
    total: 0,
    tax: 0,
    grandTotal: 0,
  },
  cartBooksLoading: true,
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
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, () => {})
      .addCase(getCart.fulfilled, (state, action: any) => {
        state.cartBooks = action.payload.cartBooks;
        state.cartCalculation = action.payload.calculation;
        state.cartBooksLoading = false;
      })
      .addCase(getCart.rejected, () => {});
  },
});

export const { setCart, addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
