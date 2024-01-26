import React from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems,deleteItems }) => {
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
