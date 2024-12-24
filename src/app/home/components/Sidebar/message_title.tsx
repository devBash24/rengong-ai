"use client";
import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";
import React, { useState } from "react";

const EditableTitle = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { activeChat, onTitleChange, setTitle, title } = useActiveChatContext();
  const handleDoubleClick = () => setIsEditing(true);

  const handleBlur = () => {
    setIsEditing(false);
    if (title !== activeChat?.name) onTitleChange(title);
  };

  return (
    <div className="flex items-center max-w-full">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="text-lg font-bold text-text mx-4 border border-gray-300 rounded-md p-1 
            w-full max-w-xs sm:max-w-sm flex-shrink-1"
        />
      ) : (
        <h1
          className="text-lg font-bold text-text mx-4 cursor-pointer truncate max-w-full"
          onDoubleClick={handleDoubleClick}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default EditableTitle;
