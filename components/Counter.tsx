"use client";

import { useCounterStore } from "@/store/counter.store";
import { div } from "motion/react-client";

export default function Counter(){
    const count = useCounterStore((state) => state.count)
    const inc = useCounterStore((state) => state.increment)
    const dec = useCounterStore((state) => state.decrement)
    const reset = useCounterStore((state) => state.reset)

    return (
        <div className="bg-white flex items-center justify-center mx-auto text-3xl mt-4 gap-5">
            <div className="flex items-center justify-center gap-3 mt-5 mb-5">
                <button onClick={dec}
                className="border-2 border-red-200 px-3"
                >-</button>
                <h1>Count: {count}</h1>
                <button onClick={inc}
                className="border-2 border-red-200 px-3"
                >+</button>
            </div>
            <button onClick={reset}
            className="border-2 border-red-200 px-3"
            >reset</button>
            
        </div>
    )
}