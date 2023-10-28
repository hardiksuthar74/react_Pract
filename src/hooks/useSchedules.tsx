import { create } from "zustand";

interface ScheduleState {
  scheduleId: string | number;
  anyOpdStarted: boolean;
  startOpd: (scheduleId: string | number) => void;
  endOpd: () => void;
}

export const useSchedule = create<ScheduleState>((set) => ({
  scheduleId: "",
  anyOpdStarted: false,
  startOpd: (scheduleId) => set({ anyOpdStarted: true, scheduleId }),
  endOpd: () => set({ anyOpdStarted: false, scheduleId: "" }),
}));
