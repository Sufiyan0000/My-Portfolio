"use client";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { state, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="font-bold">MyApp</h1>

      {state.user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm">{state.user.email}</span>
          <button
            onClick={logout}
            className="text-sm text-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <span className="text-sm text-gray-500">
          Not logged in
        </span>
      )}
    </nav>
  );
}
