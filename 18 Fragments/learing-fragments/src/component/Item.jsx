import styles from './Item.module.css'
import React from 'react'

const Item = ({foodItem, bought, buyHandle}) => {
  // console.log(foodItem)
  
  return (
    <>
        <li className={`${styles["kgItem"]} list-group-item ${bought && "active"}`}>
          <span className={styles["kgSpan"]}></span>{foodItem}
          <button onClick={buyHandle} className={`${styles.buyBtn} btn btn-info`}>Buy</button>
        </li>
    </>
  )
}

export default Item