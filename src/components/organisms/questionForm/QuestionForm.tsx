"use client";
import React, { useState } from "react";
import {
  Dropdown,
  MultiChoiceQuestion,
  WritingQuestion,
  YesNoQuestion,
} from "@/components";
import { Button, ButtonIcon, InputData } from "@/components/atoms";

interface QuestionFormProps {
  question?: any;
  removeQuestion: () => void;
  onQuestionChange: (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string,
    QAtype: string
  ) => void;
  index?: number;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  onQuestionChange,
  question,
  removeQuestion,
  index,
}) => {
  const [QAType, setQAType] = useState("Writing Answer");

  const handleAnswerChange = (updatedAnswer: any) => {
    onQuestionChange(question.question, updatedAnswer, QAType, question.id);
  };
  const handleSelectType = (selectedOption: any) => {
    setQAType(selectedOption);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(event.target.value, question.answer, QAType, question.id);
    console.log(QAType);
  };

  return (
    <div className="w-full bg-[#F8F8F8] py-10 px-3 rounded-lg">
      <div className="flex justify-between items-center mb-4 gap-3">
        <InputData
          type="text"
          placeholder="Question"
          className="w-[60%] h-[50px] px-2 border-gray-300 lg:w-[900px]  mx- lg:py-2 border-b focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
          onChange={handleQuestionChange}
        />
        <Dropdown
          options={["Writing Answer", "Multi Choice", "Yes/No"]}
          classname="w-[30%] h-[50px] bg-[#F8F8F8]"
          placeholder="Type of Answer"
          onChange={handleSelectType}
        />
        <ButtonIcon
          onclick={removeQuestion}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          }
        ></ButtonIcon>
      </div>

      {QAType === "Writing Answer" ? (
        <WritingQuestion />
      ) : QAType === "Multi Choice" ? (
        <MultiChoiceQuestion
          onchange={(options) => handleAnswerChange(options)}
        />
      ) : QAType === "Yes/No" ? (
        <YesNoQuestion />
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuestionForm;
