"use client";
import { useRef } from "react";

const TextArea = () => {
  const textAreaRef = useRef(null);

  const handleInput = () => {
    const textarea:any = textAreaRef.current;
    if (!textarea) return;
    // Reset height to ensure shrinking works
    textarea.style.height = "auto";
    // Set height to scrollHeight to make it expand upwards
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <form className="relative w-full  mx-auto px-4  overflow-hidden flex-shrink-1">
      <textarea
        ref={textAreaRef}
        placeholder="Send a message"
        onInput={handleInput}
        rows={1}
        className="w-full p-1 text-base sm:text-lg text-text placeholder-gray-500 bg-white rounded-lg shadow-md focus:ring-4 focus:ring-secondary focus:outline-none transition-all duration-200 ease-in-out  overflow-hidden"
        style={{
          minHeight: "2rem", // Matches the initial height for a single line
          maxHeight: "10rem", // Restricts maximum expansion
        }}
      />
    </form>
  );
};

export default TextArea;
