import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({onhandleKeyDawn}) => {
    
  return (
    <>
      <input
        className={styles.inputWidth}
        type="text"
        placeholder="enter food name"
        onKeyDown={onhandleKeyDawn}
      />
    </>
  );
};

export default FoodInput;
