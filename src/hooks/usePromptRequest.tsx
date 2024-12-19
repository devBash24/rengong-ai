import { IChat } from "@/Context/ActiveChat/activeChatProvider";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";



const usePromptRequest = () => {
    const {data, isError,mutateAsync,status} = useMutation({
        mutationFn: async(data:{prompt: string, chat:IChat}) => {
            const response = await axios.post("/api/gemini-ai", data);
            if(response.status !== 200) {
                throw new Error("Failed to fetch chat");
            }
            return response.data.data;
        },
        onSuccess: (data) => {
            return  data
        },
        onError: (error) => {
            console.log(error);
        }
    })

    return{
        isError,
        mutateAsync,
        data,
        status,
        
    }
}

export default usePromptRequest