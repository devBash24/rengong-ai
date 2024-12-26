"use client";
import { ReactNode, useState } from "react";
import { ActiveChatContext } from "./activeChatContext";
import useFetchChat from "@/hooks/useFetchChat";
import { useQueryClient } from "@tanstack/react-query";
import { createNewChat } from "@/lib/chatHelpers";
import usePromptRequest from "@/hooks/usePromptRequest";

import { v4 as uuid } from "uuid";
import { useChatNames } from "../ChatNames/chatNamesContext";
import { useNavigation } from "../Navigation/navigationContext";
import { useError } from "@/hooks/useError";
import toast from "react-hot-toast";
export interface IMessage {
  id: any;
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
  onTitleChange: (title: string, chatId?: string) => void;
  fetchChatActiveStatus: "error" | "idle" | "pending" | "success";
  title: string;
  setTitle: (title: string) => void;
  promptStatus: "error" | "idle" | "pending" | "success";
}

const ActiveChatProvider = ({ children }: { children: ReactNode }) => {
  const [prompt, setPrompt] = useState("");
  const { updateChatName } = useChatNames();
  const { handleError } = useError();
  const {
    activeChat,
    mutateAsync: fetchActiveChat,
    status: fetchChatActiveStatus,
    setActiveChat,
  } = useFetchChat();
  const { mutateAsync, status: promptStatus } = usePromptRequest();
  const [title, setTitle] = useState(activeChat?.name || "Untitled");
  const { isMobile, isSidebarOpen, toggleSidebar } = useNavigation();

  const queryClient = useQueryClient();

  const instantiateNewChat = () => {
    if (activeChat) return activeChat;
    const newChat: IChat = createNewChat(title);
    setActiveChat(newChat);
    queryClient.invalidateQueries({ queryKey: ["chatNames"] });
    return newChat;
  };

  const onSelectChat = async (chatId?: string) => {
    if (isMobile && isSidebarOpen) toggleSidebar();
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
      handleError(e);
    }
  };

  const handlePromptRequest = async () => {
    try {
      if (promptStatus === "pending") return;
      if(prompt === ""){
        toast.error("Please enter a prompt");
        return;
      }
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
        chat: activeChatHistory,
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
      handleError(e);
    }
  };

  const onTitleChange = async (newTitle: string, chatId?: string) => {
    if (newTitle === "") {
      setTitle(activeChat?.name || "Untitled");
      return;
    }
    try {
      if (chatId) {
        await updateChatName({ chatId: chatId, chatName: newTitle });
      } else {
        await updateChatName({ chatId: activeChat!.id, chatName: newTitle });
      }
      queryClient.invalidateQueries({ queryKey: ["chatNames"] });
    } catch (e) {
      handleError(e);
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
        promptStatus,
      }}
    >
      {children}
    </ActiveChatContext.Provider>
  );
};

export default ActiveChatProvider;
