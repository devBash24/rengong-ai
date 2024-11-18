import ChatMessage from "./chat_message";
import NoMessage from "./no_message";

const ChatWindow = () => {
  const messages = [
    {
      id: 1,
      isUser: false,
      avatar: "https://via.placeholder.com/40", // Placeholder for response avatar
      message: "Hello! How can I help you today?",
    },
    {
      id: 2,
      isUser: true,
      avatar: "https://via.placeholder.com/40", // Placeholder for user avatar
      message: "Can you tell me about TailwindCSS?",
    },
    {
      id: 3,
      isUser: false,
      avatar: "https://via.placeholder.com/40", // Placeholder for response avatar
      message:
        "Sure! TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.",
    },
  ];

  return (
    <div className="h-full max-h-[calc(100vh-64px-56px)] w-full mx-auto bg-background rounded-lg p-4 py-6 shadow-md overflow-y-auto overflow-x-hidden">
      {/* Chat Messages */}
      {
        messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <NoMessage /> 
          </div>
        ):
        messages.map(({ id, isUser, avatar, message }) => (
          <ChatMessage
            key={id}
            isUser={isUser}
            avatar={avatar}
            message={message}
          />
        ))
      }
    </div>
  );
};

export default ChatWindow;
