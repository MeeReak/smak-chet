"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic

// Dynamically import ReactQuill to ensure it's only loaded in the browser
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

const TextEditor = ({ onchange }: { onchange: any }) => {
  const [content, setContent] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  const handleChange = (content: string) => {
    setContent(content);
    onchange(content);
  };

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined"); // Check for window instead of document
  }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"], // toggled buttons
      [{ font: [] }],

      [{ list: "ordered" }, { list: "bullet" }],

      [{ header: [1, 2, 3, 4, 5, 6, false] }],
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
