"use client"
import React from 'react'
import { VscSend } from "react-icons/vsc";
const SendButton = () => {
    const handleSend = () => {
        alert("Sending message...")
    }
  return (
    <VscSend onClick={handleSend} className="text-4xl text-white flex-shrink-1 shadow-lg hover:cursor-pointer hover:scale-110 transition-all duration-300" />
  )
}

export default SendButton