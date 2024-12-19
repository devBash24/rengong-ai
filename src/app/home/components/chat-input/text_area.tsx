"use client";
import { useActiveChatContext } from "@/Context/ActiveChat/activeChatContext";
import { useNavigation } from "@/Context/Navigation/navigationContext";
import { motion } from "framer-motion";

const TextArea = () => {
  const {  prompt, setPrompt} = useActiveChatContext()
  const {isSidebarOpen} = useNavigation ()
  return (
    <form className={`relative  w-full mx-auto px-4  flex-shrink-1`}>
      <motion.textarea
        placeholder="Send a message"
        onChange={(e) => setPrompt(e.target.value)}
        rows={1}
        value={prompt}
        className="w-full p-1 text-sm sm:text-lg text-text placeholder-gray-500 bg-white rounded-lg shadow-md focus:ring-2 focus:ring-secondary focus:outline-none transition-all duration-200 ease-in-out overflow-hidden"
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.02,height: 80, maxHeight:120, overflowY: "auto" }} 
      />
    </form>
  );
};

export default TextArea;

