import { create } from "zustand";
import type { PRDStore } from "@/types";

export const usePRDStore = create<PRDStore>()((set) => ({
  prd: null,
  setPRD: (prd) => set({ prd }),
}));