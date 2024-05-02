import React from "react";

interface WritingQuestionProp{
  classname? : string;
}

const WritingQuestion:React.FC<WritingQuestionProp> = ({classname}) => {
  return (
    <div>
      <div className={`w-[60%] mt-4 ${classname}`}>
        <input
          type="text"
          className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Your Answer"
        />
      </div>
    </div>
  );
};

export default WritingQuestion;
