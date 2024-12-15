"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignUp = ({isLogin}:{isLogin:boolean}) => {
    const formVariants = {
        hidden: { opacity: 0, x: isLogin ? -50 : 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: isLogin ? 50 : -50 },
      };
  return (
    <motion.div
              key="signup"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-primary focus:ring-1 focus:ring-primary"
                    placeholder="Create a password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90"
                >
                  Signup
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  className="w-full flex items-center justify-center gap-2 bg-white border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 mb-2"
                >
                  <FaGoogle className="text-lg" />
                  Signup with Google
                </button>
                <button
                  className="w-full flex items-center justify-center gap-2 bg-white border border-secondary text-secondary py-2 rounded-lg hover:bg-secondary/10"
                >
                  <FaGithub className="text-lg" />
                  Signup with GitHub
                </button>
              </div>
            </motion.div>
  )
}

export default SignUp