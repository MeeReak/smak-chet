import React from "react";

interface WritingQuestionProp{
  classname? : string;
}

const WritingQuestion:React.FC<WritingQuestionProp> = ({classname}) => {
  return (
    <div>
      <div className={`w-full mt-4 ${classname}`}>
        <input
          type="text"
          className="lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] "
          placeholder="Your Answer"
        />
      </div>
    </div>
  );
};

export default WritingQuestion;
