// src/store/authStore.ts
import { create } from "zustand";
import type { StateCreator } from "zustand";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

const authStateCreator: StateCreator<AuthState> = (set) => ({
  token: null,
  user: null,
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ token: null, user: null });
  },
});

export const useAuthStore = create<AuthState>(authStateCreator);
