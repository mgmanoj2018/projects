import React from 'react'
import styles from './Display.module.css'
const Display = ({displayInput}) => {
  return (
    <>
       <input className={styles.display} type='text' value={displayInput} readOnly/> 
    </>
  )
}

export default Display