"use client";

import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";
import { useChatNames } from "@/Context/ChatNames/chatNamesContext";
import { useEffect, useState } from "react";
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import RenameChatModal from "./renameChatModal";
const SidebarChatItem = ({ name ,id}: { name: string, id: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {onSelectChat} = useActiveChatContext();
  const {onChatDelete} = useChatNames()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  
  };
  return (
    <div  className="relative flex justify-between items-center px-4 py-2 hover:bg-gray-200 rounded-md">
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
          <div onClick={(e)=>e.stopPropagation()} className="absolute right-0 top-8 w-32 bg-white shadow-lg rounded-md z-10">
            <ul className="py-1 text-sm text-gray-700">
              <button onClick={handleOpenModal} className="px-4 py-2 hover:bg-gray-100 cursor-pointer  w-full">Rename</button>
              <button onClick={() => onChatDelete(id)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 w-full">
                Delete
              </button>
            </ul>
          </div>
        )}
      </div>
      {
        isModalOpen && <RenameChatModal handleClose={handleCloseModal} chatId={id} chatName={name}/>
      }
    </div>
  );
};

export default SidebarChatItem;
