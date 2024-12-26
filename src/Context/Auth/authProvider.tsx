"use client"
import { createClient } from "@/lib/supabase/client";
import { AuthContext } from "./authContext";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export interface IAuthContext {
  user: User | null;
  isLoading: boolean;
}

const supabase = createClient()

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check for initial session
        const initializeAuth = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser()
                setUser(user)
            } catch (error) {
                console.error('Error loading user:', error)
            } finally {
                setIsLoading(false)
            }
        }
        initializeAuth()

        // Set up auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)   
            // Redirect based on auth status
            if (session) {
                // User is logged in
                if (pathname === '/') {
                    router.push('/home')
                }
            } else {
                // User is not logged in
                if (pathname !== '/') {
                    router.push('/')
                }
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [pathname, router])

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
