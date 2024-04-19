"use client";
import React, { ChangeEvent } from "react";

interface FileInputProps {
  onChange: (files: FileList) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onChange(files); // Pass the FileList to the parent component
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-[#D1D1D1] opacity-50 h-[330px] rounded-lg">
      <label
        htmlFor="fileInput"
        className="relative cursor-pointer bg-white rounded-md font-medium shadow-sm border border-gray-300 hover:border-gray-400 px-4 py-2 inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 opacity-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        Upload Your Image
        <input
          id="fileInput"
          type="file"
          className="sr-only"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileInput;
