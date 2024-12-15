import { useMutation } from "@tanstack/react-query"
import axios from "axios";



const useUpdateChatName = () => {
    const {mutateAsync, isError, data, status,error} = useMutation({
        mutationFn: async(data:{chatId: string, chatName: string}) => {
            const response = await axios.post(`/api/update-chat-name`, { chatId: data.chatId, chatName: data.chatName });
        if(response.status !== 200){
            throw new Error("No response from server");
        }
        return response.data   
        }
    })
    return{
        isError,
        mutateAsync,
        data,
        status,
        error
    }
}

export default useUpdateChatName