import { useReducer } from "react";
import "./Calculator.css";

const CalculatorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleNumber1Change = (e) => {
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
  };
  const handleNumber2Change = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
  };
  const handleAddition = () => {
    dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 });
  };

  return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1Change}
            value={state.number1}
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
            onChange={handleNumber2Change}
            value={state.number2}
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
            value={state.result}
            readOnly
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
function reducer(state, action) {
    switch (action.type) {
      case "SET_NUMBER1":
        return { ...state, number1: action.payload };
      case "SET_NUMBER2":
        return { ...state, number2: action.payload };
      case "SET_RESULT":
        return { ...state, result: action.payload };
      default:
        throw new Error("Invalid action type");
    }
  }
  const initialState = {
    number1: 0,
    number2: 0,
    result: 0,
  };
  