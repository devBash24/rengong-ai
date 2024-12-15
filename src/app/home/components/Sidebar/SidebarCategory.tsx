"use client";
import { useState } from "react";
import SidebarChatItem from "./sidebar_chat_item";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

const iconStyle = "text-white";

const SidebarCategory = ({
  title,
  chats,
}: {
  title: string;
  chats: { id: string; name: string }[];
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="mb-4">
      {/* Category Header */}
      <div
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="flex justify-between items-center px-4 py-2 cursor-pointer bg-secondary hover:bg-opacity-80 rounded-md"
      >
        <h3 className="font-semibold text-base text-nowrap text-white">{title}</h3>
        <button className="text-gray-500 hover:text-gray-700">
          {isCollapsed ? (
            <IoChevronDown className={iconStyle} />
          ) : (
            <IoChevronUp className={iconStyle} />
          )}
        </button>
      </div>

      {/* Chat Items */}
      {!isCollapsed && (
        <div className="mt-2 space-y-2">
          {Array.isArray(chats)
            ? chats.map((chat) => (
                <SidebarChatItem key={chat.id} id={chat.id} name={chat.name} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default SidebarCategory;
