import React from "react";
import ErrorMessage from "./component/ErrorMessage";
import FoodItems from "./component/FoodItems";
import FoodName from "./component/FoodName";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";
// import "./App.css";

function App() {
  const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // console.log("render");
  // const foods =  []
  const [foodItem,setFoodItem] =useState([])
  const onhandleKeyDawn = (event)=>{
    // console.log(event)
    if(event.key === "Enter"){
      let newvalue = event.target.value
     
      let newArr = [...foodItem, newvalue]
      event.target.value = ""
      setFoodItem(newArr)
    }
   
    
}
  return (
    <>
    <Container>
      <FoodName/>    
      <FoodInput onhandleKeyDawn={onhandleKeyDawn}/>
      <ErrorMessage foods={foodItem}/>      
      <FoodItems foods={foodItem}/>
    </Container>
    {/* <Container>
      <p>This a container which is share elements of our all elements</p>
    </Container> */}
    </>
  );
}

export default App;
