import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ TodoName, dueDate, deleteItems }) => {
  // const TodoItem ="Buy Milk";
  // const dueDate = "10/02/2024"
  return (
    <>
      <div className="container ">
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">{TodoName}</div>
          <div className="col-4">{dueDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="todo-btn btn btn-danger"
              onClick={() => deleteItems(TodoName)}
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
