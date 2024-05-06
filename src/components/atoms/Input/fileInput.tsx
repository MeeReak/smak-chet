"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

interface FileInputProps {
  onChange: (files: FileList) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      setSelectedFile(selected);

      // Pass the FileList to the parent component
      onChange(files);
    }
  };

  return (
    <div
      className={
        selectedFile
          ? `flex items-center justify-center w-full h-[330px] bg-red-500`
          : `flex items-center justify-center w-full h-[330px] rounded-lg bg-[#D1D1D1]`
      }
    >
      {/* <label
        htmlFor="fileInput"
        className="relative cursor-pointer bg-white rounded-md font-medium shadow-sm border border-gray-300 hover:border-gray-400 px-4 py-2 inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 opacity-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
      </label> */}
      {/* {selectedFile && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected File Preview"
            className="w-full"
          />
        </div>
      )} */}
      {selectedFile ? (
        <div className="relative w-full h-[330px]">
        <Image
          src={URL.createObjectURL(selectedFile)}
          alt="Selected File Preview"
          width={500}
          height={330}
          className="h-full object-cover"
        />
        <label
          htmlFor="fileInput"
          className="absolute bottom-0 right-0 mb-4 mr-4 cursor-pointer bg-white bg-opacity-80 rounded-md font-medium shadow-sm border border-gray-300 hover:border-gray-400 px-4 py-2 flex items-center"
          style={{ zIndex: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
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
      
      ) : (
        <label
          htmlFor="fileInput"
          className="relative cursor-pointer bg-white rounded-md font-medium shadow-sm border border-gray-300 hover:border-gray-400 px-4 py-2 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 opacity-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
      )}
    </div>
  );
};

export default FileInput;
