"use client";
import { createContext, useContext } from "react";
import { IActiveChatContext } from "./activeChatProvider";

const ActiveChatContext = createContext<IActiveChatContext | null>(null);

const useActiveChatContext = () => {
  const context = useContext(ActiveChatContext);
  if (!context) {
    throw new Error(
      "useActiveChatContext must be used within a ActiveChatProvider"
    );
  }
  return context;
};

export { ActiveChatContext, useActiveChatContext };
