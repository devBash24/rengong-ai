"use client";
import { ReactNode, useEffect, useState } from "react";
import { ActiveChatContext } from "./activeChatContext";
import useFetchChat from "@/hooks/useFetchChat";
import { useQueryClient } from "@tanstack/react-query";
import { createNewChat } from "@/lib/chatHelpers";
import usePromptRequest from "@/hooks/usePromptRequest";

import { v4 as uuid } from "uuid";
import { useChatNames } from "../ChatNames/chatNamesContext";
import { useNavigation } from "../Navigation/navigationContext";
export interface IMessage {
  id: number;
  role: "user" | "model";
  parts: [{ text: string }];
}

export interface IChat {
  id: string;
  name: string;
  messages: IMessage[];
  date: string;
}

export interface IActiveChatContext {
  onSelectChat: (chatId?: string) => void;
  activeChat: IChat | null;
  handlePromptRequest: () => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  instantiateNewChat: () => void;
  onTitleChange: (title: string) => void;
  fetchChatActiveStatus: "error" | "idle" | "pending" | "success"
  title: string,
  setTitle: (title: string) => void
  promptStatus: "error" | "idle" | "pending" | "success"
  
}

const ActiveChatProvider = ({ children }: { children: ReactNode }) => {
  const [prompt, setPrompt] = useState("");
  const { updateChatName } = useChatNames();
  const {
    activeChat,
    mutateAsync: fetchActiveChat,
    status: fetchChatActiveStatus,
    setActiveChat,
  } = useFetchChat();
  const { data, mutateAsync, status:promptStatus, isError } = usePromptRequest();
  const [title, setTitle] = useState(activeChat?.name || "Untitled");
  const {isMobile,isSidebarOpen,toggleSidebar} = useNavigation()

  const queryClient = useQueryClient();


  





  const instantiateNewChat = () => {
    if (activeChat) return activeChat;
    let newChat: IChat = createNewChat(title);
    setActiveChat(newChat);
    queryClient.invalidateQueries({ queryKey: ["chatNames"] });
    return newChat;
  };

  const onSelectChat = async (chatId?: string) => {
    if(isMobile && isSidebarOpen) toggleSidebar()
    if (!chatId) {
      setActiveChat(null);
      setTitle("Untitled");
      instantiateNewChat();
      return;
    }
    if (activeChat?.id === chatId) return;
    try {
      const dta = await fetchActiveChat({ chatId });
      if (!activeChat || !dta) {
        throw new Error("Chat not found");
      }
      setTitle(dta.name);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const handlePromptRequest = async () => {
    if(promptStatus === "pending") return
    try {
      const activeChatHistory = instantiateNewChat();
      setActiveChat((prevChat: any) => {
        if (!prevChat) {
          return {
            ...activeChatHistory,
            messages: [{ id: 0, role: "user", parts: [{ text: prompt }] }],
          };
        }

        return {
          ...prevChat,
          messages: [
            ...prevChat.messages,
            { id: uuid(), role: "user", parts: [{ text: prompt }] },
          ],
        };
      });
      setPrompt("");
      const response = await mutateAsync({
        prompt: prompt,
        chat: activeChatHistory!!,
      });
      setActiveChat((prevChat: any) => {
        if (!prevChat) {
          return {
            ...activeChatHistory,
            messages: [
              { id: 0, role: "model", parts: [{ text: response.content }] },
            ],
          };
        }

        return {
          ...prevChat,
          messages: [
            ...prevChat.messages,
            { id: uuid(), role: "model", parts: [{ text: response.content }] },
          ],
        };
      });
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const onTitleChange = async (newTitle: string) => {
    if (newTitle === "") {
      setTitle(activeChat?.name || "Untitled");
      return;
    }
    try {
      await updateChatName({ chatId: activeChat!.id, chatName: newTitle });
      console.log("Chat name updated");
      queryClient.invalidateQueries({ queryKey: ["chatNames"] });
    } catch (error) {
      console.log(error);
      setTitle(activeChat?.name || "Untitled");
    }
  };

  return (
    <ActiveChatContext.Provider
      value={{
        onTitleChange,
        instantiateNewChat,
        prompt,
        setPrompt,
        onSelectChat,
        activeChat,
        handlePromptRequest,
        fetchChatActiveStatus,
        title,
        setTitle,
        promptStatus
      }}
    >
      {children}
    </ActiveChatContext.Provider>
  );
};

export default ActiveChatProvider;
