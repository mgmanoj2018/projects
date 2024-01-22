import React from "react";
import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ foods }) => {
  const [activeItem,setActiveItem] = useState([]);
  const buyHandle = (event,item)=>{
    event.preventDefault()
    let newItem = [...activeItem,item]
    setActiveItem(newItem)
  }
  return (
    <>
      <ul className="list-group">
        {foods.map((item) => (
          <Item
            key={item}
            bought={activeItem.includes(item)}
            foodItem={foods}
            buyHandle={(event) => buyHandle(event, item)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
