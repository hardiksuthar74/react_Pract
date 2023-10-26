import { create } from "zustand";
import Cookies from "universal-cookie";

interface LoginState {
  isLogin: boolean;
  isPunchIn: boolean;
  loginUser: () => void;
  logOutUser: () => void;
  punchInUser: () => void;
  punchOutUser: () => void;
}

const cookies = new Cookies();

export const useLogin = create<LoginState>((set) => ({
  isLogin: cookies.get("isLogin"),
  isPunchIn: false,
  loginUser: () => set({ isLogin: true }),
  logOutUser: () => set({ isLogin: false }),
  punchInUser: () => set({ isPunchIn: true }),
  punchOutUser: () => set({ isPunchIn: false }),
}));
