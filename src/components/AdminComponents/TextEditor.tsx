import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (content) => {
    setValue(content);
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <div className="mx-auto w-full bg-white p-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        className="text-gray-800"
        placeholder="Write something amazing..."
      />
    </div>
  );
};

export default TextEditor;
