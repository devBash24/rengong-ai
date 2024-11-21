"use client";
import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import SidebarCategory from "./SidebarCategory";
import useSidebar from "@/hooks/useSidebar";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight } from "react-icons/bi";
import EditableTitle from "./message_title";
import { useChatContext } from "@/Context/Chat/chatContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { chats, handleActiveChat } = useChatContext();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const handleTitleChange = (newTitle: string) => {
    console.log("Title updated to:", newTitle);
  };

  const renderChatCategories = () => {
    if (!chats) return null;

    return Object.entries(chats).map(([title, chat]) => {
      if (title === "older") {
        return Object.entries(chat).map(([monthYear, olderChats]) => (
          <SidebarCategory key={monthYear} title={monthYear} chats={olderChats as any} />
        ));
      }
      return chat.length > 0 && (
        <SidebarCategory key={title} title={title} chats={chat} />
      );
    });
  };

  return (
    <div className="w-full h-12 bg-white shadow-xl sm:w-60 sm:h-full z-50">
      {/* Header Section */}
      <div className="flex justify-between items-center p-2 h-12">
        <div className="flex items-center gap-2">
          {isMobile && (
            <BiMenuAltRight
              className="text-3xl text-primary cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={toggleSidebar}
            />
          )}
          {/* Editable Title */}
          <EditableTitle title="Untitled 1" onChange={handleTitleChange} />
        </div>
        <IoChatboxEllipses onClick={()=>handleActiveChat()} className="text-3xl text-primary cursor-pointer hover:scale-110 transition-all duration-300" />
      </div>
      {/* Divider */}
      <hr className="border-t border-gray-300" />

      {/* Sidebar Content */}
      <div
        aria-hidden={!isSidebarOpen}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[100vw] sm:translate-x-0"
        } z-50 transition-all duration-300 ease-in-out 
          top-[calc(64px+56px)] h-[calc(100vh-64px-56px)] 
          sm:h-[calc(100vh-64px-56px)] w-full sm:w-60 sm:static overflow-y-auto`}
      >
        <div className="w-full h-screen bg-white p-4 overflow-y-auto">
          <h2 className="text-lg font-bold text-text mb-4">Conversations</h2>
          {renderChatCategories()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
