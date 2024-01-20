import React from "react";

const ErrorMessage = ({foods}) => {
   // const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
    // const foods = []
  return <> {foods.length === 0 && <h1>I am still hungry</h1>}</>;
};

export default ErrorMessage;
