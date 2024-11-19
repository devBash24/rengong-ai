import React, { useState } from 'react';

const EditableTitle = ({ title, onChange }: { title: string; onChange: (newTitle: string) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  const handleDoubleClick = () => setIsEditing(true);

  const handleBlur = () => {
    setIsEditing(false);
    if(currentTitle === ""){
      setCurrentTitle(title)
      return
    }

    onChange(currentTitle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(e.target.value);
  };

  return (
    <div className="editable-title flex items-center max-w-full">
      {isEditing ? (
        <input
          type="text"
          value={currentTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="text-lg font-bold text-text mx-4 border border-gray-300 rounded-md p-1 
            w-full max-w-xs sm:max-w-sm flex-shrink-1"
        />
      ) : (
        <h1
          className="text-lg font-bold text-text mx-4 cursor-pointer truncate max-w-full"
          onDoubleClick={handleDoubleClick}
        >
          {currentTitle}
        </h1>
      )}
    </div>
  );
};

export default EditableTitle;
