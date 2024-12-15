"use client";

import React from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import EditableTitle from "./message_title";
import { useNavigation } from "@/Context/Navigation/navigationContext";
import SidebarItems from "./sidebarItems";
import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";

const Sidebar = () => {
  const { toggleSidebar, isSidebarOpen, isMobile } = useNavigation();
  const { onSelectChat } = useActiveChatContext();
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
          <EditableTitle />
        </div>
        <IoChatboxEllipses
          onClick={async () => onSelectChat()}
          size={24}
          className="text-3xl text-primary cursor-pointer hover:scale-110 transition-all duration-300"
        />
      </div>
      {/* Divider */}
      <hr className="border-t border-gray-300" />

      {/* Sidebar Content */}
      <div className="relative">
        <div
          aria-hidden={!isSidebarOpen}
          className={`${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-[100vw] sm:translate-x-0"
          } z-50 transition-all duration-300 ease-in-out 
          top-[calc(64px+56px)] h-[calc(100vh-64px-56px)] 
          sm:h-[calc(100vh-64px-56px)] w-full sm:w-60 sm:static overflow-y-auto`}
        >
          <div className="w-full h-full bg-white p-4 overflow-y-auto">
            <SidebarItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
