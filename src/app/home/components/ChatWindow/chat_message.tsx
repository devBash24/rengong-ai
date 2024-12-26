import Image from "next/image";

const ChatMessage = ({
  role,
  parts,
  avatar,
}: {
  role: "user" | "model";
  parts: [{ text: string }];
  avatar: string;
}) => {
  return (
    <div
      className={`flex items-start gap-4 mb-4 ${
        role === "user" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <Image
        src={avatar || "/assets/default-avatar.png"}
        alt="Avatar"
        className="w-10 h-10 rounded-full shadow-md"
        width={40}
        height={40}
      />

      {/* Message Bubble */}
      <div
        className={`inline-block max-w-screen-lg px-6 py-2 rounded-lg shadow-md ${
          role === "user" ? "bg-secondary text-white" : "bg-primary text-white"
        }`}
        
      >
      <div dangerouslySetInnerHTML={{ __html: parts[0].text }}/>
      </div>
      
    </div>
  );
};

export default ChatMessage;
