"use client";
import React, { useState } from "react";
import {
  QuestionForm,
  Typography,
  Button,
  InputData,
  StaticQuestion,
} from "@/components";

interface Question {
  id: string;
  question: string;
  answer: any; // Add answer property for each question
}

const Page = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      // Initial state with one empty question object
      id: Math.random().toString(36).substring(2, 15),
      question: "",
      answer: "",
    },
  ]);

  const handleQuestionChange = (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              question: updatedQuestionText,
              answer: updatedAnswer,
            }
          : question
      )
    );
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: Math.random().toString(36).substring(2, 15),
        question: "",
        answer: "",
      }, // Add new question object
    ]);
  };

  const handleRemoveQuestion = (id: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
  }

  console.log(questions);

  return (
    <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] mb-20">
      <div className="w-full rounded-lg bg-[#F8F8F8]">
        <div className="w-full h-[30px] bg-[#207BFF] rounded-t-lg"></div>
        <div className="w-full px-3 py-10 space-y-5">
          <Typography fontSize="h2" fontWeight="bold">
            Application Form
          </Typography>
          <InputData
            placeholder="Form description"
            className="border-none bg-transparent py-2"
          />
        </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="space-y-5">
        <div className="w-full bg-[#F8F8F8] py-10 px-3 rounded-lg">
          <StaticQuestion>Full Name</StaticQuestion>
        </div>
        <div className="w-full bg-[#F8F8F8] py-10 px-3 rounded-lg">
          <StaticQuestion>Email</StaticQuestion>
        </div>
        <div className="w-full bg-[#F8F8F8] py-10 px-3 rounded-lg">
          <StaticQuestion>Address</StaticQuestion>
        </div>
        <div className="w-full bg-[#F8F8F8] py-10 px-3 rounded-lg">
          <StaticQuestion>Phone Number</StaticQuestion>
        </div>
        {questions.map((question) => (
          <div key={question.id}>
            <QuestionForm
              question={question} // Pass the entire question object as a prop
              removeQuestion={() => handleRemoveQuestion(question.id)}
              onQuestionChange={(updatedQuestionText, updatedAnswer) =>
                handleQuestionChange(
                  updatedQuestionText,
                  updatedAnswer,
                  question.id
                )
              } 
            />
          </div>
        ))}
        <Button type="button" onclick={handleAddQuestion} className="border-none">
          <Typography color="blue">+ Add More Questions</Typography>
        </Button>
        <Button type="submit" className="bg-[#207BFF] p-3 float-end">
          <Typography color="white">Simulate Submit</Typography>
        </Button>
      </form>
    </div>
  );
}

export default Page;
