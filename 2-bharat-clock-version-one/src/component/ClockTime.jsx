import React from 'react'

const ClockTime = () => {
    const time = new Date()
  return (
    <div>
        <p>This is current time :{time.toDateString()} - {time.toLocaleTimeString()}
        </p>
    </div>
  )
}

export default ClockTime