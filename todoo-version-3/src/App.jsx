import { useState } from "react";
import "./App.css";
import AddItem from "./component/AddItem";
import AppName from "./component/AppName";
import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";
import Welcome from "./component/Welcome";

function App() {
  // const TodoName = "Buy Milk"
  // const dueDate = "10/02/2024" 
  const initialvalue = [
    {name:"Buy Milk",date:"10/02/2024"},
    {name:"Buy Milk",date:"11/04/2024"},
    {name:"Like and subscribe",date:"11/05/2024"},
  ]
  const [todoItems,SetTodoItems] = useState([]);
  const addHandleClick = (addName, datenew)=>{
    console.log(addName, datenew);
    let newtodo = [...todoItems,{name:addName,date:datenew}]
    SetTodoItems(newtodo)
  }
  const deleteItems = (deleteItem)=>{
     const NewItemList = todoItems.filter((item)=>item.name !== deleteItem);
     SetTodoItems(NewItemList)
      console.log(NewItemList);
  }
  return (
    <>
      <center className="todo-container">
       <AppName/>   
        <AddItem addHandleClick ={addHandleClick}/>
        {
          todoItems.length === 0 && <Welcome />
        }
       
        <TodoItems todoItems={todoItems} deleteItems ={deleteItems}/>
      </center>
    </>
  );
}

export default App;
