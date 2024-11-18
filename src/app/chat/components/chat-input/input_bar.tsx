import React from 'react'
import TextArea from './text_area'
import SendButton from './send_btn'
import AttachmentButton from './attachment_btn'

const InputBar = () => {
  return (
    <div className='bg-primary w-full flex h-inputBar overflow-hidden items-center gap-3 justify-center py-2 px-4 '>
        <AttachmentButton/>
        <TextArea/>
        <SendButton/>
    </div>
  )
}

export default InputBar