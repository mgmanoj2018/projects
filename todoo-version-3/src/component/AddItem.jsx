import { useState } from 'react';
import styles from './AddItem.module.css'
import { IoAddOutline } from "react-icons/io5";
const AddItem = ({addHandleClick}) => {
  const [inputValue ,setInputValue] = useState("");
  const [dueDate , setDueDate] = useState("")

   const handlclick =()=>{
    addHandleClick(inputValue, dueDate);
    setInputValue("");
    setDueDate("")
   }
  return (
    <>
      <div className="container ">
        <div className={`row ${styles.kgAddRow}`}>
          <div className="col-6">
            <input type="text" placeholder="Type Here" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={(e)=>{setDueDate(e.target.value)}} value={dueDate}/>
          </div>
          <div className="col-2">
            <button type="button" className="todo-btn btn btn-primary" onClick={handlclick}>
            <IoAddOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem