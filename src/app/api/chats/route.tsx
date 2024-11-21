import { NextRequest, NextResponse } from "next/server";
import { sampleChats } from "../../../lib/data";
import { groupChatsByDate } from "@/lib/organize_messages";



export  async function GET(request: NextRequest) {
    try{
        console.log("Fetching chats...")
        const data = groupChatsByDate(sampleChats)
        return NextResponse.json({message: "success", data })
    }
    catch(e){
        console.error((e as Error).message)
        return NextResponse.json({error: e})
    }
    
}