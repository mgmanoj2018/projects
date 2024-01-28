import React, { useReducer } from "react";

// reducer : pure function is a block of code that always return the same if same argument is passed. it does not depend on any state or data change during program's execution. rather it only depends on its input arguments

const reducer = (current, action) => {
  switch(action.type){
    case "increment":
    return {initialstate:current.initialstate +1} ;
    case "decrement":
     return {initialstate:current.initialstate -1}     
    case "hidden":
        return {...current,content:!current.content } 
  }
  
  return initialstate;
};

const Count = () => {
  const [count, dipatch] = useReducer(reducer, {initialstate : 0, content:true});
  return (
    <>
      {count.content && <h1>content</h1>}
      <div>{count.initialstate}</div>
      <button onClick={()=>dipatch({type:"increment"})}>add</button>
      <button onClick={()=>dipatch({type:"decrement"})}>decrement</button>
      <button onClick={()=>dipatch({type:"hidden"})}>hidden</button>
    </>
  );
};

export default Count;
