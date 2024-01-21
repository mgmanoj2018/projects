import { useState } from 'react'
import styles from './App.module.css'
import Display from './component/Display'
import ButtonContainer from './component/ButtonContainer'

function App() {

  return (
    <>
      <div className={styles.calculator}>
        <Display/>
        <ButtonContainer/>
        </div>
    </>
  )
}

export default App
