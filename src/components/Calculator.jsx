import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState("");
  const handleAddition = () => {
    setResult(number1 + number2);
  };

  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={(e) => {
              setNumber1(Number(e.target.value));
            }}
            value={number1}
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={(e) => {
              setNumber2(Number(e.target.value));
            }}
            value={number2}
          ></input>
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={result}
            readOnly
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
