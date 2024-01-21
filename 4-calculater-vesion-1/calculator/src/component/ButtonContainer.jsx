import React from 'react'
import styles from './ButtonContainer.module.css'
const ButtonContainer = () => {
    const btn = ["C", "1", "2","+","3","4","-","5","6","*","7","8","/","=","9",0,"."]
  return (
    <>
        <div className={styles.btnContainer}>
        {btn.map((value)=><button>{value}</button>)}          
        </div>
      
    </>
  )
}

export default ButtonContainer