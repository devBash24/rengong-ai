import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUserServerSession } from "../auth/getUserSession";




export async function POST(request: NextRequest) {
    const body = await request.json();
    const {chatId,chatName} = body;
    try{
        const { id } = await getUserServerSession()
        const chat = await updateChat(chatId,id,chatName)
        if(!chat){
            throw new Error("Chat not found")
        }
        return NextResponse.json({success:true,message: "Name updated",}, {status: 200})
    }
    catch(e){
        console.error((e as Error).message)
        return NextResponse.json({error: e}, {status: 500})
    }
}


const updateChat = async (chatId: string,userId: string,name: string) => {
    const supabase = createClient()
    const {data, error} = await supabase.from("chats").update({name}).eq("id", chatId).select("*")
    if(error){
        throw error
    }
    return data[0]
}