import { useState } from "react";
import "./App.css";
import AddItem from "./component/AddItem";
import AppName from "./component/AppName";
import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";
import Welcome from "./component/Welcome";
import { todoItemsContext } from "./store/TodoContext";
function App() {  
  const [todoItems,SetTodoItems] = useState([]);
  const addItem = (addName, datenew)=>{     
    SetTodoItems((currentState)=>{
      let newtodo = [...currentState,{name:addName,date:datenew}]
      return newtodo
    })
  }
  const deleteItem = (deleteItem)=>{
     const NewItemList = todoItems.filter((item)=>item.name !== deleteItem);
     SetTodoItems(NewItemList);    
  }
  
  return (
    <>
      <todoItemsContext.Provider value={{todoItems:todoItems,addItem:addItem,deleteItem:deleteItem}}>
      <center className="todo-container">
       <AppName/>   
        <AddItem/>        
         <Welcome/>
        <TodoItems/>
      </center>
      </todoItemsContext.Provider>
    </>
  );
}

export default App;
