"use client";
import React, { useState } from "react";
import {
  Dropdown,
  MultiChoiceQuestion,
  WritingQuestion,
  YesNoQuestion,
} from "@/components";
import { Button, InputData } from "@/components/atoms";

interface QuestionFormProps {
  question?: any;
  removeQuestion: () => void;
  onQuestionChange: (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string
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
    onQuestionChange(question.question, updatedAnswer, question.id);
  };
  const handleSelectType = (selectedOption: any) => {
    setQAType(selectedOption);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(event.target.value, question.answer, question.id);
  };

  return (
    <div className="w-full bg-[#F8F8F8] py-10 px-3 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <InputData
          type="text"
          placeholder="Question"
          className="w-[60%] h-[50px] px-5 border-gray-300"
          onChange={handleQuestionChange}
        />
        <Dropdown
          options={["Writing Answer", "Multi Choice", "Yes/No"]}
          classname="w-[30%] h-[50px] bg-white"
          placeholder="Type of Answer"
          onChange={handleSelectType}
        />
        <Button onclick={removeQuestion}>Remove</Button>
      </div>

      {QAType === "Writing Answer" ? (
        <WritingQuestion />
      ) : QAType === "Multi Choice" ? (
        <MultiChoiceQuestion
          onchange={(options) => handleAnswerChange(options)}
        />
      ) : QAType === "Yes/No" ? (
        <YesNoQuestion/>
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuestionForm;
