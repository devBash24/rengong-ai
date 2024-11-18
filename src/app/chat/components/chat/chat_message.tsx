



interface IMessageProps {
    isUser: boolean;
    avatar: string;
    message: string;
}

const ChatMessage = ({ isUser, avatar, message }: IMessageProps) => {
    return (
      <div
        className={`flex items-start gap-4 mb-4 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <img
          src={'/assets/default-avatar.png'}
          alt="Avatar"
          className="w-10 h-10 rounded-full shadow-md"
        />
  
        {/* Message Bubble */}
        <div
          className={`max-w-sm px-4 py-2 rounded-lg shadow-md ${
            isUser
              ? "bg-secondary text-white"
              : "bg-primary text-white"
          }`}
        >
          {message}
        </div>
      </div>
    );
  };
  
  export default ChatMessage;
  