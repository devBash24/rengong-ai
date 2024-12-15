"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoIosAttach } from "react-icons/io";

const AttachmentButton = () => {
  const handleSend = () => {
    alert("Sending message...");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="text-3xl font-bold text-white shadow-lg hover:cursor-pointer"
    >
      <IoIosAttach size={24} onClick={handleSend} />
    </motion.div>
  );
};

export default AttachmentButton;