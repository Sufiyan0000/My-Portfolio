// app/login/page.tsx
"use client";

import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-4 flex-col gap-5">
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border-2 border-neutral-900"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border-2 border-neutral-900"
      />

      <button
        onClick={() => login(email, password)}
        className="bg-black text-white px-4 py-2 mx-6"
      >
        Login
      </button>
    </div>
  );
}
