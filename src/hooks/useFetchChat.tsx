import { IChat } from "@/Context/ActiveChat/activeChatProvider";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { useState } from "react";



const useFetchChat = () => {
    const [activeChat, setActiveChat] = useState<IChat| null>(null);
    const {isError,mutateAsync,status} = useMutation({
        mutationKey: ["activeChat"],
        mutationFn: async(data:{chatId: string}) => {
            const response = await axios.post("/api/active-chat", {chatId: data.chatId});
            if(response.status !== 200) {
                throw new Error("Failed to fetch chat");
            }
            return response.data.data;
        },
        onSuccess: (data) => {
            setActiveChat(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })
    return{
        isError,
        mutateAsync,
        status,
        activeChat,
        setActiveChat
    }
}


export default useFetchChat