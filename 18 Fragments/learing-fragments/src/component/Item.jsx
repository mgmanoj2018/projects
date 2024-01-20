import React from 'react'

const Item = ({foodItem}) => {
  return (
    <div>
        <li className="kg-item list-group-item"><span className='kg-span'></span>{foodItem}</li>
    </div>
  )
}

export default Item