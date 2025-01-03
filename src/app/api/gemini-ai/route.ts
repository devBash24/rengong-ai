import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getUserServerSession } from "../auth/getUserSession";
import { IChat, IMessage } from "@/Context/ActiveChat/activeChatProvider";
import { createClient } from "@/lib/supabase/server";
import { v4 as uuid } from "uuid";
import { formatText } from "@/lib/format_text";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function POST(request: NextRequest) {
  const { prompt, chat: activeChat }: { prompt: string; chat: IChat } =
    await request.json();
  try {
    const { id } = await getUserServerSession();

    const history = activeChat.messages.map((message: IMessage) => {
      return {
        role: message.role,
        parts: message.parts,
      };
    });

    const chat = model.startChat({
      history: [
        ...history.map((message) => ({
          role: message.role,
          parts: message.parts,
        })),
      ],
    });
    const response = await chat.sendMessage(prompt);
    const responseText = formatText(response.response.text());
    const newHistory = [
      ...activeChat.messages,
      { id: uuid(), role: "user", parts: [{ text: prompt }] },
    ];
    newHistory.push({
      id: uuid(),
      role: "model",
      parts: [{ text:responseText }],
    });
    await updateChats(
      id,
      newHistory as IMessage[],
      activeChat.id,
      activeChat.name
    );


    return NextResponse.json(
      {
        message: "success",
        data: { content: responseText, role: "assistant" },
      },
      { status: 200 }
    );
  } catch (e) {
    console.error((e as Error).message);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
const updateChats = async (
  userId: string,
  message: IMessage[],
  chatId: string,
  name: string
) => {
  const supabase = createClient();

  //check if chat exists, if not create a new one
  if (!(await chatExists(chatId))) {
    const { error, data } = await supabase
      .from("chats")
      .insert({ user_id: userId, messages: message, id: chatId, name })
      .select("*");
    if (error) {
      throw error;
    }
    return data[0].id;
  }
  //Update chat messages
  const { error } = await supabase
    .from("chats")
    .update({ messages: message })
    .eq("id", chatId)
    .select("*");

  if (error) {
    throw error;
  }

  return chatId;
};

const chatExists = async (chatId: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("chats")
    .select("*")
    .eq("id", chatId);
  if (error) {
    throw error;
  }
  if (data.length > 0) {
    return true;
  }
  return false;
};
