import React, { useEffect, useState } from 'react'

const ClockTime = () => {
  const [time, setTime] =  useState(new Date())
  useEffect(()=>{
    console.log("Interval is setUp")
      const timeInterval = setInterval(()=>{
        setTime(new Date())
      },1000)
    return ()=>{
      clearInterval(timeInterval)
      console.log("set time out" + " " + timeInterval)
    }
  },[])
    
  return (
    <div>
        <p>This is current time :{time.toDateString()} - {time.toLocaleTimeString()}
        </p>
    </div>
  )
}

export default ClockTime