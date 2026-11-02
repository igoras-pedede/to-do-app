import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type zaliczoneStructure = {
  task: string;
};

type dayStructure = {
  num: number;
  tasks: zaliczoneStructure[];
};

type Zaliczone = {
  completed: zaliczoneStructure[];
  days: dayStructure[];
  addCompleted: (completedTask: zaliczoneStructure) => void;
  clearCompleted: () => void;
  removeCompletedTask: (index: number) => void;
  addDay: () => void;
  clearDays: () => void;
};

export const useCompletedStore = create<Zaliczone>()(
  persist(
    (set) => ({
      completed: [],
      days: [],
      addCompleted: (completedTask) =>
        set((state) => ({ completed: [...state.completed, completedTask] })),
      clearCompleted: () => set({ completed: [] }),
      removeCompletedTask: (index) =>
        set((state) => ({
          completed: state.completed.filter((compl, indx) => indx !== index),
        })),
      addDay: () =>
        set((state) => ({
          days: [
            ...state.days,
            { num: state.days.length + 1, tasks: state.completed },
          ],
          completed: [],
        })),
      clearDays: () => set({ days: [] }),
    }),
    {
      name: "completed-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
