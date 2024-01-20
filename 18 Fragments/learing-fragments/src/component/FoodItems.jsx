import React from "react";
import Item from "./Item";

const FoodItems = ({foods}) => {
  
  return (
    <>
      <ul className="list-group">
        {foods.map((item) => (
          <Item key={item} foodItem={item}/>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
