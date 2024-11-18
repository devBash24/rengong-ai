"use client";
import { useState } from "react";
import SidebarChatItem from "./sidebar_chat_item";



const SidebarCategory = ({ title, chats }:{ title: string; chats: { id: number; name: string }[]}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="mb-4">
      {/* Category Header */}
      <div
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="flex justify-between items-center px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md"
      >
        <h3 className="font-semibold text-text">{title}</h3>
        <button className="text-gray-500 hover:text-gray-700">
          {isCollapsed ? "▼" : "▲"}
        </button>
      </div>

      {/* Chat Items */}
      {!isCollapsed && (
        <div className="mt-2 space-y-2">
          {chats.map((chat) => (
            <SidebarChatItem key={chat.id} name={chat.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarCategory;
