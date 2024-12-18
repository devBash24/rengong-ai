import { useMutation } from "@tanstack/react-query"
import axios from "axios";



export const useDeleteChat = () => {
    const mutation = useMutation({
        mutationFn: async(data:{chatId: string}) => {
            const response = await axios.post("/api/delete-chat", {chatId: data.chatId});
            if(response.status !== 200) {
                throw new Error("Failed to fetch chat");
            }
            return response.data.data;
        }
    })

    return{
        ...mutation
    }
}