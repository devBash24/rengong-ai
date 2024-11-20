"use client";
import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import SidebarCategory from "./SidebarCategory";
import useSidebar from "@/hooks/useSidebar";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight } from "react-icons/bi";
import EditableTitle from "./message_title";

const chatData = {
  Today: [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
  ],
  Yesterday: [
    { id: 3, name: "Chat 3" },
    { id: 4, name: "Chat 4" },
  ],
  "Previous 7 Days": [
    { id: 5, name: "Chat 5" },
    { id: 6, name: "Chat 6" },
  ],
  "Previous 30 Days": [
    { id: 7, name: "Chat 7" },
    { id: 8, name: "Chat 8" },
  ],
};

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const handleTitleChange = (newTitle: string) => {
    console.log("Title updated to:", newTitle);
  };

  return (
    <div className="w-full h-12 bg-white shadow-xl sm:w-60 sm:h-full z-50 ">
      {/* Header Section */}
      <div className="flex justify-between items-center p-2 h-12 bg-">
        <div className="flex items-center gap-2">
          {!isMobile ? null : (
            <BiMenuAltRight
              className="text-3xl text-primary cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={toggleSidebar}
            />
          )}
          {/* Editable Title */}
          <EditableTitle title="Untitled 1" onChange={handleTitleChange} />
        </div>
        <IoChatboxEllipses className="text-3xl text-primary cursor-pointer hover:scale-110 transition-all duration-300" />
      </div>
      {/* Divider */}
      <hr className="border-t border-gray-300" />

      {/* Sidebar Content */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[100vw] sm:translate-x-0"
        } 
          z-50 transition-all duration-300 ease-in-out top-[calc(64px+56px)] h-[calc(100vh-64px-56px)] 
          sm:h-[calc(100vh-64px-56px)] w-full sm:w-60 sm:static overflow-y-auto overflow-x-hidden`}
      >
        <div className="w-full h-screen bg-white p-4 overflow-y-auto">
          <h2 className="text-lg font-bold text-text mb-4">Conversations</h2>
          {/* Render Categories */}
          {Object.entries(chatData).map(([title, chats]) => (
            <SidebarCategory key={title} title={title} chats={chats} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
