"use client"

import React from 'react'
import RenderChatNames from './renderChatNames'
import { useChatNames } from '@/Context/ChatNames/chatNamesContext';
import { IGroupedChats } from '@/lib/organize_messages';
const SidebarItems = () => {
    const { chatNames } = useChatNames();
  return (
    <RenderChatNames data={chatNames as IGroupedChats} />
  )
}

export default SidebarItems