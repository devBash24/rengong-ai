"use client";
import { useEffect, useRef, useMemo } from "react";
import ChatMessage from "./chat_message";
import NoMessage from "./no_message";
import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";
import LoadingOverlay from "../Sidebar/loadingSpinner";
import { useAuthContext } from "@/Context/Auth/authContext";

const ChatWindow = () => {
  const { activeChat, fetchChatActiveStatus, promptStatus } = useActiveChatContext();
  const { user } = useAuthContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current && activeChat?.messages?.length) {
      const behavior = activeChat?.messages?.length > 0 ? "smooth" : "auto";
      messagesEndRef.current.scrollIntoView({ behavior });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages.length]);

  const renderedMessages = useMemo(() => {
    if (!activeChat || activeChat.messages.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <NoMessage />
        </div>
      );
    }

    if (fetchChatActiveStatus === "pending") {
      return <LoadingOverlay />;
    }

    return activeChat.messages.map(({ id, role, parts }) => (
      <ChatMessage
        key={id}
        avatar={role === "user" ? user?.user_metadata.avatar_url : "/assets/default-avatar.png"}
        role={role}
        parts={parts}
      />
    ));
  }, [activeChat, fetchChatActiveStatus, user?.user_metadata.avatar_url]);

  return (
    <div
      ref={containerRef}
      className="h-full max-h-[calc(100vh-64px-56px)] w-full mx-auto bg-background rounded-lg p-4 py-6 overflow-y-auto"
    >
      {renderedMessages}
      {promptStatus === "pending" && (
        <div className="text-sm text-gray-500 italic animate-pulse">
          Typing...
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;
