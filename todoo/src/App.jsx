import "./App.css";
import AddItem from "./component/AddItem";
import AppName from "./component/AppName";
import TodoItem from "./component/TodoItem";

function App() {
  return (
    <>
      <center className="todo-container">
       <AppName/>   
        <AddItem/>
        <div className="item-container">
          <TodoItem/>
          <TodoItem/>
        </div>
     
      </center>
    </>
  );
}

export default App;
