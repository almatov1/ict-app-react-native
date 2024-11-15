import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ProgressItem {
    finished: boolean
    test: number
}

type Progress = {
    progress: ProgressItem[];
    define: (index: number, value: ProgressItem) => void;
    reset: () => void;
};

const initialProgress: ProgressItem[] = Array(15).fill({ finished: false, test: 0 });
export const useProgress = create<Progress>()(
    persist(
        (set) => ({
            progress: initialProgress,
            define: (index: number, value: ProgressItem) => set((state) => {
                const updatedProgress = [...state.progress];
                updatedProgress[index] = value;
                return { progress: updatedProgress };
            }),
            reset: () => set({ progress: initialProgress })
        }),
        {
            name: 'progress-store',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);