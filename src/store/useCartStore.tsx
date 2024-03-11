import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

export interface CartStore {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
  removeCartItem: (itemId: number) => void;
  emptyCart: () => void;
  increment: (itemId: number) => void;
  decrement: (itemId: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  // initierar cartItems som en tom array
  cartItems: [],

  addCartItem: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
    });
  },

  removeCartItem: (itemId) => {
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== itemId);
      console.log("updated cart:", updatedCart);
      return { ...state, cartItems: updatedCart };
    });
  },

  // gör cartItem till en tom array igen
  emptyCart: () => {
    console.log("Emptying cart");
    set({ cartItems: [] });
  },

  increment: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decrement: (itemId) => {
    set((state) => {
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item && item.quantity > 1) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      } else {
        return { cartItems: state.cartItems.filter((i) => i.id !== itemId) };
      }
    });
  },
}));
