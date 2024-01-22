import styles from './Item.module.css'
import React from 'react'

const Item = ({foodItem}) => {
  return (
    <>
        <li className={`${styles["kgItem"]} list-group-item`}>
        <span className={styles["kgSpan"]}></span>{foodItem}</li>
    </>
  )
}

export default Item