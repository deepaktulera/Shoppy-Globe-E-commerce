import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: [],
};

const saveToLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const loadFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

initialState.items = loadFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveToLocalStorage(state.items);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      saveToLocalStorage(state.items);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
        saveToLocalStorage(state.items);
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveToLocalStorage(state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage([]);
    },
    addToast: () => {
      toast.success("✅ Added to Cart Successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Zoom,
      });
    },

    removeToast: () => {
      toast.error("🗑️ Removed from Cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Zoom,
      });
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
  addToast,
  removeToast,
} = cartSlice.actions;

export default cartSlice.reducer;
