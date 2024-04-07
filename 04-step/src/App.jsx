import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const App = () => {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePreviousClick = () => {
    // steps > 1 && setSteps((step)=>step-1);
    if (steps > 1) setSteps((step) => step - 1);
  };
  const handleNextClick = () => {
    //   steps < 3 && setSteps((step) => step + 1);
    //   steps < 3 && setSteps((step) => step + 1);
    if (steps < 3) setSteps((step) => step + 1);
  };
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        click
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {steps}:{messages[steps - 1]}
          </p>
          <div className="buttons">
            <button onClick={() => handlePreviousClick()}>Previous</button>
            <button onClick={() => handleNextClick()}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
