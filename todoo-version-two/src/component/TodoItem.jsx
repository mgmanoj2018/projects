import styles from './TodoItem.module.css'
const TodoItem = ({TodoName,dueDate}) => {
    // const TodoItem ="Buy Milk";
    // const dueDate = "10/02/2024"
  return (
    <>
      <div className="container ">
        <div className={`row ${styles.kgRow}`}>
          <div className="col-6">{TodoName}</div>
          <div className="col-4">{dueDate}</div>
          <div className="col-2">
            <button type="button" className="todo-btn btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem
