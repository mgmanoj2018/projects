import React from "react";
import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
import FoodName from "./component/FoodName";
import "./App.css";

function App() {
  const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // const foods =  []
  return (
    <>
      <FoodName/>    
      <ErrorMessage foods={foods}/>
      <FoodItems foods={foods}/>
    </>
  );
}

export default App;
