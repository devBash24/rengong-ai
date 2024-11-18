"use client";
import React from "react";
import { IoIosAttach } from "react-icons/io";
const AttachmentButton = () => {
  const handleSend = () => {
    alert("Sending message...");
  };
  return (
    <IoIosAttach
      onClick={handleSend}
      className="text-4xl font-bold text-white shadow-lg hover:cursor-pointer hover:scale-110 transition-all duration-300"
    />
  );
};

export default AttachmentButton;
