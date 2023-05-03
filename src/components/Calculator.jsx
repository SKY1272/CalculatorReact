import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter an expression"
      />
      <button onClick={calculateResult}>Calculate</button>
      <button onClick={clearInput}>Clear</button>
      <div className="result">Result: {result}</div>
      <div className="operations">
        <button onClick={() => setInput(input + "+")}>+</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setInput(input + "/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
