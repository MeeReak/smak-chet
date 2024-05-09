"use client";

import React, { useState } from "react";
import {
  QuestionForm,
  Typography,
  Button,
  InputData,
  StaticQuestion,
  ButtonIcon,
} from "@/components";

import { useNavigate } from "react-router-dom";

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

const FormPost = ({ onNext, eventInfo }: { onNext: () => void, eventInfo: any }) => {
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

  // const BackButton = () => {
  //   const navigate = useNavigate();

  //   const handleBack = () => {
  //     navigate(-1); // This will take you back to the previous page
  //   };



    return (
      <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] mb-20">
        <div className="space-y-4  flex flex-col  px-3 lg:px-0 ">
          <div className="lg:w-[1024px] h-[160px] bg-[#F8F8F8] rounded-[10px]">
            <div className="lg:w-[1024px] h-[31px] bg-blue-600 rounded-t-lg"></div>
            {/* Apply Form header` */}
            <div className="mt-5 pl-5 space-y-4">
              <Typography fontWeight="bold" className=" !text-2xl lg:text-4xl">
                Apply Form
              </Typography>
              <Typography fontSize="h4" color="grey">
                Fill in this form so we can get your information
              </Typography>
            </div>
          </div>
          {/* Full name */}
          <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
            <div className="lg:space-y-3 space-y-2  py-[16px] ">
              <Typography className="pl-4 text-base lg:text-xl">
                Full Name<span className="text-base text-red-500">*</span>
              </Typography>
              <input
                name="name"
                type="text"
                className=" lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
                placeholder="Short Answer"
              />
            </div>
          </div>

          {/* Address */}
          <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
            <div className="lg:space-y-3 space-y-2  py-[16px]">
              <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
                Address<span className="lg:text-base text-red-500">*</span>
              </Typography>
              <input
                name="address"
                type="text"
                className=" lg:w-[900px] w-2/3  mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] "
                placeholder="Short Answer"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
            <div className="lg:space-y-3 space-y-2  py-[16px]">
              <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
                Email<span className="lg:lg:text-base text-red-500">*</span>
              </Typography>
              <input
                name="email"
                type="text"
                className="lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
                placeholder="Short Answer"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
            <div className="lg:space-y-3 space-y-2  py-[16px]">
              <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
                Phone number
                <span className="lg:lg:text-base text-red-500">*</span>
              </Typography>
              <input
                name="phonenumber"
                type="text"
                className="lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
                placeholder="Short Answer"
              />
            </div>
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
          <div className="flex justify-between">
            <Button
              type="button"
              className="bg-[#207BFF] p-3 flex justify-center items-center w-[150px] h-[48px]"
              // onclick={handleBack}
            >
              <Typography color="white">Back</Typography>
            </Button>
            <Button
              type="button"
              className="bg-[#207BFF] p-3 flex justify-center items-center w-[150px] h-[48px]"
              onclick={handleSubmit}
            >
              <Typography color="white">Publish</Typography>
            </Button>
          </div>
        </div>
      </div>
    );
  }

    

export default FormPost;
