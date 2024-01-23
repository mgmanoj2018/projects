import React from 'react'
import styles from './ButtonContainer.module.css'
const ButtonContainer = ({handleClick}) => {
    const btn = ["c", "1", "2","+","3","4","-","5","6","*","7","8","/","=","9",0,"."]

  return (
    <>
        <div className={styles.btnContainer}>
        {btn.map((value)=><button key={value} onClick={()=>handleClick(value)}>{value}
        </button>)}          
        </div>
      
    </>
  )
}

export default ButtonContainer