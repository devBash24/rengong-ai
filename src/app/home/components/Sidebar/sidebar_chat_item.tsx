"use client";

import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";
import { useState } from "react";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
const SidebarChatItem = ({ name ,id}: { name: string, id: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {onSelectChat} = useActiveChatContext();



  const onChatDelete = (id: string) => {
    // Handle chat deletion logic here
  };

  return (
    <div className="relative flex justify-between items-center px-4 py-2 hover:bg-gray-200 rounded-md">
      {/* Chat Name */}
      <span onClick={() => onSelectChat(id)} className="text-text text-base text-nowrap truncate">{name}</span>

      {/* Three-Dot Icon */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-gray-500 hover:text-gray-700"
        >
          <PiDotsThreeVerticalLight/>
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-8 w-32 bg-white shadow-lg rounded-md z-10">
            <ul className="py-1 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rename</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Share</li>
              <li onClick={() => onChatDelete(id)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarChatItem;
