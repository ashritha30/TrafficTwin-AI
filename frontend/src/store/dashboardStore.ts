import { create } from "zustand";

interface DashboardState {
  congestion: number;
  setCongestion: (value: number) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  congestion: 68,
  setCongestion: (value) => set({ congestion: value }),
}));