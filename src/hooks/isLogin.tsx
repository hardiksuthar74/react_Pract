import { create } from "zustand";
import Cookies from "universal-cookie";

interface LoginState {
  isLogin: boolean;
  isPunchIn: boolean;
  punchInTime: number;
  loginUser: () => void;
  logOutUser: () => void;
  punchInUser: () => void;
  punchOutUser: () => void;
}

const cookies = new Cookies();

export const useLogin = create<LoginState>((set) => ({
  isLogin: cookies.get("isLogin"),
  isPunchIn: cookies.get("isPunchIn"),
  punchInTime: cookies.get("punchInTime"),
  loginUser: () => set({ isLogin: true }),
  logOutUser: () => set({ isLogin: false }),
  punchInUser: () =>
    set({ isPunchIn: true, punchInTime: new Date().getTime() }),
  punchOutUser: () => set({ isPunchIn: false, punchInTime: 0 }),
}));
