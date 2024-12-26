"use client";
import { loginWithOAuthProvider } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <motion.div
      key="login"
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      <div className="mt-4 text-center">
        <button
          onClick={async () => await loginWithOAuthProvider("google")}
          className="w-full flex items-center justify-center gap-2 bg-white border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 mb-2"
        >
          <FaGoogle className="text-lg" />
          Login with Google
        </button>
        <button
          onClick={async () => await loginWithOAuthProvider("github")}
          className="w-full flex items-center justify-center gap-2 bg-white border border-secondary text-secondary py-2 rounded-lg hover:bg-secondary/10"
        >
          <FaGithub className="text-lg" />
          Login with GitHub
        </button>
      </div>
    </motion.div>
  );
};

export default LoginPage;
