"use client";

import { useUIStore } from "@/store/ui.store";

export default function Loader(){
    const loading = useUIStore((state) => state.loading)

    if (!loading) return null;

    return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg">
        Loading...
      </div>
    </div>
  );
}