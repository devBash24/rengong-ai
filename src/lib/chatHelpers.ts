import { v4 as uuid } from "uuid";


export const newMessage = (message: string,role?: string) => {
    return {
        role: "user",
        parts: [{ text: message }],
    }
};


export const createNewChat = (title?: string)=>{
    return{
        date: new Date().toISOString(),
        id: uuid(),
        messages: [],
        name: title || "Untitled",
    }
}