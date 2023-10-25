import { create } from "zustand";

interface LoginState {
  isLogin: boolean;
  loginUser: () => void;
  logOutUser: () => void;
}

export const useLogin = create<LoginState>((set) => ({
  isLogin: false,
  loginUser: () => set({ isLogin: true }),
  logOutUser: () => set({ isLogin: false }),
}));
