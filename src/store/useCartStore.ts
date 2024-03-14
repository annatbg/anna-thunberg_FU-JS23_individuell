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
  toggleCart: () => void;
  isCartOpen: boolean;
  closeCart: () => void;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  // initierar cartItems som en tom array
  cartItems: [],
  // get är en funktion som tillåter dig att hämta det aktuella statet inuti din store. Vi använder get för att få tillgång till cartItems, och reduce() för att summera quantity för varje CartItem, vilket ger det totala antalet varor.
  getTotalItems: () => {
    const state = get();
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  },
  // isCartOpen initieras som false, eftersom den ska togglas när den klickas på
  isCartOpen: false,
  // ändrar isCartOpen till motsatsen av nuvarande. Om isCartOpen är true, blir det false, och om det är false, blir det true.
  toggleCart: () => {
    set((state) => ({
      isCartOpen: !state.isCartOpen,
    }));
  },
  // för att stänga carten ändras isCartOpen till false
  closeCart: () => {
    set({ isCartOpen: false });
  },

  //
  addCartItem: (item) => {
    set((state) => {
      // söker efter ett objekt i varukorgen (cartItems arrayen) med id som matchar det nya objektet som läggs till
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      // om det redan finns ett objekt med matchande id, så ökar kvantiteten
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
        // om matchande objekt inte finns, läggs objektet till i arrayen med kvanitet 1
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

  // för att tömma varukorgen, ändras cartItems till en tom array
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
