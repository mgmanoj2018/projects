import { useState } from 'react'
import styles from './App.module.css'
import Display from './component/Display'
import ButtonContainer from './component/ButtonContainer'

function App() {
  const [displayInput,setDesplayInput] = useState("45");
  console.log(displayInput);
  const handleClick = (value)=>{    
    if(value === "c"){
      setDesplayInput("")
    }else if(value === "="){
      let result = eval(displayInput)
      setDesplayInput(result)
    }else{
      let newValue = displayInput + value
      setDesplayInput(newValue)
    }
  }
  return (
    <>
      <div className={styles.calculator}>
        <Display displayInput={displayInput}/>
        <ButtonContainer handleClick ={handleClick}/>
        </div>
    </>
  )
}

export default App
