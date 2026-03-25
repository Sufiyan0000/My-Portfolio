import { stat } from "fs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Item = {
    id: string,
    title: string,
    price: number,
    qty: number
}

type CartStore = {
    items: Item[],
    addItem: (item: Omit<Item,"qty">) => void,
    removeItem: (id: string) => void,
    clearCart: () => void
}

const useCartStore = create<CartStore>()(
    persist(
        (set)  => ({
            items: [] as Item[],

            //addItem function
            addItem: (product) => set((state) => {
                const existing = state.items.find((item) => item.id === product.id)

                if (existing){
                    return {
                        items: state.items.map((item) => item.id === product.id ? {...item,qty: item.qty + 1}: item)
                    }
                }
                return {
                    items: [...state.items,{...product,qty:1}]
                }
            }),

            //removeItem function
            removeItem: (id) => set((state) => ({
                items: state.items.filter((item) => item.id !== id)
            })),

            //clearCart function
            clearCart: () => set({ items: []})
        }),
        {
            name: "cart-storage",
            partialize: (state) => state.items,
        }
    
    )
        
    )
