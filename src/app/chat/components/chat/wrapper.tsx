"use client";
import { useChatContext } from "@/Context/Chat/chatContext";
import ChatMessage from "./chat_message";
import NoMessage from "./no_message";

const ChatWindow = () => {
  const { activeChat } = useChatContext();

  const renderMessages = () => {
    if (!activeChat || activeChat.messages.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <NoMessage />
        </div>
      );
    }

    return activeChat.messages.map(({ id, isUser, avatar, message }) => (
      <ChatMessage
        key={id}
        isUser={isUser}
        avatar={avatar}
        message={message}
      />
    ));
  };

  return (
    <div className="h-full max-h-[calc(100vh-64px-56px)] w-full mx-auto bg-background rounded-lg p-4 py-6 shadow-md overflow-y-auto">
      {renderMessages()}
    </div>
  );
};

export default ChatWindow;
