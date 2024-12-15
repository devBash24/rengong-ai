"use client";
import { useEffect, useRef } from "react";
import ChatMessage from "./chat_message";
import NoMessage from "./no_message";
import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";
import LoadingOverlay from "../Sidebar/loadingSpinner";


const ChatWindow = () => {
  const { activeChat,fetchChatActiveStatus } = useActiveChatContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat]);
  const renderMessages = () => {
    if (!activeChat || activeChat.messages.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <NoMessage />
        </div>
      );
    }

    if(fetchChatActiveStatus === "pending"){
      return (
        <LoadingOverlay/>
      );
    }

    return activeChat.messages.map(({ id,role, parts }, index) => (
      <ChatMessage key={id+JSON.stringify(parts)} id={id} role={role} parts={parts} />
    ));
  };

  return (
    <div
      ref={containerRef}
      className="h-full max-h-[calc(100vh-64px-56px)] w-full mx-auto bg-background rounded-lg p-4 py-6 overflow-y-auto"
    >
      {renderMessages()}
      {/* {activeChat.status === "pending" && (
        <div className="text-sm text-gray-500 italic animate-pulse">
          Typing...
        </div>
      )} */}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatWindow;
