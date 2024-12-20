import React from 'react'
import ChatWindow from './components/ChatWindow/chatWindow'
import InputBar from './components/chat-input/input_bar'

const Home = () => {
  return (
    <div  className='z-0 flex flex-col relative bg-background max-h-[calc(100vh-56px)]  h-full w-full'>
    <ChatWindow />
    <InputBar />
</div>
  )
}

export default Home