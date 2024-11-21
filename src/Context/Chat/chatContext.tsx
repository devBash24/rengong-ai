"use client"
import { createContext, useContext } from "react";
import { IChatContext } from "./chatProvider";



export const ChatContext = createContext<IChatContext | undefined>(undefined);



export const useChatContext = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
}