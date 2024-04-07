import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("Apr 7 2024");
  date.setDate(date.getDate() + count);
  const increaseStephandler = () => {
    setStep((step) => step + 1);
  };
  const decreaseStephandler = () => {
    setStep((step) => step - 1);
  };
  const increaseCountehandler = () => {
    setCount((count) => count + step);
  };
  const decreaseCounthandler = () => {
    setCount((count) => count - step);
  };
  return (
    <div className="Container">
      <div className="step">
        <button className="stepDecrease" onClick={() => decreaseStephandler()}>
          -
        </button>
        <span>Step:{step}</span>
        <button className="stepIncrease" onClick={() => increaseStephandler()}>
          +
        </button>
      </div>
      <div className="count">
        <button
          className="countDecrease"
          onClick={() => decreaseCounthandler()}
        >
          -
        </button>
        <span>Count:{count}</span>
        <button
          className="countIncrease"
          onClick={() => increaseCountehandler()}
        >
          +
        </button>
      </div>
      <p className="message">
        <p>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : `${Math.abs (count)} days before today is ${date.toDateString()}`}
        </p>
      </p>
    </div>
  );
};

export default Counter;
