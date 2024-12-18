import { createClient } from "@/lib/supabase/server";
import { getUserServerSession } from "../auth/getUserSession";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
    const body = await request.json();
    const {chatId} = body;
    try{
        console.log(chatId)
        const { id } = await getUserServerSession()
        const chat = await deleteChat(chatId,id)
        // if(!chat){
        //     throw new Error("Chat not found")
        // }
        return NextResponse.json({success:true,message: "Chat deleted",}, {status: 200})
    }
    catch(e){
        console.error((e as Error).message)
        return NextResponse.json({error: e}, {status: 500})
    }
}

const deleteChat = async (chatId: string,userId: string) => {
    const supabase = createClient()
    const {error} = await supabase.from("chats").delete().eq("id", chatId).eq("user_id", userId)

    if(error){
        console.error("Error deleting chat",error.message)
      throw error
    }
    return
  }