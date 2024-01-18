// import React from "react";
import "./App.css";

function App() {
  const foods = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  //const foods = [];
  // if(foods.length === 0){
  //   return <h1>I am still hungry</h1>
  // }
  return (
    <>
      <h1>Healthy Foods </h1>
      {/*foods.length === 0 ? <h1>I am still hungry</h1>:null*/}
      {foods.length === 0 && <h1>I am still hungry</h1>}
      <ul className="list-group">
        {foods.map((food) => (
          <li className="list-group-item">{food}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
