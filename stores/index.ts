import { create } from "zustand";

interface loadingState {
    loading: boolean;
    setLoading: (isLoading: boolean) => void;
}


export const useLoadingStore = create<loadingState>((set) => ({
    loading: false,
    setLoading: (isLoading) => set(() => ({ loading: isLoading })),
}))