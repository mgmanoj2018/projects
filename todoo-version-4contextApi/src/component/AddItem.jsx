import { useContext, useRef } from "react";
import styles from "./AddItem.module.css";
import { IoAddOutline } from "react-icons/io5";
import { todoItemsContext } from "../store/TodoContext";
const AddItem = () => {
 const {addItem} = useContext(todoItemsContext)
  let inputValueRef = useRef()
  let dueDateValueRef = useRef()
  // {console.log("render")}
  const handlclick = (event) => {
    event.preventDefault()
    const inputRef = inputValueRef.current.value
    const dueRef = dueDateValueRef.current.value
    addItem(inputRef, dueRef);
  };
  return (    
    <>
    {/* {console.log("render")} */}
      <div className="container ">
        <form className={`row ${styles.kgAddRow}`} onSubmit={handlclick}>
          <div className="col-6">
            <input
              ref={inputValueRef}
              type="text"
              placeholder="Type Here"
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={dueDateValueRef}
            />
          </div>
          <div className="col-2">
            <button
              
              className="todo-btn btn btn-primary"
              
            >
              <IoAddOutline />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
