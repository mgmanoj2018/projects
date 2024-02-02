import React, { useContext } from 'react'
import { todoItemsContext } from '../store/TodoContext'
const Welcome = () => {
  const contextobj = useContext(todoItemsContext)
  const todoItems = contextobj.todoItems
  return (
    <div>
       {todoItems.length ===0 && <h1>Add new Food item</h1>} 
    </div>
  )
}

export default Welcome