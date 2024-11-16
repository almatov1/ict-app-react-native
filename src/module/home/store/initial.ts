import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Initial = {
    checked: boolean;
    define: (value: boolean) => void;
};

export const useInitial = create<Initial>()(
    persist(
        (set) => ({
            checked: false,
            define: (value: boolean) => set((state) => {
                return { checked: value };
            })
        }),
        {
            name: 'initial-store',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);