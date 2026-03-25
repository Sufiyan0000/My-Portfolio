// src/store/auth.store.ts
import { create } from "zustand";
import { useUIStore } from "./ui.store";

type User = {
  id: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  login: async (email, password) => {
    const { showLoader, hideLoader } = useUIStore.getState();

    try {
      showLoader();

      // 🔥 simulate API call
      await new Promise((res) => setTimeout(res, 2000));

      set({
        user: { id: "1", email },
      });
    } finally {
      hideLoader();
    }
  },
}));
