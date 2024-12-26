"use client";
import { AnimatePresence } from "framer-motion";
import Login from "./components/auth/login/login";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const {auth} = createClient()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <h1 className="text-4xl font-bold text-primary mb-8">Welcome!</h1>
      <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <Login />
        </AnimatePresence>
        
        <div className="mt-4 text-center">
          <button
            className="text-gray-600 hover:text-gray-800 text-sm underline"
            onClick={async () => {
              try {
                await auth.signInAnonymously();
                // Optional: Redirect or show success message
              } catch (error) {
                console.error('Anonymous sign-in failed:', error);
                // Handle error appropriately (e.g., show error message to user)
              }
            }}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
