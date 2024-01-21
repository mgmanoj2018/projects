import "./App.css";
import AddItem from "./component/AddItem";
import AppName from "./component/AppName";
import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";

function App() {
  // const TodoName = "Buy Milk"
  // const dueDate = "10/02/2024" 
  const todoItems = [
    {name:"Buy Milk",date:"10/02/2024"},
    {name:"Buy Milk",date:"11/04/2024"},
    {name:"Like and subscribe",date:"11/05/2024"},
  ]
  return (
    <>
      <center className="todo-container">
       <AppName/>   
        <AddItem/>
        <TodoItems todoItems={todoItems}/>
      </center>
    </>
  );
}

export default App;
