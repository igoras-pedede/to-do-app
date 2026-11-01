import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CelStructure = {
  cel: string;
};

type Cele = {
  goals: CelStructure[];
  addGoals: (otrzymanyCel: CelStructure) => void;
  clearGoals: () => void;
  removeGoals: (index: number) => void;
};

export const useCelStore = create<Cele>()(
  persist(
    (set) => ({
      goals: [],
      addGoals: (otrzymanyCel) =>
        set((state) => ({ goals: [...state.goals, otrzymanyCel] })),
      clearGoals: () => set({ goals: [] }),
      removeGoals: (index) =>
        set((state) => ({
          goals: state.goals.filter((note, indx) => indx !== index),
        })),
    }),
    {
      name: "goals-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
