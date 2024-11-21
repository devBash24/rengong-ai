"use client"
import { useChatContext } from '@/Context/Chat/chatContext';
import axios from 'axios';
import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";


const SendButton = () => {
  const {handleSend} = useChatContext();
  return (
    <VscSend onKeyDown={(e) => e.key === "Enter" && handleSend()} onClick={() => handleSend()}  className="text-4xl text-white flex-shrink-1 shadow-lg hover:cursor-pointer hover:scale-110 transition-all duration-300" />
  )
}

export default SendButton