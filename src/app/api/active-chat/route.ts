import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { getUserServerSession } from "../auth/getUserSession";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { chatId } = body;
    try {
      const { id } = await getUserServerSession();
      if (!chatId) {
        throw new Error("chatId is required");
      }
  
      const chats = await getChat(chatId, id);
  
      return NextResponse.json(
        { message: "success", data: chats },
        { status: 200 }
      );
    } catch (e) {
      console.error((e as Error).message);
      return NextResponse.json({ error: e }, { status: 500 });
    }
  }
  
  const getChat = async (chatId: string, userId: string) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("chats")
      .select("*")
      .eq("id", chatId)
      .eq("user_id", userId);
  
    if (error) {
      throw error;
    }
    return data[0];
  };
  