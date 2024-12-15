"use client";
import { createContext, useContext } from "react";
import { IChatNamesContext } from "./chatNamesProvider";

const ChatNameContext = createContext<IChatNamesContext | null>(null);

const useChatNames = () => {
  const context = useContext(ChatNameContext);
  if (!context) {
    throw new Error("useChatNames must be used within a ChatNamesProvider");
  }
  return context;
};

export { useChatNames,ChatNameContext };
