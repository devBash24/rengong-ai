"use client"
import React from 'react'
import TextArea from './text_area'
import SendButton from './send_btn'
import AttachmentButton from './attachment_btn'
import { motion } from 'framer-motion';


const InputBar = () => {
  return (
    <motion.div
      className='bg-primary rounded-lg w-[90%] md:w-[80%] mx-auto mb-6 flex  items-center gap-3 justify-center py-4 px-4 z-50'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

    >
      {/* <AttachmentButton /> */}
      <TextArea />
      <SendButton />
    </motion.div>
  );
};

export default InputBar;
