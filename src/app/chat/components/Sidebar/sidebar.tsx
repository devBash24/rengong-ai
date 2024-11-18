"use client";
import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import SidebarCategory from "./SidebarCategory";
import useSidebar from "@/hooks/useSidebar";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
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
  const {isSidebarOpen, toggleSidebar} = useSidebar()
  return (
    <div className="w-full h-12 bg-background-secondary shadow-xl sm:w-60 sm:h-full">
      <div className="flex justify-between items-center p-2 h-12 bg-secondary">

        <div className="flex items-center gap-2">
          {
            isSidebarOpen ? (
              <GoSidebarCollapse className="text-3xl text-primary" onClick={toggleSidebar} />
            ) : (
              <GoSidebarExpand className="text-3xl text-primary" onClick={toggleSidebar} />
            )
          }

        <h1 className="text-lg font-bold text-text">Untitled 1</h1>
        </div>
        <IoChatboxEllipses className="text-3xl text-primary" />
      </div>

      <div className= {`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'} z-50 transition-all duration-300 ease-in-out top-[calc(64px+56px)] h-[calc(100vh-64px-56px)] sm:h-[calc(100vh-64px-48px)] w-full sm:w-60 bg-secondary sm:static overflow-y-auto overflow-x-hidden`}>
        <div className="w-full h-screen bg-[#f5f5f5] p-4 overflow-y-auto">
          {/* Sidebar Header */}
          <h2 className="text-lg font-bold text-text mb-4">Conversations</h2>

          {/* Render Categories */}
          {Object.entries(chatData).map(([title, chats]) => (
            <SidebarCategory  key={title} title={title} chats={chats} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
