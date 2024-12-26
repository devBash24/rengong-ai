"use client"
import { createContext, useContext } from "react";
import { IAuthContext } from "./authProvider";






const AuthContext = createContext<IAuthContext>({
    user: null,
    isLoading: true
})


const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error('useAuthContext must be used within an AuthProvider')
    return context
}

export {AuthContext, useAuthContext}