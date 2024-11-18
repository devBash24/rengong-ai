import React from 'react'
import TextArea from './chat-input/text_area'
import InputBar from './chat-input/input_bar'
import ChatWindow from './chat/wrapper'

const ChatContainer = () => {
  return (
    <div  className='flex flex-col h-full w-full'>
        <ChatWindow />
        <InputBar />
    </div>
  )
}

export default ChatContainer