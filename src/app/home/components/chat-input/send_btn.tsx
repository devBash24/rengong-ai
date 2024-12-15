"use client"
import { useActiveChatContext } from '@/Context/ActiveChat/activeChatContext';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";


const SendButton = () => {
  const {handlePromptRequest} = useActiveChatContext()
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="text-2xl text-white flex-shrink-1 shadow-lg hover:cursor-pointer"
      onClick={() => handlePromptRequest()}
      tabIndex={0}
    >
      <VscSend size={24} />
    </motion.div>
  );
};

export default SendButton;