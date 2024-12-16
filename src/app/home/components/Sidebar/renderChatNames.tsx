"use client";
import { IGroupedChats } from "@/lib/organize_messages";
import React from "react";
import SidebarCategory from "./SidebarCategory";


const groupID = {
    today:"Today",
    yesterday:"Yesterday",
previous7Days:"Previous 7 Days",
    previous30Days:"Previous 30 Days"
}

const RenderChatNames = ({ data }: { data: IGroupedChats }) => {
  const renderChatCategories = () => {
    if (!data)  return null;
    return Object.entries(data).flatMap(([key, value]) => {

      if (key === "older") {
        // Handle "older" category separately
        return Object.entries(value).map(([monthYear, olderChats]) => {
          if ((olderChats as { id: string; name: string }[]).length === 0) return null; // Skip empty months
          return (
            <SidebarCategory
              key={monthYear}
              title={monthYear}
              chats={olderChats as { id: string; name: string }[]}
            />
          );
        });
      }

      // Skip rendering categories with no chats
      if (Array.isArray(value) && value.length > 0) {
        return (
          <SidebarCategory key={key} title={groupID[key as keyof typeof groupID]} chats={value} />
        );
      }
      return null; // Skip empty categories
    });
  };

  return (
    <div className="w-full h-full bg-white p-4 overflow-y-auto text-black">
      <h2 className="text-lg font-bold text-text mb-3">Conversations</h2>
      {renderChatCategories()}
    </div>
  );
};

export default RenderChatNames;
