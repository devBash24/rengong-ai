"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { ChatContext } from "./chatContext";
import { IGroupedChats } from "@/lib/organize_messages";


export interface IMessage{
    id: number;
    isUser: boolean;
    message: string;
    avatar?: string

}



export interface IChat{
    id: number;
    name: string;
    messages: IMessage[];
    date: string;
}

export interface IChatContext{
    chats: IGroupedChats | null;
    activeChat: IChat | null;
    handleActiveChat: (chatId?: number) => void;
    onChatDelete: (chatId: number) => void
    status: 'loading' | 'idle' | 'error';
    handleInput: (prompt:string) => void;
    handleSend: (message?: string[]) => void;
    input: string;



}





export default function ChatProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [chats, setChats] = useState<IGroupedChats | null>(null)
    const [activeChat, setActiveChat] = useState<IChat | null>(null)
    const [status, setStatus] = useState<'loading' | 'idle' | 'error'>('idle')
    const [newChat, setNewChat] = useState<IChat | null>(null)
    const [input, setInput] = useState("");
    const handleInput = (prompt: string) => setInput(prompt);


    const handleSend = async (previousMessage?: string[]) => {
        if(!input || input.trim() === "") return
        if(!activeChat){
          setNewChat({id: Date.now(), name: "New Chat", messages: [{id: Date.now(), isUser: true, message: input}], date: new Date().toLocaleDateString()})
          chats?.today.unshift({id: Date.now(), name: "New Chat", messages: [{id: Date.now(), isUser: true, message: input}], date: new Date().toLocaleDateString()})
          setActiveChat({id: Date.now(), name: "New Chat", messages: [{id: Date.now(), isUser: true, message: input}], date: new Date().toLocaleDateString()})
          setInput("")
        }else{
            setActiveChat((prevChat) => prevChat ? {...prevChat, messages: [...prevChat.messages, {id: Date.now(), isUser: true, message: input}]} : null)

        }
        try{
          const response = await axios.post('/api/huggin', {input, previousMessage})
          const data = response.data
          setInput("")
          setActiveChat((prevChat) => prevChat ? {...prevChat, messages: [...prevChat.messages, {id: Date.now(), isUser: false, message: data.data}]} : null)

        }
        catch(e){
          console.log(e)
        }
          
      }


    const handleActiveChat = (chatId?: number)  => {
    // Search in Today, Yesterday, Previous 7 Days, Previous 30 Days
    if (!chats) return null;
    if (!chatId) {
        setActiveChat(null);
        return;
    }
    const categories = ['today', 'yesterday', 'previous7Days', 'previous30Days'] as const;

    for (const category of categories) {
        const chat = chats[category].find(chat => chat.id === chatId);
        if (chat) {
            return chat;
        }
    }

    // Search in Older category
    for (const monthYear in chats.older) {
        if (chats.older.hasOwnProperty(monthYear)) {
            const chat = chats.older[monthYear].find(chat => chat.id === chatId);
            if (chat) {
                setActiveChat(chat);
            }
        }
    }
};


    const onChatDelete = (chatId: number) => {
        // Search in Today, Yesterday, Previous 7 Days, Previous 30 Days
        if (!chats) return null;
        const categories = ['today', 'yesterday', 'previous7Days', 'previous30Days'] as const;
    
        for (const category of categories) {
            const chatIndex = chats[category].findIndex(chat => chat.id === chatId);
            if (chatIndex !== -1) {
                chats[category].splice(chatIndex, 1);
            }
        }
    
        // Search in Older category
        for (const monthYear in chats.older) {
            if (chats.older.hasOwnProperty(monthYear)) {
                const chatIndex = chats.older[monthYear].findIndex(chat => chat.id === chatId);
                if (chatIndex !== -1) {
                    chats.older[monthYear].splice(chatIndex, 1);
                }
            }
        }
    
        setChats({ ...chats });
    };



    useEffect(() => {
        const fetchChats = async () => {
            try{
                const response = await axios.get('/api/chats')
                const data = response.data
                setChats(data.data)
            }
            catch(e){
                console.log(e)
            }
        }
        fetchChats().then((data) => {})

    },[setChats])


    return (
       <ChatContext.Provider value={{chats, activeChat, handleActiveChat, onChatDelete, status, handleInput, handleSend, input}}>
        {children}
       </ChatContext.Provider>
    )
}