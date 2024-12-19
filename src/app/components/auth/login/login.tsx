"use client"
import { createClient, loginWithOAuthProvider } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'


const LoginPage = ({isLogin}:{isLogin:boolean}) => {
  const router = useRouter();
  const origin = usePathname();
  const supabase  = createClient()
    const formVariants = {
        hidden: { opacity: 0, x: isLogin ? -50 : 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: isLogin ? 50 : -50 },
      };

      const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert("Under Construction");
        //  const {error, data} =await supabase.auth.signInWithOAuth({ provider: 'github',options: { redirectTo: origin+'home'} });
        //  if (error) {
        //    console.error(error);
        //    return
        //  }
        //  router.push(data.url)
      }
  return (
    <motion.div
              key="login"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
              <form onSubmit={onSubmit}>
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
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
                >
                  Login
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  onClick={async () => await loginWithOAuthProvider('google')}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 mb-2"
                >
                  <FaGoogle className="text-lg" />
                  Login with Google
                </button>
                <button
                  onClick={async () => await loginWithOAuthProvider('github')}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-secondary text-secondary py-2 rounded-lg hover:bg-secondary/10"
                >
                  <FaGithub className="text-lg" />
                  Login with GitHub
                </button>
              </div>
            </motion.div>
  )
}

export default LoginPage