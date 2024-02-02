import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/TodoContext";

const TodoItem = ({ TodoName, dueDate }) => {
 const  {todoItems,addItem,deleteItem} = useContext(todoItemsContext)
  return (
    <>
    {console.log( "render delete component")}
      <div className="container ">
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">{TodoName}</div>
          <div className="col-4">{dueDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="todo-btn btn btn-danger"
              onClick={() => deleteItem(TodoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
