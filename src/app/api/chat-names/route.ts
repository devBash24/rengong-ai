import { groupChatsByDate } from "@/lib/organize_messages";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { getUserServerSession } from "../auth/getUserSession";




export async function GET() {
    try {
      const { id } = await getUserServerSession();
      const chats = await getChats(id);
      const data = groupChatsByDate(chats);
      return NextResponse.json({ message: "success", data });
    } catch (e) {
      console.error((e as Error).message);
      return NextResponse.json({ error: e });
    }
  }
  
  const getChats = async (userId: string) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("chats")
      .select("id,messages,date,name")
      .eq("user_id", userId);
    if (error) {
      throw error;
    }
    return data;
  };
  