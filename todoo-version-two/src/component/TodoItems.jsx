import React from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem key={item.name} TodoName={item.name} dueDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
