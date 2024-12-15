"use client"

import React from 'react'
import RenderChatNames from './renderChatNames'
import { useChatNames } from '@/Context/ChatNames/chatNamesContext';
const SidebarItems = () => {
    const { chatNames } = useChatNames();
  return (
    <RenderChatNames data={chatNames as any} />
  )
}

export default SidebarItems