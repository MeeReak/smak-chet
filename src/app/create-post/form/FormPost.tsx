"use client";
import React, { useState } from "react";
import {
  QuestionForm,
  Typography,
  Button,
  InputData,
  StaticQuestion,
} from "@/components";

interface EventInfoData {
  id: string;
  name: string;
  imageSrc: string;
  category: string;
  detail: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

interface Question {
  id: string;
  type: string;
  question: string;
  answer: any;
}

interface FormData {
  info: EventInfoData;
  questions: Question[];
}

const FormPost = ({onNext , eventInfo}:{onNext:()=>void , eventInfo:any}) => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: Math.random().toString(36).substring(2, 15),
      type: "",
      question: "",
      answer: "",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    info: {
      id: Math.random().toString(36).substring(2, 15),
      name: '',
      imageSrc: '',
      category: '',
      detail: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      age: '',
      language: '',
      skill: '',
      timeCommitment: '',
    },
    questions: [
      {
        id: Math.random().toString(36).substring(2, 15),
        type: '',
        question: '',
        answer: '',
      },
    ],
  });

  const handleQuestionChange = (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string,
    QAtype: string
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              type: QAtype,
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
        type: "",
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
    setFormData({
      info: {
        ...eventInfo, // Update info data with eventInfo props
      },
      questions: [...questions], // Update questions array
    })
    };
    console.log(formData);

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
      <form action="" className="space-y-5">
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
              question={question}
              removeQuestion={() => handleRemoveQuestion(question.id)}
              onQuestionChange={(
                updatedQuestionText,
                updatedAnswer,
                questionType
              ) =>
                handleQuestionChange(
                  updatedQuestionText,
                  updatedAnswer,
                  question.id,
                  questionType
                )
              }
            />
          </div>
        ))}

        <Button
          type="button"
          onclick={handleAddQuestion}
          className="border-none"
        >
          <Typography color="blue">+ Add More Questions</Typography>
        </Button>
        <Button type="button" className="bg-[#207BFF] p-3 float-end" onclick={handleSubmit}>
          <Typography color="white">Publish</Typography>
        </Button>
      </form>
    </div>
  );
};

export default FormPost;
