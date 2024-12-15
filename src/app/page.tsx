"use client";
import { AnimatePresence } from "framer-motion";
import Login from "./components/auth/login/login";
import SignUp from "./components/auth/sign-up/signup";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => setIsLogin(!isLogin);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <h1 className="text-4xl font-bold text-primary mb-8">Welcome!</h1>
      <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <Login isLogin={isLogin} />
          ) : (
            <SignUp isLogin={isLogin} />
          )}
        </AnimatePresence>
        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-primary font-semibold hover:underline"
            onClick={handleToggle}
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
