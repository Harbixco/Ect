/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Texteditor = ({ defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (content) => {
    setValue(content);
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <ReactQuill
        value={value}
        onChange={handleChange}
        className="text-md h-[100px] flex-1 text-gray-800 md:mb-5"
        theme="snow"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["link", "blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />
    </div>
  );
};

export default Texteditor;
