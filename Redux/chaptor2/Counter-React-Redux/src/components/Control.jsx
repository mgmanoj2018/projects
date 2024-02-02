import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Control = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  //  console.log(inputValue.current.value)
  const handleIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };
  const handleDecreament = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleIncreamentFomInput = () => {
    dispatch({ type: "INPUT_INCREAMENT", payload:{num: Number(inputElement.current.value) }});
    inputElement.current.value=""
  };
  const handleDcreamtFomInput = () => {
    dispatch({
      type: "INPUT_DECREAMENT",
      payload: { num: inputElement.current.value }
    });
    inputElement.current.value=""
  };
  const handlePrivacy = ()=>{
    dispatch({type:"HANDLE_PRIVACY"})
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncreament}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecreament}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>
      <br />
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" placeholder="Inter number" ref={inputElement} />
        <button
          type="button"
          className="btn btn-dark btn-lg px-4"
          onClick={handleIncreamentFomInput}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleDcreamtFomInput}
        >
          Dec
        </button>
      </div>
    </>
  );
};

export default Control;