import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Counter = {
    count: number;
    inc: () => void;
};

export const useCounter = create<Counter>()(
    persist(
        (set) => ({
            count: 1,
            inc: () => set((state) => ({ count: state.count + 1 })),
        }),
        {
            name: 'counter-store',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);