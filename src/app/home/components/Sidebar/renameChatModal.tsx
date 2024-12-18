

"use client"
import { useActiveChatContext } from '@/Context/ActiveChat/activeChatContext';
import { useChatNames } from '@/Context/ChatNames/chatNamesContext';
import { motion } from 'framer-motion';
import React, { useState } from 'react'



const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

const RenameChatModal = ({ handleClose, chatName, chatId}:{ handleClose: () => void, chatName: string, chatId: string}) => {
    const [newName, setNewName] = useState(chatName);
    const {onTitleChange} = useActiveChatContext()
    const handleRename = async () => {
         onTitleChange(newName, chatId)
    }
    
  return (
    <motion.div
            className="absolute top-0 left-0 w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 border-red-100"
            initial={{ opacity: 0,zIndex:1999 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
           
            >
              <h2 className="text-lg font-semibold mb-4">Rename Chat</h2>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new chat name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleRename();
                    handleClose();
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/85 transition"
                >
                  Rename
                </button>
              </div>
            </motion.div>
          </motion.div>
  )
}

export default RenameChatModal