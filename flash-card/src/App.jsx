import React, { useState } from "react";
const questions = [
  {
    id: 1001,
    question: "Question 1001",
    answer: "Answer1001",
  },
  {
    id: 1002,
    question: "Question 1002",
    answer: "Answer1002",
  },
  {
    id: 1003,
    question: "Question 1003 ",
    answer: "Answer1003 ",
  },
  {
    id: 1004,
    question: "Question 1004",
    answer: "Answer1004",
  },
  {
    id: 1005,
    question: "Question 1005",
    answer: "Answer1005",
  },
  {
    id: 1006,
    question: "Question 1006",
    answer: "Answer1006",
  },
];
const App = () => {
  return (
    <div>
      <FlipCards />
    </div>
  );
};
const FlipCards = () => {
  const [selectId, setSelectId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <QuestionAnswer
          questionanswer={question}
          key={question.id}
          selectId={selectId}
          setSelectId={setSelectId}
        />
      ))}
    </div>
  );
};
const QuestionAnswer = ({ questionanswer, selectId, setSelectId }) => {
  function handleClick(id) {
    setSelectId(id!== selectId?id:null);
  }
  return (
    <div
      className={questionanswer.id === selectId ? "selected" : ""}
      onClick={()=>handleClick(questionanswer.id)}
    >
      <p>
        {questionanswer.id === selectId
          ? questionanswer.answer
          : questionanswer.question}
      </p>
    </div>
  );
};
export default App;
