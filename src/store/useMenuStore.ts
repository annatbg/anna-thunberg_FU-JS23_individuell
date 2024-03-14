import { create } from "zustand";

export interface MenuStore {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,

  toggleMenu: () => {
    set((state) => {
      console.log(
        "Toggle Menu, current state:",
        state.isMenuOpen,
        "new state:",
        !state.isMenuOpen
      );
      return { isMenuOpen: !state.isMenuOpen };
    });
  },
  closeMenu: () => {
    set({ isMenuOpen: false });
  },
}));
