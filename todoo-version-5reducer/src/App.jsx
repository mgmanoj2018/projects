import { useReducer, useState } from "react";
import "./App.css";
import AddItem from "./component/AddItem";
import AppName from "./component/AppName";
import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";
import Welcome from "./component/Welcome";
import { todoItemsContext } from "./store/TodoContext";
const todoReducer = (currentState, action) => {
  let newTodoItems = currentState;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentState,
      { name: action.payload.itemName, date: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentState.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
function App() {
  // const [todoItems,SetTodoItems] = useState([]);
  // const [state,despatch] = useReducer(reducer,Infinity)
  const [todoItems, dispatchTodoItems] = useReducer(todoReducer, []);
  const addItem = (itemName, dueDate) => {
    const newAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        dueDate,
      },
    };
    dispatchTodoItems(newAction);
  };
  const deleteItem = (deleteItem) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: deleteItem,
      },
    };
    dispatchTodoItems(deleteAction);
  };

  return (
    <>
      <todoItemsContext.Provider value={{ todoItems, addItem, deleteItem }}>
        <center className="todo-container">
          <AppName />
          <AddItem />
          <Welcome />
          <TodoItems />
        </center>
      </todoItemsContext.Provider>
    </>
  );
}

export default App;
