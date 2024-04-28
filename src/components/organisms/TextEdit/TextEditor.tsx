"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [content, setContent] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  const handleChange = (content: string) => {
    setContent(content);
  };

  useEffect(() => {
    setIsBrowser(typeof document !== "undefined");
  }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"], // toggled buttons
      [{ font: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript

      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  return (
    <>
      {isBrowser && (
        <ReactQuill
          modules={modules}
          className="my-5"
          theme="snow"
          value={content}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default TextEditor;
