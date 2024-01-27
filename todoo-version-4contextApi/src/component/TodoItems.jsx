import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'
import { todoItemsContext } from "../store/TodoContext";
const TodoItems = ({deleteItems }) => {
 const contextobj =  useContext(todoItemsContext)
 const todoItems = contextobj.todoItems
  console.log( todoItems)
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item, i) => (
          <TodoItem key={item.name} TodoName={item.name} dueDate={item.date} deleteItems={deleteItems}/>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
