import { create } from "zustand";

type UIStore = {
    loading: boolean,
    showLoader: () => void,
    hideLoader: () => void,
}

export const useUIStore = create<UIStore>(
    (set) => ({
        loading: false,
        showLoader: () => set({ loading: true}),
        hideLoader: () => set({ loading: false}),
    })
)